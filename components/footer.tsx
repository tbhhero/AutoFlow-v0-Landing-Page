export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-slate-400">© {currentYear} AutoFlow. All rights reserved.</p>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#features" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Customers
            </a>
            <a href="#" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
