import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Get Your Free Quote Today</h2>
            <p className="text-lg text-slate-500 mb-10">
              Ready to lower your bills and increase your home value? Contact us 24/7 for a consultation or emergency repair.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-solar-orange mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                  <p className="text-slate-500">{COMPANY_INFO.phone}</p>
                  <p className="text-sm text-solar-green font-medium mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-solar-orange mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="text-slate-500">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-solar-orange mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Location</h3>
                  <p className="text-slate-500">{COMPANY_INFO.address}</p>
                </div>
              </div>

               <div className="flex items-start">
                <Clock className="h-6 w-6 text-solar-orange mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Hours</h3>
                  <p className="text-slate-500">{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-solar-blue/5 rounded-xl border border-solar-blue/10">
                <h4 className="font-bold text-solar-blue mb-2">Special Promotion</h4>
                <p className="text-slate-600">Mention our website for priority scheduling on your free quote!</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-solar-blue focus:ring-solar-blue sm:text-sm p-3 border"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-solar-blue focus:ring-solar-blue sm:text-sm p-3 border"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-solar-blue focus:ring-solar-blue sm:text-sm p-3 border"
                  placeholder="(702) 555-0123"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700">Interested Service</label>
                <select
                  id="service"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-solar-blue focus:ring-solar-blue sm:text-sm p-3 border bg-white"
                >
                  <option>Free Solar Quote</option>
                  <option>Panel Cleaning</option>
                  <option>Repair / Diagnostics</option>
                  <option>Pool Heating Repair</option>
                  <option>Critter Guard Installation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-solar-blue focus:ring-solar-blue sm:text-sm p-3 border"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-solar-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-solar-blue transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;