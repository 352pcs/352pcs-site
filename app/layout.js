import './globals.css'

// 1. Move viewport here
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

// 2. Remove viewport from here
export const metadata = {
  title: '352pcs | High-Performance PC Builds & Repairs Luxembourg',
  description: 'Expert computer services in Luxembourg by a GIN graduate. Custom gaming builds, precision laptop repairs, and IT consulting. Based in Niederkorn.',
  keywords: 'PC Repair Luxembourg, Reparatur Computer Lëtzebuerg, Custom Gaming PC, 352pcs, PC Bau Lëtzebuerg, Belval IT Support',
  authors: [{ name: '352pcs' }],
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}