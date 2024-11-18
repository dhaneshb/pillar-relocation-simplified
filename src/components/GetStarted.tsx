const GetStarted = () => {
  return (
    <section className="py-20 bg-[#0078D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
          Ready to Transform Your Relocation Process?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Join leading companies who trust PILLAR for their employee relocation needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <button className="bg-white text-[#0078D4] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;