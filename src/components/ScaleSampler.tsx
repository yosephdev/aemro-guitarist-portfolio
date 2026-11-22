import React, { useState, useEffect } from 'react';
import { ETHIOPIAN_SCALES } from '../data/bio';
import { ScaleGuide } from '../types';
import { Play, Volume2, RefreshCw, Sparkles, Music } from 'lucide-react';

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

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 1.3);

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.32, now + 0.025);
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
      }, idx * 460);
    });
  };

  return (
    <section id="scales" className="py-24 sm:py-32 bg-[#13231c] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-[#d9b56d]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#315b48]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d9b56d]/15 border border-[#d9b56d]/30 text-[#e7c881] text-xs font-bold uppercase tracking-widest">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Acoustic Modal Sampler · የቅኝት ድምጾች</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
            Explore the Spiritual Pentatonic Modes
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            The foundation of Ethiopian gospel classical guitar: Tizita (ትዝታ), Bati (ባቲ), Anchihoye (አንቺሆዬ), and Ambassel (አምባሰል). Click any fret note to hear warm acoustic string resonance directly in your browser.
          </p>
        </div>

        {/* Main Soundboard Container */}
        <div className="rounded-[2.2rem] border border-white/15 bg-gradient-to-b from-[#182d23] to-[#12211a] p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Scale Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ETHIOPIAN_SCALES.map((scale) => {
              const isSelected = selectedScale.id === scale.id;
              return (
                <button
                  key={scale.id}
                  onClick={() => setSelectedScale(scale)}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    isSelected
                      ? 'bg-[#d9b56d] text-[#13231c] border-[#e7c881] font-bold shadow-lg shadow-[#d9b56d]/20 scale-[1.02]'
                      : 'bg-white/5 text-stone-300 border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className={`text-[10px] uppercase tracking-wider ${isSelected ? 'text-[#13231c]/80' : 'text-[#d9b56d]'}`}>
                    Pentatonic Mode
                  </div>
                  <div className="text-base sm:text-lg font-serif font-bold mt-0.5 line-clamp-1">
                    {scale.name}
                  </div>
                  <div className="text-[11px] opacity-75 mt-1 font-mono">
                    {scale.notes.join(' · ')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Fretboard Interface */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-mono text-[#e7c881] uppercase tracking-widest">
                  Active Mode: {selectedScale.region}
                </span>
                <h3 className="text-2xl font-serif text-white mt-1">
                  {selectedScale.name}
                </h3>
              </div>

              <button
                onClick={handlePlayScaleSequence}
                disabled={isPlayingSequence}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#d9b56d] text-[#13231c] hover:bg-[#e7c881] transition shadow-lg shadow-[#d9b56d]/20 disabled:opacity-50"
              >
                {isPlayingSequence ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Playing Tones...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Play Melody Sequence</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-2xl">
              {selectedScale.description}
            </p>

            {/* Fretboard Graphic */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#e7c881] uppercase tracking-wider flex items-center justify-between">
                <span>Interactive String Notes (Tap to strum)</span>
                <span className="text-[11px] text-stone-400 font-normal">Web Audio Acoustic Synthesis</span>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-r from-[#2a1d17] via-[#35251d] to-[#2a1d17] p-6 border-y-4 border-[#523b2e] shadow-2xl overflow-x-auto">
                <div className="flex items-center justify-around min-w-[500px]">
                  {selectedScale.notes.map((note, idx) => {
                    const isActive = activeNoteIndex === idx;
                    return (
                      <div key={idx} className="flex flex-col items-center gap-3 relative">
                        {/* String behind note */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#d9b56d]/30 -translate-y-1/2 z-0" />

                        <button
                          onClick={() => handlePlayNote(idx)}
                          className={`relative z-10 w-14 h-14 rounded-full flex flex-col items-center justify-center font-bold text-sm transition-all transform duration-150 ${
                            isActive
                              ? 'bg-[#e7c881] text-[#13231c] scale-125 shadow-xl shadow-[#e7c881]/50 ring-4 ring-[#d9b56d]'
                              : 'bg-stone-900 text-stone-200 border-2 border-[#d9b56d]/60 hover:bg-[#d9b56d] hover:text-[#13231c] hover:scale-110'
                          }`}
                        >
                          <span>{note}</span>
                          <span className="text-[9px] font-mono opacity-70">
                            {Math.round(selectedScale.frequencies[idx])}Hz
                          </span>
                        </button>

                        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest z-10">
                          Degree {idx + 1}
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
