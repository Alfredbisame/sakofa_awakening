import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import KnowledgeHub from './pages/KnowledgeHub';
import RitualCalendar from './pages/RitualCalendar';
import CommunityNetwork from './pages/CommunityNetwork';
import SacredShop from './pages/SacredShop';
import { Routes, Route } from 'react-router-dom';
import { ChatProvider } from './contexts/ChatContext';
import './i18n';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <AuthProvider>
      <ThemeProvider>
        <ChatProvider>
          <div className="flex flex-col min-h-screen bg-amber-50 dark:bg-stone-900 transition-colors duration-300">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/knowledge" element={<KnowledgeHub />} />
                <Route path="/rituals" element={<RitualCalendar />} />
                <Route path="/community" element={<CommunityNetwork />} />
                <Route path="/shop" element={<SacredShop />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ChatProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;