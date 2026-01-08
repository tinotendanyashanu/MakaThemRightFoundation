"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  Droplets, 
  Smile, 
  ArrowRight 
} from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    alt: "Smiling children in a classroom environment"
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2069&auto=format&fit=crop",
    alt: "Students learning and writing in notebooks"
  },
  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop",
    alt: "Community gathering and support"
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    alt: "Volunteers helping and distributing supplies"
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Fixed Background Watermark */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="watermark-text text-[20vw] font-bold leading-none tracking-tighter opacity-100 select-none rotate-12">
          MTR
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div 
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                className="object-cover opacity-60"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 mb-6 fade-in-up">
            <span className="h-px w-8 bg-brand-400"></span>
            <span className="text-brand-400 font-medium tracking-wide uppercase text-sm">Make Them Right (MTR)</span>
            <span className="h-px w-8 bg-brand-400"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.1] fade-in-up delay-100">
            Write into <br className="hidden md:block" />
            the <span className="text-brand-400">Future.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-normal leading-relaxed fade-in-up delay-200">
            We are sourcing stationery, hygiene essentials, and support for those in need. Join our campaign to build a brighter tomorrow for Zimbabwe&apos;s youth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 fade-in-up delay-300">
            <Link href="/volunteer" className="min-w-[180px] px-8 py-4 border border-brand-400 text-brand-400 hover:bg-brand-400 hover:text-slate-900 rounded-full font-medium text-base transition-all duration-300">
              Become a Volunteer
            </Link>
            <Link href="/donate" className="min-w-[180px] px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-medium text-base transition-all duration-300">
              Donate Now
            </Link>
          </div>
        </div>
        
        {/* Pagination Dots at bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentImageIndex 
                  ? "bg-white opacity-100 scale-125" 
                  : "bg-white opacity-40 hover:opacity-100"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Yellow Band Section */}
      <section className="bg-white py-20 relative z-20 watermarked">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            We are a non-profit Charity & NGO Organization
          </h2>
          {/* Spacer to push cards down */}
          <div className="h-20 md:h-32"></div>
        </div>
      </section>

      {/* Overlapping Cards Section */}
      <section className="relative z-30 -mt-24 md:-mt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 - Blue */}
            <div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-b-4 border-mtr-blue hover:border-mtr-blue transition-all group watermarked">
              <div className="w-16 h-16 mx-auto mb-6 text-mtr-blue group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.15-.49 2.87 2.87 0 0 1 1.45 2.5"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Donation</h3>
              <p className="text-base text-slate-500 mb-6 leading-relaxed">
                Every bar of soap and every pencil counts towards dignity and education.
              </p>
              <Link href="/needs" className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-mtr-blue transition-colors">View Items</Link>
            </div>

            {/* Card 2 - Yellow */}
            <div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-b-4 border-mtr-yellow hover:border-mtr-yellow transition-all group watermarked">
              <div className="w-16 h-16 mx-auto mb-6 text-mtr-yellow group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Fundraising</h3>
              <p className="text-base text-slate-500 mb-6 leading-relaxed">
                Financial support allows us to purchase items in bulk and distribute them locally.
              </p>
              <Link href="/donate" className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-mtr-yellow transition-colors">Donate Cash</Link>
            </div>

            {/* Card 3 - Green */}
            <div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-b-4 border-mtr-green hover:border-mtr-green transition-all group watermarked">
              <div className="w-16 h-16 mx-auto mb-6 text-mtr-green group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><line x1="8" x2="8" y1="2" y2="4"></line><line x1="16" x2="16" y1="2" y2="4"></line></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Volunteer</h3>
              <p className="text-base text-slate-500 mb-6 leading-relaxed">
                Join our mission to source essential supplies for underprivileged communities.
              </p>
              <Link href="/volunteer" className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-mtr-green transition-colors">Join Us</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Our Impact Section (New) */}
      <section className="py-20 bg-slate-50 watermarked">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-mtr-red font-medium tracking-wider uppercase text-sm mb-2 block">Our Impact</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Making a Difference</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Through your support, we are able to reach more children and provide them with the tools they need to succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 watermarked">
              <div className="text-4xl font-bold text-mtr-blue mb-2">500+</div>
              <div className="text-slate-600">Children Helped</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 watermarked">
              <div className="text-4xl font-bold text-mtr-green mb-2">1000+</div>
              <div className="text-slate-600">Books Donated</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 watermarked">
              <div className="text-4xl font-bold text-mtr-yellow mb-2">50+</div>
              <div className="text-slate-600">Volunteers</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 watermarked">
              <div className="text-4xl font-bold text-mtr-red mb-2">5</div>
              <div className="text-slate-600">Schools Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-400/20 rounded-full blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Images/Volonteer.webp" 
                  alt="Volunteers" 
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-8 tracking-tight leading-tight">
                Welcome to <span className="text-brand-400">MTR</span> Charity
              </h2>
              
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                We are confident to confirm that all members in our foundation are professionals in the charity space. It means that human resources experience in the field with consultant, organization events for the needy.
              </p>
              
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                Our long-term working experience effectively brings us achievement. Our mission is to provide the great result for children on time. Especially, if they have any questions relating to the foundation, please send us & we will try our best.
              </p>

              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-brand-400 text-white rounded-full font-medium text-lg hover:bg-brand-500 transition-all shadow-lg shadow-brand-400/30">
                More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Needed Items Grid */}
      <section id="items" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-400 font-medium tracking-wider uppercase text-sm mb-2 block">Our Needs</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Items You Can Donate</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              We accept physical donations for our campaign drive. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 rounded-full bg-brand-400/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-400 group-hover:text-white transition-colors">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Stationery</h3>
              <p className="text-lg text-slate-500">Books, pens, pencils, rulers, and school supplies to help children write into the future.</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 rounded-full bg-brand-400/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-400 group-hover:text-white transition-colors">
                <Droplets className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Hygiene Essentials</h3>
              <p className="text-lg text-slate-500">Bathing soap, washing powder, and dishwashing liquid to maintain health and dignity.</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 rounded-full bg-brand-400/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-400 group-hover:text-white transition-colors">
                <Smile className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Personal Care</h3>
              <p className="text-lg text-slate-500">Toothpaste, toothbrushes, and Vaseline. Small items that make a massive difference.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <Link href="/needs" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all">
                View Full Needs List
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
