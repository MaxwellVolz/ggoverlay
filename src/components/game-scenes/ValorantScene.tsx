'use client';

interface ValorantSceneProps {
  isVisible: boolean;
}

export default function ValorantScene({ isVisible }: ValorantSceneProps) {
  const basePath = '';
  const screenshotPath = `${basePath}/screenshots/valorant/valorant.png`;

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 via-red-900/20 to-slate-900 rounded-2xl overflow-visible border-4 border-gray-800 shadow-2xl">
      {/* Game Background - Real Screenshot or Fallback */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {/* Fallback - Valorant Environment (shown if no screenshot) */}
        <div className="absolute inset-0 valorant-fallback-bg z-0">
          {/* Sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-slate-800" />

          {/* Ground/Walls */}
          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-slate-800 to-slate-700/50">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-0 w-full h-px bg-red-500" />
              <div className="absolute top-1/2 left-1/3 w-px h-full bg-red-500" />
              <div className="absolute top-1/2 left-2/3 w-px h-full bg-red-500" />
            </div>
          </div>

          {/* Environment accents */}
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-red-900/40 border border-red-700/30 shadow-lg" />
          <div className="absolute bottom-16 right-1/3 w-24 h-40 bg-slate-700/40 border border-slate-600/30" />
        </div>

        {/* Try to load real screenshot */}
        <img
          src={screenshotPath}
          alt="Valorant gameplay"
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={(e) => {
            // Hide image if it doesn't exist
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Floating Ability Info - Top Left */}
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
            <div className="relative bg-slate-950/30 backdrop-blur-2xl border-2 border-red-400/70 rounded-2xl shadow-2xl w-[280px] overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.3), 0 20px 60px rgba(0, 0, 0, 0.6)'
            }}>

              {/* Header */}
              <div className="relative border-b-2 border-red-400/40 bg-gradient-to-r from-red-600/20 to-pink-600/20 px-3 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/50">
                      <span className="text-base font-bold">J</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">JETT ABILITIES</div>
                      <div className="text-red-400 text-xs">Agent Info</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/80" />
                  </div>
                </div>
              </div>

              {/* Content - Abilities */}
              <div className="p-3 space-y-2">
                {/* Cloudburst */}
                <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-lg p-2 shadow-lg">
                  <div className="absolute inset-0 bg-cyan-500/10 blur-lg rounded-lg" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center text-xs font-bold">C</div>
                      <div className="text-cyan-300 text-xs font-bold">CLOUDBURST</div>
                    </div>
                    <p className="text-gray-200 text-xs leading-tight">Smoke grenade that obscures vision</p>
                  </div>
                </div>

                {/* Updraft */}
                <div className="relative bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/50 rounded-lg p-2 shadow-lg">
                  <div className="absolute inset-0 bg-blue-500/10 blur-lg rounded-lg" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-xs font-bold">Q</div>
                      <div className="text-blue-300 text-xs font-bold">UPDRAFT</div>
                    </div>
                    <p className="text-gray-200 text-xs leading-tight">Launch upwards after brief delay</p>
                  </div>
                </div>

                {/* Tailwind */}
                <div className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-400/50 rounded-lg p-2 shadow-lg">
                  <div className="absolute inset-0 bg-emerald-500/10 blur-lg rounded-lg" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-xs font-bold">E</div>
                      <div className="text-emerald-300 text-xs font-bold">TAILWIND</div>
                    </div>
                    <p className="text-gray-200 text-xs leading-tight">Dash in direction of movement</p>
                  </div>
                </div>

                {/* Blade Storm */}
                <div className="relative bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-400/50 rounded-lg p-2 shadow-lg">
                  <div className="absolute inset-0 bg-red-500/10 blur-lg rounded-lg" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-xs font-bold">X</div>
                      <div className="text-red-300 text-xs font-bold">BLADE STORM</div>
                    </div>
                    <p className="text-gray-200 text-xs leading-tight">Deadly throwing knives (ULT)</p>
                  </div>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-400/5 to-transparent animate-scan" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Holographic Overlay - Weapon Stats - Vandal */}
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
            <div className="relative bg-slate-950/30 backdrop-blur-2xl border-2 border-red-400/70 rounded-2xl shadow-2xl overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.3), 0 20px 60px rgba(0, 0, 0, 0.6)'
            }}>

              {/* Header */}
              <div className="relative border-b-2 border-red-400/40 bg-gradient-to-r from-red-600/20 to-pink-600/20 px-3 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/50">
                      <span className="text-base font-bold">V</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">VANDAL ANALYSIS</div>
                      <div className="text-red-400 text-xs">WEAPON DATA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/80" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 space-y-3">
                {/* Damage Stats - 3D Cards */}
                <div className="grid grid-cols-3 gap-2">
                  <div
                    className="relative bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-400/50 rounded-lg p-2 shadow-lg"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="absolute inset-0 bg-red-500/10 blur-lg rounded-lg" />
                    <div className="relative">
                      <div className="text-red-300 text-xs font-bold mb-0.5">HEAD</div>
                      <div className="text-white text-2xl font-bold">160</div>
                    </div>
                  </div>

                  <div
                    className="relative bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-400/50 rounded-lg p-2 shadow-lg"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="absolute inset-0 bg-pink-500/10 blur-lg rounded-lg" />
                    <div className="relative">
                      <div className="text-pink-300 text-xs font-bold mb-0.5">BODY</div>
                      <div className="text-white text-2xl font-bold">40</div>
                    </div>
                  </div>

                  <div
                    className="relative bg-gradient-to-br from-rose-500/20 to-red-500/20 border border-rose-400/50 rounded-lg p-2 shadow-lg"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="absolute inset-0 bg-rose-500/10 blur-lg rounded-lg" />
                    <div className="relative">
                      <div className="text-rose-300 text-xs font-bold mb-0.5">FIRE</div>
                      <div className="text-white text-2xl font-bold">9.75</div>
                    </div>
                  </div>
                </div>

                {/* Spray Pattern Visualization */}
                <div
                  className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-red-400/40 rounded-lg p-2"
                  style={{ transform: 'translateZ(15px)' }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    <span className="text-red-300 text-xs font-bold">RECOIL</span>
                  </div>
                  <div className="flex items-center justify-center h-16">
                    {/* Visual spray dots */}
                    <div className="relative w-20 h-full flex items-center justify-center">
                      <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full shadow-lg shadow-red-400/50" />
                      <div className="absolute bottom-4 left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full shadow-lg shadow-red-400/50" />
                      <div className="absolute bottom-8 left-1/2 -translate-x-1 w-1.5 h-1.5 bg-red-300 rounded-full shadow-lg shadow-red-300/50" />
                      <div className="absolute bottom-12 left-1/2 translate-x-1 w-1.5 h-1.5 bg-red-300 rounded-full shadow-lg shadow-red-300/50" />
                    </div>
                    <div className="text-gray-300 text-xs ml-2">
                      <div>↑ Up</div>
                      <div>→ Right</div>
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
                        One-tap headshot at any range. Control spray.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-400/5 to-transparent animate-scan" />
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
