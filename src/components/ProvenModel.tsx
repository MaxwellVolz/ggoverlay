'use client';

export default function ProvenModel() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-950/20 via-slate-950 to-slate-950 snap-start py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Proven Business Model
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Built on validated market demand with proven competitors
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Hero Statement */}
          <div className="relative mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-purple-500/50">
                  <span className="text-4xl md:text-5xl">💎</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The Market is Validated</h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                    Similar tools like <span className="text-purple-400 font-semibold">Overwolf (150M+ users, $75M raised)</span>, <span className="text-cyan-400 font-semibold">Mobalytics (7M+ users)</span>, and <span className="text-pink-400 font-semibold">Blitz (3M+ users)</span> validate the massive demand for in-game assistance software.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Our AR-style overlay approach provides <span className="text-white font-semibold">superior UX</span> by eliminating the need to look away from gameplay entirely. The freemium model ensures rapid user acquisition while premium features drive sustainable revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Advantage 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white">Better UX</h4>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Unlike traditional overlays that require switching windows, our AR-style panels float directly in the game view for instant access.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white">Lower Friction</h4>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                No alt-tabbing means faster decisions, fewer deaths, and better gameplay flow. Players stay in their flow state.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white">Freemium Growth</h4>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Free tier drives viral adoption. Premium features (custom themes, advanced stats, priority data) convert power users.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white">Multi-Game Network</h4>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Supporting multiple games creates network effects. Users who adopt for one game discover value in others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
