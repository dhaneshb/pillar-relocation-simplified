import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#FF4D4D]">PILLAR</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">How it Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#FF4D4D] transition-colors">Benefits</a>
            <button className="bg-[#FF4D4D] text-white px-6 py-2 rounded-full hover:bg-[#FF3333] transition-colors">
              Join Waitlist
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-[#FF4D4D] transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-[#FF4D4D] transition-colors">How it Works</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-[#FF4D4D] transition-colors">Benefits</a>
            <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#FF4D4D] transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;