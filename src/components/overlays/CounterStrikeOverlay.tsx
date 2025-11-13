'use client';

export default function CounterStrikeOverlay() {
  return (
    <div className="w-[420px] bg-slate-950/95 backdrop-blur-xl border border-orange-500/30 rounded-2xl shadow-2xl shadow-orange-500/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-b border-orange-500/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">AK</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">AK-47</h3>
              <p className="text-orange-400 text-xs font-medium">Rifle • $2,700</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white text-sm font-bold">T Side</div>
            <div className="text-gray-400 text-xs">Full Buy</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
            <div className="text-orange-400 text-xs font-medium mb-1">Damage</div>
            <div className="text-white text-xl font-bold">36</div>
            <div className="text-gray-500 text-xs">Base</div>
          </div>
          <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
            <div className="text-red-400 text-xs font-medium mb-1">Fire Rate</div>
            <div className="text-white text-xl font-bold">600</div>
            <div className="text-gray-500 text-xs">RPM</div>
          </div>
          <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
            <div className="text-yellow-400 text-xs font-medium mb-1">Armor Pen</div>
            <div className="text-white text-xl font-bold">77%</div>
            <div className="text-gray-500 text-xs">Heavy</div>
          </div>
        </div>

        {/* Damage Falloff */}
        <div>
          <p className="text-gray-400 text-xs mb-2 font-medium">Damage by Distance:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-slate-900/50 rounded-lg p-2">
              <span className="text-white text-sm">0-22m</span>
              <span className="text-green-400 text-sm font-bold">36 HP</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900/50 rounded-lg p-2">
              <span className="text-white text-sm">22m+</span>
              <span className="text-orange-400 text-sm font-bold">26-31 HP</span>
            </div>
          </div>
        </div>

        {/* Recoil Pattern */}
        <div>
          <p className="text-gray-400 text-xs mb-2 font-medium">Spray Control:</p>
          <div className="bg-slate-900/50 rounded-lg p-4 flex items-center justify-center relative h-32">
            {/* Simplified spray pattern visualization */}
            <div className="relative w-24 h-full">
              <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-orange-500 rounded-full" />
              <div className="absolute bottom-8 left-1/2 w-1 h-6 bg-orange-400 rounded-full transform -translate-x-1" />
              <div className="absolute bottom-14 left-1/2 w-1 h-6 bg-orange-400 rounded-full transform translate-x-1" />
              <div className="absolute bottom-20 left-1/2 w-1 h-8 bg-orange-300 rounded-full transform -translate-x-2" />
              <div className="absolute bottom-28 left-1/2 w-1 h-6 bg-orange-300 rounded-full transform translate-x-3" />
            </div>
            <div className="absolute top-2 right-2 text-xs text-gray-500">
              Pull down + left
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
          <p className="text-blue-400 text-xs font-medium mb-2">💡 Pro Tip</p>
          <p className="text-gray-300 text-xs leading-relaxed">
            First shot accuracy is excellent. Tap fire at long range. Spray control: pull down then slightly left.
          </p>
        </div>

        {/* Economy Info */}
        <div className="pt-3 border-t border-gray-800">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Kill Reward:</span>
            <span className="text-white font-bold">$300</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-gray-400">Magazine:</span>
            <span className="text-white">30 / 90</span>
          </div>
        </div>
      </div>
    </div>
  );
}
