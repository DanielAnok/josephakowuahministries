
import React from 'react';

const Ministries: React.FC = () => {
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  const ministryList = [
    {
      title: "The Prophetic Wing",
      desc: "Specialized prayer sessions and prophetic guidance to uncover divine destinies through direct revelation.",
      icon: "⚡",
      color: "bg-amber-600"
    },
    {
      title: "Youth  Ministry",
      desc: "Empowering the next generation to walk in holiness, spiritual authority, and career excellence.",
      icon: "🚀",
      color: "bg-indigo-600"
    },
    {
      title: "Women Fellowship",
      desc: "A fellowship of virtuous women dedicated to prayer, family restoration, and spiritual growth.",
      icon: "🌸",
      color: "bg-rose-500"
    },
    {
      title: "Men's Fellowship",
      desc: "Strengthening men to lead as priests of their homes and pillars in the kingdom of God.",
      icon: "⚔️",
      color: "bg-slate-800"
    },
    {
      title: "Children's Ministry",
      desc: "Nurturing children in the fear of the Lord through creative and biblical foundations.",
      icon: "🧸",
      color: "bg-emerald-600"
    },
    {
      title: "Evangelism & Missions",
      desc: "Bringing the light of the Gospel to remote areas through missions, charity, and soul winning.",
      icon: "🌍",
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-fadeIn">
      {/* Hero */}
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/sunday serv.jpg" alt="Scripture Background" className="w-full h-full object-cover bg-slate-800" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Serving the Kingdom</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">OUR  <span className="text-amber-500">MINISTRIES</span></h1>
          <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
Every part of our ministry exists to serve a specific purpose in God's kingdom. Find where your gifts align with our mission.          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ministryList.map((m, idx) => (
              <div key={idx} className="group relative bg-white rounded-[2rem] border border-slate-100 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 ${m.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-12 transition-transform shadow-xl text-white`}>
                  {m.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{m.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">{m.desc}</p>
                <a 
                  href="#/contact" 
                  onClick={(e) => navigate(e, '#/contact')}
                  className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest"
                >
                  Join This Ministry
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-600/5 pointer-events-none"></div>
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Want to make an impact?</h2>
          <p className="text-slate-400 mb-12 text-lg italic">
            "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." — Eph 2:10
          </p>
          <a 
            href="#/contact" 
            onClick={(e) => navigate(e, '#/contact')}
            className="inline-block bg-amber-600 text-white px-12 py-5 rounded-full font-bold hover:bg-amber-700 transition-all shadow-2xl hover:scale-105"
          >
            Contact Ministry Leaders
          </a>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
