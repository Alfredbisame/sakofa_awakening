import React, { useEffect, useState } from 'react';
import { ShoppingBag, Heart, Gift, CreditCard, Check, Info } from 'lucide-react';
import SacredChat from '../components/ui/SacredChat';

const SacredShop = () => {
  useEffect(() => {
    document.title = 'Sacred Shop | Sakofa Awakening';
  }, []);

  const [activeTab, setActiveTab] = useState('services');
  const [donationAmount, setDonationAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState(false);
  const [donationMessage, setDonationMessage] = useState('');

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your sacred offering of ₵${donationAmount}. The ancestors receive your offering with gratitude.`);
  };

  const spiritualServices = [
    {
      id: 1,
      title: 'Personal Ancestral Reading',
      description: 'A comprehensive reading to connect you with your ancestral lineage and receive their wisdom.',
      price: 750,
      duration: '60 minutes',
      facilitator: 'Elder Kwame',
      image: 'https://images.pexels.com/photos/6474553/pexels-photo-6474553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Spiritual Cleansing Ritual',
      description: 'A sacred ritual to cleanse your energy field and create space for divine blessings.',
      price: 600,
      duration: '45 minutes',
      facilitator: 'Priestess Efua',
      image: 'https://images.pexels.com/photos/5727306/pexels-photo-5727306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Purpose Alignment Session',
      description: 'Discover your divine purpose through ancestral guidance and spiritual counsel.',
      price: 900,
      duration: '75 minutes',
      facilitator: 'Wisdom Keeper Kojo',
      image: 'https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Healing Ancestral Trauma',
      description: 'A specialized healing session to address and transform ancestral wounds and patterns.',
      price: 1200,
      duration: '90 minutes',
      facilitator: 'Healer Abena',
      image: 'https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const sacredItems = [
    {
      id: 1,
      title: 'Ancestral Connection Candle',
      description: 'Hand-crafted candle with herbs and oils to strengthen your ancestral connection.',
      price: 280,
      category: 'Ritual Items',
      image: 'https://images.pexels.com/photos/5760897/pexels-photo-5760897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Sacred Adinkra Symbol Set',
      description: 'Set of 7 hand-carved wooden Adinkra symbols with spiritual meaning guide.',
      price: 450,
      category: 'Spiritual Tools',
      image: 'https://images.pexels.com/photos/6937501/pexels-photo-6937501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Ancestral Wisdom Journal',
      description: 'Handmade journal with prompts for recording dreams, visions, and ancestor messages.',
      price: 320,
      category: 'Books & Journals',
      image: 'https://images.pexels.com/photos/969923/pexels-photo-969923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Moon Phase Ritual Guide',
      description: 'Comprehensive guide for conducting rituals aligned with the lunar cycles.',
      price: 240,
      category: 'Books & Journals',
      image: 'https://images.pexels.com/photos/2097628/pexels-photo-2097628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-amber-50 dark:bg-stone-900">
      <SacredChat />

      <section className="bg-gradient-to-r from-purple-900 to-brown-900 text-amber-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sacred Shop & Offerings</h1>
            <p className="text-lg text-amber-200 mb-8">
              Support our mission while enriching your spiritual journey with services and sacred items
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              <TabButton 
                active={activeTab === 'services'} 
                onClick={() => setActiveTab('services')}
                icon={<Heart className="h-4 w-4 mr-2" />}
                label="Spiritual Services"
              />
              <TabButton 
                active={activeTab === 'items'} 
                onClick={() => setActiveTab('items')}
                icon={<ShoppingBag className="h-4 w-4 mr-2" />}
                label="Sacred Items"
              />
              <TabButton 
                active={activeTab === 'donations'} 
                onClick={() => setActiveTab('donations')}
                icon={<Gift className="h-4 w-4 mr-2" />}
                label="Sacred Donations"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {activeTab === 'services' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-brown-900 dark:text-amber-50 mb-2">
                    Spiritual Services
                  </h2>
                  <p className="text-brown-700 dark:text-amber-200">
                    Connect with our experienced spiritual guides for personalized wisdom and healing.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {spiritualServices.map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'items' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-brown-900 dark:text-amber-50 mb-2">
                    Sacred Items
                  </h2>
                  <p className="text-brown-700 dark:text-amber-200">
                    Enhance your spiritual practice with our carefully crafted sacred items.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {sacredItems.map(item => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'donations' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-brown-900 dark:text-amber-50 mb-2">
                    Sacred Donations
                  </h2>
                  <p className="text-brown-700 dark:text-amber-200">
                    Support our mission to preserve and share ancestral wisdom with your generous offering.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <form onSubmit={handleDonationSubmit} className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-brown-900 dark:text-amber-50 mb-6">
                        Make a Sacred Offering
                      </h3>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-brown-700 dark:text-amber-200 mb-2">
                          Select Donation Amount
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                          <DonationOption 
                            amount="100" 
                            selected={donationAmount === "100" && !customAmount} 
                            onSelect={() => {
                              setDonationAmount("100");
                              setCustomAmount(false);
                            }} 
                          />
                          <DonationOption 
                            amount="250" 
                            selected={donationAmount === "250" && !customAmount} 
                            onSelect={() => {
                              setDonationAmount("250");
                              setCustomAmount(false);
                            }} 
                          />
                          <DonationOption 
                            amount="500" 
                            selected={donationAmount === "500" && !customAmount} 
                            onSelect={() => {
                              setDonationAmount("500");
                              setCustomAmount(false);
                            }} 
                          />
                          <DonationOption 
                            amount="1000" 
                            selected={donationAmount === "1000" && !customAmount} 
                            onSelect={() => {
                              setDonationAmount("1000");
                              setCustomAmount(false);
                            }} 
                          />
                        </div>
                        
                        <div className="mt-3">
                          <div className="flex items-center mb-2">
                            <input 
                              type="checkbox" 
                              id="customAmount" 
                              checked={customAmount}
                              onChange={() => setCustomAmount(!customAmount)}
                              className="h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                            />
                            <label htmlFor="customAmount" className="ml-2 text-sm text-brown-700 dark:text-amber-200">
                              Custom amount
                            </label>
                          </div>
                          
                          {customAmount && (
                            <div className="flex items-center">
                              <span className="text-brown-700 dark:text-amber-200 mr-2">₵</span>
                              <input 
                                type="number"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                                min="1"
                                className="w-full px-4 py-2 border border-amber-200 dark:border-stone-600 rounded-md bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-brown-700 dark:text-amber-200 mb-2">
                          Your Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          value={donationMessage}
                          onChange={(e) => setDonationMessage(e.target.value)}
                          rows={3}
                          className="w-full px-4 py-2 border border-amber-200 dark:border-stone-600 rounded-md bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                          placeholder="Share your intention for this sacred offering..."
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-brown-700 dark:text-amber-200 mb-2">
                          Payment Method
                        </h4>
                        <div className="bg-amber-50 dark:bg-stone-700 rounded-md p-4">
                          <div className="flex items-center">
                            <CreditCard className="h-5 w-5 text-brown-700 dark:text-amber-200 mr-2" />
                            <span className="text-brown-700 dark:text-amber-200">Mobile Money / Card</span>
                          </div>
                          <p className="mt-2 text-xs text-brown-600 dark:text-amber-300">
                            Secure payment processing provided. Your payment details are never stored on our servers.
                          </p>
                        </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Complete Sacred Offering
                      </button>
                    </form>
                  </div>
                  
                  <div>
                    <div className="bg-gradient-to-br from-purple-900 to-brown-900 text-amber-50 rounded-lg shadow-md overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">How Your Donations Help</h3>
                        <p className="text-amber-200 mb-6">
                          Your sacred offerings support our mission to preserve ancestral wisdom and make it accessible to seekers worldwide.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="h-5 w-5 text-purple-400" />
                            </div>
                            <div className="ml-3">
                              <p className="text-amber-100">
                                Maintain our digital sanctuary and spiritual resources
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="h-5 w-5 text-purple-400" />
                            </div>
                            <div className="ml-3">
                              <p className="text-amber-100">
                                Support our divine messengers and wisdom keepers
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="h-5 w-5 text-purple-400" />
                            </div>
                            <div className="ml-3">
                              <p className="text-amber-100">
                                Fund sacred rituals and community gatherings
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="h-5 w-5 text-purple-400" />
                            </div>
                            <div className="ml-3">
                              <p className="text-amber-100">
                                Develop new educational content and spiritual resources
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-purple-800/50 rounded-md">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <Info className="h-5 w-5 text-amber-300" />
                            </div>
                            <div className="ml-3">
                              <p className="text-amber-200 text-sm">
                                The Sakofa Ancestral Light Network is a registered non-profit organization. Your donations may be tax-deductible where applicable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold text-brown-900 dark:text-amber-50 mb-4">
                        Words from Our Community
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="italic text-brown-700 dark:text-amber-200 text-sm border-l-4 border-amber-300 pl-4 py-1">
                          "Supporting this sacred work has been as much a blessing to me as it is to the community. The ancestors work through our generosity."
                          <div className="mt-1 text-right text-brown-600 dark:text-amber-300">
                            — Yaa A., Spiritual Seeker
                          </div>
                        </div>
                        <div className="italic text-brown-700 dark:text-amber-200 text-sm border-l-4 border-amber-300 pl-4 py-1">
                          "I donate monthly to ensure this ancestral wisdom continues to reach those who need it most. It's an investment in our collective spiritual growth."
                          <div className="mt-1 text-right text-brown-600 dark:text-amber-300">
                            — Kwame T., Monthly Supporter
                          </div>
                        </div>
                      </div>
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
          : 'bg-purple-800 text-amber-100 hover:bg-purple-700'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

const ServiceCard = ({ service }: { service: any }) => {
  return (
    <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-brown-900 dark:text-amber-50">
            {service.title}
          </h3>
          <span className="text-xl font-medium text-yellow-600 dark:text-yellow-500">
            ₵{service.price}
          </span>
        </div>
        <p className="text-brown-700 dark:text-amber-200 mb-4">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-y-2 text-sm text-brown-600 dark:text-amber-300 mb-4">
          <div className="w-full sm:w-1/2">
            <span className="font-medium">Duration:</span> {service.duration}
          </div>
          <div className="w-full sm:w-1/2">
            <span className="font-medium">Facilitator:</span> {service.facilitator}
          </div>
        </div>
        <button className="w-full px-4 py-2 bg-brown-800 hover:bg-brown-900 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Book Session
        </button>
      </div>
    </div>
  );
};

const ItemCard = ({ item }: { item: any }) => {
  return (
    <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-brown-800 dark:text-amber-200 text-xs font-medium rounded-full mb-2">
          {item.category}
        </span>
        <h3 className="text-lg font-semibold text-brown-900 dark:text-amber-50 mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-brown-700 dark:text-amber-200 mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-yellow-600 dark:text-yellow-500">
            ₵{item.price}
          </span>
          <button className="px-3 py-1 bg-brown-800 hover:bg-brown-900 text-white rounded-full text-sm transition-colors duration-300">
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

const DonationOption = ({ 
  amount, 
  selected, 
  onSelect 
}: { 
  amount: string; 
  selected: boolean; 
  onSelect: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`px-4 py-2 rounded-md text-center transition-all duration-300 ${
        selected 
          ? 'bg-purple-700 text-white ring-2 ring-purple-500 ring-offset-2 dark:ring-offset-stone-800' 
          : 'bg-white dark:bg-stone-700 text-brown-900 dark:text-amber-50 border border-amber-200 dark:border-stone-600 hover:border-purple-500 dark:hover:border-purple-500'
      }`}
    >
      ₵{amount}
    </button>
  );
};

export default SacredShop;