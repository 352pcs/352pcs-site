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
  keywords: ["PC Repair Luxembourg", "Custom Gaming PC", "352pcs", "Informatics Luxembourg", "Niederkorn PC Repair"],
  authors: [{ name: '352pcs' }],
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}