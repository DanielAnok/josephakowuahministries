
import React from 'react';

const About: React.FC = () => {
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/bbcprayer.jpg" alt="Scripture Background" className="w-full h-full object-cover bg-slate-800" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Foundation is</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Built on the <span className="text-amber-500">Living Word</span></h1>
          <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Founded on the Pillars of Prayer, Prophecy, and the manifestation of the Holy Spirit, Blessed Baptist Church International and 
            Joseph Akowuah Ministries is a global movement for the restoration of man to God. Through Evangelism and crusades, this commission is mandated to win the lost at all cost.
          </p>
        </div>
      </section>

      {/* Apostle Bio */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-amber-600 rounded-3xl z-0"></div>
                <img src="/images/founder1.jpg" alt="Apostle Leadership" className="relative z-10 rounded-3xl shadow-2xl transition-all duration-1000 bg-slate-100" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Apostle Joseph Akwasi Akowuah</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Apostle Joseph Akwasi Akowuah is the founder and leader of Blessed Baptist Church International. He has a profound mandate to preach the unadulterated Word of God and demonstrate the power of the Holy Spirit. His journey began in Kumasi, Ghana, where he established a small prayer group that has since blossomed into a worldwide ministry.
                </p>
                <p>
                  Known for his apostolic and prophetic ministry, he emphasizes the importance of a personal relationship with Jesus Christ, the power of persistent prayer, and the breaking of generational limitations through the prophetic word.
                </p>
                <p className="font-bold italic text-slate-900">
                  "My mission is simple: to see the captive set free and the name of Jesus glorified in every household."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Cards */}
      <section className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-slate-100 transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-10">🎯</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                To liberate the world from the bondages of darkness through the prophetic ministry and the teaching of Jesus Christ, making disciples of all nations.
              </p>
            </div>
            <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-slate-100 transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-3xl mb-10">👁️</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                A world where the manifestation of the Holy Spirit is tangible in every life, where every soul is restored to its divine destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Join */}
      <section className="py-24 bg-amber-600 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to start your spiritual journey?</h2>
          <div className="flex justify-center gap-6">
            <a 
              href="#/contact" 
              onClick={(e) => navigate(e, '#/contact')}
              className="bg-white text-amber-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-xl text-center"
            >
              Join Us Today
            </a>
            <a 
              href="#/ai-guidance" 
              onClick={(e) => navigate(e, '#/ai-guidance')}
              className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-xl text-center"
            >
              Speak to AI Pastor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
