
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir to-noir-dark z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="overflow-hidden mb-4">
          <h2 className="text-gold font-medium tracking-wider animate-text-reveal animate-delay-100">
            WELCOME TO MY PORTFOLIO
          </h2>
        </div>
        
        <div className="overflow-hidden mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold animate-text-reveal animate-delay-200">
            I'm <span className="text-gold">Alexia Mason</span>
          </h1>
        </div>
        
        <div className="overflow-hidden mb-8">
          <p className="text-xl md:text-2xl text-foreground/80 animate-text-reveal animate-delay-300">
            Creative Developer & Designer
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in opacity-0 animate-delay-500">
          <Link to="/projects" className="btn-primary w-full sm:w-auto">
            View My Work
          </Link>
          <Link to="/contact" className="btn-outline w-full sm:w-auto">
            Contact Me
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0 animate-delay-1000">
        <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
        <ArrowDown className="text-gold animate-bounce-soft" size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
