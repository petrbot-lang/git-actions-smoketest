"use client"

import React, { useState, useCallback, useEffect } from 'react'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleCTAClick = useCallback(async (label: string) => {
    window.dispatchEvent(new CustomEvent('ctaClick', { detail: { label, timestamp: Date.now() } }))
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'cta_click', label, timestamp: Date.now() }),
      })
    } catch {
      // silently fail
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const toggleFaq = useCallback((idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx))
  }, [])

  const handleFaqKeyDown = useCallback((e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleFaq(idx)
    }
  }, [toggleFaq])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  const faqs = [
    {
      q: 'How secure is my data?',
      a: 'PetrBot uses AES-256 encryption at rest, TLS 1.3 in transit, and is SOC 2 Type II compliant. We undergo annual third-party security audits and your data never leaves your control.',
    },
    {
      q: 'Can I try PetrBot before committing?',
      a: 'Absolutely. Our free tier has no time limit, and the Pro plan includes a 14-day trial — no credit card required. Cancel anytime with one click.',
    },
    {
      q: 'What integrations do you support?',
      a: 'Over 200 integrations including Slack, GitHub, Jira, Notion, Google Workspace, Salesforce, HubSpot, and more. We ship new connectors every month based on customer requests.',
    },
    {
      q: 'Do you offer discounts for annual billing?',
      a: 'Yes — save 20% when you pay annually on any paid plan. Contact us for volume discounts on team plans of 25+ seats.',
    },
    {
      q: 'How long does onboarding take?',
      a: 'Most teams are fully set up in under 30 minutes. Our guided onboarding wizard walks you through connecting your tools, and our support team is available if you need help.',
    },
  ]

  const navLinks = [
    { href: '#benefits', label: 'Benefits' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <main className="bg-[#0B0B0D] text-white min-h-screen flex flex-col font-sans antialiased">
      {/* Skip to content link for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-[#E11D48] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/5">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <a href="#" className="text-2xl font-extrabold tracking-tight" aria-label="PetrBot Home">
            <span className="text-[#E11D48]">Petr</span>Bot
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-400" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-200 focus-visible:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleCTAClick('Header CTA')}
              className="hidden sm:inline-flex bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600/50 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200 text-sm"
              data-track="header-cta"
            >
              Get Started Free
            </button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-400 hover:text-white p-1"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className={`md:hidden border-t border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="px-6 py-4 space-y-3 text-sm text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { handleCTAClick('Mobile Header CTA'); closeMobileMenu() }}
              className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm mt-2"
              data-track="mobile-header-cta"
            >
              Get Started Free
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative text-center px-6 pt-24 pb-20 md:pt-32 md:pb-28 max-w-4xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E11D48]/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <p className="relative text-[#E11D48] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-5">
          AI-Powered Workflow Automation
        </p>
        <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          Stop doing busywork.<br />
          <span className="gradient-text">Let PetrBot handle it.</span>
        </h2>
        <p className="relative mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-400 leading-relaxed">
          PetrBot automates repetitive tasks, surfaces actionable insights, and
          connects your tools — so your team ships faster and focuses on work that actually matters.
        </p>
        <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleCTAClick('Hero CTA')}
            className="cta-pulse bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600/50 text-white font-semibold py-4 px-12 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-900/20 w-full sm:w-auto"
            data-track="hero-cta"
          >
            Start Your Free Trial
          </button>
          <p className="text-gray-500 text-sm">No credit card required · 14-day free trial</p>
        </div>
        <div className="relative mt-16 w-full max-w-3xl mx-auto aspect-video bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black rounded-2xl border border-white/5 shadow-2xl shadow-black/50 flex items-center justify-center text-gray-600 text-sm">
          <div className="flex flex-col items-center gap-2">
            <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Product Demo</span>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Logos */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center" aria-label="Trusted by leading companies">
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-8 font-semibold">
          Trusted by 2,000+ teams at leading companies
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 items-center">
          {['Stripe', 'Shopify', 'Vercel', 'Linear', 'Notion'].map((name) => (
            <div
              key={name}
              className="text-gray-600 font-semibold text-lg tracking-wide hover:text-gray-400 transition-colors duration-300"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="max-w-5xl mx-auto px-6 py-16" aria-label="Key metrics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2,000+', label: 'Teams worldwide' },
            { value: '10M+', label: 'Automations run' },
            { value: '80%', label: 'Less manual work' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-bold text-[#E11D48]">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center tracking-tight">
          Why teams choose PetrBot
        </h2>
        <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto leading-relaxed">
          Everything you need to eliminate busywork and move faster — without writing a single line of code.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Automate in Minutes',
              desc: 'Set up powerful automations without writing code. Connect your apps, define triggers, and let PetrBot do the rest — saving your team hours every week.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: 'Actionable Insights',
              desc: 'AI-driven analytics surface what matters most. Spot trends, catch issues early, and make data-backed decisions with real-time dashboards.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              ),
              title: 'Connects Everything',
              desc: '200+ integrations out of the box. Slack, GitHub, Jira, Notion, Google Workspace — PetrBot fits seamlessly into your existing stack.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: 'Enterprise-Grade Security',
              desc: 'SOC 2 Type II compliant with AES-256 encryption, SSO support, and audit logs. Your data stays yours — always.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Real-Time Monitoring',
              desc: 'Track every automation in real time. Get instant alerts when something needs attention so nothing falls through the cracks.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Built for Teams',
              desc: 'Shared workspaces, role-based permissions, and collaborative editing. Scale automation across your entire organization.',
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-white/[0.02] rounded-2xl p-8 border border-white/5 hover:border-[#E11D48]/30 transition-all duration-300 hover:bg-white/[0.04]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center mb-5 group-hover:bg-[#E11D48]/20 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center tracking-tight">
          Up and running in 3 steps
        </h2>
        <p className="text-gray-400 text-center mb-14 max-w-lg mx-auto leading-relaxed">
          No complex setup. No lengthy onboarding. Just results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-6 left-[20%] right-[20%] h-px bg-gradient-to-r from-[#E11D48]/50 via-[#E11D48]/20 to-[#E11D48]/50" aria-hidden="true" />
          {[
            {
              step: '1',
              title: 'Connect your tools',
              desc: 'Link the apps your team already uses with one-click integrations. Setup takes under 5 minutes.',
            },
            {
              step: '2',
              title: 'Define your workflows',
              desc: 'Use our visual builder to create automations — or let AI suggest optimal workflows for you.',
            },
            {
              step: '3',
              title: 'Watch productivity soar',
              desc: 'Sit back while PetrBot handles the busywork. Focus on what actually moves the needle.',
            },
          ].map((item) => (
            <div key={item.step} className="relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#E11D48] text-white font-bold text-xl flex items-center justify-center mb-5 shadow-lg shadow-red-900/20 relative z-10">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-6xl mx-auto px-6 py-20" aria-label="Use cases">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center tracking-tight">
          Built for every team
        </h2>
        <p className="text-gray-400 text-center mb-14 max-w-lg mx-auto leading-relaxed">
          From startups to enterprise, PetrBot adapts to how you work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              team: 'Engineering',
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              desc: 'Automate CI/CD alerts, triage bugs, and keep sprints on track without constant context-switching.',
            },
            {
              team: 'Marketing',
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              ),
              desc: 'Plan campaigns, sync leads to your CRM, and measure ROI — all in one automated flow.',
            },
            {
              team: 'Operations',
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              desc: 'Streamline approvals, onboarding checklists, and cross-team handoffs effortlessly.',
            },
          ].map((useCase) => (
            <div
              key={useCase.team}
              className="bg-white/[0.02] rounded-2xl p-8 border border-white/5 hover:border-[#E11D48]/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-[#E11D48] font-bold text-lg">{useCase.team}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-20" aria-label="Customer testimonials">
        <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center tracking-tight">
          What our customers say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: 'PetrBot cut our manual reporting time by 80%. We finally have time to focus on strategy instead of spreadsheets.',
              name: 'Sarah Chen',
              role: 'VP of Ops, ScaleUp Inc.',
            },
            {
              quote: 'We integrated PetrBot in under an hour. The AI-suggested workflows alone saved us weeks of design work.',
              name: 'Marcus Rivera',
              role: 'CTO, DevFlow Labs',
            },
            {
              quote: 'Our engineering team went from 4 hours of weekly toil to 20 minutes. PetrBot is now essential infrastructure for us.',
              name: 'Priya Sharma',
              role: 'Head of Eng, CloudStack',
            },
          ].map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="bg-white/[0.02] rounded-2xl p-8 border border-white/5 flex flex-col hover:border-white/10 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#E11D48]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 flex-1 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-sm">
                <span className="text-white font-semibold">{testimonial.name}</span>
                <span className="text-gray-500 block mt-0.5">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="text-gray-400 mb-14 max-w-xl mx-auto leading-relaxed">
          Start free. Upgrade when you&apos;re ready. No surprise fees, ever.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/[0.02] rounded-2xl p-8 border border-white/5 text-left flex flex-col hover:border-white/10 transition-colors duration-300">
            <h3 className="font-bold text-lg mb-1">Free</h3>
            <p className="text-4xl font-bold mb-1">
              $0<span className="text-sm text-gray-500 font-normal">/mo</span>
            </p>
            <p className="text-gray-500 text-xs mb-6">For individuals getting started</p>
            <ul className="text-gray-400 text-sm space-y-3 mb-8 flex-1">
              {['Up to 3 workflows', '100 automations/month', '5 integrations', 'Community support'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCTAClick('Pricing Free CTA')}
              className="w-full border border-white/10 hover:border-[#E11D48]/50 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50"
              data-track="pricing-free-cta"
            >
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white/[0.02] rounded-2xl p-8 border-2 border-[#E11D48] text-left relative flex flex-col shadow-lg shadow-red-900/10 hover:shadow-xl hover:shadow-red-900/20 transition-shadow duration-300">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E11D48] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
            <h3 className="font-bold text-lg mb-1">Pro</h3>
            <p className="text-4xl font-bold mb-1">
              $29<span className="text-sm text-gray-500 font-normal">/mo</span>
            </p>
            <p className="text-gray-500 text-xs mb-6">For growing teams</p>
            <ul className="text-gray-400 text-sm space-y-3 mb-8 flex-1">
              {['Unlimited workflows', '10,000 automations/month', 'All 200+ integrations', 'Priority support', 'Advanced analytics dashboard'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#E11D48] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCTAClick('Pricing Pro CTA')}
              className="cta-pulse w-full bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600/50 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm"
              data-track="pricing-pro-cta"
            >
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/[0.02] rounded-2xl p-8 border border-white/5 text-left flex flex-col hover:border-white/10 transition-colors duration-300">
            <h3 className="font-bold text-lg mb-1">Enterprise</h3>
            <p className="text-4xl font-bold mb-1">Custom</p>
            <p className="text-gray-500 text-xs mb-6">For organizations at scale</p>
            <ul className="text-gray-400 text-sm space-y-3 mb-8 flex-1">
              {['Unlimited everything', 'SSO & SAML', 'Dedicated account manager', 'Custom integrations', '99.99% uptime SLA'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCTAClick('Pricing Enterprise CTA')}
              className="w-full border border-white/10 hover:border-[#E11D48]/50 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20" aria-label="Frequently asked questions">
        <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center tracking-tight">
          Frequently asked questions
        </h2>
        <dl className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors duration-200">
              <dt>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-white/[0.02] transition-colors duration-200"
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </dt>
              <dd
                id={`faq-answer-${idx}`}
                className="faq-answer"
                data-open={openFaq === idx}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
              >
                <div>
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Final CTA Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-24 text-center" aria-label="Get started">
        <div className="absolute inset-0 bg-gradient-to-t from-[#E11D48]/5 via-transparent to-transparent pointer-events-none rounded-3xl" aria-hidden="true" />
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
          Ready to reclaim your team&apos;s time?
        </h2>
        <p className="relative text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
          Join 2,000+ teams already shipping faster with PetrBot. Set up in minutes, not days.
        </p>
        <button
          onClick={() => handleCTAClick('Final CTA')}
          className="cta-pulse relative bg-[#E11D48] hover:bg-[#BE123C] focus:outline-none focus:ring-4 focus:ring-red-600/50 text-white font-semibold py-4 px-12 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-900/20"
        >
          Start Your Free Trial
        </button>
        <p className="relative mt-4 text-gray-600 text-sm">No credit card required · Cancel anytime</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-8" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="text-xl font-extrabold tracking-tight mb-3 inline-block" aria-label="PetrBot Home">
                <span className="text-[#E11D48]">Petr</span>Bot
              </a>
              <p className="text-gray-500 text-sm leading-relaxed mt-3">
                AI-powered workflow automation for modern teams.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="mailto:contact@petrbot.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; 2026 PetrBot. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="mailto:contact@petrbot.com" className="hover:text-white transition-colors">contact@petrbot.com</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
