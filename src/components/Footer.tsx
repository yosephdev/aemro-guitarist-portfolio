import React from 'react';
import { Music, Play, ArrowUp, Heart, Youtube, Instagram, Mail, Radio } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0806] border-t border-amber-900/40 text-stone-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-bold">
                <Music className="w-5 h-5 text-stone-950" />
              </div>
              <div>
                <span className="text-xl font-bold text-amber-100 tracking-wider">
                  AEMRO
                </span>
                <span className="block text-xs uppercase tracking-widest text-amber-400 font-medium">
                  32 Years of Guitar Mastery
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-sm max-w-sm leading-relaxed">
              Celebrating 32 years of 6-string acoustic fingerstyle, Ethio-Jazz pentatonic scale innovations, and stage improvisations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 border border-amber-900/40 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 border border-amber-900/40 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="mailto:booking@aemroguitar.com"
                className="w-10 h-10 rounded-full bg-stone-900 border border-amber-900/40 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Home & Introduction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('videos')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Featured YouTube Performances (4 Videos)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  32-Year Musical Journey (1994 - 2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('scales')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Interactive Ethio-Jazz Scale Sampler
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gear')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Aemro's Gear Rig & Instruments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('booking')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Event Booking & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* YouTube Links Quick Access */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
              YouTube Links Provided
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://youtu.be/NRUD7WJyFZE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400/90 hover:text-amber-200 underline flex items-center gap-1"
                >
                  <Play className="w-3 h-3" /> video/NRUD7WJyFZE
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/Nndcx7ILvfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400/90 hover:text-amber-200 underline flex items-center gap-1"
                >
                  <Play className="w-3 h-3" /> video/Nndcx7ILvfc
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/Wg50KCqKXUI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400/90 hover:text-amber-200 underline flex items-center gap-1"
                >
                  <Play className="w-3 h-3" /> video/Wg50KCqKXUI
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/tcLXr7y5Tgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400/90 hover:text-amber-200 underline flex items-center gap-1"
                >
                  <Play className="w-3 h-3" /> video/tcLXr7y5Tgo
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Aemro Guitarist Portfolio. Built for Aemro's 32-Year Legacy.</p>
          
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 border border-amber-900/40 text-stone-300 hover:text-amber-300 hover:border-amber-500/50 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
