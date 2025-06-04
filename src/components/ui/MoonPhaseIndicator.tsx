import { useState, useEffect } from 'react';

type MoonPhaseIndicatorProps = {
  size?: 'small' | 'medium' | 'large';
};

const MoonPhaseIndicator = ({ size = 'medium' }: MoonPhaseIndicatorProps) => {
  const [phase, setPhase] = useState<number>(0); // 0-29 (0 = new moon, 15 = full moon)
  const [phaseTitle, setPhaseTitle] = useState<string>('');

  // Calculate the current moon phase (simplified)
  useEffect(() => {
    const calculateMoonPhase = () => {
      // Using a simplified algorithm for demo purposes
      const now = new Date();
      
      // Jan 6, 2000 was a new moon
      const newMoon = new Date('January 6, 2000 00:00:00');
      const daysSinceNewMoon = (now.getTime() - newMoon.getTime()) / (1000 * 60 * 60 * 24);
      
      // Moon cycle is approximately 29.53 days
      const phase = Math.floor(daysSinceNewMoon % 29.53);
      
      setPhase(phase);
      
      // Set phase title
      if (phase === 0) {
        setPhaseTitle('New Moon');
      } else if (phase < 7) {
        setPhaseTitle('Waxing Crescent');
      } else if (phase === 7) {
        setPhaseTitle('First Quarter');
      } else if (phase < 15) {
        setPhaseTitle('Waxing Gibbous');
      } else if (phase === 15) {
        setPhaseTitle('Full Moon');
      } else if (phase < 22) {
        setPhaseTitle('Waning Gibbous');
      } else if (phase === 22) {
        setPhaseTitle('Last Quarter');
      } else {
        setPhaseTitle('Waning Crescent');
      }
    };
    
    calculateMoonPhase();
    
    // Update moon phase daily
    const interval = setInterval(calculateMoonPhase, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Size classes
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  // Determine the shadow position based on moon phase
  const shadowStyle = {
    right: phase <= 15 ? `${(phase / 15) * 100}%` : '0%',
    left: phase > 15 ? `${((29.53 - phase) / 15) * 100}%` : '0%',
  };

  return (
    <div className="relative group">
      <div 
        className={`${sizeClasses[size]} rounded-full bg-amber-100 dark:bg-amber-200 overflow-hidden relative`}
        title={phaseTitle}
      >
        <div 
          className="absolute top-0 bottom-0 bg-stone-800 transition-all duration-500 ease-in-out"
          style={shadowStyle}
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-brown-800 text-amber-100 text-xs py-1 px-2 rounded whitespace-nowrap">
        {phaseTitle}
      </div>
    </div>
  );
};

export default MoonPhaseIndicator;