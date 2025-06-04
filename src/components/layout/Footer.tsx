import { Link } from 'react-router-dom';
import { Flame, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 dark:bg-stone-800 text-amber-50 pt-12 pb-6 relative overflow-hidden">
      {/* Subtle background pattern - Adinkra symbols */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex flex-wrap">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-24 h-24 rotate-45">
            <div className="w-12 h-12 border-2 border-current rounded-full m-6"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Flame className="h-6 w-6 text-yellow-600 mr-2" />
              <h3 className="text-xl font-bold text-yellow-600">Sakofa Awakening </h3>
            </div>
            <p className="mb-4 text-amber-100 dark:text-amber-200">
              A sacred, spiritually inspired online platform guiding awakened souls and promoting ancestral wisdom.
            </p>
            <div className="flex items-center">
              <Heart className="h-4 w-4 text-red-500 mr-2" />
              <p className="text-amber-200">Made with ancestral love</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">Sacred Paths</h3>
            <ul className="space-y-2">
              <li><Link to="/knowledge" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Knowledge Hub</Link></li>
              <li><Link to="/rituals" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Moon Rituals</Link></li>
              <li><Link to="/community" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Community</Link></li>
              <li><Link to="/shop" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Sacred Shop</Link></li>
              <li><Link to="#" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">About Our Mission</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">Ancestral Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Spiritual Articles</Link></li>
              <li><Link to="#" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Sacred Audio</Link></li>
              <li><Link to="#" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Ritual Videos</Link></li>
              <li><Link to="#" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Adinkra Symbols</Link></li>
              <li><Link to="#" className="text-amber-100 hover:text-yellow-500 transition-colors duration-300">Ancestral Laws</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">Sacred Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                <span className="text-amber-100">contact@sakofalight.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                <span className="text-amber-100">+233554572904</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                <span className="text-amber-100">Sacred Temple<br />123 Ancestral Way<br />Spirit Valley, Earth 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Sakofa Awakening. All rights reserved in this realm and beyond.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-amber-200 hover:text-yellow-500 transition-colors duration-300 text-sm">Privacy Policy</Link>
              <Link to="#" className="text-amber-200 hover:text-yellow-500 transition-colors duration-300 text-sm">Terms of Service</Link>
              <Link to="#" className="text-amber-200 hover:text-yellow-500 transition-colors duration-300 text-sm">Spiritual Guidelines</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;