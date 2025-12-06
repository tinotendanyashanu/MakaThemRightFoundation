import Image from "next/image";
import { Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-slate-50 py-16 mb-16 watermarked">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Us</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Dedicated to building a brighter future for Zimbabwe&apos;s youth through education and dignity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
             <Image 
               src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
               alt="Children learning" 
               fill
               className="object-cover"
             />
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-mtr-yellow/10 rounded-full text-mtr-yellow">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide the great result for children on time. We aim to bridge the gap in educational resources and basic hygiene needs for underprivileged communities, ensuring every child has the tools to write their own future.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-mtr-blue/10 rounded-full text-mtr-blue">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                A world where every child, regardless of their background, has access to quality education and the dignity of personal hygiene, empowering them to become the leaders of tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Our Team</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Meet the People Behind MTR</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                     <Users className="w-10 h-10" />
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Team Member {i}</h3>
                <p className="text-brand-600 font-medium mb-3">Volunteer / Coordinator</p>
                <p className="text-slate-500 text-sm">
                  Dedicated professional with a passion for community development and child welfare.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
