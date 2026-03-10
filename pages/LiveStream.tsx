
import React, { useState, useEffect } from 'react';

const LiveStream: React.FC = () => {
  const [signalStatus, setSignalStatus] = useState<'searching' | 'detected' | 'standby'>('searching');
  const [signalStrength, setSignalStrength] = useState(0);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    // Initial spiritual frequency scan
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      setSignalStrength(Math.min(Math.floor(progress), 100));
      
      if (progress >= 100) {
        clearInterval(interval);
        setSignalStatus('detected');
        // Delay the embed slightly to ensure the scan feels authentic
        setTimeout(() => setShowEmbed(true), 500);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Check if we are in a peak service window (GMT)
  const isLikelyLive = () => {
    const now = new Date();
    const day = now.getUTCDay(); // 0 is Sunday
    const hour = now.getUTCHours();
    // Sunday 8AM-1PM GMT is the main prophetic window
    return day === 0 && hour >= 8 && hour <= 13;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white animate-fadeIn selection:bg-amber-500/30">
      {/* Dynamic Header */}
      <section className="py-8 bg-slate-900 border-b border-white/5 sticky top-20 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className={`w-4 h-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] ${signalStatus === 'detected' ? 'bg-red-600 animate-pulse' : 'bg-slate-700'}`}></div>
              {signalStatus === 'detected' && (
                <div className="absolute inset-0 w-4 h-4 bg-red-600 rounded-full animate-ping opacity-75"></div>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                Prophetic Live Altar
                {isLikelyLive() && (
                  <span className="bg-amber-600 text-[10px] px-2 py-0.5 rounded text-white font-black uppercase tracking-tighter animate-pulse">Broadcasting Now</span>
                )}
              </h1>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em] mt-1">
                {signalStatus === 'searching' ? `Scanning Altar Frequency: ${signalStrength}%` : 'Connection Established'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-1 items-end h-4 mr-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className={`w-1 rounded-full transition-all duration-500 ${signalStrength >= i * 20 ? 'bg-amber-500 h-full' : 'bg-slate-800 h-1/2'}`}
                />
              ))}
            </div>
            <a 
              href="https://www.facebook.com/AkowuahJosephMinistries/live" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-sm font-black transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Watch on Facebook App
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.383 14.444 5 15.333 5H18V0h-3.333C11.333 0 9 2.333 9 5.333V8z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Broadcast Center */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 group">
          {!showEmbed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-lg">
              <div className="w-20 h-20 border-4 border-amber-600/20 border-t-amber-600 rounded-full animate-spin mb-8"></div>
              <h2 className="text-2xl font-serif italic text-amber-500">Connecting to Masofa TV...</h2>
              <p className="text-slate-500 mt-4 text-xs uppercase tracking-widest font-bold">Initializing Satellite Link</p>
            </div>
          ) : (
            <>
              {/* Note: Facebook dynamic '/live' URLs sometimes trigger "Video Unavailable" in iframes if the stream is offline or strictly protected. */}
              <iframe 
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAkowuahJosephMinistries%2Flive%2F&show_text=false&width=560&t=0" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>

              {/* Robust Fallback Overlay: Visible only if the embed is blocked or during service gaps */}
              <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="pointer-events-auto bg-slate-900/90 p-8 rounded-3xl border border-white/10 text-center max-w-sm shadow-2xl">
                   <p className="text-amber-500 font-bold mb-4">Video not loading?</p>
                   <p className="text-xs text-slate-400 mb-6"> Settings may sometimes restrict embedded views in certain regions.</p>
                   <a 
                    href="https://www.facebook.com/AkowuahJosephMinistries/live" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-slate-950 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest"
                   >
                     Launch Direct Altar
                   </a>
                </div>
              </div>
              
              {/* Stream Metadata */}
              <div className="absolute inset-x-0 bottom-0 p-8 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent flex justify-between items-end">
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 px-3 py-1 rounded font-black text-[10px] tracking-widest animate-pulse">LIVE</div>
                  <p className="text-xs font-bold text-white/90 drop-shadow-md">Masofa TV // HQ Stream</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Support & Prayer Sections */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold leading-tight">The Anointing has no Boundaries</h2>
              <p className="text-slate-400 leading-relaxed text-lg max-w-3xl">
                You are connecting to a global prophetic movement. If the video player indicates "Unavailable," it often means the stream has either ended or is strictly scheduled for a later hour. 
                <span className="text-amber-500 block mt-4 font-serif italic">Use the button at the top to check our Facebook page directly for recent recordings.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-amber-600/30 transition-all group">
                <h4 className="text-amber-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-4 group-hover:tracking-[0.3em] transition-all">Prophetic Altar</h4>
                <p className="text-xl font-bold mb-2">Sundays 8:00 AM GMT</p>
                <p className="text-sm text-slate-500">Grace Hour Service</p>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-amber-600/30 transition-all group">
                <h4 className="text-amber-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-4 group-hover:tracking-[0.3em] transition-all">Mid-Week Service</h4>
                <p className="text-xl font-bold mb-2">Wednesdays 7:00 PM GMT</p>
                <p className="text-sm text-slate-500">Blood of Jesus Service</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-amber-600 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Sow into the Altar</h3>
                <p className="text-amber-100 text-sm mb-8 leading-relaxed">Your seed fuels the technology that brings this prophetic word into your home.</p>
                <a 
                  href="#/give" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#/give';
                  }}
                  className="block w-full bg-slate-950 text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/40"
                >
                  Give Online
                </a>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
            </div>

            <div className="bg-slate-900 border border-white/10 p-10 rounded-[2.5rem] hover:bg-slate-800/50 transition-all">
              <h3 className="text-xl font-bold mb-4">Prophetic Prayer</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Need a direct prophetic word? Our team is standing by on WhatsApp.</p>
              <a 
                href="https://wa.me/233240171460" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-600/10 border border-green-600/30 text-green-500 py-4 rounded-2xl font-bold hover:bg-green-600 hover:text-white transition-all shadow-lg"
              >
                <span>WhatsApp Intercession</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveStream;
