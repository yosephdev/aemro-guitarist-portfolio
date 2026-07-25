import React, { useState } from 'react';
import { Play, ExternalLink, Sparkles, Music, Disc, Layers, Check, Share2, Eye } from 'lucide-react';
import { PERFORMANCE_VIDEOS } from '../data/videos';
import { VideoItem } from '../types';

interface VideoGalleryProps {
  selectedVideoId: string | null;
  onSelectVideo: (youtubeId: string) => void;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ selectedVideoId, onSelectVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const categories = ['All', 'Acoustic Solo', 'Ethio-Jazz', 'Live Performance', 'Improvisation'];

  const activeVideo = PERFORMANCE_VIDEOS.find((v) => v.youtubeId === selectedVideoId) || PERFORMANCE_VIDEOS[0];

  const filteredVideos = activeCategory === 'All'
    ? PERFORMANCE_VIDEOS
    : PERFORMANCE_VIDEOS.filter((v) => v.category === activeCategory);

  const handleShare = (youtubeId: string) => {
    const url = `https://youtu.be/${youtubeId}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(youtubeId);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="videos" className="py-24 bg-[#120e0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Play className="w-3.5 h-3.5" />
            <span>Featured YouTube Performances</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
            Watch Aemro in Action
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            32 years of guitar expression captured across acoustic solos, Ethio-Jazz pentatonic scale jams, and stage improvisations.
          </p>
        </div>

        {/* Featured Video Theater Frame */}
        <div className="mb-16 bg-[#1a1411] border border-amber-800/40 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            
            {/* Embedded YouTube Player */}
            <div className="lg:w-2/3 flex flex-col justify-center">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner border border-amber-900/30">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Details Side Panel */}
            <div className="lg:w-1/3 flex flex-col justify-between space-y-4 p-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                    {activeVideo.category}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">
                    Year: {activeVideo.publishedYear}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-100 leading-snug">
                  {activeVideo.title}
                </h3>

                <p className="text-sm text-stone-300 leading-relaxed">
                  {activeVideo.description}
                </p>

                {/* Music metadata pill list */}
                <div className="pt-2 space-y-2 text-xs font-mono text-stone-400 border-t border-amber-900/30">
                  {activeVideo.tuning && (
                    <div className="flex justify-between">
                      <span className="text-stone-400">Tuning:</span>
                      <span className="text-amber-300 font-medium">{activeVideo.tuning}</span>
                    </div>
                  )}
                  {activeVideo.keySignature && (
                    <div className="flex justify-between">
                      <span className="text-stone-400">Key / Scale:</span>
                      <span className="text-amber-300 font-medium">{activeVideo.keySignature}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-stone-400">Duration:</span>
                    <span className="text-amber-300 font-medium">{activeVideo.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3 border-t border-amber-900/30">
                <a
                  href={`https://youtu.be/${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open on YouTube</span>
                </a>

                <button
                  onClick={() => handleShare(activeVideo.youtubeId)}
                  id="share-active-video-btn"
                  className="p-2.5 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-300 hover:text-amber-300 hover:border-amber-500/50 transition-colors"
                  title="Copy video link"
                >
                  {copiedLink === activeVideo.youtubeId ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`video-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                  : 'bg-stone-900/80 text-stone-300 border border-amber-900/40 hover:border-amber-500/40 hover:text-amber-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of 4 YouTube Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => {
            const isCurrentlyPlaying = video.youtubeId === activeVideo.youtubeId;
            return (
              <div
                key={video.id}
                onClick={() => onSelectVideo(video.youtubeId)}
                className={`group relative rounded-2xl bg-[#181310] border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isCurrentlyPlaying
                    ? 'border-amber-500 shadow-xl shadow-amber-500/20 ring-1 ring-amber-500'
                    : 'border-amber-900/30 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-900/30'
                }`}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-amber-950/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-stone-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[11px] font-mono text-amber-200">
                    {video.duration}
                  </span>

                  {isCurrentlyPlaying && (
                    <span className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-amber-500 text-stone-950 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-md">
                      <Eye className="w-3 h-3" /> Playing
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      {video.category}
                    </span>
                    <h4 className="text-sm font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-xs text-stone-400 line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-amber-900/20 flex items-center justify-between text-[11px] text-stone-400">
                    <span className="font-mono text-amber-300/80">{video.keySignature || 'Acoustic'}</span>
                    <span className="hover:text-amber-300 flex items-center gap-1">
                      Play in Theater
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
