import React, { useState } from "react"
import { WaitlistForm } from "./WaitlistForm"

const GetStarted = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6">
            Ready to Transform Your Employee Relocation Process?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the waitlist today and be among the first to experience the future of seamless employee relocation with PILLAR.
          </p>
          <button
            onClick={() => setShowWaitlistForm(true)}
            className="bg-[#0078D4] text-white px-8 py-3 rounded-full hover:bg-[#0078D4]/80 transition-colors"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
      <WaitlistForm open={showWaitlistForm} onOpenChange={setShowWaitlistForm} />
    </section>
  )
}

export default GetStarted