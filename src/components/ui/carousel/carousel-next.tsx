import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./carousel-context"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      ref={ref}
      onClick={scrollNext}
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 size-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 shadow",
        className
      )}
      disabled={!canScrollNext}
      {...props}
    >
      <ChevronRight className="size-4" />
      <span className="sr-only">Next slide</span>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

export { CarouselNext }