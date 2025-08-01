import React from 'react';
import { AlertTriangle, BarChart3, GitBranch, Users, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "ERROR MONITORING",
      description: "Catch every error, exception, and crash in real-time with detailed stack traces.",
      bgColor: "bg-neo-red",
      iconBg: "bg-neo-yellow",
      textColor: "text-neo-white",
      iconColor: "text-neo-black"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "PERFORMANCE TRACKING",
      description: "Track application performance, identify bottlenecks, optimize user experience.",
      bgColor: "bg-neo-purple",
      iconBg: "bg-neo-green",
      textColor: "text-neo-white",
      iconColor: "text-neo-black"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "RELEASE TRACKING",
      description: "Monitor the health of every release and quickly identify deployment issues.",
      bgColor: "bg-neo-green",
      iconBg: "bg-neo-pink",
      textColor: "text-neo-black",
      iconColor: "text-neo-black"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "USER IMPACT",
      description: "Understand how errors affect your users and prioritize fixes by impact.",
      bgColor: "bg-neo-orange",
      iconBg: "bg-neo-blue",
      textColor: "text-neo-black",
      iconColor: "text-neo-white"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "REAL-TIME ALERTS",
      description: "Get notified instantly when critical issues occur through multiple channels.",
      bgColor: "bg-neo-pink",
      iconBg: "bg-neo-black",
      textColor: "text-neo-black",
      iconColor: "text-neo-white"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SECURITY & COMPLIANCE",
      description: "Enterprise-grade security with SOC 2 compliance and data residency.",
      bgColor: "bg-neo-blue",
      iconBg: "bg-neo-white",
      textColor: "text-neo-white",
      iconColor: "text-neo-black"
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 neo-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black text-neo-black mb-6 leading-none">
            <span className="block">EVERYTHING YOU NEED</span>
            <span className="block mt-4">TO <span className="bg-neo-pink text-neo-black px-4 py-2 inline-block border-[3px] border-neo-black shadow-neo-lg rotate-2">MONITOR</span> YOUR APPS</span>
          </h2>
          <p className="text-xl font-display font-bold text-neo-black max-w-3xl mx-auto uppercase">
            Comprehensive application monitoring that helps you ship better software faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group ${feature.bgColor} border-[3px] border-neo-black p-8 shadow-neo-lg hover:shadow-neo hover:translate-x-2 hover:translate-y-2 transition-all duration-150 transform hover:-rotate-1`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconBg} border-[3px] border-neo-black mb-6 shadow-neo group-hover:rotate-12 transition-transform duration-300`}>
                <span className={feature.iconColor}>{feature.icon}</span>
              </div>
              <h3 className={`text-2xl font-display font-black ${feature.textColor} mb-4`}>
                {feature.title}
              </h3>
              <p className={`${feature.textColor} font-bold leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-neo-black text-neo-white px-10 py-5 border-[3px] border-neo-black font-display font-bold text-lg uppercase tracking-wider shadow-neo-xl hover:shadow-neo hover:translate-x-2 hover:translate-y-2 transition-all duration-150 transform hover:rotate-1">
            EXPLORE ALL FEATURES →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;