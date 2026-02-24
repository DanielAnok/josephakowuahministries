
import React from 'react';

const Sermons: React.FC = () => {
  const sermons = [
    {
      id: '1',
      title: 'Miracle Services ',
      thumbnail: '/images/audit.jpg',
      description: 'Experience total liberation as Apostle Joseph teaches on overcoming systemic barriers.'
    },
    {
      id: '2',
      title: 'Prophetic Teachings',
      thumbnail: '/images/founder4.jpg',
      description: 'Understanding how to walk in the prophetic dimension and hear God\'s voice clearly.'
    },
    {
      id: '3',
      title: 'Allnight Prayers',
      thumbnail: '/images/midnight prayers.png',
      description: 'A powerful session of intercession and warfare prayer that changed thousands of lives.'
    }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Sermon Archives</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Listen to life-changing messages and prophetic words delivered by Apostle Joseph Akwasi Akowuah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-56 bg-slate-200">
                <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-300" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-lg">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">{sermon.date}</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">{sermon.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{sermon.description}</p>
                <a 
                  href="https://www.facebook.com/AkowuahJosephMinistries/live" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 font-bold flex items-center gap-2 group hover:underline"
                >
                  Watch Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sermons;
