import React, { useState } from 'react';
import { AEMRO_BIO, MILESTONES } from '../data/bio';
import { Guitar, Music, Award, Radio, Calendar, Heart, Sparkles, BookOpen, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'philosophy' | 'styles'>('timeline');

  return (
    <section id="story" className="py-24 bg-[#0e0b09] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" />
            <span>32 Years of Legacy (1994 - 2026)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
            The Story of Aemro
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            32 years dedicated to mastering acoustic fingerstyle, Ethio-Jazz pentatonic modal phrasing, and soulful guitar expression.
          </p>
        </div>

        {/* Content Split: Left Image & Quotes, Right Interactive Story Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Quote Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-[#181310] border border-amber-800/40 p-6 shadow-2xl space-y-6">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 border border-amber-900/40">
                <img
                  src="/src/assets/images/aemro_photo_portrait_1784989776415.jpg"
                  alt="Aemro with Headless Electric Guitar"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181310] via-transparent to-transparent opacity-90" />
                
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-amber-500 text-stone-950 text-xs font-black uppercase tracking-wider shadow-lg">
                  32 Years
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <h3 className="text-2xl font-black text-amber-100">Aemro</h3>
                  <p className="text-xs text-amber-400 font-medium tracking-wide uppercase">
                    Ethio-Jazz & Acoustic Fingerstyle Master
                  </p>
                </div>
              </div>

              {/* Quote Box */}
              <blockquote className="p-5 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-3 relative">
                <span className="absolute top-3 right-4 text-4xl text-amber-500/20 font-serif">“</span>
                <p className="text-stone-200 text-sm italic leading-relaxed">
                  {AEMRO_BIO.quote}
                </p>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  — Aemro
                </div>
              </blockquote>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-stone-900/80 border border-amber-900/30 text-center">
                  <div className="text-xl font-bold text-amber-300">1994</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-400">First Guitar</div>
                </div>
                <div className="p-3 rounded-xl bg-stone-900/80 border border-amber-900/30 text-center">
                  <div className="text-xl font-bold text-amber-300">32 Yrs</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-400">Active Virtuosity</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Tabs (Timeline / Philosophy / Styles) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tab navigation buttons */}
            <div className="flex items-center gap-2 border-b border-amber-900/40 pb-4 overflow-x-auto">
              <button
                onClick={() => setActiveTab('timeline')}
                id="story-tab-timeline"
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === 'timeline'
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-stone-900 text-stone-300 border border-amber-900/30 hover:border-amber-500/40'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>32-Year Timeline</span>
              </button>

              <button
                onClick={() => setActiveTab('philosophy')}
                id="story-tab-philosophy"
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === 'philosophy'
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-stone-900 text-stone-300 border border-amber-900/30 hover:border-amber-500/40'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>Musical Philosophy</span>
              </button>

              <button
                onClick={() => setActiveTab('styles')}
                id="story-tab-styles"
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === 'styles'
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-stone-900 text-stone-300 border border-amber-900/30 hover:border-amber-500/40'
                }`}
              >
                <Music className="w-4 h-4" />
                <span>Scales & Mastery</span>
              </button>
            </div>

            {/* TAB 1: TIMELINE */}
            {activeTab === 'timeline' && (
              <div className="space-y-6">
                <p className="text-stone-300 text-sm leading-relaxed">
                  Across 32 years of guitar playing, Aemro has built a rich artistic narrative from self-taught roots to global digital performances.
                </p>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-800/50 space-y-8">
                  {MILESTONES.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center text-xs font-bold shadow-lg shadow-amber-500/30 group-hover:scale-125 transition-transform">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>

                      <div className="p-5 rounded-2xl bg-[#181310] border border-amber-900/30 hover:border-amber-500/40 transition-colors space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold">
                            {item.year}
                          </span>
                          <span className="text-xs text-stone-400 italic">
                            {item.subtitle}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-stone-100">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: PHILOSOPHY */}
            {activeTab === 'philosophy' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#181310] border border-amber-900/30 space-y-4">
                  <h3 className="text-xl font-bold text-amber-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    <span>The Art of 6-String Storytelling</span>
                  </h3>
                  
                  {AEMRO_BIO.biographyParagraphs.map((para, i) => (
                    <p key={i} className="text-stone-300 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/30">
                    <h4 className="text-sm font-bold text-stone-100 mb-1">Tone & Touch</h4>
                    <p className="text-xs text-stone-300">
                      Focusing on string resonance, dynamic flesh-and-nail attack, and natural acoustic timbre without artificial compensation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/30">
                    <h4 className="text-sm font-bold text-stone-100 mb-1">Rhythmic Intimacy</h4>
                    <p className="text-xs text-stone-300">
                      Syncopated fingerpicking that flows seamlessly like human breath, marrying traditional African polyrhythms with Western chord voicings.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: SCALES & MASTERY */}
            {activeTab === 'styles' && (
              <div className="space-y-6">
                <p className="text-stone-300 text-sm">
                  Aemro specializes in unique Ethiopian modal scale systems (Kizita, Bati, Anchihoye, Ambassel) as well as classical fingerstyle and blues improvisations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#181310] border border-amber-900/30 space-y-2">
                    <div className="text-xs font-bold text-amber-400 uppercase">Ethio-Jazz Pentatonics</div>
                    <div className="text-base font-bold text-stone-100">Tizita & Bati Modes</div>
                    <p className="text-xs text-stone-300">
                      Five-note scales expressing profound nostalgia, microtonal bends, and expressive melodic slides.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#181310] border border-amber-900/30 space-y-2">
                    <div className="text-xs font-bold text-amber-400 uppercase">Fingerstyle Acoustic</div>
                    <div className="text-base font-bold text-stone-100">Polyphonic Bass & Melody</div>
                    <p className="text-xs text-stone-300">
                      Simultaneously driving walking basslines, inner vocal chords, and soaring lead melodies on a single guitar.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#181310] border border-amber-900/30 space-y-2">
                    <div className="text-xs font-bold text-amber-400 uppercase">Electric Blues Solos</div>
                    <div className="text-base font-bold text-stone-100">Sustained Tube Warmth</div>
                    <p className="text-xs text-stone-300">
                      Deep emotional bends and wide vibrato on vintage electric setups with dynamic volume knob swells.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#181310] border border-amber-900/30 space-y-2">
                    <div className="text-xs font-bold text-amber-400 uppercase">Modal Tunings</div>
                    <div className="text-base font-bold text-stone-100">DADGAD & Drop D</div>
                    <p className="text-xs text-stone-300">
                      Open drone strings allowing hypnotic drone harmonies and atmospheric acoustic depth.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
