import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DynamicOrderCount } from "@/components/landing/dynamic-order-count"
import { CheckCircle2, Shield, Star } from "lucide-react"

const heroBenefits = [
  "Jump-starts weak or dead vehicle batteries",
  "26Ah emergency starting power",
  "Built-in tire inflator for low tires",
  "Works for cars, SUVs, pickups, and many truck emergencies",
  "Built-in emergency LED light",
  "Water resistant for wet roadside conditions",
  "Built for unpredictable vehicle emergencies",
  "Also charges phones and USB devices",
  "Free Ghana delivery, Accra pay on delivery",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm font-medium">
              26Ah Super Jumpstarter With Tire Inflator
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Emergency support <span className="text-accent">for your vehicle</span>
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Jumpstart,Tyre pump,powerbank,flashlight
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1.5 font-semibold text-accent">
                <Star className="h-4 w-4 fill-accent" />
                <span>4.8/5 from 500+ customers</span>
              </div>
              <div className="rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground">
                <DynamicOrderCount />
              </div>
            </div>

            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {heroBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              <div className="rounded-xl border bg-card p-4 sm:p-6 shadow-sm">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground line-through">GH₵2,500</p>
                    <p className="text-xl sm:text-2xl font-bold text-foreground">GH₵1,800</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">1 Unit</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground line-through">GH₵5,000</p>
                    <p className="text-xl sm:text-2xl font-bold text-accent">GH₵3,300</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">2 Units</p>
                    <p className="text-xs font-medium text-accent">Save GH₵1,700</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground line-through">GH₵7,500</p>
                    <p className="text-xl sm:text-2xl font-bold text-accent">GH₵4,500</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">3 Units</p>
                    <p className="text-xs font-medium text-accent">Save GH₵3,000</p>
                  </div>
                </div>
                <Button className="mt-4 w-full h-12 text-base font-semibold" size="lg" asChild>
                  <a href="#order">Order Now</a>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Warranty</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5" />
            <img
              src="/images/H5c62c34ed01b49f09777edb4fd051608w.jpg_960x960q80.jpg"
              alt="Car Jumpstarter kit with clamps, charger, tire inflator hose, and carrying case"
              className="mx-auto aspect-square w-full max-w-sm rounded-2xl bg-white object-contain p-3 shadow-lg sm:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
