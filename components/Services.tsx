import React from 'react';
import { SERVICES } from '../constants';
import { Sun, Wrench, Waves, ShieldCheck, BatteryCharging, Building2 } from 'lucide-react';

// Icon mapping helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sun': return <Sun className="h-8 w-8" />;
    case 'Wrench': return <Wrench className="h-8 w-8" />;
    case 'Waves': return <Waves className="h-8 w-8" />;
    case 'ShieldCheck': return <ShieldCheck className="h-8 w-8" />;
    case 'BatteryCharging': return <BatteryCharging className="h-8 w-8" />;
    case 'Building2': return <Building2 className="h-8 w-8" />;
    default: return <Sun className="h-8 w-8" />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-solar-blue font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Complete Solar Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            From routine maintenance to complex pool heating repairs, we keep your energy systems running at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100 flex flex-col items-start"
            >
              <div className="inline-flex items-center justify-center p-3 bg-solar-blue/10 rounded-lg text-solar-blue mb-6">
                {getIcon(service.iconName)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>
              <a href="#contact" className="text-solar-orange font-semibold hover:text-orange-700 inline-flex items-center mt-auto">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;