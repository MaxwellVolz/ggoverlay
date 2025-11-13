'use client';

export default function Dota2Overlay() {
  return (
    <div className="w-[420px] bg-slate-950/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-blue-500/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Invoker</h3>
              <p className="text-blue-400 text-xs font-medium">Intelligence • Mid Lane</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-emerald-400 text-sm font-bold">52.3%</div>
            <div className="text-gray-400 text-xs">Win Rate</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Hero Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
            <div className="text-blue-400 text-xs font-medium mb-1">Difficulty</div>
            <div className="text-white text-xl font-bold">⭐⭐⭐</div>
            <div className="text-gray-500 text-xs">Very Hard</div>
          </div>
          <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
            <div className="text-red-400 text-xs font-medium mb-1">Attack</div>
            <div className="text-white text-xl font-bold">35-41</div>
            <div className="text-gray-500 text-xs">Early</div>
          </div>
          <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
            <div className="text-cyan-400 text-xs font-medium mb-1">Move</div>
            <div className="text-white text-xl font-bold">280</div>
            <div className="text-gray-500 text-xs">Speed</div>
          </div>
        </div>

        {/* Key Abilities */}
        <div>
          <p className="text-gray-400 text-xs mb-3 font-medium">Key Spell Combos:</p>
          <div className="space-y-2">
            <div className="bg-slate-900/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm font-medium">Tornado + EMP + Meteor</span>
                <span className="text-orange-400 text-xs font-bold">HIGH DMG</span>
              </div>
              <p className="text-gray-400 text-xs">
                Standard team fight opener. Tornado lifts, EMP drains mana, Meteor finishes.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm font-medium">Cold Snap + Alacrity</span>
                <span className="text-blue-400 text-xs font-bold">LOCKDOWN</span>
              </div>
              <p className="text-gray-400 text-xs">
                Single target kill combo. Cold Snap stuns, Alacrity increases attack speed.
              </p>
            </div>
          </div>
        </div>

        {/* Item Build */}
        <div>
          <p className="text-gray-400 text-xs mb-3 font-medium">Core Items (Mid Game):</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center text-xs">
                🔮
              </div>
              <div>
                <div className="text-white text-xs font-bold">Aghanim&apos;s Scepter</div>
                <div className="text-gray-500 text-xs">4200g</div>
              </div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-xs">
                👢
              </div>
              <div>
                <div className="text-white text-xs font-bold">Blink Dagger</div>
                <div className="text-gray-500 text-xs">2250g</div>
              </div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs">
                ⚗️
              </div>
              <div>
                <div className="text-white text-xs font-bold">Black King Bar</div>
                <div className="text-gray-500 text-xs">4050g</div>
              </div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center text-xs">
                ⚡
              </div>
              <div>
                <div className="text-white text-xs font-bold">Refresher Orb</div>
                <div className="text-gray-500 text-xs">5000g</div>
              </div>
            </div>
          </div>
        </div>

        {/* Counters & Synergies */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-red-400 text-xs mb-2 font-medium">Weak Against:</p>
            <div className="space-y-1">
              <div className="text-white text-xs bg-red-500/10 rounded px-2 py-1">Nyx Assassin</div>
              <div className="text-white text-xs bg-red-500/10 rounded px-2 py-1">Anti-Mage</div>
            </div>
          </div>
          <div>
            <p className="text-green-400 text-xs mb-2 font-medium">Strong Against:</p>
            <div className="space-y-1">
              <div className="text-white text-xs bg-green-500/10 rounded px-2 py-1">Terrorblade</div>
              <div className="text-white text-xs bg-green-500/10 rounded px-2 py-1">Phantom Lancer</div>
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
          <p className="text-yellow-400 text-xs font-medium mb-1">💡 Pro Tip</p>
          <p className="text-gray-300 text-xs">
            Max Quas-Exort for solo kills. Get Wex at level 8 for Tornado. Practice spell combos in demo mode.
          </p>
        </div>

        {/* Footer Stats */}
        <div className="pt-3 border-t border-gray-800">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Pick Rate:</span>
            <span className="text-white">8.2%</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-gray-400">Best Role:</span>
            <span className="text-cyan-400 font-bold">Mid Lane</span>
          </div>
        </div>
      </div>
    </div>
  );
}
