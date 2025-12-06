import { Smartphone, Building2 } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-900 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-mtr-blue/10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Donate to MTR</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your contribution helps us provide essential supplies to children in need. Every dollar counts.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* EcoCash Option */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:border-mtr-blue transition-all group watermarked">
            <div className="bg-mtr-blue p-6 flex items-center justify-between text-white">
              <h2 className="text-2xl font-bold">EcoCash</h2>
              <Smartphone className="w-8 h-8" />
            </div>
            <div className="p-8 space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Merchant Name</p>
                <p className="text-xl font-bold text-slate-900">Nyasha Munyengeterwa</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Dial Code</p>
                <p className="text-3xl font-mono font-bold text-slate-900 select-all cursor-pointer" title="Click to copy">
                  *151*...#
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Send to: <span className="font-bold text-slate-900 select-all">+263 77 263 2522</span>
                </p>
              </div>
              <p className="text-sm text-slate-500 italic">
                Please use &quot;MTR Donation&quot; as the reference.
              </p>
            </div>
          </div>

          {/* Bank Transfer Option (Mock) */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:border-mtr-green transition-all group watermarked">
            <div className="bg-mtr-green p-6 flex items-center justify-between text-white">
              <h2 className="text-2xl font-bold">Bank Transfer</h2>
              <Building2 className="w-8 h-8" />
            </div>
            <div className="p-8 space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Bank Name</p>
                <p className="text-xl font-bold text-slate-900">CABS Zimbabwe</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Account Name</p>
                <p className="text-xl font-bold text-slate-900">Kingdom Worship Trust</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Account Number</p>
                <p className="text-2xl font-mono font-bold text-slate-900 select-all">
                  1003123456
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Other Ways to Give</h3>
          <p className="text-slate-600 mb-8">
            We also accept physical donations of stationery, clothes, and hygiene products.
          </p>
          <a href="/needs" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all">
            View Needs List
          </a>
        </div>
      </div>
    </div>
  );
}
