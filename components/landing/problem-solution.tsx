import { AlertCircle, Sparkles } from "lucide-react"

import { OrderCta } from "@/components/landing/order-cta"

const problems = [
  "A weak vehicle battery can leave you stranded",
  "A flat tire can stop your trip without warning",
  "Waiting for help wastes time and money",
  "Jumper cables need another vehicle nearby",
  "Phones can run out during emergencies",
  "Night breakdowns are stressful without light",
]

const solutions = [
  "Super jumpstart support when the battery is low",
  "Inflate tires with the inbuilt tire inflator",
  "26Ah emergency starting power for your vehicle",
  "Useful for cars, SUVs, pickups, and many truck emergencies",
  "LED emergency light for dark roads and garages",
  "Water-resistant protection for wet roadside conditions",
  "Secondary USB charging for phones when needed",
]

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <AlertCircle className="h-4 w-4" />
            The Vehicle Emergency Problem
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Vehicle emergencies stop everything.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Battery failure and low tires can happen at the worst time, especially around heavy rain, flooded roads, and
            wet roadside conditions. Carry your own super jumpstarter for unpredictable moments when your vehicle shuts
            down and you need quick help.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src="/images/Hc4a3441663cf41d3b622b32d60ea6eeeC.jpg"
            alt="Car Jumpstarter connected with clamps for emergency car starting"
            className="aspect-square w-full max-w-xl rounded-2xl bg-white object-contain shadow-lg"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-destructive">
              <AlertCircle className="h-5 w-5" />
              The Old Way
            </h3>
            <ul className="mt-6 space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-destructive/80">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
              <Sparkles className="h-5 w-5" />
              The Car Jumpstarter Way
            </h3>
            <ul className="mt-6 space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3 text-primary/80">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Stop getting stranded by weak batteries or low tires. Keep a super jumpstarter in your vehicle.
          </p>
          <OrderCta className="mt-6" />
        </div>
      </div>
    </section>
  )
}
