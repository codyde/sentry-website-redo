import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "DEVELOPER",
      price: "FREE",
      description: "Perfect for personal projects",
      features: [
        "5,000 errors per month",
        "30 days data retention",
        "Email notifications", 
        "Basic integrations",
        "Community support"
      ],
      cta: "GET STARTED",
      bgColor: "bg-neo-white",
      borderColor: "border-neo-black",
      textColor: "text-neo-black",
      ctaBg: "bg-neo-green",
      ctaText: "text-neo-black",
      popular: false
    },
    {
      name: "TEAM",
      price: "$26",
      period: "/MONTH",
      description: "Ideal for growing teams",
      features: [
        "100,000 errors per month",
        "90 days data retention",
        "Slack & email alerts",
        "All integrations",
        "Release tracking",
        "Performance monitoring",
        "Priority support"
      ],
      cta: "START TRIAL",
      bgColor: "bg-neo-pink",
      borderColor: "border-neo-black",
      textColor: "text-neo-black",
      ctaBg: "bg-neo-black",
      ctaText: "text-neo-white",
      popular: true
    },
    {
      name: "ORGANIZATION", 
      price: "$80",
      period: "/MONTH",
      description: "For larger teams",
      features: [
        "1,000,000 errors per month", 
        "Unlimited data retention",
        "Custom alerts & workflows",
        "Advanced search & filtering",
        "Custom dashboards",
        "SSO & advanced security",
        "Dedicated support",
        "SLA guarantee"
      ],
      cta: "CONTACT SALES",
      bgColor: "bg-neo-blue",
      borderColor: "border-neo-black",
      textColor: "text-neo-white",
      ctaBg: "bg-neo-yellow",
      ctaText: "text-neo-black",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute inset-0 neo-dots-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black text-neo-black mb-6 leading-none">
            <span className="block">SIMPLE, TRANSPARENT</span>
            <span className="block mt-4">
              <span className="bg-neo-orange text-neo-black px-4 py-2 inline-block border-[3px] border-neo-black shadow-neo-lg -rotate-2">PRICING</span>
            </span>
          </h2>
          <p className="text-xl font-display font-bold text-neo-black max-w-3xl mx-auto uppercase">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.bgColor} border-[4px] ${plan.borderColor} p-8 transition-all duration-150 transform ${
                plan.popular 
                  ? 'shadow-neo-xl scale-105 -rotate-1' 
                  : 'shadow-neo-lg hover:shadow-neo hover:translate-x-2 hover:translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 -right-5 bg-neo-red text-neo-white px-4 py-2 border-[3px] border-neo-black shadow-neo rotate-12">
                  <span className="font-display font-bold text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-3xl font-display font-black ${plan.textColor} mb-4`}>{plan.name}</h3>
                <div className="mb-4">
                  <span className={`text-6xl font-display font-black ${plan.textColor}`}>{plan.price}</span>
                  {plan.period && <span className={`${plan.textColor} text-xl font-bold`}>{plan.period}</span>}
                </div>
                <p className={`${plan.textColor} font-bold uppercase`}>{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 ${plan.textColor === 'text-neo-white' ? 'bg-neo-white text-neo-black' : 'bg-neo-black text-neo-white'} flex items-center justify-center border-[2px] border-neo-black mt-0.5`}>
                      <Check className="w-4 h-4 font-bold" />
                    </div>
                    <span className={`${plan.textColor} font-bold`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 ${plan.ctaBg} ${plan.ctaText} border-[3px] border-neo-black font-display font-bold uppercase tracking-wider transition-all duration-150 shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 flex items-center justify-center space-x-2`}>
                <span>{plan.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center bg-neo-purple border-[3px] border-neo-black p-8 shadow-neo-lg max-w-2xl mx-auto transform rotate-1">
          <p className="text-neo-white font-display font-bold text-lg mb-4 uppercase">
            Need a custom plan? We offer volume discounts and enterprise features.
          </p>
          <button className="bg-neo-white text-neo-black px-8 py-3 border-[3px] border-neo-black font-display font-bold uppercase tracking-wider shadow-neo hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
            CONTACT OUR SALES TEAM →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;