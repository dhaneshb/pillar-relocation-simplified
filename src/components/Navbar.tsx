import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">PILLAR</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How it Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Benefits</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">How it Works</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Benefits</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;