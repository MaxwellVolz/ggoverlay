'use client';

interface DarkAndDarkerSceneProps {
  isVisible: boolean;
}

export default function DarkAndDarkerScene({ isVisible }: DarkAndDarkerSceneProps) {
  const basePath = '';
  const screenshotPath = `${basePath}/screenshots/dark-and-darker/dnd.png`;
  const overlayImagePath = `${basePath}/screenshots/dark-and-darker/dnd-overlay.png`;

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 rounded-2xl overflow-visible border-4 border-gray-800 shadow-2xl">
      {/* Game Background - Real Screenshot or Fallback */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {/* Fallback - Dungeon Environment (shown if no screenshot) */}
        <div className="absolute inset-0 dnd-fallback-bg z-0">
          {/* Dark dungeon atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />

          {/* Torch flickering effect */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-32 right-16 w-24 h-24 bg-orange-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Stone walls */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-stone-900 to-stone-800/30">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-px bg-purple-500" />
              <div className="absolute top-1/3 left-0 w-full h-px bg-purple-500/50" />
            </div>
          </div>

          {/* Treasure chest silhouette */}
          <div className="absolute bottom-24 left-1/4">
            <div className="w-20 h-16 bg-yellow-900/40 border-2 border-yellow-700/50 rounded relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-yellow-800/60 rounded-t" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-600/80 rounded" />
            </div>
          </div>
        </div>

        {/* Try to load real screenshot */}
        <img
          src={screenshotPath}
          alt="Dark and Darker gameplay"
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={(e) => {
            // Hide image if it doesn't exist
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Floating Overlay Image - Vertically Centered Left */}
      <div className={`absolute top-1/2 -translate-y-1/2 left-1 md:-left-12 pointer-events-none z-20 scale-[0.35] md:scale-100 origin-left transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <div
          className="relative"
          style={{
            transform: 'perspective(1000px) rotateY(15deg) rotateX(-2deg)',
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
            <div className="relative bg-slate-950/30 backdrop-blur-2xl border-2 border-purple-400/70 rounded-2xl shadow-2xl w-[320px] overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 20px 60px rgba(0, 0, 0, 0.6)'
            }}>

              {/* Header */}
              <div className="relative border-b-2 border-purple-400/40 bg-gradient-to-r from-purple-600/20 to-violet-600/20 px-3 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <span className="text-base font-bold">💎</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">RUINS</div>
                      <div className="text-purple-400 text-xs">Map Callouts</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/80" />
                  </div>
                </div>
              </div>

              {/* Content - Overlay Image */}
              <div className="p-3">
                <div className="relative">
                  <img
                    src={overlayImagePath}
                    alt="Dark and Darker Overlay"
                    className="w-full h-auto rounded-lg shadow-xl"
                    style={{
                      filter: 'drop-shadow(0 10px 20px rgba(168, 85, 247, 0.4))',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Holographic shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-lg" />

                  {/* Edge glow */}
                  <div className="absolute inset-0 rounded-lg border border-purple-400/50 shadow-inner" />
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent animate-scan" />
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
          animation: scan 4s linear infinite;
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
