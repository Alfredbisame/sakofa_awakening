import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun, Menu, X, Flame, User, Globe } from 'lucide-react';
import MoonPhaseIndicator from '../ui/MoonPhaseIndicator';
import { useChat } from '../../contexts/ChatContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import AuthModal from '../auth/AuthModal';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { toggleChat } = useChat();
  const { user, signOut } = useAuth();
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'tw', name: 'Twi' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brown-900 dark:bg-stone-800 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Flame className="h-8 w-8 text-yellow-600 dark:text-yellow-500 mr-2" />
            <span 
            className="text-xl md:text-3xl lg:text-4xl font-bold text-brown-900 dark:text-amber-50 transition-colors duration-300"
          >
            Sakofa Awakening
          </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label={t('nav.home')} />
            <NavLink to="/knowledge" label={t('nav.knowledge')} />
            <NavLink to="/rituals" label={t('nav.rituals')} />
            <NavLink to="/community" label={t('nav.community')} />
            <NavLink to="/shop" label={t('nav.shop')} />
            
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors duration-300 flex items-center"
                >
                  <Globe className="h-5 w-5 text-brown-800 dark:text-amber-50" />
                </button>
                
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-800 rounded-lg shadow-lg py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="block w-full text-left px-4 py-2 text-sm text-brown-700 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-stone-700"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={toggleChat}
                className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition-colors duration-300"
              >
                Sacred Chat
              </button>
              
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-6 w-6 text-yellow-400" />
                ) : (
                  <Moon className="h-6 w-6 text-brown-800" />
                )}
              </button>
              
              <MoonPhaseIndicator />

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => user ? setIsUserMenuOpen(!isUserMenuOpen) : setIsAuthModalOpen(true)}
                  className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors duration-300"
                >
                  <User className="h-6 w-6 text-brown-800 dark:text-amber-50" />
                </button>

                {isUserMenuOpen && user && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-800 rounded-lg shadow-lg py-1">
                    <div className="px-4 py-2 text-sm text-brown-700 dark:text-amber-200 border-b border-amber-100 dark:border-stone-700">
                      {user}
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setIsUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-brown-700 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-stone-700"
                    >
                      {t('nav.signOut')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-brown-800" />
              )}
            </button>
            
            <MoonPhaseIndicator size="small" />
            
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-brown-900 dark:text-amber-50 hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-amber-50 dark:bg-stone-800 rounded-lg shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-3 px-4">
              <MobileNavLink to="/" label={t('nav.home')} onClick={toggleMobileMenu} />
              <MobileNavLink to="/knowledge" label={t('nav.knowledge')} onClick={toggleMobileMenu} />
              <MobileNavLink to="/rituals" label={t('nav.rituals')} onClick={toggleMobileMenu} />
              <MobileNavLink to="/community" label={t('nav.community')} onClick={toggleMobileMenu} />
              <MobileNavLink to="/shop" label={t('nav.shop')} onClick={toggleMobileMenu} />
              
              {user ? (
                <button 
                  onClick={() => {
                    signOut();
                    toggleMobileMenu();
                  }}
                  className="w-full text-left px-4 py-2 text-brown-800 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-stone-700"
                >
                  {t('nav.signOut')}
                </button>
              ) : (
                <button 
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    toggleMobileMenu();
                  }}
                  className="w-full text-left px-4 py-2 text-brown-800 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-stone-700"
                >
                  {t('nav.signIn')}
                </button>
              )}
              
              <button 
                onClick={() => {
                  toggleChat();
                  toggleMobileMenu();
                }}
                className="w-full text-left px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition-colors duration-300"
              >
                Sacred Chat
              </button>
            </nav>
          </div>
        )}
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`relative px-1 py-2 font-medium text-lg transition-colors duration-300 ${
        isActive 
          ? 'text-yellow-600 dark:text-yellow-500' 
          : 'text-brown-800 dark:text-amber-100 hover:text-yellow-600 dark:hover:text-yellow-500'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 dark:bg-yellow-500 rounded-full transform origin-left animate-scaleX" />
      )}
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`block px-4 py-2 rounded-md transition-colors duration-300 ${
        isActive 
          ? 'bg-yellow-100 dark:bg-stone-700 text-yellow-600 dark:text-yellow-500 font-medium' 
          : 'text-brown-800 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-stone-700'
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;