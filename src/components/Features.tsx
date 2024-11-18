import { Building2, Clock, Shield, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Secure Housing",
    description: "Access vetted temporary housing options with our trusted network of providers."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Track the progress of your relocation with live status updates and notifications."
  },
  {
    icon: Shield,
    title: "Automated Compliance",
    description: "Navigate bureaucratic processes with our automated documentation system."
  },
  {
    icon: MessageSquare,
    title: "24/7 AI Assistant",
    description: "Get instant support and answers to your questions anytime, anywhere."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            Everything You Need for Seamless Relocation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and support needed for a smooth transition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 bg-background rounded-xl hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;