"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          {/* Logo Container */}
          <div className="relative w-12 h-12 bg-white rounded-md overflow-hidden flex items-center justify-center shadow-sm">
             <Image 
               src="/logo.png" 
               alt="MTR Logo" 
               width={48} 
               height={48} 
               className="object-contain p-1"
               priority
             />
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight text-white leading-none">Make Them Right</span>
            <span className="block text-xs text-white/70 tracking-wide font-normal mt-1">Foundation</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors">About Us</Link>
          <Link href="/projects" className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors">Projects</Link>
          <Link href="/needs" className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors">Needs List</Link>
          <Link href="/volunteer" className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors">Volunteer</Link>
          <Link href="/contact" className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors">Contact</Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-sm font-medium text-white/90 flex items-center gap-1 cursor-pointer hover:text-brand-400">
            EN <ChevronDown className="w-3 h-3" />
          </span>
          <Link href="/donate" className="px-6 py-2.5 rounded-full bg-brand-400 hover:bg-brand-500 text-slate-900 font-semibold text-sm transition-all shadow-lg shadow-brand-400/20">
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          <Link href="/" className="text-base font-medium text-white hover:text-brand-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" className="text-base font-medium text-white hover:text-brand-400" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/projects" className="text-base font-medium text-white hover:text-brand-400" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link href="/needs" className="text-base font-medium text-white hover:text-brand-400" onClick={() => setIsMenuOpen(false)}>Needs List</Link>
          <Link href="/volunteer" className="text-base font-medium text-white hover:text-brand-400" onClick={() => setIsMenuOpen(false)}>Volunteer</Link>
          <Link href="/contact" className="text-base font-medium text-white hover:text-brand-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link href="/donate" className="text-base font-medium text-brand-400 hover:text-brand-300" onClick={() => setIsMenuOpen(false)}>Donate Now</Link>
        </div>
      )}
    </nav>
  );
}
