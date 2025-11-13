import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'GGOverlay - Stop Alt-Tabbing, Start Winning',
  description: 'Real-time game overlays that bring wiki data, item stats, and guides directly into your game. No more tab switching.',
  keywords: ['gaming', 'overlay', 'game companion', 'wiki', 'gaming tools', 'game assistant', 'ggoverlay'],
  authors: [{ name: 'GGOverlay' }],
  openGraph: {
    title: 'GGOverlay - Next-Gen Gaming Companion',
    description: 'Real-time game overlays for 15+ popular games. Stop alt-tabbing, start winning.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
