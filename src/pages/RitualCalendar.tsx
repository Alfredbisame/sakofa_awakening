import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import SacredChat from '../components/ui/SacredChat';
import CandleAnimation from '../components/ui/CandleAnimation';

const RitualCalendar = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Sacred Rituals | Sakofa Awakening';
  }, []);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Generate calendar days for current month view
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Add empty spaces for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: 0, date: null, rituals: [] });
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const rituals = getRitualsForDate(currentDate);
      days.push({ 
        day: i, 
        date: currentDate,
        rituals,
        moonPhase: getMoonPhase(currentDate)
      });
    }
    
    return days;
  };

  // Get moon phase (simplified for demo)
  const getMoonPhase = (date: Date) => {
    // Simplified moon phase calculation for demonstration
    const phases = ['new', 'waxing-crescent', 'first-quarter', 'waxing-gibbous', 
                   'full', 'waning-gibbous', 'last-quarter', 'waning-crescent'];
    
    // This is a simplified version - in a real app we would use actual calculations
    const day = date.getDate();
    
    if (day === 1 || day === 29) return 'new';
    if (day === 7 || day === 8) return 'first-quarter';
    if (day === 15) return 'full';
    if (day === 22 || day === 23) return 'last-quarter';
    if (day < 7) return 'waxing-crescent';
    if (day < 15) return 'waxing-gibbous';
    if (day < 22) return 'waning-gibbous';
    return 'waning-crescent';
  };

  // Sample ritual data
  const getRitualsForDate = (date: Date) => {
    const rituals = [
      {
        id: 1,
        title: 'New Moon Intention Setting',
        description: 'A sacred ritual to set intentions and plant seeds for the lunar cycle ahead.',
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1),
        type: 'new-moon',
        duration: '60 mins',
        facilitator: 'Elder Amara'
      },
      {
        id: 2,
        title: 'Full Moon Ancestral Communion',
        description: 'Connect with ancestral spirits during the powerful energy of the full moon.',
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 15),
        type: 'full-moon',
        duration: '90 mins',
        facilitator: 'Priestess Naya'
      },
      {
        id: 3,
        title: 'Waning Moon Release Ceremony',
        description: 'Let go of what no longer serves you and make space for new blessings.',
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 22),
        type: 'waning-moon',
        duration: '45 mins',
        facilitator: 'Healer Kofi'
      },
      {
        id: 4,
        title: 'Adinkra Symbol Meditation',
        description: 'A deep meditation on ancestral wisdom through sacred Adinkra symbols.',
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 7),
        type: 'first-quarter',
        duration: '60 mins',
        facilitator: 'Wisdom Keeper Nia'
      }
    ];
    
    return rituals.filter(ritual => 
      ritual.date.getDate() === date.getDate() &&
      ritual.date.getMonth() === date.getMonth() &&
      ritual.date.getFullYear() === date.getFullYear()
    );
  };

  // Navigation functions
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    setSelectedDate(null);
  };
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    setSelectedDate(null);
  };
  
  const days = getDaysInMonth(currentMonth);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get rituals for selected date
  const selectedDateRituals = selectedDate 
    ? getRitualsForDate(selectedDate) 
    : [];

  // Get upcoming rituals (next 3)
  const getUpcomingRituals = () => {
    const today = new Date();
    const allRituals = [];
    
    // Get rituals for current and next two months
    for (let i = 0; i < 3; i++) {
      const monthDate = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
      
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
        const rituals = getRitualsForDate(date);
        
        if (rituals.length > 0) {
          allRituals.push(...rituals.map(ritual => ({
            ...ritual,
            date: new Date(monthDate.getFullYear(), monthDate.getMonth(), day)
          })));
        }
      }
    }
    
    // Sort by date and return next 3
    return allRituals
      .filter(ritual => ritual.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 3);
  };
  
  const upcomingRituals = getUpcomingRituals();

  return (
    <div className="min-h-screen pt-24 pb-16 bg-amber-50 dark:bg-stone-900">
      <SacredChat />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-brown-900 text-amber-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sacred Moon Rituals</h1>
            <p className="text-lg text-amber-200 mb-2">
              Align with cosmic energies through our monthly moon phase rituals and ceremonies
            </p>
            <div className="flex justify-center">
              <CandleAnimation size="small" />
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Calendar */}
              <div className="lg:w-2/3">
                <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden">
                  {/* Calendar header */}
                  <div className="bg-brown-900 dark:bg-stone-900 text-amber-50 p-4">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={prevMonth} 
                        className="p-2 rounded-full hover:bg-brown-800 dark:hover:bg-stone-700 transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <h2 className="text-xl font-semibold">
                        {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                      </h2>
                      <button 
                        onClick={nextMonth} 
                        className="p-2 rounded-full hover:bg-brown-800 dark:hover:bg-stone-700 transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Calendar grid */}
                  <div className="p-4">
                    {/* Weekday headers */}
                    <div className="grid grid-cols-7 mb-2">
                      {weekdays.map(day => (
                        <div key={day} className="text-center py-2 text-sm font-medium text-brown-600 dark:text-amber-300">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    {/* Calendar days */}
                    <div className="grid grid-cols-7 gap-2">
                      {days.map((day, index) => (
                        <div 
                          key={index} 
                          className={`
                            min-h-16 p-1 rounded-md relative cursor-pointer
                            ${day.day === 0 ? 'opacity-0 pointer-events-none' : ''}
                            ${
                              selectedDate && day.date && 
                              selectedDate.getDate() === day.date.getDate() &&
                              selectedDate.getMonth() === day.date.getMonth() &&
                              selectedDate.getFullYear() === day.date.getFullYear()
                                ? 'bg-amber-100 dark:bg-stone-700'
                                : 'hover:bg-amber-50 dark:hover:bg-stone-700'
                            }
                          `}
                          onClick={() => day.date && setSelectedDate(day.date)}
                        >
                          {day.day > 0 && (
                            <>
                              {/* Moon phase indicator */}
                              {day.moonPhase && (
                                <div className="absolute top-1 right-1">
                                  <MoonPhaseIndicator phase={day.moonPhase} />
                                </div>
                              )}
                              
                              {/* Day number */}
                              <div className="text-right mb-1 font-medium text-brown-900 dark:text-amber-50">
                                {day.day}
                              </div>
                              
                              {/* Ritual indicators */}
                              {day.rituals && day.rituals.length > 0 && (
                                <div className="mt-1">
                                  {day.rituals.map((ritual: any) => (
                                    <div 
                                      key={ritual.id} 
                                      className={`
                                        text-xs p-1 mb-1 rounded truncate
                                        ${
                                          ritual.type === 'new-moon' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                                          ritual.type === 'full-moon' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                          ritual.type === 'waning-moon' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                                          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                        }
                                      `}
                                    >
                                      {ritual.title}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Selected date rituals */}
                {selectedDate && (
                  <div className="mt-6 bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-brown-900 dark:text-amber-50">
                      Rituals for {selectedDate.toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </h3>
                    
                    {selectedDateRituals.length > 0 ? (
                      <div className="space-y-4">
                        {selectedDateRituals.map(ritual => (
                          <RitualCard key={ritual.id} ritual={ritual} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-brown-700 dark:text-amber-200">
                        No rituals scheduled for this date. Choose another date or check our upcoming rituals.
                      </p>
                    )}
                  </div>
                )}
              </div>
              
              {/* Upcoming rituals */}
              <div className="lg:w-1/3">
                <div className="bg-brown-900 dark:bg-stone-900 text-amber-50 rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 border-b border-brown-800 dark:border-stone-700">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-amber-300 mr-2" />
                      <h3 className="text-xl font-semibold">Upcoming Rituals</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {upcomingRituals.map(ritual => (
                      <div key={ritual.id} className="mb-4 pb-4 border-b border-brown-800 dark:border-stone-700 last:border-0 last:mb-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-amber-200">{ritual.title}</h4>
                          <span className="text-xs bg-red-800 text-amber-100 px-2 py-1 rounded">
                            {ritual.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                        </div>
                        <p className="text-sm text-amber-100 mb-2">{ritual.description}</p>
                        <div className="flex justify-between text-xs text-amber-300">
                          <span>{ritual.date.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric'
                          })}</span>
                          <span>{ritual.duration} • {ritual.facilitator}</span>
                        </div>
                      </div>
                    ))}
                    
                    <button className="w-full mt-2 px-4 py-2 bg-red-800 hover:bg-red-700 text-amber-50 rounded-md transition-colors duration-300">
                      View All Rituals
                    </button>
                  </div>
                </div>
                
                {/* Moon phase guide */}
                <div className="mt-6 bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-brown-900 dark:text-amber-50">
                    Moon Phase Guide
                  </h3>
                  
                  <div className="space-y-3">
                    <MoonPhaseGuideItem 
                      phase="new" 
                      name="New Moon" 
                      description="Setting intentions and planting seeds for the cycle ahead" 
                    />
                    <MoonPhaseGuideItem 
                      phase="first-quarter" 
                      name="First Quarter" 
                      description="Taking action on intentions and overcoming challenges" 
                    />
                    <MoonPhaseGuideItem 
                      phase="full" 
                      name="Full Moon" 
                      description="Culmination, celebration, and connection with ancestors" 
                    />
                    <MoonPhaseGuideItem 
                      phase="last-quarter" 
                      name="Last Quarter" 
                      description="Release, forgiveness, and letting go of what no longer serves" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Moon phase indicator
const MoonPhaseIndicator = ({ phase }: { phase: string }) => {
  let icon;
  
  switch (phase) {
    case 'new':
      icon = <div className="w-4 h-4 rounded-full border border-current"></div>;
      break;
    case 'waxing-crescent':
      icon = (
        <div className="w-4 h-4 rounded-full overflow-hidden">
          <div className="w-2 h-4 bg-current float-left"></div>
          <div className="w-2 h-4 bg-transparent float-left"></div>
        </div>
      );
      break;
    case 'first-quarter':
      icon = (
        <div className="w-4 h-4 rounded-full overflow-hidden">
          <div className="w-2 h-4 bg-current float-left"></div>
          <div className="w-2 h-4 bg-transparent float-left"></div>
        </div>
      );
      break;
    case 'waxing-gibbous':
      icon = (
        <div className="w-4 h-4 rounded-full overflow-hidden">
          <div className="w-3 h-4 bg-current float-left"></div>
          <div className="w-1 h-4 bg-transparent float-left"></div>
        </div>
      );
      break;
    case 'full':
      icon = <div className="w-4 h-4 rounded-full bg-current"></div>;
      break;
    case 'waning-gibbous':
      icon = (
        <div className="w-4 h-4 rounded-full overflow-hidden">
          <div className="w-1 h-4 bg-transparent float-left"></div>
          <div className="w-3 h-4 bg-current float-left"></div>
        </div>
      );
      break;
    case 'last-quarter':
      icon = (
        <div className="w-4 h-4 rounded-full overflow-hidden">
          <div className="w-2 h-4 bg-transparent float-left"></div>
          <div className="w-2 h-4 bg-current float-left"></div>
        </div>
      );
      break;
    case 'waning-crescent':
      icon = (
        <div className="w-4 h-4 rounded-full overflow-hidden">
          <div className="w-3 h-4 bg-transparent float-left"></div>
          <div className="w-1 h-4 bg-current float-left"></div>
        </div>
      );
      break;
    default:
      icon = <div className="w-4 h-4 rounded-full bg-current"></div>;
  }
  
  return (
    <div className="text-yellow-600 dark:text-yellow-500" title={phase.replace('-', ' ')}>
      {icon}
    </div>
  );
};

// Ritual Card Component
const RitualCard = ({ ritual }: { ritual: any }) => {
  return (
    <div className={`p-4 rounded-lg border-l-4 ${
      ritual.type === 'new-moon' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 
      ritual.type === 'full-moon' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
      ritual.type === 'waning-moon' ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' :
      'border-green-500 bg-green-50 dark:bg-green-900/20'
    }`}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-brown-900 dark:text-amber-50">{ritual.title}</h4>
        <span className={`text-xs px-2 py-1 rounded ${
          ritual.type === 'new-moon' ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100' : 
          ritual.type === 'full-moon' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
          ritual.type === 'waning-moon' ? 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100' :
          'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
        }`}>
          {ritual.type.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
        </span>
      </div>
      <p className="text-brown-700 dark:text-amber-200 mb-4">{ritual.description}</p>
      <div className="flex justify-between text-sm text-brown-600 dark:text-amber-300">
        <span>Duration: {ritual.duration}</span>
        <span>Facilitator: {ritual.facilitator}</span>
      </div>
      <button className={`mt-4 w-full px-4 py-2 rounded text-white transition-colors duration-300 ${
        ritual.type === 'new-moon' ? 'bg-blue-600 hover:bg-blue-700' : 
        ritual.type === 'full-moon' ? 'bg-yellow-600 hover:bg-yellow-700' :
        ritual.type === 'waning-moon' ? 'bg-purple-600 hover:bg-purple-700' :
        'bg-green-600 hover:bg-green-700'
      }`}>
        Reserve Your Space
      </button>
    </div>
  );
};

// Moon Phase Guide Item
const MoonPhaseGuideItem = ({ phase, name, description }: { phase: string; name: string; description: string }) => {
  return (
    <div className="flex items-center">
      <div className="mr-3">
        <MoonPhaseIndicator phase={phase} />
      </div>
      <div>
        <h4 className="font-medium text-brown-900 dark:text-amber-50">{name}</h4>
        <p className="text-sm text-brown-700 dark:text-amber-200">{description}</p>
      </div>
    </div>
  );
};

export default RitualCalendar;