import { useEffect, useState } from 'react';
import { Cross, Menu, X, Youtube } from 'lucide-react';
import { YOUTUBE_CHANNEL } from '../data/videos';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const links = [
  { id: 'home', label: 'Home' },
  { id: 'faith', label: 'Faith & Scripture' },
  { id: 'music', label: 'Music & Videos' },
  { id: 'scales', label: 'Acoustic Scales' },
  { id: 'story', label: 'Story' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#13231c]/95 shadow-xl backdrop-blur-xl border-b border-white/10'
          : 'bg-gradient-to-b from-[#13231c]/80 via-[#13231c]/30 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand / Logo */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-3 text-left text-white group"
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d9b56d]/50 bg-[#d9b56d]/15 transition-transform group-hover:scale-105">
            <Cross className="h-5 w-5 text-[#e7c881]" />
          </span>
          <span>
            <span className="block font-serif text-xl leading-none tracking-wide text-white group-hover:text-[#e7c881] transition-colors">
              Aemro Fesshaye
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.26em] text-[#e7c881]">
              Faith · Classical Guitar · Worship
            </span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition ${
                activeSection === link.id
                  ? 'bg-[#d9b56d] text-[#13231c] font-semibold shadow-sm'
                  : 'text-stone-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* YouTube Channel CTA */}
          <a
            href={YOUTUBE_CHANNEL.url}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-red-600/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-red-600 hover:scale-105"
          >
            <Youtube className="h-3.5 w-3.5 fill-current" /> YouTube
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white md:hidden hover:bg-white/10"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="border-t border-white/10 bg-[#13231c]/98 backdrop-blur-2xl px-5 py-4 md:hidden shadow-2xl animate-in fade-in" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1.5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  activeSection === link.id
                    ? 'bg-[#d9b56d] text-[#13231c] font-bold'
                    : 'text-stone-100 hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href={YOUTUBE_CHANNEL.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-sm font-bold text-white shadow-md"
            >
              <Youtube className="h-4 w-4 fill-current" /> Visit YouTube Channel (@giutaraemro5858)
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
