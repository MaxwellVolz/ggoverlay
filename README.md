# OverCr - Next-Gen Gaming Companion

A professional, hyper-modern landing page for OverCr - a gaming overlay startup that brings wiki data directly into games.

## Tech Stack

- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Three.js 0.180.0** - 3D engine
- **React Three Fiber 9.3.0** - React renderer for Three.js
- **React Three Drei 10.7.6** - Useful helpers for R3F
- **React Three Postprocessing 3.0.4** - Post-processing effects
- **Tailwind CSS v4** - Utility-first CSS framework

## Features

### Landing Page Sections
- 🎮 **Hero Section** - Immersive 3D animated background with floating elements
- 🎯 **In-Game Demo** - Live gameplay mockup showing:
  - Realistic FPS game environment (CS-style)
  - Full game HUD (health, armor, crosshair, weapon, timer)
  - Context-aware overlay with tactical tips
  - Enemy position alerts and strategic advice
  - 3D tilt effect on entire game window
- 📱 **3D Interface Showcase** - Full game scenes with holographic overlays:
  - **Counter-Strike 2** - Weapon analysis with 3D stats cards, spray pattern viz, orange holographic theme
  - **Dark and Darker** - Dungeon loot info with purple holographic UI, drop rates, treasure locations
- ⚡ **Features Grid** - 6 feature cards with Apple-style design
- 🕹️ **Supported Games** - Grid of 12 popular Steam games
- 🔗 **Navbar & Footer** - Smooth scrolling navigation

### Technical Features
- 🎨 **Video Game Aesthetic** - Cyberpunk-inspired gradients, neon accents, glowing effects
- 🌟 **3D Graphics** - Three.js with React Three Fiber, particle systems, post-processing
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS v4
- ⚡ **Performance Optimized** - Static export, lazy loading, optimized rendering
- 🎬 **Smooth Animations** - CSS animations, transforms, hover states
- 🔮 **Glass Morphism UI** - Backdrop blur, translucent panels
- 💎 **Custom Scrollbar** - Themed with gradient colors

## Getting Started

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or use webpack instead of turbopack
npm run dev:webpack
```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Main landing page with snap scroll
│   │   └── globals.css          # Global styles + snap scroll
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed navigation with scroll effects
│   │   ├── Hero.tsx             # Hero section with 3D canvas
│   │   ├── HeroScene.tsx        # 3D scene (particles, floating objects)
│   │   ├── InGameDemo.tsx       # Live FPS mockup with floating overlay
│   │   ├── OverlayShowcase.tsx  # Showcase with full game scenes
│   │   ├── FeaturesApple.tsx    # Apple-style feature grid
│   │   ├── SupportedGames.tsx   # Games grid (12 games)
│   │   ├── Footer.tsx           # Footer with links
│   │   │
│   │   ├── game-scenes/         # 🆕 Full game environments with 3D overlays
│   │   │   ├── CounterStrikeScene.tsx     # CS2 game + holographic weapon UI
│   │   │   └── DarkAndDarkerScene.tsx     # Dungeon + holographic loot UI
│   │   │
│   │   └── overlays/            # Standalone overlay components (legacy)
│   │       ├── CounterStrikeOverlay.tsx
│   │       ├── DarkAndDarkerOverlay.tsx
│   │       ├── Dota2Overlay.tsx
│   │       └── RustOverlay.tsx
│   │
│   ├── contexts/
│   │   └── LoadingContext.tsx   # Loading state management
│   │
│   └── types/
│       └── index.ts             # TypeScript interfaces
│
├── public/                      # Static assets
│   ├── screenshots/            # 🆕 Game screenshots for showcases
│   │   ├── counterstrike/     # CS2 gameplay images
│   │   ├── dark-and-darker/   # DnD dungeon screenshots
│   │   ├── dota2/             # Dota 2 match images
│   │   ├── rust/              # Rust survival screenshots
│   │   └── README.md          # Screenshot guidelines
│   ├── 3d/                     # 3D models directory
│   └── draco/                  # Draco decoder
│
└── Configuration files
```

## Building for Production

```bash
npm run build
```

This will create a static export in the `out/` directory that can be deployed to any static hosting service.

## Working with 3D Models

1. Place your `.glb` files in `public/3d/`
2. Convert GLB to React component:

```bash
npm run convert-glb
```

3. Import and use the generated component in your scene

## Adding Game Screenshots

The showcase sections support **real game screenshots** as backgrounds:

1. Take 1920x1080 screenshots during gameplay
2. Optimize to < 500KB (use TinyPNG or ImageOptim)
3. Place in `public/screenshots/[game-name]/`
4. Follow naming convention (see `SCREENSHOTS_GUIDE.md`)

**Components automatically fallback** to gradient mockups if screenshots don't exist yet.

See detailed guide: [`SCREENSHOTS_GUIDE.md`](./SCREENSHOTS_GUIDE.md)

## Customization

### Brand Colors
The site uses a purple-to-cyan gradient theme. To change:
- Edit gradient classes in components (e.g., `from-purple-500 to-cyan-500`)
- Update `globals.css` scrollbar colors
- Modify glow effects and accent colors

### Content Updates
- **Hero tagline**: `src/components/Hero.tsx`
- **Features**: `src/components/Features.tsx` (features array)
- **Supported Games**: `src/components/SupportedGames.tsx` (games array)
- **Overlay types**: `src/components/GameOverlay.tsx` (3 variants)

### 3D Scene Customization
Edit `src/components/HeroScene.tsx`:
- Adjust particle count and colors
- Add/remove floating objects
- Change lighting setup
- Modify post-processing effects

### Adding Sections
Create new components in `src/components/` and import them in `src/app/page.tsx`.

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run dev:webpack` - Start development server with Webpack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run convert-glb` - Convert GLB model to React component

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Three.js](https://threejs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## License

MIT
