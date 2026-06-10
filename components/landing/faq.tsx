import { OrderCta } from "@/components/landing/order-cta"

const faqs = [
  {
    question: "What is the battery capacity?",
    answer: "The Car Jumpstarter has 26Ah capacity and is built first for emergency vehicle jump-starting.",
  },
  {
    question: "What vehicles can it work for?",
    answer:
      "It is made for cars, small vehicles, SUVs, pickups, and many truck emergencies. For very large heavy-duty trucks, check the vehicle's required starting current before use.",
  },
  {
    question: "Can it charge phones and other devices?",
    answer: "Yes. Phone and USB device charging are secondary backup features for emergencies and travel.",
  },
  {
    question: "Does it have a light for emergencies?",
    answer: "Yes. It includes a built-in LED light for night use, roadside checks, and emergency visibility.",
  },
  {
    question: "Is it water resistant?",
    answer:
      "Yes. It is water resistant, making it suitable for wet roadside use and unexpected emergency conditions.",
  },
  {
    question: "Does it have a tire inflator?",
    answer:
      "Yes. It has an inbuilt tire inflator, so you can add air when a low tire catches you by surprise.",
  },
  {
    question: "Can I pay when it is delivered?",
    answer:
      "Yes, but payment on delivery is available only in Accra after your order is confirmed. Orders outside Accra require advance payment before dispatch.",
  },
  {
    question: "What if I have an issue after buying?",
    answer: "Your order includes a warranty, so you can contact us for support if the product develops an issue.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Questions Before You Order</h2>
          <p className="mt-4 text-lg text-muted-foreground">Clear answers for common buyer concerns</p>
        </div>

        <div className="mt-10 divide-y rounded-2xl border bg-card shadow-sm">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5 sm:p-6">
              <h3 className="font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>

        <OrderCta className="mt-10" label="Place Your Order" />
      </div>
    </section>
  )
}
