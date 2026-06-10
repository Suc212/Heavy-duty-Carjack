import { Battery, Car, Droplets, Flashlight, Gauge, Plug, Ruler, Smartphone } from "lucide-react"

import { OrderCta } from "@/components/landing/order-cta"

const specs = [
  {
    icon: Battery,
    label: "Capacity",
    value: "26Ah",
    description: "Amp-hour jump-start capacity",
  },
  {
    icon: Car,
    label: "Main Use",
    value: "Super Start",
    description: "Emergency vehicle jump-starts",
  },
  {
    icon: Smartphone,
    label: "Backup USB",
    value: "Secondary",
    description: "Charges devices when needed",
  },
  {
    icon: Flashlight,
    label: "LED Light",
    value: "Built-in",
    description: "Night and emergency use",
  },
  {
    icon: Gauge,
    label: "Tire Inflator",
    value: "Inbuilt",
    description: "Adds air when tires are low",
  },
  {
    icon: Plug,
    label: "Recharge",
    value: "USB",
    description: "Keeps jumpstarter ready",
  },
  {
    icon: Droplets,
    label: "Protection",
    value: "Water Resistant",
    description: "Ready for roadside conditions",
  },
  {
    icon: Ruler,
    label: "Vehicle Range",
    value: "Wide Use",
    description: "Cars, SUVs, pickups, and many trucks",
  },
]

export function Specifications() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Specifications</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built first for super jumpstarts across cars, SUVs, pickups, and many truck emergencies
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-card shadow-lg">
            <img
              src="/images/H08a580bde88d47ad9172ce205c205adc7.jpg_960x960q80.jpg"
              alt="Car Jumpstarter functions and specification diagram"
              className="aspect-square w-full bg-slate-950 object-contain"
            />
            <div className="p-4 text-center">
              <p className="text-sm font-medium text-foreground">Advanced Internal Technology</p>
              <p className="text-xs text-muted-foreground">Clamps, display, light modes, ports, and power controls</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-card shadow-lg">
            <img
              src="/images/Hdb49b3bcc41f431ba058b204d73ade61l.jpg"
              alt="What is included in the Car Jumpstarter box"
              className="aspect-square w-full bg-white object-contain p-4"
            />
            <div className="p-4 text-center">
              <p className="text-sm font-medium text-foreground">Complete Box Contents</p>
              <p className="text-xs text-muted-foreground">Super jumpstarter, clamps, pump hose, charger, and carrying case</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="rounded-xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <spec.icon className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-4 text-2xl font-bold text-foreground">{spec.value}</p>
              <p className="mt-1 font-medium text-foreground">{spec.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{spec.description}</p>
            </div>
          ))}
        </div>

        <OrderCta className="mt-12" />
      </div>
    </section>
  )
}
