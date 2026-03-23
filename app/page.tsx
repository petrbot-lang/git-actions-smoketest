"use client"

import React from 'react'

export default function HomePage() {
  const handleCTAClick = async (label: string) => {
    console.log(`${label} clicked`)
    window.dispatchEvent(new CustomEvent('ctaClick', { detail: { label } }))
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ label }),
      })
    } catch {
      // silently fail
    }
  }

  return (
    <main className="bg-black text-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full border-b border-gray-800">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <span className="text-[#E11D48]">Petr</span>Bot
        </h1>
        <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <button
          onClick={() => handleCTAClick('Header CTA')}
          className="bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-200 text-sm"
        >
          Get Started Free
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto">
        <p className="text-[#E11D48] font-semibold text-sm uppercase tracking-widest mb-4">
          AI-Powered Workflow Automation
        </p>
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Stop doing busywork.<br />
          <span className="text-[#E11D48]">Let PetrBot handle it.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
          PetrBot automates repetitive tasks, surfaces actionable insights, and
          connects your tools — so your team ships faster and focuses on work that matters.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleCTAClick('Hero CTA')}
            className="bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors duration-200 w-full sm:w-auto"
          >
            Start Your Free Trial
          </button>
          <p className="text-gray-500 text-sm">No credit card required · 14-day free trial</p>
        </div>
        <div className="mt-14 w-full max-w-2xl mx-auto h-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl border border-gray-800 shadow-2xl flex items-center justify-center text-gray-600">
          [Product Screenshot Placeholder]
        </div>
      </section>

      {/* Social Proof / Trust Logos */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-center">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
          Trusted by 2,000+ teams at leading companies
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {['Stripe', 'Shopify', 'Vercel', 'Linear', 'Notion'].map((name) => (
            <div
              key={name}
              className="text-gray-500 font-bold text-lg tracking-wide opacity-60 hover:opacity-100 transition-opacity"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why teams choose PetrBot</h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          Everything you need to eliminate busywork and move faster.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-[#E11D48]/40 transition-colors duration-300">
            <div className="text-[#E11D48] text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Automate in Minutes</h3>
            <p className="text-gray-400 leading-relaxed">
              Set up powerful automations without writing code. Connect your apps, define triggers, and let PetrBot do the rest.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-[#E11D48]/40 transition-colors duration-300">
            <div className="text-[#E11D48] text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Actionable Insights</h3>
            <p className="text-gray-400 leading-relaxed">
              AI-driven analytics surface what matters. Spot trends, catch issues early, and make data-backed decisions with confidence.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-[#E11D48]/40 transition-colors duration-300">
            <div className="text-[#E11D48] text-3xl mb-4">🔗</div>
            <h3 className="text-xl font-bold mb-3">Connects Everything</h3>
            <p className="text-gray-400 leading-relaxed">
              200+ integrations out of the box. Slack, GitHub, Jira, Notion, Google Workspace — PetrBot fits into your existing stack.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Up and running in 3 steps</h2>
        <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
          No complex setup. No lengthy onboarding. Just results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 rounded-full bg-[#E11D48] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Connect your tools</h3>
            <p className="text-gray-400 text-sm">Link the apps your team already uses with one-click integrations.</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-[#E11D48] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Define your workflows</h3>
            <p className="text-gray-400 text-sm">Use our visual builder to create automations — or let AI suggest them for you.</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-[#E11D48] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Watch productivity soar</h3>
            <p className="text-gray-400 text-sm">Sit back while PetrBot handles the busywork. Focus on what actually moves the needle.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Built for every team</h2>
        <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
          From startups to enterprise, PetrBot adapts to how you work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h3 className="text-[#E11D48] font-bold text-lg mb-2">Engineering</h3>
            <p className="text-gray-400">Automate CI/CD alerts, triage bugs, and keep sprints on track without context-switching.</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h3 className="text-[#E11D48] font-bold text-lg mb-2">Marketing</h3>
            <p className="text-gray-400">Plan campaigns, sync leads to your CRM, and measure ROI — all in one flow.</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h3 className="text-[#E11D48] font-bold text-lg mb-2">Operations</h3>
            <p className="text-gray-400">Streamline approvals, onboarding checklists, and cross-team handoffs effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">What our customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed mb-4">
              &ldquo;PetrBot cut our manual reporting time by 80%. We finally have time to focus on strategy instead of spreadsheets.&rdquo;
            </p>
            <footer className="font-semibold text-sm">
              <span className="text-white">Sarah Chen</span>
              <span className="text-gray-500"> · VP of Ops, ScaleUp Inc.</span>
            </footer>
          </blockquote>
          <blockquote className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed mb-4">
              &ldquo;We integrated PetrBot in under an hour. The AI suggestions alone saved us weeks of workflow design.&rdquo;
            </p>
            <footer className="font-semibold text-sm">
              <span className="text-white">Marcus Rivera</span>
              <span className="text-gray-500"> · CTO, DevFlow Labs</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Start free. Upgrade when you&apos;re ready. No surprise fees, ever.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-left">
            <h3 className="font-bold text-lg mb-1">Free</h3>
            <p className="text-3xl font-bold mb-4">$0<span className="text-sm text-gray-500 font-normal">/mo</span></p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>Up to 3 workflows</li>
              <li>100 automations/month</li>
              <li>Community support</li>
            </ul>
            <button
              onClick={() => handleCTAClick('Pricing Free CTA')}
              className="w-full border border-gray-700 hover:border-[#E11D48] text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Get Started
            </button>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border-2 border-[#E11D48] text-left relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E11D48] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Popular
            </span>
            <h3 className="font-bold text-lg mb-1">Pro</h3>
            <p className="text-3xl font-bold mb-4">$29<span className="text-sm text-gray-500 font-normal">/mo</span></p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>Unlimited workflows</li>
              <li>10,000 automations/month</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
            </ul>
            <button
              onClick={() => handleCTAClick('Pricing Pro CTA')}
              className="w-full bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Start Free Trial
            </button>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-left">
            <h3 className="font-bold text-lg mb-1">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">Custom</p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>Unlimited everything</li>
              <li>SSO &amp; SAML</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
            </ul>
            <button
              onClick={() => handleCTAClick('Pricing Enterprise CTA')}
              className="w-full border border-gray-700 hover:border-[#E11D48] text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently asked questions</h2>
        <dl className="space-y-6">
          <div className="border-b border-gray-800 pb-6">
            <dt className="font-semibold text-lg mb-2">How secure is my data?</dt>
            <dd className="text-gray-400">PetrBot uses AES-256 encryption at rest, TLS 1.3 in transit, and is SOC 2 Type II compliant. Your data never leaves your control.</dd>
          </div>
          <div className="border-b border-gray-800 pb-6">
            <dt className="font-semibold text-lg mb-2">Can I try PetrBot before committing?</dt>
            <dd className="text-gray-400">Absolutely. The free tier has no time limit, and the Pro plan includes a 14-day trial — no credit card required.</dd>
          </div>
          <div className="border-b border-gray-800 pb-6">
            <dt className="font-semibold text-lg mb-2">What integrations do you support?</dt>
            <dd className="text-gray-400">Over 200 integrations including Slack, GitHub, Jira, Notion, Google Workspace, Salesforce, and more. New connectors ship every month.</dd>
          </div>
          <div className="border-b border-gray-800 pb-6">
            <dt className="font-semibold text-lg mb-2">Do you offer discounts for annual billing?</dt>
            <dd className="text-gray-400">Yes — save 20% when you pay annually on any paid plan.</dd>
          </div>
        </dl>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to reclaim your team&apos;s time?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Join 2,000+ teams already shipping faster with PetrBot. Set up in minutes, not days.
        </p>
        <button
          onClick={() => handleCTAClick('Final CTA')}
          className="bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-200"
        >
          Start Your Free Trial
        </button>
        <p className="mt-4 text-gray-600 text-sm">No credit card required · Cancel anytime</p>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-800 w-full">
        <div className="font-semibold text-gray-400">© 2026 PetrBot</div>
        <div className="flex items-center gap-6">
          <a href="mailto:contact@petrbot.com" className="hover:text-white transition-colors">contact@petrbot.com</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </main>
  )
}
