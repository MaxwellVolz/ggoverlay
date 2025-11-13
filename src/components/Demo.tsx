'use client';

import { useState } from 'react';
import GameOverlay from './GameOverlay';

export default function Demo() {
  const [selectedOverlay, setSelectedOverlay] = useState<'item' | 'enemy' | 'quest'>('item');

  return (
    <section id="demo" className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              See It In Action
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Live Demo
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience how OverCr overlays work in real-time. Toggle between different overlay types.
          </p>
        </div>

        {/* Overlay Type Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedOverlay('item')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedOverlay === 'item'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            ⚔️ Item Info
          </button>
          <button
            onClick={() => setSelectedOverlay('enemy')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedOverlay === 'enemy'
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30'
                : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            🐉 Enemy Data
          </button>
          <button
            onClick={() => setSelectedOverlay('quest')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedOverlay === 'quest'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            📜 Quest Guide
          </button>
        </div>

        {/* Demo Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mock Game Screenshot Background */}
          <div className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
            {/* Simulated Game Scene */}
            <div className="aspect-video bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-900 relative">
              {/* Mock Game UI Elements */}
              <div className="absolute inset-0 p-8">
                {/* Health/Mana Bars (Top Left) */}
                <div className="absolute top-8 left-8 space-y-2">
                  <div className="w-64 h-6 bg-slate-900/80 rounded-full overflow-hidden border border-red-500/30">
                    <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-3/4" />
                  </div>
                  <div className="w-64 h-6 bg-slate-900/80 rounded-full overflow-hidden border border-blue-500/30">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-500 w-1/2" />
                  </div>
                </div>

                {/* Minimap (Top Right) */}
                <div className="absolute top-8 right-8 w-48 h-48 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-4">
                  <div className="w-full h-full bg-slate-800 rounded-lg relative">
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-500 rounded-full" />
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-500 rounded-full" />
                  </div>
                </div>

                {/* Ability Bar (Bottom Center) */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-purple-500/30 flex items-center justify-center text-2xl"
                    >
                      {['⚔️', '🛡️', '⚡', '🔥', '💫'][i]}
                    </div>
                  ))}
                </div>

                {/* OverCr Overlay (Animated entrance) */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{
                    animation: 'slideIn 0.5s ease-out'
                  }}
                >
                  <GameOverlay variant={selectedOverlay} />
                </div>
              </div>

              {/* Ambient Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* OverCr Watermark */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-slate-950/80 backdrop-blur-sm rounded-full border border-purple-500/30 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-gray-400">OverCr Active</span>
            </div>
          </div>

          {/* Feature Callouts */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-3">👁️</div>
              <h4 className="text-white font-bold mb-2">Context-Aware</h4>
              <p className="text-gray-400 text-sm">
                Automatically detects items, enemies, and quests you&apos;re interacting with
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-white font-bold mb-2">Instant Access</h4>
              <p className="text-gray-400 text-sm">
                Information appears in milliseconds, no loading screens or delays
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🎮</div>
              <h4 className="text-white font-bold mb-2">Non-Intrusive</h4>
              <p className="text-gray-400 text-sm">
                Designed to complement your game UI, not obstruct your gameplay
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}
