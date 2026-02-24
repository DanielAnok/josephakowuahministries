
import React from 'react';

const Events: React.FC = () => {
  const weeklyServices = [
    { 
      day: "Sunday", 
      time: "8:00 AM - 12:00 PM", 
      title: "Grace Hour Service", 
      desc: "Our main celebration service featuring intense worship, profound teaching, and the manifest presence of God.",
      icon: "⛪"
    },
    { 
      day: "Tuesday", 
      time: "10:00 AM - 12.00 PM", 
      title: "Women Fellowship", 
      desc: "A women's gathering for fellowship, prayer, and empowerment.",
      icon: "👩‍🦰"
    },
    { 
      day: "Wednesday", 
      time: "6:00 PM - 8:30 PM", 
      title: "Blood of Jesus Service", 
      desc: "A mid-week dose of spiritual fire and persistent prayer to navigate the week in victory.",
      icon: "💥"
    },
    { 
      day: "Thursday", 
      time: "8:00 AM - 2:30 PM", 
      title: "Jericho Prayer Service", 
      desc: "A Prophetic gathering for intense prayer and intercession.",
      icon: "🙏"
    },
    { 
      day: "Friday", 
      time: "10:00 PM - 3:00 AM", 
      title: "Allnight Warfare", 
      desc: "Strategic spiritual warfare sessions at the altar to break seasonal barriers and claim new territories.",
      icon: "⚔️"
    }
  ];

  const upcomingEvents = [
    {
      title: "CONVENTION 2026",
      date: "TO BE ANNOUNCED",
      time: "6:00 PM Prompt",
      location: "Church Grounds, Kumasi",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
      tag: "FLAGSHIP CONFERENCE"
    },
    {
      title: "CAMP MEETING 2026",
      date: "TO BE ANNOUNCED",
      time: "5:00 PM",
      location: "Church Grounds, Kumasi",
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
      tag: "SPECIAL SEMINAR"
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-fadeIn">
      {/* Header */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600" className="w-full h-full object-cover" alt="Event crowd background" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Visitation Schedule</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Connect with the <span className="text-amber-500">Divine</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">Join us at any of our live sessions to experience the raw power of the Holy Ghost.</p>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Weekly Altar Schedule</h2>
              <p className="text-slate-500 max-w-md">Consistent spiritual maintenance is the key to walking in victory. Join us weekly.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weeklyServices.map((service, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-sm relative group hover:bg-white hover:shadow-2xl hover:border-amber-600/20 transition-all duration-500">
                <div className="text-5xl mb-10 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                <h3 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">{service.day}</h3>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 font-bold mb-8 text-sm">{service.time}</p>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{service.desc}</p>
                <div className="mt-10 pt-8 border-t border-slate-200">
                   <a 
                    href="#/contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = '#/contact';
                    }}
                    className="text-xs font-black uppercase tracking-widest text-slate-900 hover:text-amber-600 flex items-center gap-2"
                   >
                     Get Directions <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Global Conferences</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {upcomingEvents.map((event, idx) => (
               <div key={idx} className="flex flex-col md:flex-row bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 group">
                 <div className="md:w-1/2 overflow-hidden h-64 md:h-auto bg-slate-200">
                   <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="md:w-1/2 p-10 flex flex-col justify-center">
                   <span className="text-[10px] font-black text-amber-600 tracking-[0.3em] mb-4">{event.tag}</span>
                   <h3 className="text-3xl font-bold mb-4 text-slate-900">{event.title}</h3>
                   <div className="space-y-3 mb-8">
                     <p className="text-sm font-bold text-slate-700 flex items-center gap-3">📅 {event.date}</p>
                     <p className="text-sm font-bold text-slate-700 flex items-center gap-3">🕒 {event.time}</p>
                     <p className="text-sm font-bold text-slate-400 flex items-center gap-3">📍 {event.location}</p>
                   </div>
                   <a 
                    href="#/contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = '#/contact';
                    }}
                    className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-600 transition-all text-center shadow-lg"
                   >
                     Register Interest
                   </a>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
