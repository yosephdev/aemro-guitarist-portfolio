import React, { useState } from 'react';
import { GEAR_LIST } from '../data/bio';
import { Radio, ShieldCheck, Zap, Disc, Clock, Guitar, Sliders } from 'lucide-react';

export const GearSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Guitar', 'Amplifier', 'Pedalboard'];

  const filteredGear = selectedCategory === 'All'
    ? GEAR_LIST
    : GEAR_LIST.filter((g) => g.category === selectedCategory);

  return (
    <section id="gear" className="py-24 bg-[#0e0b09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5" />
            <span>Tone Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
            32 Years of Gear & Tone Crafting
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            The instruments, tube amplifiers, and custom pedalboards that give Aemro his unmistakable warm analog acoustic and electric resonance.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`gear-category-${cat.toLowerCase()}`}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                  : 'bg-stone-900 text-stone-300 border border-amber-900/40 hover:border-amber-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGear.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-[#181310] border border-amber-900/30 hover:border-amber-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>In Rig: {item.yearsInUse} Years</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-stone-100">{item.name}</h3>
                  <div className="text-xs font-semibold text-amber-400/90 uppercase tracking-wide">
                    {item.brand}
                  </div>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-900/20 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span className="flex items-center gap-1 text-amber-300">
                  <ShieldCheck className="w-4 h-4" /> Tour & Studio Ready
                </span>
                <span>Authentic Analog Tone</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
