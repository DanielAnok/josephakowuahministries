
import React, { useState, useRef, useEffect } from 'react';
import { getSpiritualGuidance } from '../services/geminiService';
import { Message } from '../types';

const AIGuidance: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Shalom, child of God. I am your Prophetic AI Assistant, standing with Apostle Joseph Akwasi Akowuah to bring you divine encouragement. How can I pray with you or guide you through the Word today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const userMessage: Message = { role: 'user', text: userMsg };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.slice(1);
      const aiResponseText = await getSpiritualGuidance(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: aiResponseText || 'May the Lord bless and keep you.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: 'The spiritual atmosphere is resetting. Please reach out to our physical office for immediate prayer at +233 24 017 1460.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20 animate-fadeIn selection:bg-amber-600/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tighter">Prophetic AI Altar</h1>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">Instant scriptural guidance and breakthrough prayers powered by divine wisdom.</p>
        </div>

        <div className="h-[700px] flex flex-col bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200">
          {/* Chat Header */}
          <div className="bg-slate-900 p-6 text-white flex items-center justify-between border-b border-amber-600/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-pulse">
                🕊️
              </div>
              <div>
                <h2 className="text-lg font-bold leading-none">Prophetic Assistant</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Divine Signal Active</p>
                </div>
              </div>
            </div>
            {/* Safe External Link */}
            <a 
              href="https://wa.me/233240171460" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black text-amber-500 hover:text-white transition-all border border-amber-600/30 px-4 py-2 rounded-full uppercase tracking-widest bg-white/5 hover:bg-amber-600/10"
            >
              Contact Altar
            </a>
          </div>

          {/* Chat Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-slate-50/20"
          >
            {messages.map((m, idx) => (
              <div 
                key={idx} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-slideUp`}
              >
                <div 
                  className={`max-w-[85%] p-5 md:p-6 rounded-3xl shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-amber-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-5 rounded-3xl rounded-tl-none flex gap-3 items-center shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seeking Divine Counsel...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Request a prayer or biblical guidance..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all placeholder:text-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-amber-600 transition-all shadow-xl disabled:opacity-50 group active:scale-90"
                aria-label="Send Message"
              >
                <svg className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-[9px] text-slate-400 uppercase tracking-widest text-center mt-4 font-black">
              God is your helper. Believe and receive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGuidance;
