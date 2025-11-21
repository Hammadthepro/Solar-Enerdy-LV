import React, { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <Sun className="h-8 w-8 text-solar-yellow" fill="#FDB813" />
              <span className="font-bold text-2xl text-solar-blue tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-solar-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-solar-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-colors shadow-sm"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-solar-blue focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-solar-blue hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="block w-full text-center mt-4 bg-solar-orange text-white px-5 py-3 rounded-md font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;