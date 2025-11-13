'use client';

export default function DarkAndDarkerOverlay() {
  return (
    <div className="w-[420px] bg-slate-950/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 border-b border-purple-500/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
              <span className="text-xl">💎</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Golden Key</h3>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded border border-yellow-500/30 font-bold">
                  LEGENDARY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Item Description */}
        <div className="space-y-2">
          <p className="text-gray-400 text-sm leading-relaxed">
            An ornate golden key that opens high-value treasure rooms. Extremely rare drop from elite enemies.
          </p>
        </div>

        {/* Value & Weight */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
            <div className="text-yellow-400 text-xs font-medium mb-1">Value</div>
            <div className="text-white text-2xl font-bold">250G</div>
          </div>
          <div className="bg-slate-500/10 rounded-lg p-3 border border-slate-500/20">
            <div className="text-slate-400 text-xs font-medium mb-1">Weight</div>
            <div className="text-white text-2xl font-bold">0.5</div>
          </div>
        </div>

        {/* Where to Use */}
        <div>
          <p className="text-gray-400 text-xs mb-3 font-medium">Opens Doors In:</p>
          <div className="space-y-2">
            <div className="bg-slate-900/50 rounded-lg p-3 flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-medium">Crypts - Vault Room</div>
                <div className="text-gray-500 text-xs">Level 3-5</div>
              </div>
              <span className="text-yellow-400 text-xs">⭐⭐⭐</span>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-3 flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-medium">Ruins - Treasure Chamber</div>
                <div className="text-gray-500 text-xs">Level 4-6</div>
              </div>
              <span className="text-yellow-400 text-xs">⭐⭐⭐</span>
            </div>
          </div>
        </div>

        {/* Drop Locations */}
        <div>
          <p className="text-gray-400 text-xs mb-2 font-medium">Best Drop Sources:</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Lich King</span>
              <span className="text-purple-400 font-medium">5.2%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Death Knight</span>
              <span className="text-purple-400 font-medium">2.8%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Golden Chests</span>
              <span className="text-purple-400 font-medium">1.5%</span>
            </div>
          </div>
        </div>

        {/* Selling Advice */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
          <p className="text-green-400 text-xs font-medium mb-1">💰 Trader Value</p>
          <p className="text-gray-300 text-xs">
            Sells for 250G to Fortune Teller. Consider using instead - treasure rooms contain 500-1000G worth of loot.
          </p>
        </div>

        {/* Stackable */}
        <div className="pt-3 border-t border-gray-800">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Stackable:</span>
            <span className="text-white">Yes (Max 3)</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-gray-400">Tradeable:</span>
            <span className="text-green-400 font-bold">Yes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
