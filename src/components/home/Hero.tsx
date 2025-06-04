import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CandleAnimation from '../ui/CandleAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-amber-50 dark:bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute transform rotate-45"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                border: '1px solid currentColor',
                opacity: Math.random() * 0.5 + 0.5,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-900 dark:text-amber-50 mb-6 leading-tight">
              Sakofa  <span className="text-yellow-600 relative">
                Light
                <span className="absolute -inset-1 bg-yellow-400 dark:bg-yellow-600 opacity-20 blur-md rounded-full"></span>
              </span> Awakening 
            </h1>
            <p className="text-xl text-brown-800 dark:text-amber-100 mb-8 max-w-2xl">
              A sacred, spiritually inspired platform guiding awakened souls to reconnect with ancestral wisdom and divine purpose on earth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/knowledge" 
                className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/rituals" 
                className="px-8 py-3 bg-transparent border-2 border-brown-800 dark:border-amber-200 text-brown-800 dark:text-amber-200 font-medium rounded-full hover:bg-brown-800 hover:text-white dark:hover:bg-amber-200 dark:hover:text-brown-900 transition-all duration-300 flex items-center justify-center"
              >
                View Sacred Rituals
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Circular glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 opacity-20 dark:opacity-30 blur-xl animate-pulse"></div>
              
              {/* Decorative circles */}
              <div className="absolute inset-0 border-4 border-amber-300 dark:border-amber-700 rounded-full opacity-30 animate-spin-slow"></div>
              <div className="absolute inset-4 border-2 border-red-400 dark:border-red-800 rounded-full opacity-40 animate-reverse-spin-slow"></div>
              
              {/* Central candle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <CandleAnimation size="large" />
              </div>
              
              {/* Adinkra symbols */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div 
                  key={i}
                  className="absolute w-12 h-12 flex items-center justify-center"
                  style={{
                    top: `calc(50% - 6px + ${Math.sin(angle * Math.PI / 180) * 160}px)`,
                    left: `calc(50% - 6px + ${Math.cos(angle * Math.PI / 180) * 160}px)`,
                  }}
                >
                  <div className="w-8 h-8 border-2 border-brown-900 dark:border-amber-200 rounded-full flex items-center justify-center transform rotate-45 opacity-70">
                    <div className="w-4 h-4 border border-current"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-8 h-12 border-2 border-brown-800 dark:border-amber-200 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brown-800 dark:bg-amber-200 rounded-full mt-2 animate-scrollDown"></div>
          </div>
          <span className="mt-2 text-sm text-brown-800 dark:text-amber-200">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;