export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-emerald-500/10" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-slate-300">New • WhatsApp Automation</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl">
              Automate WhatsApp
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                Conversations
              </span>{" "}
              with AI
            </h1>

            {/* Description */}
            <p className="mb-8 text-pretty text-lg leading-relaxed text-slate-400">
              Transform your customer engagement with intelligent automation. AutoFlow uses cutting-edge AI to handle
              inquiries, qualify leads, and close deals 24/7 on WhatsApp.
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <button className="rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50">
                Get Started Free
              </button>
              <button className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                View Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full border-2 border-slate-950 bg-gradient-to-br from-sky-400 to-sky-600" />
                <div className="h-10 w-10 rounded-full border-2 border-slate-950 bg-gradient-to-br from-emerald-400 to-emerald-600" />
                <div className="h-10 w-10 rounded-full border-2 border-slate-950 bg-gradient-to-br from-violet-400 to-violet-600" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">Join 2,500+ businesses</p>
                <p className="text-slate-400">automating conversations</p>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl shadow-sky-500/20 backdrop-blur-sm">
              {/* Mockup Header */}
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-medium text-slate-400">AutoFlow Dashboard</span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400" />
                  <div className="flex-1 rounded-lg rounded-tl-none bg-white/5 p-3">
                    <p className="text-sm text-slate-300">Hi! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3">
                  <div className="flex-1 rounded-lg rounded-tr-none bg-gradient-to-r from-sky-500/20 to-emerald-500/20 p-3">
                    <p className="text-right text-sm text-slate-300">I need information about pricing</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-slate-700" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400" />
                  <div className="flex-1 rounded-lg rounded-tl-none bg-white/5 p-3">
                    <p className="text-sm text-slate-300">We have three plans starting at $29/mo...</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-xs text-slate-400">Response Time</p>
                  <p className="text-lg font-bold text-white">0.8s</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Accuracy</p>
                  <p className="text-lg font-bold text-emerald-400">98%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Conversations</p>
                  <p className="text-lg font-bold text-sky-400">1.2k</p>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-sky-500/30 to-emerald-500/30 opacity-50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
