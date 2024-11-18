import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { type UseEmblaCarouselType } from "embla-carousel-react"
import { useCarousel } from "./use-carousel"

type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0]
type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1]

interface CarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )

  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel({
    api,
  })

  React.useEffect(() => {
    if (api && setApi) {
      setApi(api)
    }
  }, [api, setApi])

  return (
    <div
      ref={ref}
      className={className}
      role="region"
      aria-roledescription="carousel"
      {...props}
    >
      <div ref={carouselRef} className="overflow-hidden">
        {children}
      </div>
    </div>
  )
})
Carousel.displayName = "Carousel"

export { Carousel, type CarouselApi }