import { BookOpen, Droplets, Smile, CheckCircle2 } from "lucide-react";

export default function NeedsPage() {
  const needs = [
    {
      category: "Stationery",
      icon: <BookOpen className="w-6 h-6" />,
      color: "mtr-blue",
      items: [
        "Exercise Books (A4 & A5)",
        "Pens (Blue, Black, Red)",
        "Pencils & Sharpeners",
        "Rulers & Erasers",
        "Textbooks (Primary & Secondary)",
        "School Bags",
        "Mathematical Sets"
      ]
    },
    {
      category: "Hygiene Essentials",
      icon: <Droplets className="w-6 h-6" />,
      color: "mtr-green",
      items: [
        "Bathing Soap",
        "Washing Powder",
        "Dishwashing Liquid",
        "Sanitary Pads",
        "Deodorant",
        "Toilet Paper",
        "Hand Sanitizer"
      ]
    },
    {
      category: "Personal Care",
      icon: <Smile className="w-6 h-6" />,
      color: "mtr-yellow",
      items: [
        "Toothpaste",
        "Toothbrushes",
        "Vaseline / Body Lotion",
        "Face Towels",
        "Combs & Hairbrushes",
        "Shoe Polish"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-50 py-16 mb-16 watermarked">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Needs List</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            We accept physical donations. Here is a detailed list of items that can make a significant difference.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {needs.map((category, idx) => (
            <div key={idx} className={`bg-white rounded-2xl shadow-xl border-t-4 overflow-hidden watermarked`} style={{ borderColor: `var(--color-${category.color})` }}>
              <div className={`p-6 flex items-center gap-4 border-b border-slate-100 bg-slate-50`}>
                <div className={`p-3 rounded-lg shadow-sm text-white`} style={{ backgroundColor: `var(--color-${category.color})` }}>
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{category.category}</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: `var(--color-${category.color})` }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Have items to donate?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We can arrange for collection or provide drop-off points. Please contact us to coordinate your donation.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-mtr-yellow text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-colors">
            Contact Us to Donate
          </a>
        </div>
      </div>
    </div>
  );
}
