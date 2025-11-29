export default function Features() {
  const features = [
    {
      tag: "AI-Powered",
      title: "Intelligent Conversations",
      description:
        "Advanced natural language processing understands context and intent, delivering human-like responses that engage customers naturally.",
    },
    {
      tag: "Automation",
      title: "24/7 Lead Qualification",
      description:
        "Automatically qualify and route leads based on custom criteria. Never miss an opportunity with round-the-clock availability.",
    },
    {
      tag: "Integration",
      title: "Seamless CRM Sync",
      description:
        "Connect with your existing tools. Sync conversations, contacts, and data automatically with popular CRM platforms.",
    },
  ]

  return (
    <section id="features" className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Everything you need to scale
          </h2>
          <p className="text-pretty text-lg text-slate-400">
            Powerful features designed to transform your WhatsApp into a revenue-generating machine
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-xl hover:shadow-sky-500/10"
            >
              {/* Tag */}
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-sky-500/10 to-emerald-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
                {feature.tag}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>

              {/* Description */}
              <p className="leading-relaxed text-slate-400">{feature.description}</p>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
