import React, { useState } from "react"
import { WaitlistForm } from "./WaitlistForm"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)

  const stats = [
    { number: "95%", label: "Success Rate" },
    { number: "24h", label: "Support Time" },
    { number: "50+", label: "Countries" },
  ]

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6 leading-tight animate-fade-in">
              Want anything to be easy with PILLAR
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in">
              Simplify your relocation process with our all-in-one platform. From paperwork to housing, 
              we make international moves seamless.
            </p>
            <button 
              className="bg-[#FF4D4D] text-white px-8 py-4 rounded-full hover:bg-[#FF3333] transition-colors flex items-center gap-2 animate-fade-in"
              onClick={() => setShowWaitlistForm(true)}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/0a52dc17-a1d0-4bc5-b427-dceb7f3cbe96.png" 
              alt="Hero Illustration" 
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 border-t border-gray-100 pt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#FF4D4D] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <WaitlistForm open={showWaitlistForm} onOpenChange={setShowWaitlistForm} />
    </div>
  )
}

export default Hero