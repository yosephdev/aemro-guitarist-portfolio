import React, { useState, useEffect } from 'react';
import { ETHIOPIAN_SCALES } from '../data/bio';
import { ScaleGuide } from '../types';
import { Music, Play, Volume2, Sparkles, Disc, RefreshCw, Zap } from 'lucide-react';

export const ScaleSampler: React.FC = () => {
  const [selectedScale, setSelectedScale] = useState<ScaleGuide>(ETHIOPIAN_SCALES[0]);
  const [activeNoteIndex, setActiveNoteIndex] = useState<number | null>(null);
  const [isPlayingSequence, setIsPlayingSequence] = useState<boolean>(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtx) {
        audioCtx.close().catch(() => {});
      }
    };
  }, [audioCtx]);

  const initAudio = () => {
    if (!audioCtx) {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      setAudioCtx(ctx);
      return ctx;
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  };

  const playGuitarTone = (freq: number) => {
    const ctx = initAudio();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Warm guitar tone simulation (combination of triangle + gentle lowpass decay)
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 1.2);

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 1.6);
  };

  const handlePlayNote = (index: number) => {
    setActiveNoteIndex(index);
    const freq = selectedScale.frequencies[index] || 440;
    playGuitarTone(freq);
    setTimeout(() => setActiveNoteIndex(null), 400);
  };

  const handlePlayScaleSequence = () => {
    if (isPlayingSequence) return;
    setIsPlayingSequence(true);

    const freqs = selectedScale.frequencies;
    freqs.forEach((freq, idx) => {
      setTimeout(() => {
        setActiveNoteIndex(idx);
        playGuitarTone(freq);
        if (idx === freqs.length - 1) {
          setTimeout(() => {
            setActiveNoteIndex(null);
            setIsPlayingSequence(false);
          }, 600);
        }
      }, idx * 450);
    });
  };

  return (
    <section id="scales" className="py-24 bg-[#120e0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            <span>Interactive Ethio-Jazz Soundboard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
            Explore Ethiopian Guitar Scales
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Experience the distinct microtonal pentatonic scales that Aemro has mastered over 32 years. Click any note or play a full melody sequence in your browser!
          </p>
        </div>

        {/* Main Box */}
        <div className="bg-[#181310] border border-amber-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Scale Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ETHIOPIAN_SCALES.map((scale) => {
              const isSelected = selectedScale.id === scale.id;
              return (
                <button
                  key={scale.id}
                  onClick={() => setSelectedScale(scale)}
                  id={`scale-select-${scale.id}`}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20'
                      : 'bg-stone-900/80 text-stone-300 border-amber-900/30 hover:border-amber-500/40 hover:text-amber-200'
                  }`}
                >
                  <div className="text-xs uppercase tracking-wider opacity-80">Modal Scale</div>
                  <div className="text-base font-extrabold line-clamp-1">{scale.name}</div>
                  <div className="text-[11px] opacity-75 mt-1 font-mono">{scale.notes.join(' - ')}</div>
                </button>
              );
            })}
          </div>

          {/* Active Scale Fretboard Display */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-amber-900/40 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/30 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Active Mode: {selectedScale.region}
                </span>
                <h3 className="text-2xl font-black text-amber-100 mt-0.5">
                  {selectedScale.name}
                </h3>
              </div>

              <button
                onClick={handlePlayScaleSequence}
                disabled={isPlayingSequence}
                id="play-scale-sequence-btn"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 hover:brightness-110 shadow-lg shadow-amber-500/20 disabled:opacity-50"
              >
                {isPlayingSequence ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Playing Sequence...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-stone-950" />
                    <span>Play Scale Sequence</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-2xl">
              {selectedScale.description}
            </p>

            {/* Fretboard / Notes Visualiser */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center justify-between">
                <span>Interactive Guitar Fretboard Notes (Click Note to Play Tone)</span>
                <span className="text-[11px] text-stone-400 font-normal">Web Audio API Synth</span>
              </div>

              {/* Fretboard wood bar */}
              <div className="relative rounded-2xl bg-gradient-to-r from-[#2c1d14] via-[#3a271b] to-[#2c1d14] p-6 border-y-4 border-amber-900/60 shadow-2xl overflow-x-auto">
                {/* Fret wire lines */}
                <div className="flex items-center justify-around min-w-[500px]">
                  {selectedScale.notes.map((note, idx) => {
                    const isActive = activeNoteIndex === idx;
                    return (
                      <div key={idx} className="flex flex-col items-center gap-3 relative">
                        {/* String behind note */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-200/40 -translate-y-1/2 z-0" />

                        <button
                          onClick={() => handlePlayNote(idx)}
                          id={`fret-note-${idx}-${note}`}
                          className={`relative z-10 w-14 h-14 rounded-full flex flex-col items-center justify-center font-extrabold text-sm transition-all transform duration-150 ${
                            isActive
                              ? 'bg-amber-300 text-stone-950 scale-125 shadow-xl shadow-amber-400/50 ring-4 ring-amber-400'
                              : 'bg-stone-900 text-amber-200 border-2 border-amber-500/60 hover:bg-amber-500 hover:text-stone-950 hover:scale-110'
                          }`}
                        >
                          <span>{note}</span>
                          <span className="text-[9px] font-mono opacity-70">
                            {Math.round(selectedScale.frequencies[idx])}Hz
                          </span>
                        </button>

                        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest z-10">
                          Step {idx + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
