import { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Projects | MTR Foundation",
  description: "Discover our latest projects including Back to School Drives, Hygiene Kit Distribution, and School Fee Support programs.",
};

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Back to School Drive 2024",
      category: "Education",
      date: "January 2024",
      location: "Harare, Zimbabwe",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      description: "Provided stationery kits including books, pens, and pencils to over 500 students in rural schools, ensuring they started the year ready to learn.",
      color: "border-mtr-blue text-mtr-blue"
    },
    {
      id: 2,
      title: "Hygiene for Health",
      category: "Health",
      date: "March 2024",
      location: "Epworth, Zimbabwe",
      image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=2070&auto=format&fit=crop",
      description: "Distributed hygiene packs containing soap, toothpaste, and sanitary wear to vulnerable families, promoting better health and dignity.",
      color: "border-mtr-green text-mtr-green"
    },
    {
      id: 3,
      title: "Winter Warmth Campaign",
      category: "Community",
      date: "June 2024",
      location: "Chitungwiza, Zimbabwe",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
      description: "Collected and distributed warm clothing and blankets to the elderly and orphans during the cold winter months.",
      color: "border-mtr-red text-mtr-red"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-50 py-16 mb-16 watermarked">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Projects</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            See how your donations and support are making a tangible difference in our communities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 ${project.color} hover:shadow-xl transition-all group watermarked`}>
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <Link href="#" className={`inline-flex items-center font-semibold ${project.color.split(' ')[1]} hover:underline`}>
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
