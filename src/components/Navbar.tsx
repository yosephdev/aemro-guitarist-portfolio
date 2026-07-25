import React, { useState, useEffect } from 'react';
import { Music, Play, User, Radio, Disc, Calendar, Menu, X, Volume2, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuickPlay?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenQuickPlay }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Music },
    { id: 'videos', label: 'Performances', desktopLabel: 'Videos', icon: Play },
    { id: 'story', label: '32-Year Journey', desktopLabel: 'Story', icon: User },
    { id: 'scales', label: 'Ethio-Jazz Scales', desktopLabel: 'Scales', icon: Disc },
    { id: 'gear', label: 'Gear Rig', desktopLabel: 'Gear', icon: Radio },
    { id: 'booking', label: 'Book & Contact', desktopLabel: 'Contact', icon: Calendar },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120e0c]/95 backdrop-blur-xl border-b border-amber-900/30 py-2.5 shadow-2xl'
          : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3 group text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120e0c]"
            id="nav-logo-btn"
            aria-label="Go to Aemro home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-black font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Music className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-black" />
            </div>
            <div className="min-w-0">
              <span className="block text-base sm:text-lg font-bold tracking-wider text-amber-100 group-hover:text-amber-400 transition-colors">
                AEMRO
              </span>
              <span className="hidden min-[360px]:block whitespace-nowrap text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-amber-400/80 font-medium">
                32 Years of Guitar
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav
            className="hidden xl:flex flex-1 items-center justify-center gap-1 bg-[#1a1512]/70 p-1.5 rounded-full border border-amber-900/40 backdrop-blur-sm"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`flex items-center gap-1.5 2xl:gap-2 px-3 2xl:px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20 font-semibold'
                      : 'text-stone-300 hover:text-amber-200 hover:bg-amber-950/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={item.label}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-amber-400/80'}`} />
                  <span>{item.desktopLabel ?? item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden xl:flex shrink-0 items-center gap-2 2xl:gap-3">
            {onOpenQuickPlay && (
              <button
                onClick={onOpenQuickPlay}
                id="nav-quick-sound-btn"
                className="hidden 2xl:flex items-center gap-2 px-3.5 py-2.5 text-xs font-medium text-amber-300 bg-amber-950/60 border border-amber-800/40 rounded-full hover:bg-amber-900/50 hover:border-amber-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                title="Play Interactive Guitar Tones"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Soundboard</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('booking')}
              id="nav-cta-booking"
              className="flex items-center gap-2 px-4 2xl:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120e0c]"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-950" />
              <span>Book Event</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="inline-flex min-w-11 min-h-11 items-center justify-center p-2.5 rounded-xl bg-amber-950/70 text-amber-200 border border-amber-800/50 hover:bg-amber-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain bg-[#14100e]/98 backdrop-blur-xl border-y border-amber-900/40 px-3 sm:px-6 pt-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <nav className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-${item.id}`}
                  className={`flex min-h-12 items-center gap-3 px-4 py-3 rounded-xl text-sm sm:text-base font-medium text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-300 hover:bg-amber-950/50 hover:text-amber-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="sm:col-span-2 pt-4 border-t border-amber-900/30 grid grid-cols-1 min-[430px]:grid-cols-2 gap-2 mt-2">
              {onOpenQuickPlay && (
                <button
                  onClick={() => {
                    onOpenQuickPlay();
                    setMobileMenuOpen(false);
                  }}
                  className="min-h-12 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-amber-200 bg-amber-950/60 border border-amber-800/40 hover:bg-amber-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  <Volume2 className="w-4 h-4" />
                  Open Soundboard
                </button>
              )}
              <button
                onClick={() => handleNavClick('booking')}
                id="mobile-nav-booking-btn"
                className="min-h-12 w-full px-4 py-3 rounded-xl text-center font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-600 shadow-md shadow-amber-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
              >
                Book Aemro for an Event
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
