import { BookOpen, Guitar, Heart, MapPin, Music, Quote, Sparkles, Youtube } from 'lucide-react';
import portrait from '../assets/images/aemro-fesshaye-mephn.jpg';
import { YOUTUBE_CHANNEL } from '../data/videos';

export function AboutSection() {
  return (
    <section id="story" className="bg-[#ebe1d1] py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#dfc794]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#315b48]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Main Grid: Portrait and Introduction */}
        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          
          {/* Portrait with decorative frame and badges */}
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2.2rem] border-2 border-[#b68a43]/40 pointer-events-none" />
            <img
              src={portrait}
              alt="Aemro Fesshaye with his guitar"
              className="relative aspect-[4/5] w-full rounded-[2.2rem] object-cover object-top shadow-2xl"
            />

            {/* Float badge 1 */}
            <div className="absolute -right-3 bottom-8 rounded-2xl bg-[#315b48] p-5 text-white shadow-xl sm:-right-8">
              <Guitar className="h-7 w-7 text-[#e7c881]" />
              <p className="mt-2 font-serif text-xl">Music with purpose</p>
              <p className="text-xs text-stone-300">Dedicated to God's glory</p>
            </div>

            {/* Float badge 2 */}
            <div className="absolute top-6 left-6 rounded-xl bg-white/90 backdrop-blur px-4 py-2 shadow-lg border border-[#d8cdbb]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#315b48] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#b68a43]" /> 30+ Years Craft
              </span>
            </div>
          </div>

          {/* Narrative Content */}
          <div>
            <span className="eyebrow">
              <Music className="h-4 w-4" /> Meet Aemro · ስለ አእምሮ
            </span>
            <h2 className="section-title mt-5">
              A guitarist who wants every note to bring peace.
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-[#59625c]">
              <p>
                Aemro Fesshaye is a dedicated guitarist, worshipper, and Christian living in Katrineholm, Sweden. For over three decades, he has nurtured a distinct fingerstyle and classical acoustic sound that blends traditional East African spiritual melodies with rich contemporary acoustic warmth.
              </p>
              <p>
                Through his classical mezmur arrangements, Aemro strips away complexity to reveal the pure emotion of gospel praise. His instruments sing the verses of hope, repentance, and gratitude—allowing listeners everywhere to reflect quietly on the faithfulness of Christ.
              </p>
              <p>
                Whether playing in intimate prayer settings, collaborating on classical arrangements, or publishing on his YouTube channel, Aemro’s desire is simple: that God be magnified, hearts be encouraged, and listeners experience the peace of God.
              </p>
            </div>

            {/* Highlight Metric Cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#cabda8] bg-white/65 p-5 shadow-sm">
                <MapPin className="h-5 w-5 text-[#315b48]" />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#9a7438]">Based in</p>
                <p className="mt-1 font-serif text-lg font-bold text-[#1d241f]">Katrineholm, Sweden</p>
              </div>

              <div className="rounded-2xl border border-[#cabda8] bg-white/65 p-5 shadow-sm">
                <Quote className="h-5 w-5 text-[#315b48]" />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#9a7438]">Heart Message</p>
                <p className="mt-1 font-serif text-lg font-bold text-[#1d241f]">Rejoice in the Lord</p>
              </div>

              <div className="rounded-2xl border border-[#cabda8] bg-white/65 p-5 shadow-sm">
                <Youtube className="h-5 w-5 text-red-600 fill-current" />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#9a7438]">YouTube Channel</p>
                <a
                  href={YOUTUBE_CHANNEL.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block font-serif text-lg font-bold text-[#315b48] hover:underline"
                >
                  {YOUTUBE_CHANNEL.handle}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Core Pillars / Ministry Principles */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="rounded-[1.8rem] border border-[#d8cdbb] bg-white/70 p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#315b48] text-[#f4dc9a]">
              <Guitar className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-[#1d241f]">Classical Gospel Touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#59625c]">
              Combining fingerstyle technique, Ethiopian pentatonic modes (Tizita, Bati), and acoustic clarity to create contemplative gospel classical arrangements.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#d8cdbb] bg-white/70 p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#315b48] text-[#f4dc9a]">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-[#1d241f]">Scriptural Grounding</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#59625c]">
              Rooted in the timeless scriptures of the Bible. Every melody carries the weight of biblical meditation, praising the Lord with stringed instruments.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#d8cdbb] bg-white/70 p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#315b48] text-[#f4dc9a]">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-[#1d241f]">Fellowship & Fellowship</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#59625c]">
              Welcoming conversations with fellow believers, admirers, and music lovers across Sweden, the Ethiopian and Eritrean diaspora, and worldwide.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
