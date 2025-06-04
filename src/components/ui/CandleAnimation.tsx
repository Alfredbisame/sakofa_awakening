import { useState, useEffect } from 'react';

type CandleAnimationProps = {
  size?: 'small' | 'medium' | 'large';
};

const CandleAnimation = ({ size = 'medium' }: CandleAnimationProps) => {
  const [glowIntensity, setGlowIntensity] = useState(0.8);
  
  // Random flickering effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      // Random flicker between 0.7 and 1
      const newIntensity = 0.7 + Math.random() * 0.3;
      setGlowIntensity(newIntensity);
    }, 100);
    
    return () => clearInterval(flickerInterval);
  }, []);

  // Size classes
  const sizeConfig = {
    small: {
      candle: 'w-4 h-12',
      flame: 'w-3 h-4',
      glow: 'w-6 h-6'
    },
    medium: {
      candle: 'w-6 h-20',
      flame: 'w-4 h-6',
      glow: 'w-10 h-10'
    },
    large: {
      candle: 'w-8 h-32',
      flame: 'w-6 h-10',
      glow: 'w-16 h-16'
    }
  };
  
  return (
    <div className="relative flex flex-col items-center">
      {/* Candle */}
      <div className={`relative ${sizeConfig[size].candle} bg-gradient-to-b from-amber-100 to-amber-200 dark:from-amber-200 dark:to-amber-300 rounded-sm z-10`}>
        {/* Wick */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-3 bg-stone-800"></div>
        
        {/* Flame */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          {/* Glow effect */}
          <div 
            className={`absolute bottom-0 ${sizeConfig[size].glow} rounded-full bg-yellow-500 dark:bg-yellow-400 filter blur-md z-0`}
            style={{ opacity: glowIntensity * 0.6 }}
          ></div>
          
          {/* Flame shape */}
          <div 
            className={`${sizeConfig[size].flame} bg-gradient-to-t from-yellow-500 via-yellow-300 to-white dark:from-yellow-500 dark:via-yellow-200 dark:to-white rounded-full rounded-b-none animate-flicker z-10`}
            style={{ opacity: glowIntensity }}
          ></div>
        </div>
        
        {/* Wax drips */}
        <div className="absolute top-1 right-0 w-1 h-2 bg-amber-50 dark:bg-amber-100 rounded-full transform translate-x-0.5"></div>
        <div className="absolute top-3 left-0 w-1 h-3 bg-amber-50 dark:bg-amber-100 rounded-full transform -translate-x-0.5"></div>
      </div>
      
      {/* Candle holder */}
      <div className={`w-${parseInt(sizeConfig[size].candle.split('-')[1]) + 4} h-2 bg-amber-700 dark:bg-amber-800 rounded-md mt-1`}></div>
    </div>
  );
};

export default CandleAnimation;