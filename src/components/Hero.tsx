const Hero = () => {
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
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors">
              Get Started
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <img 
            src="/Employeer.png" 
            alt="Relocation Process" 
            className="rounded-lg shadow-2xl max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;