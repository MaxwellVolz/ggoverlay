'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import HeroScene from './HeroScene';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 snap-start">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
          <HeroScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          <EffectComposer>
            <Bloom
              intensity={0.8}
              luminanceThreshold={0.6}
              luminanceSmoothing={0.9}
              blendFunction={BlendFunction.ADD}
            />
            <ChromaticAberration offset={[0.001, 0.001]} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-none">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Stop Alt-Tabbing
          </span>
        </h1>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white/90 leading-tight">
          Start <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Winning</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
          Real-time game overlays that bring wiki data, item stats, and guides directly into your game.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 rounded-full text-white font-semibold text-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm cursor-not-allowed opacity-75">
            🚧 Demo Coming Soon
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
