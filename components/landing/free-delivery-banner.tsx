"use client"

import { useEffect, useState } from "react"
import { ShieldCheck, Truck, UsersRound } from "lucide-react"

const bannerMessages = [
  { text: "Free shipping", Icon: Truck },
  { text: "Satisfied or Refunded", Icon: ShieldCheck },
  { text: "Over 3578 satisfied customers", Icon: UsersRound },
]
const slidingMessages = [...bannerMessages, bannerMessages[0]]

export function FreeDeliveryBanner() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsTransitioning(true)
      setMessageIndex((currentIndex) => currentIndex + 1)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  const handleTransitionEnd = () => {
    if (messageIndex === bannerMessages.length) {
      setIsTransitioning(false)
      setMessageIndex(0)
    }
  }

  return (
    <div className="bg-primary px-4 py-2 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center overflow-hidden text-center text-sm font-semibold sm:text-base">
        <div className="w-[18rem] max-w-[calc(100vw-4rem)] overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${messageIndex * 100}%)`,
              transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slidingMessages.map(({ text, Icon }, index) => (
              <span
                key={`${text}-${index}`}
                className="flex w-full flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap"
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
