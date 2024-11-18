import * as React from "react"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./carousel-context"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      ref={ref}
      onClick={scrollPrev}
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 size-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 shadow",
        className
      )}
      disabled={!canScrollPrev}
      {...props}
    >
      <ChevronLeft className="size-4" />
      <span className="sr-only">Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

export { CarouselPrevious }