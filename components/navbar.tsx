"use client"

import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 font-bold text-slate-950">
            AF
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
            Pricing
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm font-medium text-slate-300 transition-colors hover:text-white">Login</button>
          <button className="rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-sky-500/50">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 md:hidden" aria-label="Toggle menu">
          <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              Pricing
            </a>
            <div className="mt-4 flex flex-col gap-3">
              <button className="text-sm font-medium text-slate-300 transition-colors hover:text-white">Login</button>
              <button className="rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
