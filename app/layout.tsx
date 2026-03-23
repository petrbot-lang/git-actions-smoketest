import './globals.css'

export const metadata = {
  title: 'PetrBot — AI-Powered Workflow Automation',
  description: 'Stop doing busywork. PetrBot automates repetitive tasks, surfaces actionable insights, and connects your tools so your team ships faster.',
  keywords: ['workflow automation', 'AI automation', 'team productivity', 'PetrBot', 'no-code automation'],
  openGraph: {
    title: 'PetrBot — AI-Powered Workflow Automation',
    description: 'Stop doing busywork. PetrBot automates repetitive tasks, surfaces actionable insights, and connects your tools so your team ships faster.',
    type: 'website',
    url: 'https://petrbot.com',
    images: '/product-screenshot.png',
    siteName: 'PetrBot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PetrBot — AI-Powered Workflow Automation',
    description: 'Stop doing busywork. PetrBot automates repetitive tasks, surfaces actionable insights, and connects your tools so your team ships faster.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0B0D',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B0B0D] text-white">
        {children}
      </body>
    </html>
  )
}
