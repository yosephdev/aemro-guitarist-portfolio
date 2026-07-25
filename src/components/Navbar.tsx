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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Music },
    { id: 'videos', label: 'Performances', icon: Play },
    { id: 'story', label: '32-Year Journey', icon: User },
    { id: 'scales', label: 'Ethio-Jazz Scales', icon: Disc },
    { id: 'gear', label: 'Gear Rig', icon: Radio },
    { id: 'booking', label: 'Book & Contact', icon: Calendar },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120e0c]/90 backdrop-blur-md border-b border-amber-900/30 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Music className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="block text-lg font-bold tracking-wider text-amber-100 group-hover:text-amber-400 transition-colors">
                AEMRO
              </span>
              <span className="block text-[11px] uppercase tracking-widest text-amber-400/80 font-medium">
                32 Years of Guitar
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1a1512]/60 p-1.5 rounded-full border border-amber-900/40 backdrop-blur-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20 font-semibold'
                      : 'text-stone-300 hover:text-amber-200 hover:bg-amber-950/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-amber-400/80'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenQuickPlay && (
              <button
                onClick={onOpenQuickPlay}
                id="nav-quick-sound-btn"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-amber-300 bg-amber-950/60 border border-amber-800/40 rounded-full hover:bg-amber-900/50 hover:border-amber-500/50 transition-colors"
                title="Play Interactive Guitar Tones"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Soundboard</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('booking')}
              id="nav-cta-booking"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-950" />
              <span>Book Event</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2.5 rounded-xl bg-amber-950/60 text-amber-200 border border-amber-900/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14100e] border-b border-amber-900/40 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-${item.id}`}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-300 hover:bg-amber-950/50 hover:text-amber-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-4 border-t border-amber-900/30 flex flex-col gap-2 mt-2">
              <button
                onClick={() => handleNavClick('booking')}
                id="mobile-nav-booking-btn"
                className="w-full py-3 rounded-xl text-center font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-600 shadow-md shadow-amber-500/20"
              >
                Book Aemro for an Event
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
