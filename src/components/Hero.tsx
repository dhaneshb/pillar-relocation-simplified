import React, { useState } from "react"
import { WaitlistForm } from "./WaitlistForm"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Hero = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const images = [
    "/EmployerFlow1.png",
    "/EmployerFlow2.png",
    "/EmployerFlow3.png",
    "/EmployerFlow4.png",
    "/EmployerFlow5.png",
    "/EmployerFlow6.png"
  ]

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-textPrimary mb-6 animate-fade-in">
            Introducing PILLAR – The Future of Seamless Employee Relocation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Simplify employee relocation with our all-in-one platform. From paperwork to housing, 
            we make international moves seamless and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button 
              className="bg-[#0078D4] text-white px-8 py-3 rounded-full hover:bg-[#0078D4]/80 transition-colors"
              onClick={() => setShowWaitlistForm(true)}
            >
              Join the Waitlist
            </button>
          </div>
        </div>
        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="w-full max-w-[90%] lg:max-w-[80%]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img 
                      src={image}
                      alt={`Employee Relocation Process Flow ${index + 1}`}
                      className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <WaitlistForm open={showWaitlistForm} onOpenChange={setShowWaitlistForm} />
    </div>
  )
}

export default Hero