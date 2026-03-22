import './globals.css'

export const metadata = {
  title: 'Simple Landing Page',
  description: 'A minimal Next.js landing page with a black background and red accent theme.',
  openGraph: {
    title: 'Simple Landing Page',
    description: 'A minimal Next.js landing page with a black background and red accent theme.',
    type: 'website',
    url: 'https://github.com/petrbot-lang/git-actions-smoketest',
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

// Added metadata export for SEO and Open Graph tags; applied exact background color per spec.