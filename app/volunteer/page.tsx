"use client";

import { useState } from "react";
import { HeartHandshake, CheckCircle2 } from "lucide-react";

export default function VolunteerPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-50 py-16 mb-16 watermarked">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Become a Volunteer</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Join our community of changemakers. Your time and skills can help write a better future for children.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Volunteer With Us?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-mtr-green/10 flex items-center justify-center text-mtr-green shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Make a Real Impact</h3>
                  <p className="text-slate-600">Directly contribute to improving the lives of underprivileged children through education and hygiene support.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-mtr-blue/10 flex items-center justify-center text-mtr-blue shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Join a Community</h3>
                  <p className="text-slate-600">Connect with like-minded individuals who are passionate about social change and community development.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-mtr-yellow/10 flex items-center justify-center text-mtr-yellow shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Gain Experience</h3>
                  <p className="text-slate-600">Develop new skills in event organization, logistics, fundraising, and community outreach.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</h3>
                <p className="text-slate-400 italic">- Mahatma Gandhi</p>
              </div>
              <HeartHandshake className="absolute right-0 bottom-0 w-48 h-48 text-white/5 -mr-8 -mb-8" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 watermarked">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Volunteer Application</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 text-green-700 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                <p className="mb-6">Thank you for your interest in volunteering. We will review your application and get back to you soon.</p>
                <button onClick={() => setFormStatus('idle')} className="text-sm font-semibold underline">Submit another application</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-yellow focus:ring-2 focus:ring-mtr-yellow/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-yellow focus:ring-2 focus:ring-mtr-yellow/20 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-yellow focus:ring-2 focus:ring-mtr-yellow/20 outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-yellow focus:ring-2 focus:ring-mtr-yellow/20 outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="interests" className="text-sm font-medium text-slate-700">Areas of Interest</label>
                  <select id="interests" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-yellow focus:ring-2 focus:ring-mtr-yellow/20 outline-none transition-all">
                    <option value="">Select an option</option>
                    <option value="events">Event Planning</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="logistics">Logistics & Distribution</option>
                    <option value="marketing">Marketing & Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Why do you want to volunteer?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-mtr-yellow focus:ring-2 focus:ring-mtr-yellow/20 outline-none transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-mtr-yellow text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-all disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
