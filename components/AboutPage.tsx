import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle, Target, Users, Zap, Award, Heart } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const FadeIn: React.FC<{ 
  children: React.ReactNode; 
  delay?: number; 
  className?: string; 
  direction?: 'up' | 'left' | 'right' | 'none' 
}> = ({ children, delay = 0, className = "", direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once visible to only animate once
          // observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const getTransformClass = () => {
    if (!isVisible) {
      if (direction === 'up') return 'translate-y-16';
      if (direction === 'left') return '-translate-x-16';
      if (direction === 'right') return 'translate-x-16';
      return '';
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransformClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-16 bg-black min-h-screen text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Hero */}
        <div className="mb-24 text-center md:text-left">
            <FadeIn delay={100}>
              <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">About Voxora</span>
            </FadeIn>
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Global Standards.<br/>Smarter Economics.</h1>
            </FadeIn>
        </div>

        {/* Section 1: Quality & Cost */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
            <div className="order-2 lg:order-1">
                <FadeIn direction="left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Delivering World-Class Quality at <span className="text-purple-500">30% Less Cost</span>
                    </h2>
                </FadeIn>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                    <FadeIn delay={200} direction="left">
                        <p>
                            We are an Australian-based company proudly running our core operations in Pakistan. This strategic setup allows us to deliver world-class quality at a fraction of the cost making our services up to 30% more cost-effective than those in the US, UK, Canada and Australia.
                        </p>
                    </FadeIn>
                    <FadeIn delay={400} direction="left">
                        <p>
                            By combining Australian business standards with the operational efficiency of our Pakistan-based team, we're able to offer exceptional value without compromising on quality, communication, or performance.
                        </p>
                    </FadeIn>
                    <FadeIn delay={600} direction="up">
                        <div className="bg-neutral-900/50 border-l-4 border-purple-600 p-6 rounded-r-xl mt-8 hover:bg-neutral-900 transition-colors duration-500">
                            <p className="text-white italic font-medium">
                                "Our goal is simple: to help businesses scale smarter, save more, and experience excellence in every interaction. Whether you're looking for dedicated support, streamlined operations, or end-to-end service solutions, we bring a perfect balance of affordability, reliability, and results."
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] w-full">
                {/* Image matching the vibe of the 'stone' reference - clean, minimal, abstract */}
                <FadeIn direction="right" delay={300} className="h-full w-full">
                    <div className="relative h-full w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20 group">
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            alt="Abstract minimalist shape representing efficiency"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[1.5s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                </FadeIn>
            </div>
        </div>

        {/* Section 2: Mission & Values */}
        <FadeIn direction="up">
            <div className="bg-neutral-900/20 border border-neutral-800 rounded-3xl p-8 md:p-20 mb-40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-purple-600/10 blur-[100px] rounded-full animate-pulse"></div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <FadeIn delay={200}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
                            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                                To redefine global outsourcing by providing premium cost-effective customer support solutions that help businesses scale faster — without compromising on quality.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
                        <div className="md:col-span-2 text-center mb-4">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-purple-500/30 inline-block pb-2">Our Core Values</h3>
                        </div>

                        {[
                            { title: "Excellence", desc: "We aim for nothing less than outstanding results", icon: Award },
                            { title: "Integrity", desc: "We stay transparent, honest, and committed to our word", icon: Heart },
                            { title: "Efficiency", desc: "Smart operations mean more savings and smoother outcomes", icon: Zap },
                            { title: "Innovation", desc: "We continuously improve to deliver better experiences every day", icon: Target },
                            { title: "Partnership", desc: "Your success is our success — we grow together", icon: Users }
                        ].map((val, i) => (
                            <FadeIn key={i} delay={i * 100 + 300} direction="up">
                                <div className="flex gap-5 group">
                                    <div className="mt-1 w-12 h-12 bg-purple-900/20 rounded-full flex items-center justify-center shrink-0 border border-purple-500/20 group-hover:border-purple-500 transition-colors duration-300">
                                        <val.icon className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{val.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{val.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>

        {/* Section 3: Founders */}
        <div className="mb-20">
            <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Meet The Founders</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
                {/* Founder 1 */}
                <FadeIn delay={200} direction="left">
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 border border-neutral-800">
                            <img
                                src="/assets/founder1.jpg"
                                alt="Co-Founder"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="h-1 w-12 bg-purple-500 mb-2"></div>
                                <p className="text-gray-300 text-sm">Passionate about operational excellence and building diverse, high-performing teams.</p>
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-500 transition-colors">Co-Founder</h3>
                        <p className="text-purple-500 font-medium tracking-wide uppercase text-sm">Strategy & Operations</p>
                    </div>
                </FadeIn>

                {/* Founder 2 */}
                <FadeIn delay={400} direction="right">
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 border border-neutral-800">
                            <img
                                src="/assets/founder2.jpg"
                                alt="Co-Founder"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="h-1 w-12 bg-purple-500 mb-2"></div>
                                <p className="text-gray-300 text-sm">Driving growth through innovative technology solutions and scalable infrastructure.</p>
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-500 transition-colors">Co-Founder</h3>
                        <p className="text-purple-500 font-medium tracking-wide uppercase text-sm">Technology & Growth</p>
                    </div>
                </FadeIn>
            </div>
        </div>

      </div>
    </div>
  );
};