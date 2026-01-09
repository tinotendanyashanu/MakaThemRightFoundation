import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://makethamright.org'),
  title: {
    default: "Make Them Right (MTR) Foundation | Empowering Zimbabwe's Youth",
    template: "%s | MTR Foundation"
  },
  description: "Make Them Right (MTR) Foundation is dedicated to sourcing stationery, hygiene essentials, and providing support for those in need in Zimbabwe. Join us in building a brighter future.",
  keywords: ["Charity", "Zimbabwe", "Education", "Hygiene", "Youth Support", "Non-profit", "Donation", "Volunteer", "School Fees", "Make Them Right"],
  authors: [{ name: "Make Them Right Foundation" }],
  creator: "Make Them Right Foundation",
  publisher: "Make Them Right Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Make Them Right (MTR) Foundation",
    description: "Join us in our mission to provide education and dignity to the youth of Zimbabwe through stationery, hygiene essentials, and support.",
    url: 'https://makethamright.org',
    siteName: 'Make Them Right Foundation',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Make Them Right Foundation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Make Them Right (MTR) Foundation",
    description: "Sourcing stationery, hygiene essentials, and support for those in need in Zimbabwe.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-600 font-sans selection:bg-brand-400 selection:text-brand-900 relative flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
