'use client';

import { useState } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  index: number;
}

function FeatureCard({ icon, title, description, color, index }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
      />

      {/* Card */}
      <div
        className={`relative bg-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-500 ${
          isHovered ? 'transform -translate-y-2 border-opacity-50' : ''
        }`}
        style={{
          borderColor: isHovered ? color.split(' ')[1].replace('from-', '') : undefined
        }}
      >
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-3xl mb-6 shadow-lg transition-transform duration-500 ${
            isHovered ? 'scale-110 rotate-3' : ''
          }`}
        >
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        {/* Learn More Link */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium">
          <span
            className={`bg-gradient-to-r ${color} bg-clip-text text-transparent transition-all duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          >
            Learn more
          </span>
          <span
            className={`text-purple-400 transition-all duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Real-Time Data',
      description: 'Get instant access to item stats, enemy weaknesses, and quest guides without leaving your game.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🎯',
      title: 'Smart Tracking',
      description: 'Automatically detects what you\'re looking at and shows relevant information contextually.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎨',
      title: 'Customizable UI',
      description: 'Personalize your overlay position, size, opacity, and style to match your preferences.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🌐',
      title: 'Community Wiki',
      description: 'Access crowdsourced guides, tips, and strategies from millions of players worldwide.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '⚙️',
      title: 'Low Performance Impact',
      description: 'Optimized to run smoothly without affecting your game\'s FPS or causing lag.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: '🔒',
      title: 'Game-Safe',
      description: 'Read-only overlay technology that doesn\'t modify game files or violate terms of service.',
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section id="features" className="relative py-32 bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Features
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to enhance your gaming experience without getting in the way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
