'use client';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-gray-900 pt-16 pb-8 snap-start min-h-screen flex items-center">
      <div className="container mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="text-white font-bold text-xl">GG</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                GGOverlay
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate gaming companion that brings wiki data directly into your games.
              Stop alt-tabbing, start winning.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all">
                <span className="text-xl">D</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all">
                <span className="text-xl">G</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all">
                <span className="text-xl">Y</span>
              </a>
            </div> */}
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
              <li><a href="#games" className="text-gray-400 hover:text-white transition-colors">Supported Games</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="https://www.intervolz.com/" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li> */}
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
