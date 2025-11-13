'use client';

import { useState } from 'react';

export default function InGameDemo() {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    setTiltX(rotateX);
    setTiltY(rotateY);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 snap-start overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm text-sm font-medium text-cyan-400">
              Live In-Game
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              See It In Action
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            Real-time overlay that appears exactly when you need it. No interruption to your gameplay.
          </p>
        </div>

        {/* Game Window with Overlay */}
        <div
          className="max-w-6xl mx-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Game Window */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
              {/* Simulated Game Screen */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 via-blue-900/20 to-slate-900 relative">
                {/* Game Environment (simplified FPS view) */}
                <div className="absolute inset-0">
                  {/* Sky/Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-slate-800" />

                  {/* Ground/Wall elements */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-slate-700 to-slate-800/50">
                    {/* Wall/corridor perspective */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/2 left-0 w-full h-px bg-gray-600" />
                      <div className="absolute top-1/2 left-1/2 w-px h-full bg-gray-600 transform -translate-x-1/2" />
                    </div>
                  </div>

                  {/* Enemy silhouette */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                    <div className="relative">
                      {/* Head */}
                      <div className="w-16 h-20 bg-red-900/60 rounded-t-full mx-auto relative">
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      </div>
                      {/* Body */}
                      <div className="w-24 h-32 bg-red-900/60 rounded-lg -mt-2 relative" />
                    </div>
                  </div>
                </div>

                {/* Game HUD Elements */}
                <div className="absolute inset-0 p-6">
                  {/* Top Left - Health & Armor */}
                  <div className="absolute top-6 left-6 space-y-2">
                    <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/30">
                      <span className="text-green-400 text-lg">❤️</span>
                      <span className="text-white font-bold text-xl">100</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-500/30">
                      <span className="text-blue-400 text-lg">🛡️</span>
                      <span className="text-white font-bold text-xl">100</span>
                    </div>
                  </div>

                  {/* Top Center - Timer */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-slate-950/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-orange-500/30">
                      <span className="text-orange-400 font-bold">1:45</span>
                    </div>
                  </div>

                  {/* Top Right - Score */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-slate-950/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-500/30">
                      <span className="text-white font-bold">CT 12 - 11 T</span>
                    </div>
                  </div>

                  {/* Center - Crosshair */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-8 h-8">
                      <div className="absolute top-1/2 left-0 w-2 h-px bg-green-400 transform -translate-y-1/2" />
                      <div className="absolute top-1/2 right-0 w-2 h-px bg-green-400 transform -translate-y-1/2" />
                      <div className="absolute top-0 left-1/2 w-px h-2 bg-green-400 transform -translate-x-1/2" />
                      <div className="absolute bottom-0 left-1/2 w-px h-2 bg-green-400 transform -translate-x-1/2" />
                    </div>
                  </div>

                  {/* Bottom Center - Weapon Info */}
                  <div className="absolute bottom-6 right-6">
                    <div className="text-right">
                      <div className="text-white text-4xl font-bold mb-1">30 / 90</div>
                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-2xl">🔫</span>
                        <span className="text-white text-xl font-bold">AK-47</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left - Money */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-slate-950/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30">
                      <span className="text-yellow-400 font-bold text-lg">$2,700</span>
                    </div>
                  </div>

                  {/* OverCr Overlay - Floating in 3D Space */}
                  <div
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div
                      className="w-96 bg-slate-950/98 backdrop-blur-2xl border-2 border-cyan-400/60 rounded-2xl shadow-2xl animate-floatIn"
                      style={{
                        transform: `translateZ(100px) scale(1.1)`,
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 40px 120px rgba(6, 182, 212, 0.5), 0 0 80px rgba(6, 182, 212, 0.3), inset 0 0 40px rgba(6, 182, 212, 0.1)'
                      }}
                    >
                      {/* Overlay Header */}
                      <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border-b-2 border-cyan-400/50 px-5 py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
                            <span className="text-cyan-300 text-sm font-bold tracking-wide">ENEMY SPOTTED</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="px-2 py-0.5 bg-cyan-500/20 rounded text-cyan-400 text-xs font-bold">LIVE</div>
                          </div>
                        </div>
                      </div>

                      {/* Overlay Content */}
                      <div className="p-5 space-y-4">
                        {/* Enemy Position */}
                        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl p-4 border border-cyan-500/30">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-xl shadow-lg">
                              📍
                            </div>
                            <div>
                              <span className="text-white text-base font-bold block">Common Position: Long A</span>
                              <span className="text-cyan-400 text-xs">Distance: ~45m</span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Enemy often camps behind double doors. Pre-aim head height for instant advantage.
                          </p>
                        </div>

                        {/* Tactical Tips */}
                        <div className="space-y-2.5">
                          <div className="bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border-2 border-cyan-400/40 rounded-xl p-3 shadow-lg shadow-cyan-500/20">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-base flex-shrink-0 shadow-md">
                                💡
                              </div>
                              <div>
                                <div className="text-cyan-300 text-sm font-bold mb-1">Flash First</div>
                                <p className="text-gray-200 text-xs leading-relaxed">
                                  Throw flash over doors before peeking. Wait 1.5s for peak blindness.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-500/15 to-red-500/15 border-2 border-orange-400/40 rounded-xl p-3 shadow-lg shadow-orange-500/20">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-base flex-shrink-0 shadow-md">
                                ⚠️
                              </div>
                              <div>
                                <div className="text-orange-300 text-sm font-bold mb-1">Watch Crossfire</div>
                                <p className="text-gray-200 text-xs leading-relaxed">
                                  Second enemy likely at CT spawn. Check corners after kill.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/15 border-2 border-green-400/40 rounded-xl p-3 shadow-lg shadow-green-500/20">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-base flex-shrink-0 shadow-md">
                                ✓
                              </div>
                              <div>
                                <div className="text-green-300 text-sm font-bold mb-1">Your Advantage</div>
                                <p className="text-gray-200 text-xs leading-relaxed">
                                  AK-47 one-tap headshot kills at this range. You have the advantage.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="pt-3 border-t-2 border-cyan-500/30">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">T-Side Win Rate:</span>
                            <span className="text-green-400 font-bold text-base">63%</span>
                          </div>
                        </div>
                      </div>

                      {/* Glow effect border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-scan" />
                </div>
              </div>

              {/* Window border glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Overlays appear contextually based on what&apos;s happening in your game. Fully customizable position, size, and opacity.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateZ(50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateZ(100px) scale(1.1);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }

        .animate-floatIn {
          animation: floatIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
