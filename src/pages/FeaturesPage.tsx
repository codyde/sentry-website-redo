import React from 'react';
import { AlertTriangle, BarChart3, GitBranch, Users, Clock, Shield } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Error Monitoring",
      description: "Catch every error, exception, and crash in real-time with detailed stack traces and context. Get comprehensive error tracking across all your applications.",
      color: "bg-red-100 text-red-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Track application performance, identify bottlenecks, and optimize user experience. Monitor response times, throughput, and resource usage.",
      color: "bg-purple-100 text-purple-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Release Tracking",
      description: "Monitor the health of every release and quickly identify issues in new deployments. Track deployment success and rollback when needed.",
      color: "bg-green-100 text-green-600",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Impact Analysis",
      description: "Understand how errors affect your users and prioritize fixes based on user impact. Get detailed user session replays and analytics.",
      color: "bg-orange-100 text-orange-600",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Alerts",
      description: "Get notified instantly when critical issues occur through multiple channels. Configure smart alerts that reduce noise and focus on what matters.",
      color: "bg-pink-100 text-pink-600",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2 compliance and data residency options. Keep your sensitive data secure with advanced encryption.",
      color: "bg-blue-100 text-blue-600",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Powerful Features for
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Modern Development
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Comprehensive application monitoring that helps you ship better software faster with advanced debugging and performance insights
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
            >
              <div className="flex-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl mb-6`}>
                  {feature.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {feature.description}
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-300">
                  Learn More
                </button>
              </div>
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-8">
            Join thousands of developers who trust Sentry to monitor their applications
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;