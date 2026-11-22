import { useState } from 'react';
import { Check, Copy, ExternalLink, Music2, Play, Share2, Youtube } from 'lucide-react';
import { PERFORMANCE_VIDEOS, YOUTUBE_CHANNEL } from '../data/videos';
import { VideoItem } from '../types';

const CATEGORIES = [
  { id: 'All', label: 'All Videos', amharic: 'ሁሉንም' },
  { id: 'Protestant Mezmur', label: 'Protestant Mezmur', amharic: 'የፕሮቴስታንት መዝሙር' },
  { id: 'Praise & Thanksgiving', label: 'Praise & Thanks', amharic: 'ምስጋና' },
  { id: 'Tigrinya Mezmur', label: 'Tigrinya Mezmur', amharic: 'ትግርኛ መዝሙር' },
  { id: 'Acoustic Sessions', label: 'Acoustic Sessions', amharic: 'አኮስቲክ' },
  { id: 'Instrumentals', label: 'Instrumentals', amharic: 'ኢንስትሩመንታል' },
];

export function VideoGallery() {
  const [activeId, setActiveId] = useState(PERFORMANCE_VIDEOS[0].youtubeId);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedVideo, setCopiedVideo] = useState(false);

  const activeVideo: VideoItem =
    PERFORMANCE_VIDEOS.find((v) => v.youtubeId === activeId) ?? PERFORMANCE_VIDEOS[0];

  const filteredVideos =
    selectedCategory === 'All'
      ? PERFORMANCE_VIDEOS
      : PERFORMANCE_VIDEOS.filter((v) => v.category === selectedCategory);

  const handleCopyVideoUrl = () => {
    const url = `https://youtu.be/${activeVideo.youtubeId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedVideo(true);
      setTimeout(() => setCopiedVideo(false), 2000);
    });
  };

  return (
    <section id="music" className="bg-[#13231c] py-24 text-white sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 h-96 w-96 rounded-full bg-[#d9b56d]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#315b48]/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header and Channel Banner */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow-dark">
              <Music2 className="h-4 w-4" /> Music & Performances · ቪዲዮዎችና ዝማሬ
            </span>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
              Hear the heart<br />
              <span className="italic text-[#e7c881]">behind the strings.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-7 text-stone-300">
              A collection of classical guitar arrangements of Ethiopian & Tigrinya gospel hymns, praise melodies, and acoustic meditations by Aemro.
            </p>
          </div>

          {/* Official YouTube Channel Pill Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-600 text-white shadow-lg">
                <Youtube className="h-6 w-6 fill-current" />
              </div>
              <div>
                <p className="font-semibold text-white">{YOUTUBE_CHANNEL.name}</p>
                <p className="text-xs text-[#e7c881]">{YOUTUBE_CHANNEL.handle}</p>
              </div>
            </div>
            <a
              href={YOUTUBE_CHANNEL.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#d9b56d] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#13231c] transition hover:bg-[#e7c881]"
            >
              Visit Channel <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Video Category Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  isActive
                    ? 'bg-[#d9b56d] text-[#13231c] shadow-lg'
                    : 'bg-white/5 text-stone-300 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-65 font-normal">({cat.amharic})</span>
              </button>
            );
          })}
        </div>

        {/* Player and List Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          
          {/* Main Active Player */}
          <div className="overflow-hidden rounded-[1.8rem] border border-white/15 bg-black shadow-2xl flex flex-col justify-between">
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0&autoplay=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Now Playing Info Bar */}
            <div className="bg-[#192f25] p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#d9b56d]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#e7c881]">
                  <Music2 className="h-3.5 w-3.5" /> {activeVideo.category}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyVideoUrl}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-stone-200 transition hover:bg-white/15 hover:text-white"
                    title="Copy video link"
                  >
                    {copiedVideo ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" /> Link Copied
                      </>
                    ) : (
                      <>
                        <Share2 className="h-3.5 w-3.5" /> Share
                      </>
                    )}
                  </button>

                  <a
                    href={`https://youtu.be/${activeVideo.youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#d9b56d] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#13231c] transition hover:bg-[#e7c881]"
                  >
                    Watch on YouTube <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div>
                {activeVideo.amharicTitle && (
                  <p lang="am" className="font-serif text-xl sm:text-2xl text-[#f3eedd] leading-snug">
                    {activeVideo.amharicTitle}
                  </p>
                )}
                <h3 className="mt-1 font-serif text-lg sm:text-xl text-stone-300">
                  {activeVideo.title}
                </h3>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                {activeVideo.description}
              </p>

              {(activeVideo.tuning || activeVideo.keySignature) && (
                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10 text-xs text-stone-400 font-mono">
                  {activeVideo.tuning && <span>Tuning: {activeVideo.tuning}</span>}
                  {activeVideo.keySignature && <span>Key: {activeVideo.keySignature}</span>}
                </div>
              )}
            </div>
          </div>

          {/* Videos Playlist Scrollbar / Grid */}
          <div className="flex flex-col gap-3 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="text-xs uppercase tracking-widest text-[#d9b56d] font-bold px-1 mb-1">
              Playlist ({filteredVideos.length} {filteredVideos.length === 1 ? 'Video' : 'Videos'})
            </div>

            {filteredVideos.map((video, idx) => {
              const isCurrent = video.youtubeId === activeId;
              return (
                <button
                  key={video.id}
                  onClick={() => setActiveId(video.youtubeId)}
                  className={`group flex items-start gap-3.5 rounded-2xl border p-3 text-left transition-all ${
                    isCurrent
                      ? 'border-[#d9b56d] bg-[#d9b56d]/15 shadow-lg'
                      : 'border-white/10 bg-white/[.04] hover:border-white/25 hover:bg-white/[.08]'
                  }`}
                >
                  {/* Thumbnail with overlay */}
                  <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl bg-stone-900 border border-white/10">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/10 transition">
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full transition-transform ${
                          isCurrent
                            ? 'bg-[#d9b56d] text-[#13231c] scale-110'
                            : 'bg-black/60 text-white group-hover:bg-[#d9b56d] group-hover:text-[#13231c]'
                        }`}
                      >
                        <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Video Meta */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[.15em] text-[#d9b56d]">
                        {video.category}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400">
                          Playing
                        </span>
                      )}
                    </div>
                    {video.amharicTitle ? (
                      <p lang="am" className="mt-1 line-clamp-1 font-serif text-base text-white">
                        {video.amharicTitle}
                      </p>
                    ) : null}
                    <p className="mt-0.5 line-clamp-1 text-xs text-stone-300">
                      {video.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[11px] text-stone-400 leading-snug">
                      {video.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Subscribe Banner Callout */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#d9b56d]/30 bg-gradient-to-r from-[#1b3328] to-[#14261e] p-6 sm:p-8">
          <div>
            <h4 className="font-serif text-2xl text-white">
              Subscribe to Aemro on YouTube
            </h4>
            <p className="mt-1 text-sm text-stone-300">
              Follow his journey, support his music ministry, and receive new classical guitar recordings.
            </p>
          </div>
          <a
            href={`${YOUTUBE_CHANNEL.url}?sub_confirmation=1`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-red-700 hover:scale-105 shrink-0"
          >
            <Youtube className="h-5 w-5 fill-current" /> Subscribe (@giutaraemro5858)
          </a>
        </div>

      </div>
    </section>
  );
}
