"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-50 py-16 mb-16 watermarked">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Have questions or want to get involved? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you want to donate, volunteer, or just learn more about our work, our team is ready to answer your questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mtr-blue/10 rounded-full flex items-center justify-center text-mtr-blue shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600">+263 78 304 5269</p>
                  <p className="text-slate-600">+263 77 590 0457</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mtr-green/10 rounded-full flex items-center justify-center text-mtr-green shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <a href="mailto:makethemrightfoundation@gmail.com" className="text-slate-600 hover:text-mtr-green transition-colors">
                    makethemrightfoundation@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mtr-red/10 rounded-full flex items-center justify-center text-mtr-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 watermarked">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-xl text-center">
                <p className="font-bold text-lg mb-2">Message Sent!</p>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-4 text-sm font-semibold underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-blue focus:ring-2 focus:ring-mtr-blue/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-blue focus:ring-2 focus:ring-mtr-blue/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <input type="text" id="subject" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-blue focus:ring-2 focus:ring-mtr-blue/20 outline-none transition-all" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-blue focus:ring-2 focus:ring-mtr-blue/20 outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-mtr-blue text-white font-bold rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
