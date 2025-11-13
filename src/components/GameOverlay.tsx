'use client';

import { useState } from 'react';

interface OverlayProps {
  variant?: 'item' | 'enemy' | 'quest';
  className?: string;
}

export default function GameOverlay({ variant = 'item', className = '' }: OverlayProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (variant === 'item') {
    return (
      <div className={`w-96 bg-slate-950/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 ${className}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-b border-purple-500/30 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚔️</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Dragon Slayer Sword</h3>
                <p className="text-purple-400 text-xs font-medium">Legendary Weapon</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isExpanded ? '−' : '+'}
            </button>
          </div>
        </div>

        {/* Content */}
        {isExpanded && (
          <div className="p-6 space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                <div className="text-purple-400 text-xs font-medium mb-1">Damage</div>
                <div className="text-white text-2xl font-bold">245</div>
              </div>
              <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                <div className="text-cyan-400 text-xs font-medium mb-1">Crit Chance</div>
                <div className="text-white text-2xl font-bold">35%</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-gray-400 text-sm leading-relaxed">
                A legendary blade forged in dragon fire. Each strike has a chance to ignite enemies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded border border-orange-500/30">
                  +15% Fire Damage
                </span>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/30">
                  Ignite on Crit
                </span>
              </div>
            </div>

            {/* Drop Info */}
            <div className="pt-3 border-t border-gray-800">
              <p className="text-gray-500 text-xs mb-2">Best Drop Location:</p>
              <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
                <span className="text-white text-sm">Ancient Dragon&apos;s Lair</span>
                <span className="text-cyan-400 text-xs font-medium">Level 45</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between text-xs text-gray-500 pt-2">
              <span>Required Level: 40</span>
              <span>Value: 12,500 gold</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'enemy') {
    return (
      <div className={`w-80 bg-slate-950/95 backdrop-blur-xl border border-red-500/30 rounded-2xl shadow-2xl shadow-red-500/20 ${className}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-b border-red-500/30 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-xl">🐉</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Elder Dragon</h3>
              <p className="text-red-400 text-xs font-medium">Boss • Level 50</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Health Bar */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>HP</span>
              <span>125,000 / 125,000</span>
            </div>
            <div className="h-3 bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-full" />
            </div>
          </div>

          {/* Weaknesses */}
          <div>
            <p className="text-gray-400 text-xs mb-2">Weaknesses:</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                ❄️ Ice
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                ⚡ Lightning
              </span>
            </div>
          </div>

          {/* Abilities */}
          <div>
            <p className="text-gray-400 text-xs mb-2">Key Abilities:</p>
            <div className="space-y-2">
              <div className="text-sm text-gray-300">• Fire Breath - AoE damage</div>
              <div className="text-sm text-gray-300">• Tail Swipe - Knockback</div>
              <div className="text-sm text-gray-300">• Aerial Assault - Phase 2</div>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
            <p className="text-yellow-400 text-xs font-medium mb-1">💡 Pro Tip</p>
            <p className="text-gray-300 text-xs">Target the wings to ground it during aerial phase</p>
          </div>
        </div>
      </div>
    );
  }

  // Quest variant
  return (
    <div className={`w-96 bg-slate-950/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-500/20 ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border-b border-emerald-500/30 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-xl">📜</span>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">The Dragon&apos;s Curse</h3>
            <p className="text-emerald-400 text-xs font-medium">Main Quest • Chapter 7</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Objectives */}
        <div>
          <p className="text-gray-400 text-xs mb-3">Objectives:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-white text-xs">
                ✓
              </div>
              <span className="text-gray-500 line-through text-sm">Speak with the Oracle</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-white text-xs">
                ✓
              </div>
              <span className="text-gray-500 line-through text-sm">Collect 3 Dragon Scales</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border-2 border-emerald-500 flex items-center justify-center text-emerald-400 text-xs">
                3
              </div>
              <span className="text-white text-sm font-medium">Defeat the Elder Dragon</span>
            </div>
          </div>
        </div>

        {/* Rewards */}
        <div className="pt-3 border-t border-gray-800">
          <p className="text-gray-400 text-xs mb-3">Rewards:</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-900/50 rounded-lg p-2 text-center">
              <div className="text-yellow-400 font-bold text-lg">25,000</div>
              <div className="text-gray-500 text-xs">XP</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-2 text-center">
              <div className="text-yellow-400 font-bold text-lg">5,000</div>
              <div className="text-gray-500 text-xs">Gold</div>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
          <p className="text-cyan-400 text-xs font-medium mb-1">📍 Next Step</p>
          <p className="text-gray-300 text-xs">Head to Mountain Peak to challenge the Elder Dragon</p>
        </div>
      </div>
    </div>
  );
}
