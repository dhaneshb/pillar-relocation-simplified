import * as React from "react"
import { type UseEmblaCarouselType } from "embla-carousel-react"

type CarouselApi = UseEmblaCarouselType[1]

interface UseCarouselProps {
  api: CarouselApi
  onSelect?: () => void
}

export function useCarousel({ api, onSelect }: UseCarouselProps = { api: undefined }) {
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelectHandler = React.useCallback(() => {
    if (!api) return

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
    onSelect?.()
  }, [api, onSelect])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  React.useEffect(() => {
    if (!api) return

    onSelectHandler()
    api.on("select", onSelectHandler)
    api.on("reInit", onSelectHandler)

    return () => {
      api.off("select", onSelectHandler)
    }
  }, [api, onSelectHandler])

  return {
    api,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
  }
}