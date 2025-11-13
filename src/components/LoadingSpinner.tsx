'use client';

import { useLoading } from '@/contexts/LoadingContext';

export default function LoadingSpinner() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex flex-col items-center gap-8">
        {/* Main spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-purple-400 rounded-full animate-spin-slow" />
        </div>

        {/* Loading text */}
        <div className="text-white text-xl font-light tracking-wider animate-pulse">
          Loading Experience...
        </div>

        {/* Bounce dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
