
import React from 'react';

const Give: React.FC = () => {
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <div className="animate-fadeIn py-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-amber-100 rounded-full mb-8">
            <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Honoring God Through Giving</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto italic font-light">
            "Give, and it will be given to you. A good measure, pressed down, shaken together and running over..." — Luke 6:38
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Local Giving */}
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Mobile Money</h3>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">Support the ministry in Ghana through secure Mobile Money platforms.</p>
              
              <div className="space-y-4">
                <div className="bg-amber-50 p-6 rounded-2xl flex items-center justify-between border border-amber-100">
                  <div>
                    <p className="text-[10px] uppercase font-black text-amber-600 tracking-[0.2em] mb-1">MTN MoMo</p>
                    <a href="tel:+233240171460" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">+233 24 017 1460</a>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-2xl">📱</div>
                </div>
                <div className="bg-amber-50 p-6 rounded-2xl flex items-center justify-between border border-amber-100">
                  <div>
                    <p className="text-[10px] uppercase font-black text-amber-600 tracking-[0.2em] mb-1">MTN MoMo</p>
                    <a href="tel:+233532027582" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">+233 24 149 9199</a>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-2xl">💰</div>
                </div>
              </div>
            </div>
            <p className="mt-10 text-sm text-slate-400 font-bold uppercase tracking-widest text-center">* Confirm: Joseph Akowuah Ministries</p>
          </div>
          
          {/* International Giving */}
          <div className="bg-slate-900 p-12 rounded-[3rem] shadow-xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Partnership & Global</h3>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">For international partners sowing seeds from across the borders.</p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-10 backdrop-blur-sm">
                <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Direct Bank Support</h4>
                <p className="text-slate-300 mb-8 leading-relaxed text-sm">Please contact our finance office for SWIFT codes and secure wire transfer details.</p>
                <a 
                  href="#/contact" 
                  onClick={(e) => navigate(e, '#/contact')}
                  className="inline-block bg-amber-600 text-white px-10 py-3 rounded-full font-bold hover:bg-amber-700 transition-all text-sm shadow-lg text-center w-full md:w-auto"
                >
                  Contact for Wire Details
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Secure Communication Guaranteed
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl group-hover:bg-amber-600/20 transition-all"></div>
          </div>
        </div>

        {/* Testimony Banner */}
        <div className="mt-20 text-center bg-white p-16 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Your Testimony is Next</h3>
            <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">"But my God shall supply all your need according to his riches in glory by Christ Jesus." — Phil 4:19</p>
            <a 
              href="#/contact" 
              onClick={(e) => navigate(e, '#/contact')}
              className="inline-block bg-slate-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-amber-600 transition-all hover:scale-105 shadow-2xl"
            >
              Share Your Testimony
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Give;
