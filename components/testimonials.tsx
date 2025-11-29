export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "AutoFlow transformed our customer support. We're now handling 3x more inquiries with the same team size. The AI is incredibly accurate and our customers love the instant responses.",
      name: "Sarah Chen",
      role: "Head of Customer Success, TechFlow",
    },
    {
      quote:
        "We saw a 240% increase in qualified leads within the first month. The automation handles all initial conversations, and our sales team only steps in for hot prospects. Game changer.",
      name: "Marcus Rodriguez",
      role: "VP of Sales, GrowthLabs",
    },
    {
      quote:
        "The ROI was immediate. AutoFlow paid for itself in the first week by converting leads that would have otherwise gone cold. Our team can finally focus on high-value activities.",
      name: "Emily Watson",
      role: "Founder, StartupCo",
    },
  ]

  return (
    <section id="testimonials" className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">Trusted by innovative teams</h2>
          <p className="text-pretty text-lg text-slate-400">See how businesses are scaling with AutoFlow</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm"
            >
              {/* Quote mark */}
              <div className="mb-4 text-5xl font-bold text-sky-500/30">"</div>

              {/* Quote */}
              <p className="mb-6 leading-relaxed text-slate-300">{testimonial.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400" />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
