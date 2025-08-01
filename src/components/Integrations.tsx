import React from 'react';

const Integrations = () => {
  const integrations = [
    { name: 'REACT', logo: '⚛️', bgColor: 'bg-neo-blue', textColor: 'text-neo-white' },
    { name: 'VUE.JS', logo: '🟢', bgColor: 'bg-neo-green', textColor: 'text-neo-black' },
    { name: 'ANGULAR', logo: '🅰️', bgColor: 'bg-neo-red', textColor: 'text-neo-white' },
    { name: 'NODE.JS', logo: '🟢', bgColor: 'bg-neo-purple', textColor: 'text-neo-white' },
    { name: 'PYTHON', logo: '🐍', bgColor: 'bg-neo-yellow', textColor: 'text-neo-black' },
    { name: 'DJANGO', logo: '🎯', bgColor: 'bg-neo-pink', textColor: 'text-neo-black' },
    { name: 'RUBY', logo: '💎', bgColor: 'bg-neo-red', textColor: 'text-neo-white' },
    { name: 'PHP', logo: '🐘', bgColor: 'bg-neo-purple', textColor: 'text-neo-white' },
    { name: 'JAVA', logo: '☕', bgColor: 'bg-neo-orange', textColor: 'text-neo-black' },
    { name: 'C#', logo: '#️⃣', bgColor: 'bg-neo-blue', textColor: 'text-neo-white' },
    { name: 'GO', logo: '🐹', bgColor: 'bg-neo-green', textColor: 'text-neo-black' },
    { name: 'RUST', logo: '🦀', bgColor: 'bg-neo-orange', textColor: 'text-neo-black' }
  ];

  return (
    <section id="integrations" className="py-32 relative">
      <div className="absolute inset-0 neo-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black text-neo-black mb-6 leading-none">
            <span className="block">WORKS WITH YOUR</span>
            <span className="block mt-4">
              <span className="bg-neo-blue text-neo-white px-4 py-2 inline-block border-[3px] border-neo-black shadow-neo-lg -rotate-2">FAVORITE</span>
              {' '}TECH
            </span>
          </h2>
          <p className="text-xl font-display font-bold text-neo-black max-w-3xl mx-auto uppercase">
            Seamlessly integrate with 100+ platforms, frameworks, and languages
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`group ${integration.bgColor} border-[3px] border-neo-black p-6 transition-all duration-150 shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 text-center transform hover:rotate-6`}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {integration.logo}
              </div>
              <h3 className={`font-display font-bold ${integration.textColor} text-sm`}>
                {integration.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-neo-purple border-[4px] border-neo-black p-12 text-center shadow-neo-xl transform rotate-1">
          <h3 className="text-4xl font-display font-black text-neo-white mb-4">
            DON'T SEE YOUR STACK?
          </h3>
          <p className="text-neo-white font-bold mb-8 max-w-2xl mx-auto uppercase text-lg">
            We support 100+ platforms and languages. If you don't see yours, 
            our universal SDK can help you get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-neo-black text-neo-white px-8 py-4 border-[3px] border-neo-white font-display font-bold uppercase tracking-wider shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
              VIEW ALL INTEGRATIONS →
            </button>
            <button className="bg-neo-yellow text-neo-black px-8 py-4 border-[3px] border-neo-black font-display font-bold uppercase tracking-wider shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
              CUSTOM SDK DOCS →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;