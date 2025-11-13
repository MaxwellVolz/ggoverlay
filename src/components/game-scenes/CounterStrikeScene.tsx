'use client';

interface CounterStrikeSceneProps {
  isVisible: boolean;
}

export default function CounterStrikeScene({ isVisible }: CounterStrikeSceneProps) {
  const basePath = '';
  const screenshotPath = `${basePath}/screenshots/counterstrike/counter-strike.png`;
  const overlayImagePath = `${basePath}/screenshots/counterstrike/cs-overlay.png`;

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 via-orange-900/20 to-slate-900 rounded-2xl overflow-visible border-4 border-gray-800 shadow-2xl">
      {/* Game Background - Real Screenshot or Fallback */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {/* Fallback - CS Environment (shown if no screenshot) */}
        <div className="absolute inset-0 cs-fallback-bg z-0">
          {/* Sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 to-slate-800" />

          {/* Ground/Walls */}
          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-stone-800 to-stone-700/50">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-0 w-full h-px bg-orange-500" />
              <div className="absolute top-1/2 left-1/3 w-px h-full bg-orange-500" />
              <div className="absolute top-1/2 left-2/3 w-px h-full bg-orange-500" />
            </div>
          </div>

          {/* Crates/Environment */}
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-yellow-900/40 border border-yellow-700/30 shadow-lg" />
          <div className="absolute bottom-16 right-1/3 w-24 h-40 bg-stone-700/40 border border-stone-600/30" />
        </div>

        {/* Try to load real screenshot */}
        <img
          src={screenshotPath}
          alt="Counter-Strike 2 gameplay"
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={(e) => {
            // Hide image if it doesn't exist
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Floating Overlay Image - Top Left */}
      <div className={`absolute top-1 left-1 md:-top-12 md:-left-12 pointer-events-none z-20 scale-[0.35] md:scale-100 origin-top-left transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <div
          className="relative"
          style={{
            transform: 'perspective(1000px) rotateY(8deg) rotateX(-5deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div
            className="relative animate-float"
            style={{
              transform: 'translateZ(120px)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Shadow layer */}
            <div className="absolute inset-0 bg-black/60 blur-3xl translate-x-4 translate-y-8" style={{ transform: 'translateZ(-40px)' }} />

            {/* Main Container */}
            <div className="relative bg-slate-950/30 backdrop-blur-2xl border-2 border-orange-400/70 rounded-2xl shadow-2xl w-[240px] overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(249, 115, 22, 0.3), 0 20px 60px rgba(0, 0, 0, 0.6)'
            }}>

              {/* Header */}
              <div className="relative border-b-2 border-orange-400/40 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 px-3 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50">
                      <span className="text-base font-bold">M</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">MIRAGE</div>
                      <div className="text-orange-400 text-xs">Map Callouts</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/80" />
                  </div>
                </div>
              </div>

              {/* Content - Overlay Image */}
              <div className="p-3">
                <div className="relative">
                  <img
                    src={overlayImagePath}
                    alt="CS2 Overlay"
                    className="w-full h-auto rounded-lg shadow-xl"
                    style={{
                      filter: 'drop-shadow(0 10px 20px rgba(249, 115, 22, 0.4))',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Holographic shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-lg" />

                  {/* Edge glow */}
                  <div className="absolute inset-0 rounded-lg border border-orange-400/50 shadow-inner" />
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-400/5 to-transparent animate-scan" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Holographic Overlay - Weapon Stats - AK-47 */}
      <div className={`absolute bottom-1 right-1 md:-bottom-12 md:-right-12 pointer-events-none z-20 scale-[0.35] md:scale-100 origin-bottom-right transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div
          className="relative"
          style={{
            transform: 'perspective(1000px) rotateX(5deg) rotateY(-8deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Main Panel */}
          <div
            className="w-72 relative animate-float"
            style={{
              transform: 'translateZ(120px)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Main Content */}
            <div className="relative bg-slate-950/30 backdrop-blur-2xl border-2 border-orange-400/70 rounded-2xl shadow-2xl overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(249, 115, 22, 0.3), 0 20px 60px rgba(0, 0, 0, 0.6)'
            }}>

              {/* Header */}
              <div className="relative border-b-2 border-orange-400/40 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 px-3 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50">
                      <span className="text-base font-bold">AK</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">AK-47 ANALYSIS</div>
                      <div className="text-orange-400 text-xs">WEAPON DATA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/80" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 space-y-3">
                {/* Damage Stats - 3D Cards */}
                <div className="grid grid-cols-3 gap-2">
                  <div
                    className="relative bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/50 rounded-lg p-2 shadow-lg"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="absolute inset-0 bg-orange-500/10 blur-lg rounded-lg" />
                    <div className="relative">
                      <div className="text-orange-300 text-xs font-bold mb-0.5">DMG</div>
                      <div className="text-white text-2xl font-bold">36</div>
                    </div>
                  </div>

                  <div
                    className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/50 rounded-lg p-2 shadow-lg"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="absolute inset-0 bg-yellow-500/10 blur-lg rounded-lg" />
                    <div className="relative">
                      <div className="text-yellow-300 text-xs font-bold mb-0.5">RPM</div>
                      <div className="text-white text-2xl font-bold">600</div>
                    </div>
                  </div>

                  <div
                    className="relative bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-400/50 rounded-lg p-2 shadow-lg"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="absolute inset-0 bg-red-500/10 blur-lg rounded-lg" />
                    <div className="relative">
                      <div className="text-red-300 text-xs font-bold mb-0.5">PEN</div>
                      <div className="text-white text-2xl font-bold">77%</div>
                    </div>
                  </div>
                </div>

                {/* Spray Pattern Visualization */}
                <div
                  className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-orange-400/40 rounded-lg p-2"
                  style={{ transform: 'translateZ(15px)' }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    <span className="text-orange-300 text-xs font-bold">RECOIL</span>
                  </div>
                  <div className="flex items-center justify-center h-16">
                    {/* Visual spray dots */}
                    <div className="relative w-20 h-full flex items-center justify-center">
                      <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" />
                      <div className="absolute bottom-4 left-1/2 -translate-x-1 w-1.5 h-1.5 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" />
                      <div className="absolute bottom-8 left-1/2 translate-x-1 w-1.5 h-1.5 bg-orange-300 rounded-full shadow-lg shadow-orange-300/50" />
                      <div className="absolute bottom-12 left-1/2 -translate-x-2 w-1.5 h-1.5 bg-orange-300 rounded-full shadow-lg shadow-orange-300/50" />
                    </div>
                    <div className="text-gray-300 text-xs ml-2">
                      <div>↓ Down</div>
                      <div>← Left</div>
                    </div>
                  </div>
                </div>

                {/* Pro Tip */}
                <div
                  className="relative bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/60 rounded-lg p-2"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <div className="absolute inset-0 bg-cyan-500/10 blur-lg rounded-lg" />
                  <div className="relative flex items-start gap-2">
                    <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center shadow-lg shadow-cyan-500/50 flex-shrink-0">
                      <span className="text-sm">💡</span>
                    </div>
                    <div>
                      <div className="text-cyan-300 text-xs font-bold mb-0.5">TIP</div>
                      <p className="text-gray-200 text-xs leading-tight">
                        Tap fire at long range for best accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-400/5 to-transparent animate-scan" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateZ(120px) translateY(0px);
          }
          50% {
            transform: translateZ(120px) translateY(-15px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
