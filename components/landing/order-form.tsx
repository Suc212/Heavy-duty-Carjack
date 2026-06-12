"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Package, ShieldCheck, Banknote } from "lucide-react"

const BASE_UNIT_PRICE = 1800
const TIER_UNIT_REDUCTION = 150
const ORIGINAL_UNIT_PRICE = 2500
const bundlePrices: Record<number, number> = {
  1: 1800,
  2: 3300,
  3: 4500,
}

const quantityOptions = [1, 2, 3].map((quantity) => {
  const originalTotalPrice = quantity * ORIGINAL_UNIT_PRICE
  const unitPrice = BASE_UNIT_PRICE - TIER_UNIT_REDUCTION * (quantity - 1)
  const totalPrice = bundlePrices[quantity]
  const discount = originalTotalPrice - totalPrice

  return {
    quantity,
    unitPrice,
    originalUnitPrice: ORIGINAL_UNIT_PRICE,
    totalPrice,
    originalTotalPrice,
    discount,
    label: `${quantity} ${quantity === 1 ? "Unit" : "Units"}`,
    description:
      quantity === 1
        ? "Super Jumpstarter with inbuilt tire inflator"
        : `Bundle deal: Save GH₵${discount.toLocaleString()} - ${
            quantity === 2 ? "Perfect for two cars" : "Best for families, gifts & emergencies"
          }`,
    popular: quantity === 2,
  }
})

export function OrderForm() {
  const [selectedQuantity, setSelectedQuantity] = useState(2)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const selectedOption = useMemo(
    () => quantityOptions.find((opt) => opt.quantity === selectedQuantity) || quantityOptions[0],
    [selectedQuantity],
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    const orderData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phone: formData.get("phone") as string,
      whatsapp: formData.get("whatsapp") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
      quantity: selectedQuantity.toString(),
      totalPrice: selectedOption.totalPrice.toString(),
      discount: selectedOption.discount.toString(),
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      const result = await response.json().catch(() => null)

      if (response.ok && result?.success) {
        setIsSubmitted(true)
      } else {
        setError(result?.error || "Something went wrong. Please try again.")
      }
    } catch (submitError) {
      console.error("Order submission error:", submitError)
      setError("Unable to submit your order. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="order" className="py-12 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-card p-6 text-center shadow-lg sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-foreground sm:text-2xl">Order Confirmed!</h2>
            <p className="mt-3 text-muted-foreground">
              Thank you for your order. We will confirm your order via phone call and WhatsApp.
            </p>
            <Button className="mt-6 w-full sm:w-auto" onClick={() => setIsSubmitted(false)}>
              Place Another Order
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="order" className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Fill this form to place your order
          </h2>
          <p className="mt-3 text-muted-foreground">
            Free delivery across Ghana. Payment on delivery is available only in Accra.
          </p>
          <div className="mx-auto mt-4 flex max-w-xl flex-col gap-2 text-sm sm:flex-row sm:justify-center">
            <span className="rounded-full bg-accent/10 px-3 py-1.5 font-semibold text-accent">
              Limited stock available for delivery
            </span>
            <span className="rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground">
              Bundle deal active today
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>Warranty</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-accent">
            <Banknote className="h-4 w-4" />
            <span>Pay on Delivery Only in Accra</span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-8 space-y-4">
              <div className="overflow-hidden rounded-2xl bg-white">
                <img
                  src="/images/H5c62c34ed01b49f09777edb4fd051608w.jpg_960x960q80.jpg"
                  alt="Car Jumpstarter with clamps, accessories, and tire inflator hose"
                  className="aspect-square w-full object-contain p-4"
                />
              </div>
              <div className="rounded-xl bg-accent/5 p-4 text-center">
                <p className="text-sm font-medium text-foreground">Car Jumpstarter</p>
                <p className="text-xs text-muted-foreground">26Ah super jumpstarter with inbuilt tire inflator and accessories</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-2xl border bg-card p-5 shadow-lg sm:p-8">
            {error && <div className="mb-5 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}

            <div className="space-y-5">
              <div>
                <Label className="text-base font-semibold">How Many Do You Want?</Label>
                <RadioGroup
                  value={selectedQuantity.toString()}
                  onValueChange={(val) => setSelectedQuantity(Number.parseInt(val))}
                  className="mt-3 grid gap-3"
                >
                  {quantityOptions.map((option) => (
                    <label
                      key={option.quantity}
                      htmlFor={`qty-${option.quantity}`}
                      className={`relative flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all active:scale-[0.98] ${
                        selectedQuantity === option.quantity
                          ? "border-accent bg-accent/5 ring-1 ring-accent"
                          : "hover:border-muted-foreground/40"
                      }`}
                    >
                      <RadioGroupItem value={option.quantity.toString()} id={`qty-${option.quantity}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-foreground">{option.label}</span>
                          {option.popular && (
                            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-muted-foreground line-through">
                          GH₵{option.originalTotalPrice.toLocaleString()}
                        </p>
                        <p className="text-lg font-bold text-foreground">GH₵{option.totalPrice.toLocaleString()}</p>
                        {option.discount > 0 && (
                          <p className="text-xs font-medium text-accent">-GH₵{option.discount.toLocaleString()}</p>
                        )}
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <Input id="firstName" name="firstName" placeholder="Kwame" required className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <Input id="lastName" name="lastName" placeholder="Asante" required className="h-12 text-base" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0XX XXX XXXX"
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">
                  WhatsApp Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="0XX XXX XXXX"
                  required
                  className="h-12 text-base"
                />
                <p className="text-xs text-muted-foreground">We'll contact you on WhatsApp to confirm your order</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-muted-foreground text-xs">(optional)</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="kwame@example.com"
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">
                  Delivery Address <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="e.g. Spintex Road, near Shell Filling Station, Accra"
                  rows={3}
                  required
                  className="text-base resize-none"
                />
              </div>

              <div className="rounded-xl bg-muted/50 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {selectedOption.quantity} x Car Jumpstarter @ GH₵{selectedOption.unitPrice.toLocaleString()}
                  </span>
                  <span className="font-medium text-foreground">
                    GH₵{selectedOption.totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Original Price</span>
                  <span className="font-medium text-muted-foreground line-through">
                    GH₵{selectedOption.originalTotalPrice.toLocaleString()}
                  </span>
                </div>
                {selectedOption.discount > 0 && (
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Bundle Discount</span>
                    <span className="font-medium text-accent">-GH₵{selectedOption.discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="mt-3 flex items-center justify-between border-t pt-3">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-xl font-bold text-foreground">
                    GH₵{selectedOption.totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="mt-2 text-center text-xs font-medium text-accent">
                  Accra customers can pay GH₵{selectedOption.totalPrice.toLocaleString()} when the order arrives
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold" disabled={isSubmitting}>
                <Package className="mr-2 h-5 w-5" />
                {isSubmitting
                  ? "Processing..."
                  : `Order Now - Accra Pay GH₵${selectedOption.totalPrice.toLocaleString()} on Delivery`}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Payment on delivery is only for Accra. Orders outside Accra require advance payment before dispatch.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
