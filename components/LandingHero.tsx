import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const LandingHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center md:text-left md:flex md:items-center md:space-x-8 lg:space-x-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Legal advice made</span>
              <span className="block text-primary">simple and accessible</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-md mx-auto md:mx-0">
              Get expert legal assistance when you need it. Law Bhai connects you with qualified legal professionals at affordable rates.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="/services">
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 p-8 md:p-10 shadow-xl">
              <div className="absolute top-4 right-4 bg-white/90 rounded-full px-4 py-2 text-xs font-medium text-primary">
                Featured
              </div>
              <h3 className="text-xl font-bold mb-3">Free Case Evaluation</h3>
              <p className="text-gray-600 mb-6">
                Describe your legal issue and get a free initial assessment from our experts.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your legal issue"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <Button className="w-full">Submit Request</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;