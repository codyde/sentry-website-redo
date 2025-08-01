import React from 'react';

const Integrations = () => {
  const integrations = [
    { name: 'React', logo: '⚛️', color: 'bg-blue-50 hover:bg-blue-100' },
    { name: 'Vue.js', logo: '🟢', color: 'bg-green-50 hover:bg-green-100' },
    { name: 'Angular', logo: '🅰️', color: 'bg-red-50 hover:bg-red-100' },
    { name: 'Node.js', logo: '🟢', color: 'bg-green-50 hover:bg-green-100' },
    { name: 'Python', logo: '🐍', color: 'bg-yellow-50 hover:bg-yellow-100' },
    { name: 'Django', logo: '🎯', color: 'bg-green-50 hover:bg-green-100' },
    { name: 'Ruby', logo: '💎', color: 'bg-red-50 hover:bg-red-100' },
    { name: 'PHP', logo: '🐘', color: 'bg-purple-50 hover:bg-purple-100' },
    { name: 'Java', logo: '☕', color: 'bg-orange-50 hover:bg-orange-100' },
    { name: 'C#', logo: '#️⃣', color: 'bg-purple-50 hover:bg-purple-100' },
    { name: 'Go', logo: '🐹', color: 'bg-blue-50 hover:bg-blue-100' },
    { name: 'Rust', logo: '🦀', color: 'bg-orange-50 hover:bg-orange-100' }
  ];

  return (
    <section id="integrations" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Works with your
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              favorite technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Seamlessly integrate with 100+ platforms, frameworks, and languages
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`group ${integration.color} border border-gray-200/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-md text-center`}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {integration.logo}
              </div>
              <h3 className="text-sm font-medium text-gray-900">
                {integration.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200/50 rounded-3xl p-12 text-center shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Don't see your stack?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We support 100+ platforms and languages. If you don't see yours, 
            our universal SDK can help you get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200">
              View All Integrations
            </button>
            <button className="text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
              Custom SDK Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;