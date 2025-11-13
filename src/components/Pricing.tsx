'use client';

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-purple-950/30 to-purple-950/20 snap-start border-t-2 border-purple-500/20">
      <div className="container mx-auto px-6 py-32">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-purple-500/40 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-purple-300 font-bold text-xs md:text-sm tracking-wider">LIMITED BETA ACCESS</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-8 leading-none px-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Early Access Pricing
            </span>
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto px-4">
            Join the revolution. Limited spots available.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto mb-24">
          <div className="relative group">
            {/* Enhanced Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 animate-pulse" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl opacity-20" />

            {/* Card */}
            <div className="relative bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-12 shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border-2 border-purple-400/50 mb-8 shadow-lg shadow-purple-500/20">
                <span className="text-purple-200 font-bold text-base">🚀 Early Access</span>
              </div>

              {/* Price */}
              <div className="mb-8 md:mb-10">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3 mb-2 md:mb-3">
                  <span className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Free</span>
                  <span className="text-xl md:text-3xl text-gray-300 font-light">during beta</span>
                </div>
                <p className="text-base md:text-xl text-gray-300">Then $9.99/month after launch</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 md:space-y-5 mb-8 md:mb-10">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/50">
                    <span className="text-sm md:text-base font-bold">✓</span>
                  </div>
                  <span className="text-gray-200 text-sm md:text-lg">Unlimited overlay access for all supported games</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/50">
                    <span className="text-sm md:text-base font-bold">✓</span>
                  </div>
                  <span className="text-gray-200 text-sm md:text-lg">Real-time wiki data and stats</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/50">
                    <span className="text-sm md:text-base font-bold">✓</span>
                  </div>
                  <span className="text-gray-200 text-sm md:text-lg">Customizable layouts and themes</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/50">
                    <span className="text-sm md:text-base font-bold">✓</span>
                  </div>
                  <span className="text-gray-200 text-sm md:text-lg">Priority support and feature requests</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/50">
                    <span className="text-sm md:text-base font-bold">✓</span>
                  </div>
                  <span className="text-gray-200 text-sm md:text-lg">Early access to new game integrations</span>
                </li>
              </ul>

              {/* CTA */}
              <button className="w-full px-10 py-5 rounded-full text-white font-bold text-xl border-2 border-purple-400/40 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm cursor-not-allowed opacity-80 hover:opacity-90 transition-opacity shadow-xl">
                🚧 Coming Soon
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
