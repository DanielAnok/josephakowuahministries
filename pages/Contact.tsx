
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Prayer Request',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using Formspree for direct email delivery. 
      // Replace 'YOUR_FORMSPREE_ID' with your actual ID from formspree.io to activate.
      const response = await fetch('https://formspree.io/f/mkovrvvl', { // Note: mnnjzqge is a placeholder, you can create a free one at formspree.io
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _replyto: 'blessedbaptist90@gmail.com', // Optional backup email hint
          _subject: `Prophetic Request: ${formData.subject} from ${formData.name}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', subject: 'Prayer Request', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white animate-fadeIn">
        <div className="text-center p-12 max-w-lg">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">
            ✓
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Request Received</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Your message has been sent to the Altar. Apostle Joseph and the prayer team will stand in agreement with you. Expect your testimony!
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="bg-amber-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-amber-700 transition-all shadow-xl"
          >
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter text-balance">Let's Connect</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
              Whether you need prayer, counseling, or directions to our ministry center in Kumasi, we are here for you. Your breakthrough is one conversation away.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-amber-600 rounded-2xl shadow-lg flex items-center justify-center text-3xl flex-shrink-0 text-white transition-transform group-hover:rotate-6">
                  📱
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">WhatsApp & Calls</h4>
                  <div className="space-y-2 flex flex-col">
                    <a href="tel:+233240171460" className="text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors">+233 24 017 1460</a>
                    <a href="tel:+233532027582" className="text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors">+233 53 202 7582</a>
                    <a 
                      href="https://wa.me/233240171460" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm bg-green-500 text-white px-4 py-1.5 rounded-full w-fit font-black uppercase tracking-widest hover:bg-green-600 transition-colors shadow-md mt-2 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Instant WhatsApp Prayer
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl shadow-lg flex items-center justify-center text-3xl flex-shrink-0 text-white transition-transform group-hover:-rotate-6">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Direct Email</h4>
                  <a href="mailto:blessedbaptist90@gmail.com" className="text-xl text-slate-600 hover:text-amber-600 transition-colors break-all">
                    blessedbaptist90@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl shadow-lg flex items-center justify-center text-3xl flex-shrink-0 transition-transform group-hover:scale-110">
                  📍
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Faith And Love Cathederal,Chairman Kooko-Ano,Atimatim</h4>
                  <p className="text-xl text-slate-600">Kumasi, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Send a Prophetic Request</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all shadow-sm" 
                    placeholder="Full Name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all shadow-sm" 
                    placeholder="+233..." 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all shadow-sm"
                >
                  <option value="Prayer Request">Prayer Request</option>
                  <option value="Counseling">Counseling Session</option>
                  <option value="Testimony">Share a Testimony</option>
                  <option value="Giving">Inquiry about Giving</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6} 
                  required 
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 outline-none transition-all shadow-sm resize-none" 
                  placeholder="Describe your situation..."
                ></textarea>
              </div>
              
              {status === 'error' && (
                <p className="text-red-600 text-sm font-bold text-center">There was an error sending your message. Please try again or use WhatsApp.</p>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-amber-600 text-white font-black py-5 rounded-2xl hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20 text-lg uppercase tracking-widest active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Transmitting...
                  </>
                ) : 'Submit to Altar'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
