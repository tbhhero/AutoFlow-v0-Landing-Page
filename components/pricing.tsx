export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "1,000 conversations/month",
        "Basic AI responses",
        "Email support",
        "1 WhatsApp number",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      description: "For growing teams that need more power",
      features: [
        "10,000 conversations/month",
        "Advanced AI with context",
        "Priority support",
        "5 WhatsApp numbers",
        "Advanced analytics",
        "CRM integration",
        "Custom training",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited conversations",
        "Custom AI models",
        "Dedicated support",
        "Unlimited numbers",
        "White-label options",
        "API access",
        "SLA guarantee",
        "Custom integrations",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">Simple, transparent pricing</h2>
          <p className="text-pretty text-lg text-slate-400">
            Choose the perfect plan for your business. Start free, scale as you grow.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-sky-500/50 bg-gradient-to-b from-sky-500/10 to-transparent shadow-xl shadow-sky-500/20"
                  : "border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-white/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-8 top-8 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>

              {/* Description */}
              <p className="mb-6 text-sm text-slate-400">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>

              {/* CTA Button */}
              <button
                className={`mb-8 w-full rounded-lg py-3 font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg shadow-sky-500/30 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50"
                    : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
