"use client"

import * as React from "react"
import type { UseEmblaCarouselType } from "embla-carousel-react"

interface CarouselContextProps {
  carouselRef: ReturnType<typeof React.useRef<HTMLDivElement>>["current"]
  api: UseEmblaCarouselType[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation?: "horizontal" | "vertical"
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

export { CarouselContext, type CarouselContextProps }