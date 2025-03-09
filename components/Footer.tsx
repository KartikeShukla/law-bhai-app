import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Law Bhai</h3>
            <p className="mb-4">
              Making legal services accessible and affordable for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/legal-consultation" className="hover:text-white">Legal Consultation</Link></li>
              <li><Link href="/services/document-review" className="hover:text-white">Document Review</Link></li>
              <li><Link href="/services/contracts" className="hover:text-white">Contracts</Link></li>
              <li><Link href="/services/legal-research" className="hover:text-white">Legal Research</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Law Bhai. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.338 8.336c.531 0 1.012.212 1.443.637a2.09 2.09 0 0 1 .643 1.515v7.126a2.09 2.09 0 0 1-.643 1.516 2.12 2.12 0 0 1-1.443.636H7.62a2.12 2.12 0 0 1-1.442-.636 2.09 2.09 0 0 1-.643-1.516v-7.126c0-.59.214-1.09.643-1.515A2.12 2.12 0 0 1 7.62 8.336h8.718ZM16.15 7H7.81C6.8 7 5.95 7.33 5.27 8.003c-.68.675-1.022 1.515-1.022 2.517v7.126c0 1.002.341 1.842 1.022 2.516.68.675 1.53 1.012 2.54 1.012h8.34c1.01 0 1.86-.337 2.54-1.012.684-.674 1.022-1.514 1.022-2.516v-7.126c0-1.002-.338-1.842-1.02-2.517C18.01 7.33 17.16 7 16.15 7Z" />
                <path d="M9.234 14.656V12.14H7.773v2.516h1.46ZM14.466 10.678a2.806 2.806 0 0 1 1.393.343c.425.229.758.56.996.997.243.437.365.94.365 1.515v3.081h-1.446v-2.851c0-.455-.126-.8-.378-1.039-.253-.239-.574-.358-.966-.358-.396 0-.718.12-.97.358-.253.239-.38.584-.38 1.039v2.851h-1.46v-5.16h1.46v.602c.271-.224.556-.393.854-.507.302-.114.62-.171.532-.171Z" />
                <path d="M8.519 10.154a.789.789 0 0 1-.59-.24.774.774 0 0 1-.246-.576c0-.224.082-.415.246-.576a.789.789 0 0 1 .59-.24c.227 0 .424.08.59.24a.774.774 0 0 1 .246.576.774.774 0 0 1-.246.577.784.784 0 0 1-.59.24Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;