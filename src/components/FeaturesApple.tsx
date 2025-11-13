'use client';

export default function FeaturesApple() {
  return (
    <section id="features" className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 snap-start">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Designed for Gamers
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            Every feature built to keep you in the game
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Data</h3>
            <p className="text-gray-400 leading-relaxed">
              Instant access to item stats, enemy weaknesses, and quest guides without leaving your game.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Context-Aware</h3>
            <p className="text-gray-400 leading-relaxed">
              Automatically detects what you&apos;re looking at and shows relevant information contextually.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-6">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-4">Customizable</h3>
            <p className="text-gray-400 leading-relaxed">
              Personalize position, size, opacity, and style to perfectly match your setup.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Performance Optimized</h3>
            <p className="text-gray-400 leading-relaxed">
              Optimized to run smoothly without affecting your game&apos;s FPS or causing lag.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-6">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Game-Safe</h3>
            <p className="text-gray-400 leading-relaxed">
              Read-only overlay that doesn&apos;t modify game files or violate terms of service.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl mb-6">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Community-Driven</h3>
            <p className="text-gray-400 leading-relaxed">
              Access crowdsourced guides, tips, and strategies from millions of players worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
