
import React from 'react';

const Footer: React.FC = () => {
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Joseph Akowuah Ministries</h3>
            <p className="mb-8 leading-relaxed text-sm">
              Dedicated to spiritual restoration, prophetic breakthroughs, and teaching the unadulterated word of God under the leadership of Apostle Joseph Akwasi Akowuah.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/AkowuahJosephMinistries" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.383 14.444 5 15.333 5H18V0h-3.333C11.333 0 9 2.333 9 5.333V8z"/></svg>
              </a>
              <a 
                href="https://www.tiktok.com/@josephakowuahministries" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.57 2.58-5.94 1.14-.87 2.56-1.35 4-1.34.03 1.29.01 2.58.01 3.87-1.14-.01-2.3.49-3 1.4-.73.91-.94 2.13-.59 3.25.33 1.05 1.14 1.94 2.21 2.26.85.27 1.77.21 2.58-.15 1.17-.51 1.96-1.74 2.04-3.01.05-3.56.02-7.12.02-10.68z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#/about" onClick={(e) => navigate(e, '#/about')} className="hover:text-amber-500 transition-colors">Our Story</a></li>
              <li><a href="#/ministries" onClick={(e) => navigate(e, '#/ministries')} className="hover:text-amber-500 transition-colors">Our Wings</a></li>
              <li><a href="#/sermons" onClick={(e) => navigate(e, '#/sermons')} className="hover:text-amber-500 transition-colors">Watch Sermons</a></li>
              <li><a href="#/events" onClick={(e) => navigate(e, '#/events')} className="hover:text-amber-500 transition-colors">Upcoming Events</a></li>
              <li><a href="#/gallery" onClick={(e) => navigate(e, '#/gallery')} className="hover:text-amber-500 transition-colors">Media Gallery</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#/ai-guidance" onClick={(e) => navigate(e, '#/ai-guidance')} className="hover:text-amber-500 transition-colors">Prophetic AI Assistant</a></li>
              <li><a href="#/give" onClick={(e) => navigate(e, '#/give')} className="hover:text-amber-500 transition-colors">Online Giving</a></li>
              <li><a href="#/contact" onClick={(e) => navigate(e, '#/contact')} className="hover:text-amber-500 transition-colors">Prayer Requests</a></li>
              <li><a href="#/contact" onClick={(e) => navigate(e, '#/contact')} className="hover:text-amber-500 transition-colors">Find a Location</a></li>
            </ul>
          </div>
          
          {/* Direct Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Reach Out</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-amber-500">📞</div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Main Line</p>
                  <a href="tel:+233240171460" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm hover:text-amber-500 transition-colors">+233 24 017 1460</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-amber-500">📧</div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Email Us</p>
                  <a href="mailto:blessedbaptist90@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm hover:text-amber-500 transition-colors">blessedbaptist90@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Joseph Akowuah Ministries. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#/" onClick={(e) => navigate(e, '#/')} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#/" onClick={(e) => navigate(e, '#/')} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
