import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Mic, Video, MessageSquare } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';

const SacredChat: React.FC = () => {
  const { isOpen, toggleChat, messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) {
    return (
      <button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full shadow-lg transition-all duration-300 z-40 flex items-center justify-center"
        aria-label="Open Sacred Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 w-full sm:w-96 h-[500px] max-h-[80vh] bg-amber-50 dark:bg-stone-800 shadow-xl rounded-t-lg sm:rounded-lg z-40 flex flex-col transition-all duration-300 ease-in-out animate-slideUp sm:m-4">
      {/* Chat header */}
      <div className="bg-brown-900 dark:bg-stone-900 text-amber-50 p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <h3 className="font-medium">Sacred Awakening Chat</h3>
        </div>
        <button 
          onClick={toggleChat}
          className="text-amber-200 hover:text-amber-50 transition-colors"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      {/* Messages container */}
      <div className="flex-grow p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-300 dark:scrollbar-thumb-stone-600">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.isSeeker ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.isSeeker 
                    ? 'bg-yellow-600 text-white rounded-tr-none' 
                    : 'bg-amber-100 dark:bg-stone-700 text-brown-900 dark:text-amber-50 rounded-tl-none'
                }`}
              >
                <div className="text-xs mb-1 font-medium">{msg.user}</div>
                <p>{msg.content}</p>
                <div className="text-xs mt-1 opacity-70 text-right">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Message input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-amber-200 dark:border-stone-700">
        <div className="flex items-center space-x-2">
          <button 
            type="button" 
            className="p-2 text-brown-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-stone-700 rounded-full transition-colors"
            aria-label="Voice message"
          >
            <Mic className="h-5 w-5" />
          </button>
          <button 
            type="button" 
            className="p-2 text-brown-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-stone-700 rounded-full transition-colors"
            aria-label="Video call"
          >
            <Video className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message with respect..."
            className="flex-grow p-2 border border-amber-200 dark:border-stone-600 rounded-full bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <button 
            type="submit" 
            disabled={!newMessage.trim()}
            className={`p-2 ${
              newMessage.trim() 
                ? 'bg-yellow-600 hover:bg-yellow-700' 
                : 'bg-amber-300 dark:bg-stone-600 cursor-not-allowed'
            } text-white rounded-full transition-colors`}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SacredChat;