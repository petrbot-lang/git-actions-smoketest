"use client";

import React from 'react';
import { trackCTA } from './track-cta';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-[#E11D48] font-bold text-xl">Logo</div>
        <button
          onClick={() => trackCTA('Header CTA')}
        >
          Primary CTA
        </button>
      </header>
      <main className="flex-grow p-8">
        <section className="hero mb-12">
          <h1 className="text-4xl font-bold mb-2">Headline</h1>
          <p className="text-lg mb-4">Subheadline</p>
          <button
            className="bg-[#E11D48] text-white py-2 px-4 rounded"
            onClick={() => trackCTA('Hero CTA')}
          >
            Primary CTA
          </button>
          <div className="mt-6 w-full h-48 bg-gray-800 rounded">Screenshot placeholder</div>
        </section>
        <section className="benefits mb-12">
          {['Benefit 1: Fast', 'Benefit 2: Reliable', 'Benefit 3: Secure'].map((benefit) => (
            <div
              key={benefit}
            >
              {benefit}
            </div>
          ))}
        </section>
        <section className="trust mb-12">
          <blockquote className="italic border-l-4 border-[#E11D48] pl-4">
            "This product changed my life!" - Happy Customer
          </blockquote>
        </section>
        <section className="final-cta mb-12 flex flex-col items-center">
          <p className="mb-4">Ready to get started?</p>
          <button
            className="bg-[#E11D48] text-white py-2 px-4 rounded"
            onClick={() => trackCTA('Final CTA')}
          >
            Sign Up
          </button>
        </section>
      </main>
      <footer className="p-4 border-t text-center text-sm">
        <p>Company Name | contact@example.com</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
