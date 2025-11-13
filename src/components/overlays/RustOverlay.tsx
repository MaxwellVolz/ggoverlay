'use client';

export default function RustOverlay() {
  return (
    <div className="w-[420px] bg-slate-950/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-500/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 border-b border-emerald-500/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-xl">🔧</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Metal Chest Plate</h3>
              <p className="text-emerald-400 text-xs font-medium">Armor • Craftable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Protection Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
            <div className="text-emerald-400 text-xs font-medium mb-1">Protection</div>
            <div className="text-white text-xl font-bold">40</div>
            <div className="text-gray-500 text-xs">Torso</div>
          </div>
          <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
            <div className="text-orange-400 text-xs font-medium mb-1">Durability</div>
            <div className="text-white text-xl font-bold">500</div>
            <div className="text-gray-500 text-xs">HP</div>
          </div>
          <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
            <div className="text-blue-400 text-xs font-medium mb-1">Cold</div>
            <div className="text-white text-xl font-bold">+3°</div>
            <div className="text-gray-500 text-xs">Resist</div>
          </div>
        </div>

        {/* Damage Reduction */}
        <div>
          <p className="text-gray-400 text-xs mb-3 font-medium">Damage Reduction:</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-2">
              <span className="text-white text-sm">Projectile</span>
              <span className="text-emerald-400 text-sm font-bold">35%</span>
            </div>
            <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-2">
              <span className="text-white text-sm">Melee</span>
              <span className="text-emerald-400 text-sm font-bold">30%</span>
            </div>
            <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-2">
              <span className="text-white text-sm">Explosion</span>
              <span className="text-yellow-400 text-sm font-bold">20%</span>
            </div>
          </div>
        </div>

        {/* Crafting Requirements */}
        <div>
          <p className="text-gray-400 text-xs mb-3 font-medium">Crafting Recipe:</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-sm">
                  ⚙️
                </div>
                <span className="text-white text-sm">Metal Fragments</span>
              </div>
              <span className="text-white font-bold">× 25</span>
            </div>
            <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-700 rounded flex items-center justify-center text-sm">
                  🧵
                </div>
                <span className="text-white text-sm">Sewing Kit</span>
              </div>
              <span className="text-white font-bold">× 2</span>
            </div>
          </div>
        </div>

        {/* Workbench Required */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-400 text-xs font-medium">🔨 Crafting Station</span>
            <span className="text-white text-xs font-bold">Workbench Level 2</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-xs">Craft Time:</span>
            <span className="text-white text-xs">60 seconds</span>
          </div>
        </div>

        {/* Where to Find */}
        <div>
          <p className="text-gray-400 text-xs mb-2 font-medium">Loot Locations:</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Military Crates</span>
              <span className="text-emerald-400 font-medium">8.5%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Elite Crates</span>
              <span className="text-emerald-400 font-medium">12%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Bradley APC</span>
              <span className="text-yellow-400 font-medium">25%</span>
            </div>
          </div>
        </div>

        {/* Research Cost */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
          <p className="text-purple-400 text-xs font-medium mb-1">🔬 Research Cost</p>
          <p className="text-gray-300 text-xs">
            125 Scrap at Research Table. Blueprint allows unlimited crafting.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-gray-800">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Recycles into:</span>
            <span className="text-white">13 Metal Frags, 1 Sewing Kit</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-gray-400">Max Stack:</span>
            <span className="text-white">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
