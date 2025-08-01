import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-gray-900 font-semibold text-lg">Sentry</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features"
              className={`transition-colors duration-200 text-sm font-medium ${
                location.pathname === '/features' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/integrations"
              className={`transition-colors duration-200 text-sm font-medium ${
                location.pathname === '/integrations' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Integrations
            </Link>
            <Link 
              to="/pricing"
              className={`transition-colors duration-200 text-sm font-medium ${
                location.pathname === '/pricing' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pricing
            </Link>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
              Docs
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium flex items-center space-x-1">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
              Sign In
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/features"
                onClick={closeMenu}
                className={`block px-3 py-2 text-sm font-medium ${
                  location.pathname === '/features' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/integrations"
                onClick={closeMenu}
                className={`block px-3 py-2 text-sm font-medium ${
                  location.pathname === '/integrations' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Integrations
              </Link>
              <Link 
                to="/pricing"
                onClick={closeMenu}
                className={`block px-3 py-2 text-sm font-medium ${
                  location.pathname === '/pricing' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pricing
              </Link>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                Docs
              </a>
              <div className="px-3 py-4 space-y-2">
                <button className="w-full text-left text-gray-600 hover:text-gray-900 py-2 text-sm font-medium">
                  Sign In
                </button>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;