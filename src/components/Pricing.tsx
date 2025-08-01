import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Developer",
      price: "Free",
      description: "Perfect for personal projects and learning",
      features: [
        "5,000 errors per month",
        "30 days data retention",
        "Email notifications", 
        "Basic integrations",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Team",
      price: "$26",
      period: "/month",
      description: "Ideal for small teams and growing projects",
      features: [
        "100,000 errors per month",
        "90 days data retention",
        "Slack & email alerts",
        "All integrations",
        "Release tracking",
        "Performance monitoring",
        "Priority support"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Organization", 
      price: "$80",
      period: "/month",
      description: "For larger teams with advanced needs",
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
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Simple, transparent
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-black shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 text-lg">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                plan.popular
                  ? 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Need a custom plan? We offer volume discounts and enterprise features.
          </p>
          <button className="text-black hover:text-gray-700 font-medium transition-colors duration-200">
            Contact our sales team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;