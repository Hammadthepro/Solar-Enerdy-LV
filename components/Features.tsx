import React from 'react';
import { COMPANY_INFO } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-solar-yellow/20 rounded-full z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-solar-blue/10 rounded-full z-0"></div>
            <img
              src="https://picsum.photos/seed/solarworker/800/600"
              alt="Technician working on solar panels"
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute bottom-8 left-8 z-20 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-3xl text-solar-blue">{COMPANY_INFO.yearsExperience}+</p>
                <p className="text-slate-600 text-sm font-medium">Years of Professional Experience in Las Vegas</p>
            </div>
          </div>

          <div>
            <h2 className="text-base text-solar-orange font-semibold tracking-wide uppercase">Why Choose {COMPANY_INFO.name}</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Quality, Affordability, & Trust
            </h3>
            <p className="mt-4 text-lg text-slate-500">
              We are dedicated to providing the highest quality solar solutions with American-made products and unbeatable warranty protection.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-solar-blue text-white">
                    <span className="font-bold text-xl">$</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-slate-900">Unbeatable Financing</h4>
                  <p className="mt-2 text-base text-slate-500">
                    Get started with $0 down. We offer 120% financing with quick pre-approvals to make going solar accessible for everyone.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-solar-blue text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-slate-900">Industry-Leading Warranty</h4>
                  <p className="mt-2 text-base text-slate-500">
                    Rest easy with our 25-year warranty on panels and Enphase® IQ series microinverters.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-solar-blue text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-slate-900">Commercial & Residential</h4>
                  <p className="mt-2 text-base text-slate-500">
                    From small home installations to large commercial projects, our team has the expertise to handle it all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;