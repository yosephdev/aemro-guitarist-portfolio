import { ArrowUp, Cross, Facebook, Mail, Phone, Youtube } from 'lucide-react';
import { YOUTUBE_CHANNEL } from '../data/videos';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#0e1b16] px-5 py-12 text-stone-300 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d9b56d]/15 border border-[#d9b56d]/40">
            <Cross className="h-5 w-5 text-[#e7c881]" />
          </span>
          <div>
            <p className="font-serif text-xl text-white">Aemro Fesshaye</p>
            <p className="text-xs text-stone-400">Faith · Classical Gospel Guitar · Testimony</p>
          </div>
        </div>

        {/* Social and Action Links */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={YOUTUBE_CHANNEL.url}
            target="_blank"
            rel="noreferrer"
            aria-label="Aemro YouTube Channel"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-stone-300 hover:border-red-500 hover:text-red-500 hover:bg-white/5 transition"
            title="Subscribe on YouTube"
          >
            <Youtube className="h-4 w-4 fill-current" />
          </a>

          <a
            href="https://www.facebook.com/search/top?q=Aemro%20Fesshaye"
            target="_blank"
            rel="noreferrer"
            aria-label="Find Aemro on Facebook"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-stone-300 hover:border-[#e7c881] hover:text-[#e7c881] hover:bg-white/5 transition"
            title="Find on Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>

          <a
            href="mailto:aemrof@yahoo.com"
            aria-label="Email Aemro"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-stone-300 hover:border-[#e7c881] hover:text-[#e7c881] hover:bg-white/5 transition"
            title="Send an email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <a
            href="tel:+46762870802"
            aria-label="Call Aemro"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-stone-300 hover:border-[#e7c881] hover:text-[#e7c881] hover:bg-white/5 transition"
            title="Telephone"
          >
            <Phone className="h-4 w-4" />
          </a>

          <button
            onClick={() => onNavigate('home')}
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold hover:border-[#e7c881] hover:text-[#e7c881] hover:bg-white/5 transition"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl border-t border-white/10 pt-6 text-xs text-stone-400">
        <div>© 2026 Aemro Fesshaye. Katrineholm, Sweden. “Rejoice in the Lord always” (Phil. 4:4).</div>
        <div className="flex items-center gap-4">
          <a href="#faith" onClick={() => onNavigate('faith')} className="hover:text-[#e7c881] transition">Bible Quotes</a>
          <a href="#music" onClick={() => onNavigate('music')} className="hover:text-[#e7c881] transition">YouTube Videos</a>
          <a href="#contact" onClick={() => onNavigate('contact')} className="hover:text-[#e7c881] transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
