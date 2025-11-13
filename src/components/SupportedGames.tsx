'use client';

export default function SupportedGames() {
  const games = [
    { name: 'Valorant', genre: 'FPS', icon: '🎯', color: 'from-red-500 to-pink-500' },
    { name: 'CS:GO 2', genre: 'FPS', icon: '🔫', color: 'from-orange-500 to-yellow-500' },
    { name: 'Dark and Darker', genre: 'Dungeon Crawler', icon: '💎', color: 'from-purple-500 to-violet-500' },
  ];

  return (
    <section id="games" className="relative min-h-screen flex items-center justify-center bg-slate-950 snap-start py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Works With Your Favorites
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-8">
            Starting with these titles, more coming soon
          </p>
        </div>

        {/* Games Grid */}
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {games.map((game, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    {game.icon}
                  </div>

                  {/* Game Name */}
                  <h3 className="text-white font-bold text-lg mb-1">{game.name}</h3>
                  <p className="text-gray-500 text-sm">{game.genre}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More Coming Soon Badge */}
          <div className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full">
            <p className="text-purple-300 font-medium">✨ More games coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
