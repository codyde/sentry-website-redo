import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-100/40 to-pink-100/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700 font-medium">Trusted by 100,000+ developers</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
            Code breaks,
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              fix it faster
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Application monitoring software considered "not bad" by 4 million developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <a 
              href="https://sentry.io/resources/sentry-build"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl text-base font-medium hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-2xl hover:scale-105 transform animate-pulse hover:animate-none"
            >
              <span>Try Sentry for Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <button className="group border border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-base font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              <span>Explore the sandbox</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6 mx-auto">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.2B+</div>
            <div className="text-gray-600 font-medium">Events monitored monthly</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-6 mx-auto">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Uptime guarantee</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-6 mx-auto">
              <Sparkles className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100K+</div>
            <div className="text-gray-600 font-medium">Organizations trust us</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;