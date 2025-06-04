import React, { useEffect, useState } from 'react';
import { Search, Users, MessageSquare, Mail, User, Calendar, Info, Clock } from 'lucide-react';
import SacredChat from '../components/ui/SacredChat';

const CommunityNetwork = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Community Network | Sakofa Awakening';
  }, []);

  const [activeTab, setActiveTab] = useState('message-library');
  const [searchQuery, setSearchQuery] = useState('');
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in real app)
    alert('Your spiritual inquiry has been submitted. A divine messenger will respond soon.');
    setInquiryForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Sample messages for library
  const messageLibrary = [
    {
      id: 1,
      title: 'Finding Your Ancestral Roots',
      category: 'Purpose',
      content: 'To find your ancestral roots, start with family stories and traditions. Document what you know, then research historical records. DNA testing can provide insights, but remember that your spiritual connection transcends genetics. Meditate with the intention of connecting to your ancestors, and pay attention to dreams and synchronicities that may guide you.',
      messenger: 'Elder Kofi',
      date: '3 days ago',
      likes: 42,
      comments: 7
    },
    {
      id: 2,
      title: 'Understanding the Ancestor\'s Law of Reciprocity',
      category: 'Ancestral Laws',
      content: 'The Law of Reciprocity teaches that what we give returns to us. This sacred principle governs spiritual exchanges. When we honor our ancestors with offerings, gratitude, and by living according to their wisdom, they in turn provide guidance, protection, and blessings. This cycle creates balance in the spiritual ecosystem.',
      messenger: 'Priestess Naya',
      date: '1 week ago',
      likes: 89,
      comments: 14
    },
    {
      id: 3,
      title: 'Healing Generational Trauma Through Ritual',
      category: 'Healing',
      content: 'Generational trauma can be healed through dedicated ritual work. Create a sacred space with elements that represent earth, air, fire, and water. Call upon your ancestors with humility and openness. Acknowledge the pain carried through generations, and with their guidance, release what no longer serves. Regular practice strengthens this healing pathway.',
      messenger: 'Healer Amara',
      date: '2 weeks ago',
      likes: 105,
      comments: 23
    },
    {
      id: 4,
      title: 'The Sacred Meaning of Dreams',
      category: 'Spiritual Wisdom',
      content: 'Dreams are a sacred portal through which ancestors and spirits communicate. Keep a dream journal by your bed to record them immediately upon waking. Look for recurring symbols, which often carry personal significance. Morning dreams tend to be more prophetic. Practice dream incubation by setting an intention before sleep to receive guidance on a specific matter.',
      messenger: 'Dream Interpreter Zuri',
      date: '3 weeks ago',
      likes: 67,
      comments: 19
    },
    {
      id: 5,
      title: 'Connecting with Nature Spirits',
      category: 'Rituals',
      content: 'Nature spirits dwell in trees, rivers, mountains, and all natural formations. To connect with them, approach with respect and offerings. Sit quietly in nature and open your senses. Regular visits to the same location build stronger connections. These spirits can become powerful allies in your spiritual work when honored appropriately.',
      messenger: 'Nature Guardian Jabari',
      date: '1 month ago',
      likes: 53,
      comments: 11
    }
  ];

  // Filter messages based on search query
  const filteredMessages = messageLibrary.filter(
    message => 
      message.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Virtual Ancestral Healing Circle',
      date: 'May 15, 2025',
      time: '7:00 PM - 8:30 PM EST',
      facilitator: 'Healer Amara',
      participants: 24
    },
    {
      id: 2,
      title: 'Sacred Symbol Workshop',
      date: 'May 22, 2025',
      time: '6:00 PM - 7:30 PM EST',
      facilitator: 'Elder Kofi',
      participants: 18
    },
    {
      id: 3,
      title: 'Spiritual Development Class',
      date: 'June 5, 2025',
      time: '8:00 PM - 9:30 PM EST',
      facilitator: 'Priestess Naya',
      participants: 32
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-amber-50 dark:bg-stone-900">
      <SacredChat />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-brown-900 text-amber-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sacred Community Network</h1>
            <p className="text-lg text-amber-200 mb-8">
              Connect with fellow seekers, access ancestral wisdom, and engage with our spiritual community
            </p>
            
            {/* Navigation tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              <TabButton 
                active={activeTab === 'message-library'} 
                onClick={() => setActiveTab('message-library')}
                icon={<MessageSquare className="h-4 w-4 mr-2" />}
                label="Message Library"
              />
              <TabButton 
                active={activeTab === 'spiritual-inquiry'} 
                onClick={() => setActiveTab('spiritual-inquiry')}
                icon={<Mail className="h-4 w-4 mr-2" />}
                label="Spiritual Inquiry"
              />
              <TabButton 
                active={activeTab === 'community-events'} 
                onClick={() => setActiveTab('community-events')}
                icon={<Calendar className="h-4 w-4 mr-2" />}
                label="Community Events"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Message Library */}
            {activeTab === 'message-library' && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                  <h2 className="text-2xl font-semibold text-brown-900 dark:text-amber-50">
                    Sacred Message Library
                  </h2>
                  
                  {/* Search bar */}
                  <div className="relative w-full md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-brown-600 dark:text-amber-300" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search messages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white dark:bg-stone-800 text-brown-900 dark:text-amber-50 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    />
                  </div>
                </div>
                
                {/* Messages */}
                <div className="space-y-6">
                  {filteredMessages.length > 0 ? (
                    filteredMessages.map(message => (
                      <MessageCard key={message.id} message={message} />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-lg text-brown-700 dark:text-amber-200">
                        No messages found matching your search. Try different keywords.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Spiritual Inquiry */}
            {activeTab === 'spiritual-inquiry' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-brown-900 dark:text-amber-50 mb-2">
                    Submit a Spiritual Inquiry
                  </h2>
                  <p className="text-brown-700 dark:text-amber-200">
                    Our divine messengers will provide personalized guidance for your spiritual journey. Please allow 2-3 days for a response.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Inquiry Form */}
                  <div className="lg:col-span-2">
                    <form onSubmit={handleInquirySubmit} className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-brown-700 dark:text-amber-200 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={inquiryForm.name}
                            onChange={handleInquiryChange}
                            required
                            className="w-full px-4 py-2 border border-amber-200 dark:border-stone-600 rounded-md bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-brown-700 dark:text-amber-200 mb-1">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={inquiryForm.email}
                            onChange={handleInquiryChange}
                            required
                            className="w-full px-4 py-2 border border-amber-200 dark:border-stone-600 rounded-md bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-brown-700 dark:text-amber-200 mb-1">
                          Subject of Inquiry
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={inquiryForm.subject}
                          onChange={handleInquiryChange}
                          required
                          className="w-full px-4 py-2 border border-amber-200 dark:border-stone-600 rounded-md bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-brown-700 dark:text-amber-200 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={inquiryForm.message}
                          onChange={handleInquiryChange}
                          required
                          rows={6}
                          className="w-full px-4 py-2 border border-amber-200 dark:border-stone-600 rounded-md bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                          placeholder="Share your spiritual questions, concerns, or experiences..."
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Submit Spiritual Inquiry
                      </button>
                    </form>
                  </div>
                  
                  {/* Guidelines */}
                  <div>
                    <div className="bg-amber-100 dark:bg-stone-800 rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold text-brown-900 dark:text-amber-50 mb-4 flex items-center">
                        <Info className="h-5 w-5 mr-2 text-yellow-600" />
                        Inquiry Guidelines
                      </h3>
                      
                      <ul className="space-y-3 text-brown-700 dark:text-amber-200">
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Be specific in your questions for more targeted guidance</span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Include relevant background information about your spiritual journey</span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Inquiries are answered in order of receipt, usually within 2-3 days</span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>For urgent matters, please use the Sacred Chat feature</span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Responses are delivered to your email and also available in your profile</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 rounded-r-md">
                        <p className="text-brown-800 dark:text-amber-200 text-sm italic">
                          "Ask with an open heart, and the ancestors will guide the response to meet your highest good."
                        </p>
                        <p className="text-right text-brown-600 dark:text-amber-300 text-sm mt-1">
                          — Elder Wisdom
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Community Events */}
            {activeTab === 'community-events' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-brown-900 dark:text-amber-50 mb-2">
                    Virtual Community Events
                  </h2>
                  <p className="text-brown-700 dark:text-amber-200">
                    Join our live gatherings, workshops, and ritual broadcasts to connect with like-minded seekers.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Upcoming Events */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-medium text-brown-900 dark:text-amber-50 mb-4">
                      Upcoming Events
                    </h3>
                    
                    <div className="space-y-4">
                      {upcomingEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                    
                    <button className="mt-6 px-6 py-3 bg-brown-800 hover:bg-brown-900 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                      View All Events
                    </button>
                  </div>
                  
                  {/* Community Conference */}
                  <div>
                    <div className="bg-gradient-to-br from-green-800 to-green-900 text-white rounded-lg shadow-md overflow-hidden">
                      <div className="h-40 bg-gradient-to-br from-green-700 to-green-800 flex items-center justify-center">
                        <Users className="h-16 w-16 text-green-200 opacity-70" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Sacred Conference Room</h3>
                        <p className="text-green-100 mb-4">
                          Enter our virtual conference space for community discussions, group meditations, and spiritual exchanges.
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-green-200 mb-6">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>12 seekers online</span>
                          </div>
                          <div>
                            <span>Always open</span>
                          </div>
                        </div>
                        
                        <button className="w-full px-6 py-3 bg-white text-green-800 hover:bg-green-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                          Enter Sacred Space
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-amber-100 dark:bg-stone-800 rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold text-brown-900 dark:text-amber-50 mb-4">
                        Community Guidelines
                      </h3>
                      
                      <ul className="space-y-3 text-brown-700 dark:text-amber-200 text-sm">
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Approach all interactions with respect and an open heart</span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Honor the sacred nature of our shared space</span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Support fellow seekers on their spiritual journey</span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Maintain confidentiality of personal sharings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </section>
    </div>
  );
};

// Tab Button Component
const TabButton = ({ 
  active, 
  onClick, 
  icon, 
  label 
}: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode; 
  label: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        active 
          ? 'bg-amber-50 text-brown-900 shadow-md' 
          : 'bg-green-800 text-amber-100 hover:bg-green-700'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

// Message Card Component
const MessageCard = ({ message }: { message: any }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-brown-800 dark:text-amber-200 text-xs font-medium rounded-full mb-2">
              {message.category}
            </span>
            <h3 className="text-xl font-semibold text-brown-900 dark:text-amber-50">
              {message.title}
            </h3>
          </div>
        </div>
        
        <p className={`text-brown-700 dark:text-amber-200 mb-4 ${expanded ? '' : 'line-clamp-3'}`}>
          {message.content}
        </p>
        
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-yellow-600 dark:text-yellow-500 text-sm font-medium hover:underline mb-4"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
        
        <div className="flex justify-between items-center text-sm text-brown-600 dark:text-amber-300">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{message.messenger}</span>
          </div>
          <span>{message.date}</span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-amber-100 dark:border-stone-700 flex items-center justify-between">
          <div className="flex items-center text-brown-600 dark:text-amber-300 text-sm">
            <button className="flex items-center mr-4 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
              <span className="mr-1">❤️</span>
              <span>{message.likes}</span>
            </button>
            <button className="flex items-center hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{message.comments}</span>
            </button>
          </div>
          <button className="text-yellow-600 dark:text-yellow-500 text-sm font-medium hover:underline">
            Share Wisdom
          </button>
        </div>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-brown-900 dark:text-amber-50 mb-2">
          {event.title}
        </h3>
        
        <div className="flex flex-wrap gap-y-2 text-sm text-brown-700 dark:text-amber-200 mb-4">
          <div className="w-full sm:w-1/2 flex items-center">
            <Calendar className="h-4 w-4 text-yellow-600 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="w-full sm:w-1/2 flex items-center">
            <Clock className="h-4 w-4 text-yellow-600 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="w-full sm:w-1/2 flex items-center">
            <User className="h-4 w-4 text-yellow-600 mr-2" />
            <span>{event.facilitator}</span>
          </div>
          <div className="w-full sm:w-1/2 flex items-center">
            <Users className="h-4 w-4 text-yellow-600 mr-2" />
            <span>{event.participants} Participants</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <button className="w-full sm:w-auto px-6 py-2 bg-brown-800 hover:bg-brown-900 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Join Event
          </button>
          <button className="w-full sm:w-auto px-6 py-2 border border-brown-800 dark:border-amber-200 text-brown-800 dark:text-amber-200 hover:bg-brown-800 hover:text-white dark:hover:bg-amber-200 dark:hover:text-brown-900 rounded-full transition-all duration-300">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityNetwork;