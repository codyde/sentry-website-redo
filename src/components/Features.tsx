import React from 'react';
import { AlertTriangle, BarChart3, GitBranch, Users, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Error Monitoring",
      description: "Catch every error, exception, and crash in real-time with detailed stack traces and context.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Track application performance, identify bottlenecks, and optimize user experience.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Release Tracking",
      description: "Monitor the health of every release and quickly identify issues in new deployments.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Impact Analysis",
      description: "Understand how errors affect your users and prioritize fixes based on user impact.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Alerts",
      description: "Get notified instantly when critical issues occur through multiple channels.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2 compliance and data residency options.",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section id="features" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Everything you need to
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              monitor your apps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Comprehensive application monitoring that helps you ship better software faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50/50 border border-gray-200/50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:border-gray-300/50 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;