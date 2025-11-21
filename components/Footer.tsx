import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Sun, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Sun className="h-6 w-6 text-solar-yellow" fill="#FDB813" />
              <span className="font-bold text-xl text-white">{COMPANY_INFO.name}</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Serving Las Vegas with premier solar energy solutions for over {COMPANY_INFO.yearsExperience} years. 
              Licensed, bonded, and insured.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Panel Maintenance</a></li>
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Pool Heating Repair</a></li>
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Critter Guards</a></li>
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Solar Repairs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                  <span className="font-medium text-white">Address:</span>
                  <span>625 South 6th Street, Suite 106<br/>Las Vegas, NV</span>
              </li>
              <li className="flex flex-col">
                   <span className="font-medium text-white">Phone:</span>
                   <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-solar-yellow">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex flex-col">
                   <span className="font-medium text-white">Email:</span>
                   <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-solar-yellow">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Social / Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;