import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "SARAH CHEN",
      role: "Senior Developer",
      company: "TechCorp",
      content: "SENTRY HAS COMPLETELY TRANSFORMED HOW WE HANDLE ERRORS. WE CATCH ISSUES BEFORE OUR USERS EVEN NOTICE THEM.",
      rating: 5,
      bgColor: "bg-neo-pink",
      textColor: "text-neo-black",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "MIKE RODRIGUEZ",
      role: "DevOps Engineer", 
      company: "StartupXYZ",
      content: "THE PERFORMANCE MONITORING CAPABILITIES ARE INCREDIBLE. WE'VE IMPROVED OUR APP SPEED BY 40% USING SENTRY'S INSIGHTS.",
      rating: 5,
      bgColor: "bg-neo-green",
      textColor: "text-neo-black",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "EMILY JOHNSON",
      role: "CTO",
      company: "GrowthCo",
      content: "SENTRY'S RELEASE TRACKING HELPED US IDENTIFY DEPLOYMENT ISSUES INSTANTLY. IT'S AN ESSENTIAL TOOL FOR ANY SERIOUS DEVELOPMENT TEAM.",
      rating: 5,
      bgColor: "bg-neo-purple",
      textColor: "text-neo-white",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 neo-dots-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black text-neo-black mb-6 leading-none">
            <span className="block">LOVED BY DEVELOPERS</span>
            <span className="block mt-4">
              <span className="bg-neo-red text-neo-white px-4 py-2 inline-block border-[3px] border-neo-black shadow-neo-lg rotate-2">WORLDWIDE</span>
            </span>
          </h2>
          <p className="text-xl font-display font-bold text-neo-black max-w-3xl mx-auto uppercase">
            Join thousands of developers who trust Sentry to monitor their applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} border-[4px] border-neo-black p-8 shadow-neo-lg hover:shadow-neo hover:translate-x-2 hover:translate-y-2 transition-all duration-150 transform ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${testimonial.textColor} fill-current`} />
                  ))}
                </div>
                <Quote className={`w-10 h-10 ${testimonial.textColor} rotate-180`} />
              </div>
              
              <p className={`${testimonial.textColor} font-bold mb-6 leading-tight text-lg`}>
                {testimonial.content}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-neo-black border-[3px] border-neo-black overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className={`${testimonial.textColor} font-display font-black text-lg`}>{testimonial.name}</div>
                  <div className={`${testimonial.textColor} font-bold uppercase text-sm`}>{testimonial.role} @ {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-neo-orange border-[4px] border-neo-black px-8 py-6 shadow-neo-lg transform -rotate-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-neo-black fill-current" />
              ))}
            </div>
            <span className="text-neo-black font-display font-black text-2xl">4.8/5</span>
            <span className="text-neo-black font-bold uppercase">FROM 2,500+ REVIEWS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;