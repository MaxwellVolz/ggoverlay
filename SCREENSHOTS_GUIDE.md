# Adding Game Screenshots

This guide will help you add real game screenshots to replace the mockup backgrounds.

## Quick Start

1. **Take screenshots** of your gameplay (1920x1080 recommended)
2. **Optimize images** to < 500KB each
3. **Copy to appropriate folder**:
   - Counter-Strike 2 → `public/screenshots/counterstrike/gameplay-1.jpg`
   - Dark and Darker → `public/screenshots/dark-and-darker/dungeon-1.jpg`
   - Dota 2 → `public/screenshots/dota2/match-1.jpg`
   - Rust → `public/screenshots/rust/survival-1.jpg`
   - Valorant → `public/screenshots/valorant/match-1.jpg`
   - Elden Ring → `public/screenshots/elden-ring/gameplay-1.jpg`

4. **Refresh the website** - screenshots will automatically replace mockups!

## Folder Structure

```
public/screenshots/
├── counterstrike/        # Counter-Strike 2
├── dark-and-darker/      # Dark and Darker
├── dota2/                # Dota 2
├── rust/                 # Rust
├── valorant/             # Valorant
├── elden-ring/           # Elden Ring
└── README.md             # Detailed guidelines
```

## How It Works

The game scene components automatically try to load screenshots:
- If screenshot exists → Uses real game image
- If screenshot missing → Falls back to gradient mockup

This means the site works perfectly **before** and **after** adding screenshots!

## Example: Adding Counter-Strike Screenshot

1. Launch CS2 and join a match
2. During gameplay, press `F12` (Steam screenshot)
3. Find screenshot in: `Steam/userdata/[id]/760/remote/730/screenshots/`
4. Rename to: `gameplay-1.jpg`
5. Copy to: `public/screenshots/counterstrike/gameplay-1.jpg`
6. Done! Refresh website to see it.

## Image Optimization Tips

### Online Tools
- [TinyPNG](https://tinypng.com/) - Free compression
- [Squoosh](https://squoosh.app/) - Advanced optimization
- [ImageOptim](https://imageoptim.com/) - Mac app

### Command Line (ImageMagick)
```bash
# Resize to 1920x1080
convert input.png -resize 1920x1080^ -gravity center -extent 1920x1080 output.jpg

# Compress to ~80% quality
convert input.jpg -quality 80 output.jpg
```

## What Makes a Good Screenshot?

### ✅ Good Examples
- Clear gameplay view
- HUD visible (health, ammo, etc.)
- Interesting scene (combat, exploration)
- Good lighting/visibility
- Center has space for overlay

### ❌ Avoid
- Menus or settings screens
- Loading screens
- Too dark or too bright
- UI-heavy (blocking view)
- Low resolution

## Current Status

Check `public/screenshots/README.md` for detailed guidelines and current screenshot status.

## Need Help?

- See full guidelines: `public/screenshots/README.md`
- Example paths are defined in: `src/components/game-scenes/*.tsx`
- Look for `screenshotPath` variable in each component

## Testing

After adding screenshots:
1. Run `npm run dev`
2. Navigate to showcase sections
3. Check if real screenshots loaded
4. Look for fallback mockup (means path is wrong)

## Common Issues

**Screenshot not showing?**
- Check file path matches exactly
- Verify file extension (`.jpg` not `.jpeg` or `.png`)
- Check file size (< 5MB for good performance)
- Clear browser cache

**Image looks stretched?**
- Use 16:9 aspect ratio (1920x1080)
- Component uses `object-cover` to fill space

**Performance issues?**
- Compress images more (< 200KB ideal)
- Convert to WebP format
- Use proper image optimization
