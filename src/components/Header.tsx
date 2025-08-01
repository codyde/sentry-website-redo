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
      isScrolled ? 'bg-neo-pink border-b-[3px] border-neo-black' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-neo-black flex items-center justify-center shadow-neo-sm group-hover:shadow-neo transition-all duration-150 group-hover:-rotate-6">
              <span className="text-neo-white font-display font-bold text-xl">S</span>
            </div>
            <span className="text-neo-black font-display font-bold text-2xl tracking-tight">SENTRY</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features"
              className={`font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
                location.pathname === '/features' 
                  ? 'text-neo-black border-b-[3px] border-neo-black pb-1' 
                  : 'text-neo-black hover:text-neo-blue'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/integrations"
              className={`font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
                location.pathname === '/integrations' 
                  ? 'text-neo-black border-b-[3px] border-neo-black pb-1' 
                  : 'text-neo-black hover:text-neo-blue'
              }`}
            >
              Integrations
            </Link>
            <Link 
              to="/pricing"
              className={`font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
                location.pathname === '/pricing' 
                  ? 'text-neo-black border-b-[3px] border-neo-black pb-1' 
                  : 'text-neo-black hover:text-neo-blue'
              }`}
            >
              Pricing
            </Link>
            <a href="#" className="text-neo-black hover:text-neo-blue transition-colors duration-200 font-display font-bold text-sm uppercase tracking-wider">
              Docs
            </a>
            <a href="#" className="text-neo-black hover:text-neo-blue transition-colors duration-200 font-display font-bold text-sm flex items-center space-x-2 uppercase tracking-wider">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-neo-white text-neo-black px-6 py-3 border-[3px] border-neo-black font-display font-bold text-sm uppercase tracking-wider hover:bg-neo-green transition-all duration-150 shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1">
              Sign In
            </button>
            <button className="bg-neo-blue text-neo-white px-6 py-3 border-[3px] border-neo-black font-display font-bold text-sm uppercase tracking-wider shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 transition-all duration-150 flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            className="md:hidden text-neo-black p-2 bg-neo-white border-[3px] border-neo-black shadow-neo-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-neo-pink border-[3px] border-neo-black mt-4 shadow-neo">
            <div className="p-4 space-y-4">
              <Link 
                to="/features"
                onClick={closeMenu}
                className={`block px-4 py-3 font-display font-bold text-sm uppercase tracking-wider ${
                  location.pathname === '/features' 
                    ? 'bg-neo-black text-neo-white' 
                    : 'text-neo-black hover:bg-neo-white'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/integrations"
                onClick={closeMenu}
                className={`block px-4 py-3 font-display font-bold text-sm uppercase tracking-wider ${
                  location.pathname === '/integrations' 
                    ? 'bg-neo-black text-neo-white' 
                    : 'text-neo-black hover:bg-neo-white'
                }`}
              >
                Integrations
              </Link>
              <Link 
                to="/pricing"
                onClick={closeMenu}
                className={`block px-4 py-3 font-display font-bold text-sm uppercase tracking-wider ${
                  location.pathname === '/pricing' 
                    ? 'bg-neo-black text-neo-white' 
                    : 'text-neo-black hover:bg-neo-white'
                }`}
              >
                Pricing
              </Link>
              <a href="#" className="block px-4 py-3 text-neo-black hover:bg-neo-white font-display font-bold text-sm uppercase tracking-wider">
                Docs
              </a>
              <div className="pt-4 space-y-3 border-t-[3px] border-neo-black">
                <button className="w-full bg-neo-white text-neo-black px-6 py-3 border-[3px] border-neo-black font-display font-bold text-sm uppercase tracking-wider">
                  Sign In
                </button>
                <button className="w-full bg-neo-blue text-neo-white px-6 py-3 border-[3px] border-neo-black font-display font-bold text-sm uppercase tracking-wider shadow-neo">
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