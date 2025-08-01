import React from 'react';
import { AlertTriangle, BarChart3, GitBranch, Users, Clock, Shield } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "ERROR MONITORING",
      description: "CATCH EVERY ERROR, EXCEPTION, AND CRASH IN REAL-TIME WITH DETAILED STACK TRACES AND CONTEXT. GET COMPREHENSIVE ERROR TRACKING ACROSS ALL YOUR APPLICATIONS.",
      bgColor: "bg-neo-red",
      iconBg: "bg-neo-yellow",
      textColor: "text-neo-white",
      iconColor: "text-neo-black",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "PERFORMANCE MONITORING",
      description: "TRACK APPLICATION PERFORMANCE, IDENTIFY BOTTLENECKS, AND OPTIMIZE USER EXPERIENCE. MONITOR RESPONSE TIMES, THROUGHPUT, AND RESOURCE USAGE.",
      bgColor: "bg-neo-purple",
      iconBg: "bg-neo-green",
      textColor: "text-neo-white",
      iconColor: "text-neo-black",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: "RELEASE TRACKING",
      description: "MONITOR THE HEALTH OF EVERY RELEASE AND QUICKLY IDENTIFY ISSUES IN NEW DEPLOYMENTS. TRACK DEPLOYMENT SUCCESS AND ROLLBACK WHEN NEEDED.",
      bgColor: "bg-neo-green",
      iconBg: "bg-neo-pink",
      textColor: "text-neo-black",
      iconColor: "text-neo-black",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "USER IMPACT ANALYSIS",
      description: "UNDERSTAND HOW ERRORS AFFECT YOUR USERS AND PRIORITIZE FIXES BASED ON USER IMPACT. GET DETAILED USER SESSION REPLAYS AND ANALYTICS.",
      bgColor: "bg-neo-orange",
      iconBg: "bg-neo-blue",
      textColor: "text-neo-black",
      iconColor: "text-neo-white",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "REAL-TIME ALERTS",
      description: "GET NOTIFIED INSTANTLY WHEN CRITICAL ISSUES OCCUR THROUGH MULTIPLE CHANNELS. CONFIGURE SMART ALERTS THAT REDUCE NOISE AND FOCUS ON WHAT MATTERS.",
      bgColor: "bg-neo-pink",
      iconBg: "bg-neo-black",
      textColor: "text-neo-black",
      iconColor: "text-neo-white",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "SECURITY & COMPLIANCE",
      description: "ENTERPRISE-GRADE SECURITY WITH SOC 2 COMPLIANCE AND DATA RESIDENCY OPTIONS. KEEP YOUR SENSITIVE DATA SECURE WITH ADVANCED ENCRYPTION.",
      bgColor: "bg-neo-blue",
      iconBg: "bg-neo-white",
      textColor: "text-neo-white",
      iconColor: "text-neo-black",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black text-neo-black mb-6 leading-none">
            <span className="block">POWERFUL FEATURES FOR</span>
            <span className="block mt-4">
              <span className="bg-neo-pink text-neo-black px-4 py-2 inline-block border-[3px] border-neo-black shadow-neo-lg rotate-2">MODERN</span>
              {' '}DEVELOPMENT
            </span>
          </h1>
          <p className="text-xl font-display font-bold text-neo-black max-w-3xl mx-auto uppercase">
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
                <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.iconBg} border-[3px] border-neo-black mb-6 shadow-neo transform -rotate-6`}>
                  <span className={feature.iconColor}>{feature.icon}</span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-display font-black text-neo-black mb-6`}>
                  {feature.title}
                </h2>
                <div className={`${feature.bgColor} ${feature.textColor} p-6 border-[3px] border-neo-black shadow-neo-lg mb-8`}>
                  <p className="font-bold leading-tight text-lg">
                    {feature.description}
                  </p>
                </div>
                <button className="bg-neo-black text-neo-white px-8 py-4 border-[3px] border-neo-black font-display font-bold uppercase tracking-wider shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
                  LEARN MORE →
                </button>
              </div>
              <div className="flex-1">
                <div className={`relative border-[4px] border-neo-black overflow-hidden shadow-neo-xl transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neo-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 bg-neo-purple border-[4px] border-neo-black p-12 shadow-neo-xl transform -rotate-1">
          <h3 className="text-4xl font-display font-black text-neo-white mb-4">
            READY TO GET STARTED?
          </h3>
          <p className="text-neo-white font-bold mb-8 uppercase text-lg">
            Join thousands of developers who trust Sentry to monitor their applications
          </p>
          <button className="bg-neo-yellow text-neo-black px-10 py-5 border-[3px] border-neo-black font-display font-bold text-lg uppercase tracking-wider shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
            START FREE TRIAL →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;