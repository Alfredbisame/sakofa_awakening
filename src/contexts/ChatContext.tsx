import React, { createContext, useContext, useState } from 'react';

type Message = {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
  isSeeker: boolean;
};

type ChatContextType = {
  messages: Message[];
  sendMessage: (content: string) => void;
  isOpen: boolean;
  toggleChat: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      user: 'Divine Messenger',
      content: 'Welcome to the Sacred Light Network. How may I guide your spirit today?',
      timestamp: new Date(),
      isSeeker: false,
    },
  ]);
  
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = (content: string) => {
    // Add seeker message
    const seekerMessage: Message = {
      id: Date.now().toString(),
      user: 'Seeker',
      content,
      timestamp: new Date(),
      isSeeker: true,
    };
    
    setMessages(prev => [...prev, seekerMessage]);
    
    // Simulate response after a delay
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        user: 'Divine Messenger',
        content: 'Thank you for sharing. I receive your message with an open heart. May the ancestors guide our conversation.',
        timestamp: new Date(),
        isSeeker: false,
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1500);
  };
  
  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isOpen, toggleChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};