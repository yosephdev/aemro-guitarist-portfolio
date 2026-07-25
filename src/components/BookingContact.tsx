import React, { useState } from 'react';
import { Calendar, Mail, Phone, MapPin, Send, CheckCircle2, Music, Sparkles, MessageSquare } from 'lucide-react';
import { BookingRequest } from '../types';

export const BookingContact: React.FC = () => {
  const [activeFormTab, setActiveFormTab] = useState<'booking' | 'fan'>('booking');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [booking, setBooking] = useState<BookingRequest>({
    name: '',
    email: '',
    eventType: 'Live Performance',
    eventDate: '',
    location: '',
    budgetRange: '$1,000 - $2,500',
    message: ''
  });

  const [fanMessage, setFanMessage] = useState({
    name: '',
    email: '',
    favoriteSong: '',
    message: ''
  });

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setBooking({
      name: '',
      email: '',
      eventType: 'Live Performance',
      eventDate: '',
      location: '',
      budgetRange: '$1,000 - $2,500',
      message: ''
    });
    setFanMessage({
      name: '',
      email: '',
      favoriteSong: '',
      message: ''
    });
  };

  return (
    <section id="booking" className="py-24 bg-[#120e0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>Bookings & Connections</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
            Book Aemro for Your Event
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Available for live concerts, festival stages, private acoustic galas, studio recording sessions, and masterclass guitar lessons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#181310] border border-amber-800/40 space-y-8 shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold text-amber-100 mb-2">Direct Contact & Management</h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Have a specific event date in mind? Get in touch directly to discuss concert sets, custom scale arrangements, and booking availability.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-900/80 border border-amber-900/30">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 uppercase font-mono">Email Inquiries</div>
                    <div className="text-sm font-bold text-stone-200">booking@aemroguitar.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-900/80 border border-amber-900/30">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 uppercase font-mono">Phone / Management</div>
                    <div className="text-sm font-bold text-stone-200">+1 (555) 32-GUITAR</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-900/80 border border-amber-900/30">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 uppercase font-mono">Location</div>
                    <div className="text-sm font-bold text-stone-200">Addis Ababa & Worldwide Touring</div>
                  </div>
                </div>
              </div>

              {/* Service Badges */}
              <div className="pt-4 border-t border-amber-900/30 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Available Services
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Solo Acoustic Concerts', 'Ethio-Jazz Ensemble', 'Masterclasses', 'Studio Guitar Tracking', 'Private Events'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-amber-950/50 border border-amber-800/30 text-stone-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#181310] border border-amber-800/40 shadow-2xl space-y-6">
              
              {/* Form switcher tabs */}
              <div className="flex items-center gap-2 border-b border-amber-900/30 pb-4">
                <button
                  onClick={() => setActiveFormTab('booking')}
                  id="form-tab-booking"
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                    activeFormTab === 'booking'
                      ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                      : 'bg-stone-900 text-stone-300 border border-amber-900/30'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Event Booking Request</span>
                </button>

                <button
                  onClick={() => setActiveFormTab('fan')}
                  id="form-tab-fan"
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                    activeFormTab === 'fan'
                      ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                      : 'bg-stone-900 text-stone-300 border border-amber-900/30'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Fan Message</span>
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-100">
                    Message Received!
                  </h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto">
                    Thank you for contacting Aemro. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full bg-stone-900 border border-amber-800/40 text-amber-300 text-xs font-bold uppercase tracking-wider hover:bg-amber-950/50"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : activeFormTab === 'booking' ? (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-300 uppercase">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-300 uppercase">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={booking.email}
                        onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-300 uppercase">Event Type</label>
                      <select
                        value={booking.eventType}
                        onChange={(e) => setBooking({ ...booking, eventType: e.target.value as BookingRequest['eventType'] })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                      >
                        <option value="Live Performance">Live Performance / Concert</option>
                        <option value="Private Event">Private Gala / VIP Gathering</option>
                        <option value="Masterclass / Lesson">Guitar Masterclass / Lesson</option>
                        <option value="Studio Session">Studio Session Recording</option>
                        <option value="Collaboration">Musical Collaboration</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-300 uppercase">Event Date</label>
                      <input
                        type="date"
                        value={booking.eventDate}
                        onChange={(e) => setBooking({ ...booking, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-300 uppercase">City / Location</label>
                      <input
                        type="text"
                        value={booking.location}
                        onChange={(e) => setBooking({ ...booking, location: e.target.value })}
                        placeholder="e.g. Addis Ababa or London, UK"
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-300 uppercase">Estimated Budget</label>
                      <select
                        value={booking.budgetRange}
                        onChange={(e) => setBooking({ ...booking, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                      >
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-300 uppercase">Event Details / Song Requests *</label>
                    <textarea
                      required
                      rows={4}
                      value={booking.message}
                      onChange={(e) => setBooking({ ...booking, message: e.target.value })}
                      placeholder="Tell us about the venue, audience, duration, or specific YouTube songs you'd love Aemro to play..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-booking-btn"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold uppercase tracking-wider text-xs shadow-xl shadow-amber-500/20 hover:brightness-110 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Booking Request</span>
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-300 uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={fanMessage.name}
                      onChange={(e) => setFanMessage({ ...fanMessage, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-300 uppercase">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={fanMessage.email}
                      onChange={(e) => setFanMessage({ ...fanMessage, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-300 uppercase">Favorite Video / Performance</label>
                    <input
                      type="text"
                      value={fanMessage.favoriteSong}
                      onChange={(e) => setFanMessage({ ...fanMessage, favoriteSong: e.target.value })}
                      placeholder="e.g. Soulful Acoustic Fingerstyle Meditation"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-300 uppercase">Your Message to Aemro *</label>
                    <textarea
                      required
                      rows={4}
                      value={fanMessage.message}
                      onChange={(e) => setFanMessage({ ...fanMessage, message: e.target.value })}
                      placeholder="Share your appreciation or feedback for Aemro's 32-year guitar journey..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-900/40 text-stone-100 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-fan-message-btn"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold uppercase tracking-wider text-xs shadow-xl shadow-amber-500/20 hover:brightness-110 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Aemro</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
