import React, { useEffect, useState } from 'react';
import { Search, Filter, BookOpen, Video, Headphones, Clock } from 'lucide-react';
import SacredChat from '../components/ui/SacredChat';

const KnowledgeHub = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Knowledge Hub | Sakofa Awakening';
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'purpose', name: 'Divine Purpose' },
    { id: 'ancestral', name: 'Ancestral Laws' },
    { id: 'healing', name: 'Spiritual Healing' },
    { id: 'rituals', name: 'Sacred Rituals' },
    { id: 'symbols', name: 'Ancestral Symbols' },
  ];

  const formats = [
    { id: 'all', name: 'All Formats', icon: <Filter className="h-4 w-4" /> },
    { id: 'article', name: 'Articles', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'video', name: 'Videos', icon: <Video className="h-4 w-4" /> },
    { id: 'audio', name: 'Audios', icon: <Headphones className="h-4 w-4" /> },
  ];

  const teachings = [
    {
      id: 1,
      title: 'The Sacred Path of Ancestral Reconnection',
      category: 'purpose',
      format: 'article',
      excerpt: 'Explore the fundamentals of reconnecting with your ancestral lineage and embracing your divine purpose.',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/5560901/pexels-photo-5560901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Understanding the Seven Ancestral Laws',
      category: 'ancestral',
      format: 'article',
      excerpt: 'A comprehensive guide to the seven fundamental laws that govern ancestral wisdom and spiritual growth.',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/5875068/pexels-photo-5875068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'New Moon Cleansing Ritual',
      category: 'rituals',
      format: 'video',
      excerpt: 'Learn this powerful ritual to cleanse your spirit and set intentions during the new moon phase.',
      readTime: '15 min video',
      image: 'https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Guided Meditation for Ancestral Healing',
      category: 'healing',
      format: 'audio',
      excerpt: 'A soothing guided meditation to help you connect with and heal ancestral trauma and pain.',
      readTime: '20 min audio',
      image: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'The Meaning Behind Adinkra Symbols',
      category: 'symbols',
      format: 'article',
      excerpt: 'Discover the deep spiritual significance of traditional Adinkra symbols and their application in modern life.',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/6937501/pexels-photo-6937501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      title: 'Finding Your Divine Purpose',
      category: 'purpose',
      format: 'video',
      excerpt: 'A step-by-step guide to discovering and embracing your unique spiritual purpose in this lifetime.',
      readTime: '25 min video',
      image: 'https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  const filteredTeachings = teachings.filter(teaching => {
    const matchesCategory = activeCategory === 'all' || teaching.category === activeCategory;
    const matchesFormat = activeFormat === 'all' || teaching.format === activeFormat;
    const matchesSearch = teaching.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          teaching.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesFormat && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-amber-50 dark:bg-stone-900">
      <SacredChat />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brown-900 to-brown-800 text-amber-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sacred Knowledge Hub</h1>
            <p className="text-lg text-amber-200 mb-8">
              Explore our collection of ancestral wisdom, teachings, and spiritual guidance to illuminate your path.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-brown-600" />
              </div>
              <input
                type="text"
                placeholder="Search for wisdom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white text-brown-900 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold text-brown-900 dark:text-amber-50">
                Ancestral Teachings
              </h2>
              
              <div className="flex flex-wrap gap-2">
                {formats.map(format => (
                  <button
                    key={format.id}
                    onClick={() => setActiveFormat(format.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                      activeFormat === format.id
                        ? 'bg-yellow-600 text-white'
                        : 'bg-white dark:bg-stone-800 text-brown-700 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-stone-700'
                    }`}
                  >
                    <span className="mr-1">{format.icon}</span>
                    {format.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-brown-800 text-amber-50'
                      : 'bg-amber-100 dark:bg-stone-800 text-brown-700 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-stone-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Knowledge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachings.length > 0 ? (
              filteredTeachings.map(teaching => (
                <TeachingCard key={teaching.id} teaching={teaching} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-brown-700 dark:text-amber-200">
                  No teachings found matching your criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Featured teaching */}
      <section className="py-12 bg-amber-100 dark:bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/4484042/pexels-photo-4484042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Featured teaching" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <span className="inline-block px-3 py-1 bg-yellow-600 text-white rounded-full text-sm font-medium mb-4">
                  Featured Teaching
                </span>
                <h2 className="text-2xl font-bold mb-4 text-brown-900 dark:text-amber-50">
                  The Sacred Journey: Finding Purpose Through Ancestral Connection
                </h2>
                <p className="text-brown-700 dark:text-amber-200 mb-4">
                  This comprehensive guide takes you through the process of connecting with your ancestral lineage to discover your true purpose. Learn rituals, practices, and wisdom that have been passed down through generations.
                </p>
                <div className="flex items-center text-brown-600 dark:text-amber-300 mb-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">45 min series</span>
                </div>
                <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  Begin the Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Teaching Card Component
const TeachingCard = ({ teaching }: { teaching: any }) => {
  const formatIcon = {
    article: <BookOpen className="h-4 w-4" />,
    video: <Video className="h-4 w-4" />,
    audio: <Headphones className="h-4 w-4" />,
  };

  return (
    <div className="bg-white dark:bg-stone-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={teaching.image} 
          alt={teaching.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-opacity-90 ${
            teaching.format === 'article' 
              ? 'bg-blue-600 text-white' 
              : teaching.format === 'video'
                ? 'bg-red-600 text-white'
                : 'bg-purple-600 text-white'
          }`}>
            {teaching.format.charAt(0).toUpperCase() + teaching.format.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-brown-900 dark:text-amber-50 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors duration-300">
          {teaching.title}
        </h3>
        <p className="text-brown-700 dark:text-amber-200 mb-4">
          {teaching.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-600 dark:text-yellow-500 font-medium">
            Read More
          </span>
          <div className="flex items-center text-brown-600 dark:text-amber-300">
            {formatIcon[teaching.format as keyof typeof formatIcon]}
            <span className="text-sm ml-1">{teaching.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;