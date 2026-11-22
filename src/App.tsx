import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FaithSection } from './components/FaithSection';
import { VideoGallery } from './components/VideoGallery';
import { ScaleSampler } from './components/ScaleSampler';
import { AboutSection } from './components/AboutSection';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'faith', 'music', 'scales', 'story', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -55%', threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5efe4] text-[#1d241f] selection:bg-[#b68a43] selection:text-white">
      <Navbar activeSection={activeSection} onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <FaithSection />
        <VideoGallery />
        <ScaleSampler />
        <AboutSection />
        <BookingContact />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
