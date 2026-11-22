import { useState } from 'react';
import { BookOpen, Check, Copy, Cross, ExternalLink, Heart, Music, RefreshCw, Sparkles } from 'lucide-react';
import { BIBLE_QUOTES } from '../data/quotes';
import { BibleQuote } from '../types';

const CATEGORIES = [
  { id: 'All', label: 'All Verses', amharic: 'ሁሉንም' },
  { id: 'Music & Praise', label: 'Music & Praise', amharic: 'መዝሙርና በገና' },
  { id: 'Joy in Christ', label: 'Joy in Christ', amharic: 'ደስታ በጌታ' },
  { id: 'Boasting in God', label: 'Boasting in God', amharic: 'በእግዚአብሔር መመካት' },
  { id: 'Grace & Hope', label: 'Grace & Hope', amharic: 'ጸጋና ተስፋ' },
  { id: 'Thanksgiving', label: 'Thanksgiving', amharic: 'ምስጋና' },
];

export function FaithSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const filteredQuotes = selectedCategory === 'All'
    ? BIBLE_QUOTES
    : BIBLE_QUOTES.filter((q) => q.category === selectedCategory);

  const spotlightQuote: BibleQuote = BIBLE_QUOTES[spotlightIndex];

  const handleCopy = (quote: BibleQuote) => {
    const textToCopy = `“${quote.amharicText}” — ${quote.reference}\n“${quote.englishText}” — ${quote.englishReference}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedId(quote.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const handleNextSpotlight = () => {
    setSpotlightIndex((prev) => (prev + 1) % BIBLE_QUOTES.length);
  };

  return (
    <section id="faith" className="relative overflow-hidden bg-[#f5efe4] py-24 sm:py-32">
      {/* Subtle background glow */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_left,#dfc79455,transparent_65%)] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 bg-[radial-gradient(circle_at_right,#315b4815,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <span className="eyebrow">
              <Cross className="h-4 w-4" /> Faith at the Center · እምነት በማዕከል
            </span>
            <h2 className="section-title mt-5">
              A joyful message<br />
              <span className="italic text-[#315b48]">rooted in Christ Jesus.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#59625c]">
              For Aemro, music and Christian faith are inseparable. Every chord and melody is an expression of worship, declaring that God is good, Jesus Christ offers eternal salvation, and our boast is in Him alone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end">
            <a
              href="https://kedusbible.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#315b48]/30 bg-white/70 px-5 py-3 text-sm font-semibold text-[#315b48] shadow-sm backdrop-blur transition hover:border-[#315b48] hover:bg-white"
            >
              <BookOpen className="h-4 w-4" /> Read Amharic Bible (መጽሐፍ ቅዱስ) <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Spotlight Card */}
        <div className="mt-14 overflow-hidden rounded-[2.2rem] border border-[#d8cdbb] bg-gradient-to-br from-[#1a3429] to-[#0f211a] p-8 sm:p-12 text-white shadow-2xl relative">
          <div className="absolute top-0 right-0 h-64 w-64 bg-[#d9b56d]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d9b56d]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#e7c881]">
                  <Sparkles className="h-3.5 w-3.5" /> Verse of Reflection · የዕለቱ ቃል
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-400">
                  {spotlightQuote.amharicCategory}
                </span>
              </div>

              <blockquote lang="am" className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#f8f5ee]">
                “{spotlightQuote.amharicText}”
              </blockquote>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed italic">
                “{spotlightQuote.englishText}”
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="font-bold text-lg text-[#e7c881]">{spotlightQuote.reference}</span>
                <span className="text-stone-400 text-sm">({spotlightQuote.englishReference})</span>
              </div>
            </div>

            <div className="flex sm:flex-col shrink-0 gap-3">
              <button
                onClick={() => handleCopy(spotlightQuote)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                title="Copy verse"
              >
                {copiedId === spotlightQuote.id ? (
                  <>
                    <Check className="h-4 w-4 text-[#e7c881]" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy Verse
                  </>
                )}
              </button>

              <button
                onClick={handleNextSpotlight}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9b56d] px-5 py-3 text-sm font-semibold text-[#13231c] transition hover:bg-[#e7c881]"
                title="Next verse"
              >
                <RefreshCw className="h-4 w-4" /> Another Verse
              </button>
            </div>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="mt-16 flex flex-wrap items-center gap-2 border-b border-[#dfd6c8] pb-4">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                  isActive
                    ? 'bg-[#315b48] text-[#f4dc9a] shadow-md'
                    : 'bg-white/60 text-[#59625c] border border-[#d8cdbb] hover:border-[#315b48]/50 hover:bg-white hover:text-[#1d241f]'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-70">({cat.amharic})</span>
              </button>
            );
          })}
        </div>

        {/* Verses Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredQuotes.map((quote) => {
            const isCopied = copiedId === quote.id;
            return (
              <article
                key={quote.id}
                className="group relative flex flex-col justify-between rounded-[1.75rem] border border-[#d8cdbb] bg-white/75 p-7 shadow-[0_12px_36px_rgba(31,44,36,.05)] backdrop-blur transition hover:-translate-y-1 hover:border-[#315b48]/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-[#eae1d3] pb-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[.18em] text-[#9a7438]">
                      {quote.category === 'Music & Praise' ? (
                        <Music className="h-3.5 w-3.5 text-[#315b48]" />
                      ) : quote.category === 'Joy in Christ' ? (
                        <Heart className="h-3.5 w-3.5 text-[#315b48]" />
                      ) : (
                        <Cross className="h-3.5 w-3.5 text-[#315b48]" />
                      )}
                      {quote.amharicCategory}
                    </span>

                    <button
                      onClick={() => handleCopy(quote)}
                      aria-label={`Copy ${quote.reference}`}
                      className="grid h-8 w-8 place-items-center rounded-full text-[#59625c] transition hover:bg-[#315b48]/10 hover:text-[#315b48]"
                      title="Copy verse"
                    >
                      {isCopied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                  <blockquote lang="am" className="mt-5 font-serif text-xl sm:text-2xl leading-[1.65] text-[#1d2a23]">
                    “{quote.amharicText}”
                  </blockquote>

                  <p className="mt-4 text-sm leading-relaxed text-[#59625c] italic">
                    “{quote.englishText}”
                  </p>
                </div>

                <div className="mt-6 flex items-baseline justify-between border-t border-[#eae1d3] pt-4">
                  <span className="font-bold text-sm text-[#315b48]">
                    {quote.reference}
                  </span>
                  <span className="text-xs text-[#9a7438]">
                    {quote.englishReference}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl border border-[#d8cdbb] bg-white/50 p-6 text-center text-sm text-[#59625c]">
          <p>
            Do you have a favorite Bible passage or word of encouragement to share?{' '}
            <a href="#contact" className="font-semibold text-[#315b48] underline underline-offset-4 hover:text-[#1c392c]">
              Send a note to Aemro
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
