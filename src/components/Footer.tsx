import React from 'react';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "PRODUCT",
      links: [
        "Error Monitoring",
        "Performance Monitoring", 
        "Release Health",
        "Integrations",
        "Security",
        "Pricing"
      ]
    },
    {
      title: "RESOURCES",
      links: [
        "Documentation",
        "API Reference",
        "Guides & Tutorials",
        "Blog",
        "Community",
        "Status Page"
      ]
    },
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Partners",
        "Contact",
        "Privacy Policy"
      ]
    },
    {
      title: "SUPPORT",
      links: [
        "Help Center",
        "Contact Support",
        "System Status",
        "Bug Reports",
        "Feature Requests",
        "Service Level Agreement"
      ]
    }
  ];

  return (
    <footer className="border-t-[4px] border-neo-black pt-20 pb-8 bg-neo-black relative">
      <div className="absolute inset-0 neo-grid-pattern opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-neo-yellow flex items-center justify-center border-[3px] border-neo-white shadow-neo-sm">
                <span className="text-neo-black font-display font-bold text-xl">S</span>
              </div>
              <span className="text-neo-white font-display font-bold text-2xl">SENTRY</span>
            </div>
            <p className="text-neo-white mb-6 max-w-md font-bold uppercase">
              Application monitoring that helps developers ship better software faster. 
              Catch errors, track performance, and monitor releases.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="bg-neo-pink w-12 h-12 flex items-center justify-center border-[3px] border-neo-white hover:rotate-6 transition-all duration-150">
                <Github className="w-6 h-6 text-neo-black" />
              </a>
              <a href="#" className="bg-neo-blue w-12 h-12 flex items-center justify-center border-[3px] border-neo-white hover:rotate-6 transition-all duration-150">
                <Twitter className="w-6 h-6 text-neo-white" />
              </a>
              <a href="#" className="bg-neo-green w-12 h-12 flex items-center justify-center border-[3px] border-neo-white hover:rotate-6 transition-all duration-150">
                <Linkedin className="w-6 h-6 text-neo-black" />
              </a>
              <a href="#" className="bg-neo-red w-12 h-12 flex items-center justify-center border-[3px] border-neo-white hover:rotate-6 transition-all duration-150">
                <Youtube className="w-6 h-6 text-neo-white" />
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-neo-yellow font-display font-bold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-neo-white hover:text-neo-yellow transition-colors duration-200 font-bold text-sm uppercase">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t-[3px] border-neo-white pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-neo-yellow font-display font-bold">
              © 2025 SENTRY. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-neo-white hover:text-neo-yellow font-bold transition-colors duration-200 uppercase">
                Terms of Service
              </a>
              <a href="#" className="text-neo-white hover:text-neo-yellow font-bold transition-colors duration-200 uppercase">
                Privacy Policy
              </a>
              <a href="#" className="text-neo-white hover:text-neo-yellow font-bold transition-colors duration-200 uppercase">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;