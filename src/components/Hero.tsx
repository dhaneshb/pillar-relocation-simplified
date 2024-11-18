import React, { useState } from "react"
import { WaitlistForm } from "./WaitlistForm"

const Hero = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)

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
            <img 
              src="/EmployerFlow1.png" 
              alt="Employee Relocation Process Flow" 
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <WaitlistForm open={showWaitlistForm} onOpenChange={setShowWaitlistForm} />
    </div>
  )
}

export default Hero