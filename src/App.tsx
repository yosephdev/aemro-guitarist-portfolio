import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoGallery } from './components/VideoGallery';
import { AboutSection } from './components/AboutSection';
import { ScaleSampler } from './components/ScaleSampler';
import { GearSection } from './components/GearSection';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { PERFORMANCE_VIDEOS } from './data/videos';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(PERFORMANCE_VIDEOS[0].youtubeId);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVideo = (youtubeId: string) => {
    setSelectedVideoId(youtubeId);
    handleNavigate('videos');
  };

  return (
    <div className="min-h-screen bg-[#0e0b09] text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuickPlay={() => handleNavigate('scales')}
      />

      {/* Hero Section */}
      <Hero
        onSelectVideo={handleSelectVideo}
        onNavigate={handleNavigate}
      />

      {/* YouTube Performances Gallery & Theater Mode */}
      <VideoGallery
        selectedVideoId={selectedVideoId}
        onSelectVideo={(id) => setSelectedVideoId(id)}
      />

      {/* 32-Year Journey & Biography */}
      <AboutSection />

      {/* Interactive Web Audio API Ethiopian Guitar Scale Sampler */}
      <ScaleSampler />

      {/* Gear Rig & Tone Architecture */}
      <GearSection />

      {/* Event Booking & Contact */}
      <BookingContact />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
