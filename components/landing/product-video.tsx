import { OrderCta } from "@/components/landing/order-cta"

export function ProductVideo() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            See How It Works
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Follow the simple steps to connect the clamps, start the vehicle, and remove the super jumpstarter after it
            comes back on. Keep it ready for wet roadside conditions, low tires, and sudden shutdowns when quick help
            matters.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
            <img
              src="/images/H6f8f0a6f441d457aaebaae1dac0a2daaf.jpg_960x960q80.jpg"
              alt="Step-by-step Car Jumpstarter operation guide"
              className="aspect-[9/16] w-full bg-muted object-contain"
            />
          </div>
          <OrderCta className="mt-6" />
        </div>
      </div>
    </section>
  )
}
