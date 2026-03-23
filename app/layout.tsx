import './globals.css'

export const metadata = {
  title: 'PetrBot — AI-Powered Workflow Automation',
  description: 'Stop doing busywork. PetrBot automates repetitive tasks, surfaces actionable insights, and connects your tools so your team ships faster.',
  openGraph: {
    title: 'PetrBot — AI-Powered Workflow Automation',
    description: 'Stop doing busywork. PetrBot automates repetitive tasks, surfaces actionable insights, and connects your tools so your team ships faster.',
    type: 'website',
    url: 'https://petrbot.com',
    images: '/product-screenshot.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B0D] text-white">        
        {children}
      </body>
    </html>
  )
}

