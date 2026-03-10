
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Ministries', href: '#/ministries' },
    { name: 'Sermons', href: '#/sermons' },
    { name: 'Events', href: '#/events' },
    { name: 'Prophetic AI', href: '#/ai-guidance' },
    { name: 'Gallery', href: '#/gallery' },
    { name: 'Give', href: '#/give' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a 
              href="#/" 
              onClick={(e) => navigate(e, '#/')}
              className="flex-shrink-0 flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform group-hover:rotate-3">
                J
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-slate-900 leading-tight">
                  Joseph Akowuah
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-600 font-bold">
                  Ministries
                </span>
              </div>
            </a>
          </div>
          
          <div className="hidden xl:flex items-center space-x-1">
            <a
              href="#/watch-live"
              onClick={(e) => navigate(e, '#/watch-live')}
              className="relative text-red-600 px-4 py-2 rounded-lg font-bold transition-all text-xs uppercase tracking-wider flex items-center gap-2 group"
            >
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              Watch Live
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => navigate(e, link.href)}
                className="text-slate-600 hover:text-amber-600 px-4 py-2 rounded-lg font-semibold transition-all text-xs uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/contact"
              onClick={(e) => navigate(e, '#/contact')}
              className="ml-4 bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-600 transition-all shadow-md text-xs uppercase tracking-widest"
            >
              Connect
            </a>
          </div>

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-amber-600 hover:bg-slate-50 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 shadow-2xl animate-fadeIn">
          <div className="px-4 pt-4 pb-6 space-y-1">
            <a
              href="#/watch-live"
              onClick={(e) => navigate(e, '#/watch-live')}
              className="block px-4 py-3 text-sm font-bold text-red-600 bg-red-50 rounded-xl flex items-center gap-3"
            >
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              WATCH LIVE NOW
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => navigate(e, link.href)}
                className="block px-4 py-3 text-sm font-bold text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-xl"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-2">
              <a
                href="#/contact"
                onClick={(e) => navigate(e, '#/contact')}
                className="block text-center bg-amber-600 text-white py-4 rounded-xl font-bold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
