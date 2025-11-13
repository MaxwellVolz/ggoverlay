'use client';

import { useState, useEffect, useRef } from 'react';
import ValorantScene from './game-scenes/ValorantScene';
import CounterStrikeScene from './game-scenes/CounterStrikeScene';
import DarkAndDarkerScene from './game-scenes/DarkAndDarkerScene';

interface ShowcasePanelProps {
  title: string;
  subtitle: string;
  game: string;
  SceneComponent: React.ComponentType<{ isVisible: boolean }>;
}

function ShowcasePanel({ title, subtitle, game, SceneComponent }: ShowcasePanelProps) {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTiltX(rotateX);
    setTiltY(rotateY);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 snap-start overflow-hidden py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-sm font-medium text-purple-400">
              {game}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Game Scene with 3D Tilt */}
        <div
          className="max-w-6xl mx-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(2000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <SceneComponent isVisible={isVisible} />
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            3D holographic interface rendered directly over game environment
          </p>
        </div>
      </div>
    </section>
  );
}

export default function OverlayShowcase() {
  return (
    <>
      <ShowcasePanel
        title="Dominate Every Match"
        subtitle="Real-time agent abilities, weapon stats, and tactical intel rendered as AR-style overlays. Never alt-tab again."
        game="Valorant"
        SceneComponent={ValorantScene}
      />

      <ShowcasePanel
        title="Know the Meta"
        subtitle="Instant access to weapon damage, spray patterns, and map callouts. All the intel you need, right where you need it."
        game="Counter-Strike 2"
        SceneComponent={CounterStrikeScene}
      />

      <ShowcasePanel
        title="Loot Smarter"
        subtitle="Know exactly what you're picking up. Item values, stats, and drop rates displayed instantly as holographic overlays."
        game="Dark and Darker"
        SceneComponent={DarkAndDarkerScene}
      />
    </>
  );
}
