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
      // silently fail
    }
  }

  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-extrabold tracking-tight">Super Simple</h1>
        <button
          onClick={handleCTAClick}
          className="bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center p-12 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold leading-tight">Simplify your workflow with Super Simple</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto text-gray-300">
          Save time, reduce complexity, and focus on what truly matters with our streamlined productivity tool.
        </p>
        <button
          onClick={handleCTAClick}
          className="mt-8 bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white font-semibold py-3 px-10 rounded-lg text-xl transition-colors duration-200"
        >
          Start Your Free Trial
        </button>

        <div className="mt-12 w-full max-w-md h-56 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg flex items-center justify-center text-gray-500">
          [Product Screenshot Placeholder]
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="max-w-5xl mx-auto p-8 text-center">
        <p className="text-gray-400 mb-4">Trusted by teams at global companies like</p>
        <div className="flex justify-center space-x-8">
          <div className="bg-[#E11D48] w-20 h-10 flex items-center justify-center rounded font-bold">Logo1</div>
          <div className="bg-[#E11D48] w-20 h-10 flex items-center justify-center rounded font-bold">Logo2</div>
          <div className="bg-[#E11D48] w-20 h-10 flex items-center justify-center rounded font-bold">Logo3</div>
          <div className="bg-[#E11D48] w-20 h-10 flex items-center justify-center rounded font-bold">Logo4</div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-[#E11D48] font-bold mb-3 text-xl">Boost Productivity</h3>
          <p className="text-gray-300">Streamline your tasks and workflows to get more done in less time.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-[#E11D48] font-bold mb-3 text-xl">Seamless Collaboration</h3>
          <p className="text-gray-300">Work together effortlessly with real-time updates and shared workspaces.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-[#E11D48] font-bold mb-3 text-xl">Anywhere Access</h3>
          <p className="text-gray-300">Access your projects and data securely from any device, anytime.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-300 max-w-xl mx-auto">
          <li>Sign up for an account and set up your profile.</li>
          <li>Create and organize your projects with intuitive tools.</li>
          <li>Collaborate with your team and track progress in real-time.</li>
        </ol>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-[#E11D48] font-semibold mb-2">Marketing Teams</h3>
            <p className="text-gray-300">Plan campaigns, track leads, and measure ROI efficiently.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-[#E11D48] font-semibold mb-2">Product Managers</h3>
            <p className="text-gray-300">Manage roadmaps, prioritize features, and communicate with stakeholders.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-[#E11D48] font-semibold mb-2">Remote Teams</h3>
            <p className="text-gray-300">Stay connected and productive across time zones and locations.</p>
          </div>
        </div>
      </section>

      {/* Optional Testimonials Section */}
      <section className="max-w-5xl mx-auto p-8 bg-gray-900 rounded-lg shadow-md mt-12 text-center">
        <p className="italic text-gray-400 text-lg">"Super Simple transformed the way our team works — a game changer!"</p>
        <p className="mt-4 font-semibold text-gray-300">- Happy Customer</p>
      </section>

      {/* Pricing / CTA Section */}
      <section className="max-w-5xl mx-auto p-8 text-center mt-12">
        <h2 className="text-3xl font-bold mb-6">Simple Pricing, No Surprises</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">Choose the plan that fits your team and scale as you grow.</p>
        <button
          onClick={handleCTAClick}
          className="bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-colors duration-200"
        >
          Get Started Now
        </button>
      </section>

      {/* FAQ Section (optional) */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <dl className="max-w-3xl mx-auto text-gray-300 space-y-4">
          <div>
            <dt className="font-semibold">How secure is my data?</dt>
            <dd>We use industry-standard encryption and security protocols to protect your information.</dd>
          </div>
          <div>
            <dt className="font-semibold">Can I try before I buy?</dt>
            <dd>Yes! Start your free trial with full access to all features.</dd>
          </div>
          <div>
            <dt className="font-semibold">Is there a discount for yearly subscriptions?</dt>
            <dd>Yes, we offer 15% off for annual billing cycles.</dd>
          </div>
        </dl>
      </section>

      {/* Final CTA Section */}
      <section className="p-8 text-center mt-12">
        <button
          onClick={handleCTAClick}
          className="bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-colors duration-200"
        >
          Start Your Free Trial Today
        </button>
      </section>

      {/* Footer */}
      <footer className="p-4 border-t border-[#E11D48] text-center text-sm text-gray-500 mt-auto">
        <p>© 2026 Super Simple</p>
        <p>contact@example.com</p>
        <p>
          <a href="#" className="underline mr-2 hover:text-white">
            Privacy
          </a>
          <a href="#" className="underline hover:text-white">
            Terms
          </a>
        </p>
      </footer>
    </main>
  )
}
