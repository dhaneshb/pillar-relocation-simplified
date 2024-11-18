import React from "react";
import { CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const benefits = [
  "Streamlined documentation process",
  "Cost-effective relocation solutions",
  "Enhanced employee experience",
  "Reduced administrative burden",
  "Compliance with local regulations",
  "Real-time progress tracking",
  "24/7 support availability",
  "Customizable workflow options"
];

const carouselImages = [
  {
    src: "/EmployeeFlow1.png",
    alt: "Employee Flow 1"
  },
  {
    src: "/EmployeeFlow2.png",
    alt: "Employee Flow 2"
  },
  {
    src: "/EmployeeFlow3.png",
    alt: "Employee Flow 3"
  }
];

const Benefits = () => {
  const plugin = React.useMemo(() => Autoplay({ delay: 3000 }), []);

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6">
              Why Choose PILLAR?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit}
                  className="flex items-start space-x-2 animate-fade-in transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in">
            <Carousel 
              className="w-full max-w-xl mx-auto"
              plugins={[plugin]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;