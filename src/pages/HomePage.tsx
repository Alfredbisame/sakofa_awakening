import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import SacredChat from '../components/ui/SacredChat';
import { Calendar, Book, Users, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import CandleAnimation from '../components/ui/CandleAnimation';

const HomePage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Sakofa Awakening';
  }, []);

  const featuredContent = [
    {
      id: 1,
      title: 'The Power of Ancestral Connection',
      excerpt: 'Discover how reconnecting with ancestral wisdom can transform your spiritual journey and everyday life.',
      category: 'Spiritual Wisdom',
      date: 'Last Full Moon',
      image: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Sacred Rituals for Inner Peace',
      excerpt: 'Learn ancient rituals that bring balance and harmony to your spirit, mind, and body.',
      category: 'Rituals',
      date: 'Waxing Gibbous',
      image: 'https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Understanding Adinkra Symbols',
      excerpt: 'Explore the deep meaning behind traditional Adinkra symbols and their spiritual significance.',
      category: 'Ancestral Symbols',
      date: 'First Quarter',
      image: 'https://images.pexels.com/photos/6937501/pexels-photo-6937501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-stone-900 text-brown-900 dark:text-amber-50 transition-colors duration-300">
      <Hero />
      <SacredChat />
      
      {/* Main features section */}
      <section className="py-16 bg-amber-100 dark:bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sacred Offerings</h2>
            <p className="text-lg text-brown-800 dark:text-amber-100">
              Explore the four pillars of our ancestral platform, designed to guide your spiritual journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Book className="h-8 w-8 text-yellow-600" />}
              title="Knowledge Hub"
              description="Access sacred teachings, articles, and wisdom from spiritual messengers."
              linkTo="/knowledge"
            />
            <FeatureCard 
              icon={<Calendar className="h-8 w-8 text-red-600" />}
              title="Sacred Rituals"
              description="Follow moon phase rituals and spiritual ceremonies to align with cosmic energies."
              linkTo="/rituals"
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-green-600" />}
              title="Community Network"
              description="Connect with fellow seekers and share your spiritual journey in sacred spaces."
              linkTo="/community"
            />
            <FeatureCard 
              icon={<ShoppingBag className="h-8 w-8 text-purple-600" />}
              title="Sacred Shop"
              description="Discover spiritual services, offerings, and ways to support our mission."
              linkTo="/shop"
            />
          </div>
        </div>
      </section>
      
      {/* Featured content section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Wisdom</h2>
            <Link 
              to="/knowledge" 
              className="mt-4 md:mt-0 px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition-colors duration-300"
            >
              Explore All Teachings
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map(item => (
              <ContentCard key={item.id} content={item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming ritual */}
      <section className="py-16 bg-gradient-to-br from-red-900 to-brown-900 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <CandleAnimation size="medium" />
            </div>
            
            <div className="text-center pt-8">
              <span className="inline-block px-4 py-1 bg-red-800 text-amber-200 rounded-full text-sm font-medium mb-4">
                Next Sacred Ritual
              </span>
              <h2 className="text-3xl font-bold mb-2">Full Moon Ancestral Communion</h2>
              <p className="text-amber-200 mb-6">Join us for a powerful connection with ancestral spirits</p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-amber-300 mr-2" />
                  <span>May 23, 2025</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-amber-200 mr-2"></div>
                  <span>Full Moon Phase</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-5 h-5 text-center text-amber-300 mr-2">🌍</span>
                  <span>Virtual Gathering</span>
                </div>
              </div>
              
              <Link 
                to="/rituals" 
                className="inline-block px-8 py-3 bg-red-700 hover:bg-red-800 text-amber-50 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Reserve Your Sacred Space
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-16 bg-amber-50 dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sacred Testimonials</h2>
            <p className="text-lg text-brown-800 dark:text-amber-100">
              Hear from seekers who have walked the path before you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The ancestral wisdom shared here transformed my understanding of my purpose. I've never felt more connected to my roots."
              name="Amara K."
              title="Spiritual Seeker"
            />
            <TestimonialCard 
              quote="The monthly moon rituals have become essential to my spiritual practice. The guidance received has been profound and life-changing."
              name="Michael J."
              title="Light Worker"
              featured={true}
            />
            <TestimonialCard 
              quote="Finding this community was like coming home. The teachings resonate with ancient truth that my soul has been seeking."
              name="Serena T."
              title="Ancestral Healer"
            />
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-brown-900 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Sacred Journey</h2>
            <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
              Join our community of seekers and embrace the wisdom of the ancestors. Your spiritual path awaits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/knowledge" 
                className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore Knowledge Hub
              </Link>
              <Link 
                to="/community" 
                className="px-8 py-3 bg-transparent border-2 border-amber-200 text-amber-200 font-medium rounded-full hover:bg-amber-200 hover:text-brown-900 transition-all duration-300"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  linkTo 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  linkTo: string;
}) => {
  return (
    <Link 
      to={linkTo}
      className="bg-white dark:bg-stone-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-brown-700 dark:text-amber-200">
        {description}
      </p>
    </Link>
  );
};

// Content Card Component
const ContentCard = ({ content }: { content: any }) => {
  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="h-48 overflow-hidden">
        <img 
          src={content.image} 
          alt={content.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-yellow-600 dark:text-yellow-500">
            {content.category}
          </span>
          <span className="text-xs text-brown-600 dark:text-amber-300">
            {content.date}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors duration-300">
          {content.title}
        </h3>
        <p className="text-brown-700 dark:text-amber-200 mb-4">
          {content.excerpt}
        </p>
        <Link 
          to="#" 
          className="text-yellow-600 dark:text-yellow-500 font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ 
  quote, 
  name, 
  title, 
  featured = false 
}: { 
  quote: string; 
  name: string; 
  title: string; 
  featured?: boolean;
}) => {
  return (
    <div className={`p-6 rounded-xl shadow-md transition-all duration-300 ${
      featured 
        ? 'bg-gradient-to-br from-yellow-500 to-yellow-700 text-white -mt-4 md:-mt-8' 
        : 'bg-white dark:bg-stone-800'
    }`}>
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-${featured ? 'amber-200' : 'yellow-500'} inline-block mr-1`}>★</span>
        ))}
      </div>
      <p className={`mb-6 ${featured ? 'text-white' : 'text-brown-800 dark:text-amber-100'}`}>
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full bg-${featured ? 'amber-200' : 'amber-100'} flex items-center justify-center mr-3`}>
          <span className={`text-${featured ? 'yellow-700' : 'brown-800'} font-bold`}>
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className={`font-semibold ${featured ? 'text-white' : 'text-brown-900 dark:text-amber-50'}`}>{name}</h4>
          <p className={`text-sm ${featured ? 'text-amber-200' : 'text-brown-600 dark:text-amber-300'}`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;