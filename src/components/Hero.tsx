import React from 'react';
import { Play, Sparkles, Award, Music, Guitar, Calendar, ArrowRight } from 'lucide-react';
import { AEMRO_BIO } from '../data/bio';
import { PERFORMANCE_VIDEOS } from '../data/videos';

interface HeroProps {
  onSelectVideo: (videoId: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectVideo, onNavigate }) => {
  const featuredVideo = PERFORMANCE_VIDEOS[0];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[#0e0b09]">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/stage_hero_bg_1784986392488.jpg"
          alt="Guitar Stage Background"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09] via-[#0e0b09]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b09] via-[#0e0b09]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 32 Year Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>32 Years of Guitar Virtuosity (1994 - 2026)</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-stone-100 tracking-tight leading-[1.1]">
              AEMRO <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                32 Years of Strings, Soul & Ethio-Jazz
              </span>
            </h1>

            <p className="text-stone-300 text-base sm:text-xl max-w-2xl font-normal leading-relaxed">
              Mastering the 6-string acoustic & electric canvas across three decades.
              Blending Ethio-Jazz modal scales, fingerstyle acoustic storytelling, and blues solos.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectVideo(featuredVideo.youtubeId)}
                id="hero-featured-video-btn"
                className="flex items-center gap-3 px-7 py-4 rounded-full text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 group"
              >
                <div className="w-7 h-7 rounded-full bg-stone-950/20 flex items-center justify-center">
                  <Play className="w-4 h-4 text-stone-950 fill-stone-950 group-hover:scale-110 transition-transform" />
                </div>
                <span>Watch Featured Video</span>
              </button>

              <button
                onClick={() => onNavigate('booking')}
                id="hero-book-btn"
                className="flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-stone-200 bg-stone-900/80 border border-amber-800/50 hover:bg-amber-950/50 hover:border-amber-500/60 transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Book Performance</span>
              </button>
            </div>

            {/* Stats row */}
            <div className="pt-8 border-t border-amber-900/30 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {AEMRO_BIO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image Card & Video Teasers */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-800 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-2xl bg-[#181310] border border-amber-800/40 p-4 sm:p-5 shadow-2xl space-y-4">
                {/* Profile Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-stone-900 border border-amber-900/30">
                  <img
                    src="/src/assets/images/aemro-fesshaye-mephn.jpg"
                    alt="Aemro Guitarist Portrait with Headless Electric Guitar"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100e] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Badge on Profile */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#181310]/90 backdrop-blur-md border border-amber-500/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                        <Guitar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-200">Aemro Guitar Soloist</div>
                        <div className="text-[11px] text-stone-400">Acoustic, Ethio-Jazz & Blues</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Links Quick Strip */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-300 uppercase tracking-wider px-1">
                    <span>Selected YouTube Links</span>
                    <button
                      onClick={() => onNavigate('videos')}
                      className="text-[11px] text-stone-400 hover:text-amber-300 flex items-center gap-1"
                    >
                      View All (4) <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {PERFORMANCE_VIDEOS.slice(0, 2).map((vid) => (
                      <button
                        key={vid.id}
                        onClick={() => onSelectVideo(vid.youtubeId)}
                        id={`hero-quick-video-${vid.id}`}
                        className="group flex flex-col gap-1 p-2 rounded-lg bg-stone-900/70 hover:bg-amber-950/50 border border-amber-900/30 hover:border-amber-500/40 text-left transition-all"
                      >
                        <div className="relative rounded overflow-hidden aspect-video bg-stone-950">
                          <img
                            src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                            alt={vid.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-amber-950/40">
                            <Play className="w-5 h-5 text-amber-300 fill-amber-300" />
                          </div>
                        </div>
                        <div className="text-[11px] font-semibold text-stone-200 line-clamp-1 group-hover:text-amber-300">
                          {vid.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
