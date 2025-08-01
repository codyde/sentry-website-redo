import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Asymmetrical background shapes */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-neo-pink border-[3px] border-neo-black shadow-neo-xl -rotate-12"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-neo-blue border-[3px] border-neo-black shadow-neo-xl rotate-12"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-neo-green border-[3px] border-neo-black shadow-neo rotate-45"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-neo-orange border-[3px] border-neo-black px-6 py-3 mb-8 shadow-neo-sm animate-bounce-slow">
            <Sparkles className="w-5 h-5 text-neo-black" />
            <span className="font-display font-bold text-neo-black uppercase tracking-wider">100K+ Devs Trust Us</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-black text-neo-black mb-8 leading-none">
            <span className="block">CODE BREAKS</span>
            <span className="block bg-neo-red text-neo-white px-4 py-2 inline-block border-[3px] border-neo-black shadow-neo-xl -rotate-2 mt-4">
              FIX IT FASTER
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neo-black max-w-3xl mx-auto mb-12 font-bold font-display leading-tight">
            APPLICATION MONITORING SOFTWARE CONSIDERED <span className="bg-neo-purple text-neo-white px-2 py-1 inline-block border-[2px] border-neo-black rotate-1">"NOT BAD"</span> BY 4 MILLION DEVELOPERS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a 
              href="https://sentry.io/resources/sentry-build"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-neo-pink text-neo-black px-8 py-4 border-[3px] border-neo-black font-display font-bold uppercase tracking-wider shadow-neo-lg hover:shadow-neo hover:translate-x-2 hover:translate-y-2 transition-all duration-150 flex items-center space-x-3 transform hover:rotate-1"
            >
              <span>TRY SENTRY FREE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
            </a>
            
            <button className="group bg-neo-white text-neo-black px-8 py-4 border-[3px] border-neo-black font-display font-bold uppercase tracking-wider shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 transition-all duration-150 hover:-rotate-1">
              <span>EXPLORE SANDBOX</span>
            </button>
          </div>
        </div>

        {/* Stats with neo-brutalist styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-neo-yellow border-[3px] border-neo-black p-8 shadow-neo-lg transform -rotate-2 hover:rotate-0 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-neo-blue border-[3px] border-neo-black mb-6 mx-auto shadow-neo">
              <TrendingUp className="w-8 h-8 text-neo-white" />
            </div>
            <div className="text-5xl font-display font-black text-neo-black mb-2">4.2B+</div>
            <div className="text-neo-black font-bold font-display uppercase tracking-wider">Events Monthly</div>
          </div>

          <div className="bg-neo-green border-[3px] border-neo-black p-8 shadow-neo-lg transform rotate-2 hover:rotate-0 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-neo-red border-[3px] border-neo-black mb-6 mx-auto shadow-neo">
              <Shield className="w-8 h-8 text-neo-white" />
            </div>
            <div className="text-5xl font-display font-black text-neo-black mb-2">99.9%</div>
            <div className="text-neo-black font-bold font-display uppercase tracking-wider">Uptime SLA</div>
          </div>

          <div className="bg-neo-purple border-[3px] border-neo-black p-8 shadow-neo-lg transform -rotate-1 hover:rotate-0 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-neo-orange border-[3px] border-neo-black mb-6 mx-auto shadow-neo">
              <Zap className="w-8 h-8 text-neo-black" />
            </div>
            <div className="text-5xl font-display font-black text-neo-white mb-2">100K+</div>
            <div className="text-neo-white font-bold font-display uppercase tracking-wider">Organizations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;