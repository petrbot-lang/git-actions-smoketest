"use client"

import React from 'react'

export default function HomePage() {
  const handleCTAClick = async () => {
    console.log('Primary CTA clicked')
    window.dispatchEvent(new CustomEvent('ctaClick', { detail: { label: 'Primary CTA' } }))
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ label: 'Primary CTA' }),
      })
    } catch {
      // fail silently
    }
  }

  return (
    <main className="bg-[#0B0B0D] min-h-screen text-white flex flex-col">
      <header className="flex justify-between items-center p-4 border-b border-[#E11D48]">
        <div className="text-[#E11D48] font-bold text-xl">Logo</div>
        <button
          onClick={handleCTAClick}
          className="bg-[#E11D48] hover:bg-[#BE123C] text-white py-2 px-4 rounded"
        >
          Get Started
        </button>
      </header>

      <section className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-extrabold mb-2">Welcome to Super Simple</h1>
        <p className="text-red-400 mb-6">A minimal Next.js landing page</p>
        <button
          onClick={handleCTAClick}
          className="bg-[#E11D48] hover:bg-[#BE123C] text-white py-3 px-6 rounded text-lg font-semibold"
        >
          Try Now
        </button>
        <div className="mt-8 w-full max-w-md h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
          [Product Screenshot Placeholder]
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="text-[#E11D48] font-bold mb-2">Benefit One</h3>
          <p>Fast and lightweight</p>
        </div>
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="text-[#E11D48] font-bold mb-2">Benefit Two</h3>
          <p>Easy to use</p>
        </div>
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="text-[#E11D48] font-bold mb-2">Benefit Three</h3>
          <p>Responsive design</p>
        </div>
      </section>

      <section className="p-8 bg-gray-900 text-center">
        <p className="italic">"Super Simple saved our team hours every week!"</p>
        <p className="mt-4">- Satisfied Customer</p>
      </section>

      <section className="p-8 border-t border-[#E11D48] text-center">
        <p className="mb-4">Trusted by leading companies</p>
        <div className="flex justify-center space-x-6">
          <div className="bg-[#E11D48] w-16 h-8 flex items-center justify-center">Logo1</div>
          <div className="bg-[#E11D48] w-16 h-8 flex items-center justify-center">Logo2</div>
          <div className="bg-[#E11D48] w-16 h-8 flex items-center justify-center">Logo3</div>
        </div>
      </section>

      <section className="p-8 text-center">
        <button
          onClick={handleCTAClick}
          className="bg-[#E11D48] hover:bg-[#BE123C] text-white py-3 px-6 rounded text-lg font-semibold"
        >
          Final Call to Action
        </button>
      </section>

      <footer className="p-4 border-t border-[#E11D48] text-center text-sm">
        <p>© 2026 Super Simple</p>
        <p>contact@example.com</p>
        <p>
          <a href="#" className="underline mr-2">
            Privacy
          </a>
          <a href="#" className="underline">
            Terms
          </a>
        </p>
      </footer>
    </main>
  )
}
