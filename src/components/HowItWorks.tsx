const steps = [
  {
    number: "01",
    title: "Initial Setup",
    description: "Create your company profile and set up relocation policies."
  },
  {
    number: "02",
    title: "Employee Onboarding",
    description: "Invite employees and collect necessary information."
  },
  {
    number: "03",
    title: "Automated Processing",
    description: "Our system handles documentation and compliance checks."
  },
  {
    number: "04",
    title: "Seamless Move",
    description: "Coordinate housing, logistics, and support services."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            How PILLAR Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple four-step process to transform your relocation experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white p-6 rounded-xl shadow-sm relative z-10">
                <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-primary/20 -z-10 transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;