import Link from "next/link";
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-mtr-blue flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-white">Make Them Right</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Building a brighter future for Zimbabwe&apos;s youth through education, hygiene, and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-mtr-yellow transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-mtr-yellow transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link href="/needs" className="text-slate-400 hover:text-mtr-yellow transition-colors">Needs List</Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-slate-400 hover:text-mtr-yellow transition-colors">Volunteer</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-mtr-green shrink-0" />
                <span>Kingdom Worship Trust, Zimbabwe</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-mtr-green shrink-0" />
                <span>+263 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-mtr-green shrink-0" />
                <span>contact@makethmright.org</span>
              </li>
            </ul>
          </div>

          {/* EcoCash / Donate */}
          <div>
            <h3 className="text-white font-semibold mb-6">Donate via EcoCash</h3>
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group hover:border-mtr-blue transition-all">
              <div className="bg-mtr-blue p-4 flex items-center justify-between text-white">
                <span className="font-bold">EcoCash</span>
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Merchant</p>
                  <p className="text-sm font-bold text-white">Nyasha Munyengeterwa</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Send to</p>
                  <p className="text-lg font-mono font-bold text-mtr-blue select-all">
                    +263 77 263 2522
                  </p>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Ref: &quot;MTR Donation&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Make Them Right Foundation. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-mtr-blue hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-mtr-blue hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-mtr-blue hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
