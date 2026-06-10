import { Car, Droplets, Gauge, ShieldCheck } from "lucide-react"

import { OrderCta } from "@/components/landing/order-cta"

const benefits = [
  {
    icon: Car,
    title: "Super Jumpstart Power",
    description:
      "Made to start weak or dead batteries in cars, SUVs, pickups, and many truck emergencies when help is urgent.",
  },
  {
    icon: Gauge,
    title: "Inbuilt Tire Inflator",
    description:
      "Add air to low tires during roadside emergencies without waiting for a filling station or another driver.",
  },
  {
    icon: Droplets,
    title: "Water Resistant",
    description:
      "Made for real roadside conditions, with water-resistant protection for rain, splashes, flooding season, and wet emergency use.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Emergencies",
    description:
      "Super jumpstart support, tire inflation, emergency light, and secondary phone charging in one vehicle-ready tool.",
  },
]

export function Benefits() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose Car Jumpstarter</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Super jumpstart power, inbuilt tire inflation, and wet-condition protection for roadside vehicle emergencies
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white">
            <img
              src="/images/H4b1f79e0ebb644598fe4103e9d37f7deH.jpg"
              alt="Car Jumpstarter accessory feature for charging a phone when needed"
              className="aspect-[4/3] w-full object-contain p-4"
            />
          </div>
          <div className="overflow-hidden rounded-2xl bg-slate-950">
            <img
              src="/images/Ha7d0bfe43712413ea0d65a3c9e93b597e.jpg"
              alt="Car Jumpstarter emergency LED lighting modes"
              className="aspect-[4/3] w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <OrderCta className="mt-12" />
      </div>
    </section>
  )
}
