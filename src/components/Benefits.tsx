import { CheckCircle } from "lucide-react";

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

const Benefits = () => {
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
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3"></div>
            <img 
              src="/temporary-housing.png" 
              alt="Temporary Housing" 
              className="relative rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;