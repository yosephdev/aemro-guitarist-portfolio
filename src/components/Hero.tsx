import { ArrowDown, Facebook, MapPin, Music2, Play, Sparkles, Youtube } from 'lucide-react';
import portrait from '../assets/images/aemro-fesshaye-mephn.jpg';
import stage from '../assets/images/stage_hero_bg_1784986392488.jpg';
import { YOUTUBE_CHANNEL } from '../data/videos';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[780px] overflow-hidden bg-[#13231c] pt-24 text-white lg:min-h-screen">
      {/* Stage background with atmospheric overlay */}
      <img src={stage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#13231c_0%,rgba(19,35,28,.95)_50%,rgba(19,35,28,.4)_100%)]" />
      <div className="absolute -right-32 top-28 h-96 w-96 rounded-full bg-[#c69a4b]/20 blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-[#315b48]/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#d9b56d]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#e7c881] border border-[#d9b56d]/30">
              <Sparkles className="h-3.5 w-3.5" /> Faith · Classical Guitar · Katrineholm
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[.96] sm:text-7xl lg:text-[5.4rem]">
            Strings, soul<br />
            <span className="italic text-[#e7c881]">& steadfast faith.</span>
          </h1>

          <p className="mt-4 font-serif text-xl sm:text-2xl text-[#d7c7a7] italic">
            “በገና፣ ነፍስ እና በክርስቶስ ያለ ጽኑ እምነት”
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-200">
            Meet Aemro Fesshaye — a guitarist in Katrineholm, Sweden sharing classical gospel mezmur, praise melodies, and the transformative love found in Jesus Christ.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => onNavigate('music')}
              className="inline-flex items-center gap-2 rounded-full bg-[#d9b56d] px-6 py-3.5 font-semibold text-[#13231c] shadow-lg shadow-[#d9b56d]/20 transition hover:-translate-y-0.5 hover:bg-[#e7c881]"
            >
              <Play className="h-4 w-4 fill-current ml-0.5" /> Listen & Watch Videos
            </button>
            <button
              onClick={() => onNavigate('faith')}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Scripture & Faith <ArrowDown className="h-4 w-4" />
            </button>
            <a
              href={YOUTUBE_CHANNEL.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600/90 px-5 py-3.5 font-semibold text-white transition hover:bg-red-600 hover:-translate-y-0.5"
            >
              <Youtube className="h-4 w-4 fill-current" /> YouTube Channel
            </a>
          </div>

          {/* Location & Social Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-stone-300">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#e7c881]" /> Katrineholm, Sweden
            </span>
            <span className="flex items-center gap-2">
              <Music2 className="h-4 w-4 text-[#e7c881]" /> Gospel Classical Guitar
            </span>
            <a
              href={YOUTUBE_CHANNEL.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-stone-200 transition hover:text-[#e7c881]"
            >
              <Youtube className="h-4 w-4 text-red-500 fill-current" /> {YOUTUBE_CHANNEL.handle}
            </a>
            <a
              href="https://www.facebook.com/search/top?q=Aemro%20Fesshaye"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-stone-200 transition hover:text-[#e7c881]"
            >
              <Facebook className="h-4 w-4 text-[#e7c881]" /> Aemro Fesshaye
            </a>
          </div>
        </div>

        {/* Hero Portrait with Decorative Frame */}
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-4 rotate-3 rounded-[2.2rem] border border-[#d9b56d]/30 pointer-events-none" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-[#24382f] p-3.5 shadow-2xl">
            <img
              src={portrait}
              alt="Aemro Fesshaye with his guitar"
              className="aspect-[3/4] w-full rounded-[1.6rem] object-cover object-top"
            />
            
            {/* Overlay scripture card */}
            <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/20 bg-[#13231c]/92 p-5 backdrop-blur-md shadow-xl">
              <p lang="am" className="font-serif text-xl sm:text-2xl text-white leading-snug">
                “ሁልጊዜ በጌታ ደስ ይበላችሁ፤ ደግሜ እላለሁ፥ ደስ ይበላችሁ።”
              </p>
              <p className="mt-2 text-xs uppercase tracking-[.2em] text-[#e7c881] font-semibold">
                Philippians 4:4 · ፊልጵስዩስ 4:4
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
