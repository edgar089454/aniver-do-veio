import React from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { MessageWall } from './components/MessageWall';
import { MediaSection } from './components/MediaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Hero />
      <Timeline />
      <Gallery />
      <MessageWall />
      <MediaSection />
      <Footer />
    </div>
  );
}
