import { useState, type FormEvent } from 'react';
import { Check, Copy, Facebook, Mail, MapPin, MessageCircle, Phone, Send, Sparkles, Youtube } from 'lucide-react';
import { YOUTUBE_CHANNEL } from '../data/videos';

const contacts = [
  {
    icon: Mail,
    label: 'Email Address',
    value: 'aemrof@yahoo.com',
    href: 'mailto:aemrof@yahoo.com?subject=Hello%20Aemro',
    caption: 'Direct personal email'
  },
  {
    icon: Phone,
    label: 'Telephone',
    value: '+46 76 287 08 02',
    href: 'tel:+46762870802',
    caption: 'Sweden phone / WhatsApp'
  },
  {
    icon: Youtube,
    label: 'YouTube Channel',
    value: YOUTUBE_CHANNEL.handle,
    href: YOUTUBE_CHANNEL.url,
    caption: 'Subscribe & watch new videos'
  },
  {
    icon: Facebook,
    label: 'Facebook Profile',
    value: 'Aemro Fesshaye',
    href: 'https://www.facebook.com/search/top?q=Aemro%20Fesshaye',
    caption: 'Connect on social media'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Katrineholm, Sweden',
    caption: 'Södermanland, Sweden'
  },
];

export function BookingContact() {
  const [senderName, setSenderName] = useState('');
  const [topic, setTopic] = useState('Word of Encouragement');
  const [note, setNote] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleComposeEmail = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${topic}] Message from ${senderName || 'a Friend'}`);
    const body = encodeURIComponent(
      `Dear Aemro,\n\n${note || 'I wanted to reach out and share an encouraging word regarding your guitar music and ministry.'}\n\nWarm regards,\n${senderName || 'A friend and listener'}`
    );
    window.location.href = `mailto:aemrof@yahoo.com?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const text = `To: aemrof@yahoo.com\nSubject: [${topic}] Message from ${senderName || 'a Friend'}\n\n${note || 'I wanted to reach out and share an encouraging word regarding your guitar music and ministry.'}\n\nWarm regards,\n${senderName || 'A friend and listener'}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2500);
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f5efe4] py-24 sm:py-32">
      <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#d9b56d]/20 blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 h-80 w-80 rounded-full bg-[#315b48]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Main Box */}
        <div className="overflow-hidden rounded-[2.5rem] bg-[#1a3429] shadow-2xl border border-white/10">
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            
            {/* Left Content Column */}
            <div className="p-8 text-white sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="eyebrow eyebrow-dark">
                  <MessageCircle className="h-4 w-4" /> Connect with Aemro · ግንኙነት
                </span>
                
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                  Say hello.<br />
                  <span className="italic text-[#e7c881]">Share an encouraging word.</span>
                </h2>

                <p className="mt-6 max-w-lg text-lg leading-8 text-stone-200">
                  Whether you’d like to send a word of encouragement, inquire about worship gatherings, collaborate on music, or simply say hello, Aemro would love to hear from you.
                </p>

                {/* Interactive Message Composer */}
                <form onSubmit={handleComposeEmail} className="mt-8 space-y-4 rounded-2xl bg-black/25 p-6 border border-white/10 backdrop-blur">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#e7c881] font-bold">
                    <Sparkles className="h-3.5 w-3.5" /> Quick Message Helper
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Dawit / Sara"
                        className="w-full rounded-xl bg-white/10 px-4 py-2.5 text-sm text-white placeholder-stone-400 border border-white/15 focus:border-[#e7c881] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">Topic</label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full rounded-xl bg-[#1a3429] px-4 py-2.5 text-sm text-white border border-white/15 focus:border-[#e7c881] focus:outline-none"
                      >
                        <option value="Word of Encouragement">Word of Encouragement (ማበረታቻ)</option>
                        <option value="Worship or Church Invitation">Worship / Gathering Invitation</option>
                        <option value="Guitar Music Inquiry">Guitar Music / Recording Inquiry</option>
                        <option value="General Fellowship">General Greeting / Fellowship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Your Message</label>
                    <textarea
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Write your note or Bible verse here..."
                      className="w-full rounded-xl bg-white/10 px-4 py-2.5 text-sm text-white placeholder-stone-400 border border-white/15 focus:border-[#e7c881] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#e7c881] px-6 py-3 text-sm font-bold text-[#193026] transition hover:bg-white hover:-translate-y-0.5"
                    >
                      <Send className="h-4 w-4" /> Open Email Client
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-xs font-semibold text-stone-200 transition hover:bg-white/15"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied Draft
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy Message Text
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-8 text-xs text-stone-400">
                Aemro typically responds within a couple of days. May God bless you!
              </div>
            </div>

            {/* Right Contact Details Cards */}
            <div className="grid gap-px bg-white/10">
              {contacts.map(({ icon: Icon, label, value, href, caption }) => {
                const inner = (
                  <>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#e7c881] transition group-hover:bg-[#e7c881] group-hover:text-[#193026]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold uppercase tracking-[.2em] text-[#d7c7a7]">
                        {label}
                      </span>
                      <span className="mt-1 block font-serif text-xl text-white truncate group-hover:text-[#e7c881] transition-colors">
                        {value}
                      </span>
                      {caption && (
                        <span className="block text-xs text-stone-300 mt-0.5">
                          {caption}
                        </span>
                      )}
                    </div>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 bg-[#142820] p-6 transition hover:bg-[#0f1f18] sm:p-8"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="group flex items-center gap-4 bg-[#142820] p-6 sm:p-8">
                    {inner}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
