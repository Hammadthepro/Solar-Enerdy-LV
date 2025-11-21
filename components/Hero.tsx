import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/solarpanel12/1920/1080"
          alt="Solar Panels on Roof"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-solar-blue/30 border border-solar-blue/50 rounded-full px-4 py-1 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-solar-green"></span>
            <span className="text-sm font-medium text-solar-green uppercase tracking-wide">Now Serving Las Vegas</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Power Your Home With <br />
            <span className="text-solar-yellow">Clean Energy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
            Over {COMPANY_INFO.yearsExperience} years of experience in solar panel maintenance, repair, and installation. 
            Take control of your energy bills today with <span className="text-white font-bold">$0 Down</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-solar-orange hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-bold rounded-md text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Services
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 text-sm text-slate-300 font-medium">
             <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-solar-green" />
                <span>120% Financing Available</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-solar-green" />
                <span>25-Year Factory Warranty</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-solar-green" />
                <span>24/7 Emergency Support</span>
             </div>
          </div>
        </div>
        
        {/* Decorative Right Side (Hidden on mobile for cleaner look) */}
        <div className="hidden md:block w-2/5 pl-12">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Why Go Solar?</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="bg-solar-yellow/20 p-2 rounded-lg">
                             <span className="text-solar-yellow font-bold text-lg">$</span>
                        </div>
                        <div>
                            <p className="font-bold text-white">Increase Home Value</p>
                            <p className="text-sm text-slate-400">Homes with solar sell for more.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <div className="bg-solar-green/20 p-2 rounded-lg">
                             <span className="text-solar-green font-bold text-lg">↓</span>
                        </div>
                        <div>
                            <p className="font-bold text-white">Reduce Bills</p>
                            <p className="text-sm text-slate-400">Drastically cut monthly electric costs.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;