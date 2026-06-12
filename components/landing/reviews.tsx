import { Star } from "lucide-react"

import { OrderCta } from "@/components/landing/order-cta"

const reviews = [
  {
    id: 1,
    name: "Charles Donkoh",
    location: "Sakumono Estate",
    rating: 5,
    text: "My car refused to start after work and this jumpstarter brought it back immediately. I now keep it in the boot every day.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Nana Gyimah",
    location: "Bolgatanga",
    rating: 5,
    text: "I was skeptical at first, but the Car Jumpstarter exceeded my expectations. It started my car quickly and can still charge my phone when needed.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Kojo Ayamga",
    location: "Suhum",
    rating: 5,
    text: "Worth every cedi. I used it for my saloon car and delivery was very fast. The LED light is useful at night too.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Obed Assan",
    location: "Tema",
    rating: 5,
    text: "I bought 2, one for my car and one for my husband. Strong emergency starter and very easy to carry.",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Tsekpo Nyogbe",
    location: "Accra",
    rating: 5,
    text: "Perfect emergency tool for drivers. Customer service was helpful and explained how to connect it safely.",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Samuel Sackey",
    location: "Spintex",
    rating: 5,
    text: "Bought it as a gift for my dad. He likes that it can start the car first and still charge a phone if needed. 10/10!",
    date: "3 days ago",
  },
]

export function Reviews() {
  return (
    <section className="py-12 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="mt-2 text-lg font-semibold text-foreground">4.9/5 from 500+ happy customers</p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Other Ghanaians Are Saying
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl bg-card shadow-lg">
          <img
            src="/images/A493800a0438e4862bbc6085ca381b1827.jpg"
            alt="Car Jumpstarter boxes ready for customer delivery"
            className="w-full object-contain"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <OrderCta className="mt-10" />
      </div>
    </section>
  )
}
