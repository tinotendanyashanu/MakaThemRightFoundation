'use client';

import { useState } from 'react';
import { Smartphone, CheckCircle2 } from 'lucide-react';

export default function SchoolFeesPage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  // Hardcoded campaign metrics
  const campaignMetrics = {
    totalRaised: 1000,
    campaignGoal: 25000,
    studentsHelped: 2,
    costPerStudent: 540,
  };

  const gradeBreakdown = [
    { grade: 'Primary 1-3', students: 12, amountNeeded: 6000, amountRaised: 250 },
    { grade: 'Primary 4-6', students: 14, amountNeeded: 7000, amountRaised: 250 },
    { grade: 'Secondary 1-3', students: 12, amountNeeded: 7000, amountRaised: 250 },
    { grade: 'Secondary 4-6', students: 8, amountNeeded: 5000, amountRaised: 250 },
  ];

  const fundingTiers = [
    {
      id: 1,
      amount: 50,
      title: 'Books & Stationery',
      description: 'Provides school supplies for 1 student for a term',
      icon: '📚',
      impact: '1 student',
    },
    {
      id: 2,
      amount: 100,
      title: 'Full Student Package',
      description: 'Complete school fees & materials for 1 student',
      icon: '🎓',
      impact: '1 student (full support)',
    },
    {
      id: 3,
      amount: 250,
      title: 'Class Support',
      description: 'School fees for a small group of students',
      icon: '👥',
      impact: '~1 class',
    },
    {
      id: 4,
      amount: 500,
      title: 'Year Level Support',
      description: 'Complete support for an entire grade level',
      icon: '🏫',
      impact: '~12-14 students',
    },
  ];

  const progressPercentage = (campaignMetrics.totalRaised / campaignMetrics.campaignGoal) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-400 via-brand-300 to-amber-300 px-6 pt-32 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">School Fees Campaign</h1>
          <p className="text-xl text-slate-700 mb-2">Ensuring Every Child Has Access to Quality Education</p>
          <p className="text-lg text-slate-600">Help us raise funds to support students from disadvantaged backgrounds</p>
        </div>
      </section>

      {/* Campaign Goal Progress */}
      <section className="bg-white px-6 py-12 border-b border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-400 mb-2">${campaignMetrics.totalRaised.toLocaleString()}</div>
              <p className="text-slate-600 text-sm">Amount Raised</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">${campaignMetrics.campaignGoal.toLocaleString()}</div>
              <p className="text-slate-600 text-sm">Campaign Goal</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">{campaignMetrics.studentsHelped}</div>
              <p className="text-slate-600 text-sm">Students Helped</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">{Math.round(progressPercentage)}%</div>
              <p className="text-slate-600 text-sm">Progress</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">Campaign Progress</span>
              <span className="text-sm font-medium text-brand-400">
                ${campaignMetrics.totalRaised.toLocaleString()} / ${campaignMetrics.campaignGoal.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-brand-400 to-brand-300 h-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-slate-500 mt-2 text-center">
              ${(campaignMetrics.campaignGoal - campaignMetrics.totalRaised).toLocaleString()} remaining to reach our goal
            </p>
          </div>
        </div>
      </section>

      {/* Grade Level Breakdown */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Funding by Grade Level</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Here&apos;s how school fees are distributed across different grade levels and our progress in each
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {gradeBreakdown.map((level, index) => {
              const levelProgress = (level.amountRaised / level.amountNeeded) * 100;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{level.grade}</h3>
                      <p className="text-sm text-slate-600">{level.students} students</p>
                    </div>
                    <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                      {Math.round(levelProgress)}%
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-700">Raised</span>
                      <span className="font-semibold text-green-600">${level.amountRaised.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-700">Needed</span>
                      <span className="font-semibold text-slate-900">${level.amountNeeded.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-300 h-full transition-all duration-500"
                      style={{ width: `${levelProgress}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-500 mt-2">
                    ${(level.amountNeeded - level.amountRaised).toLocaleString()} remaining
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Funding Tiers - Impact of Donations */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">How Your Donation Helps</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Every contribution makes a real difference. Choose a tier that fits your capacity and see the direct impact
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundingTiers.map((tier) => (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(selectedTier === tier.id ? null : tier.id)}
                className={`rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                  selectedTier === tier.id
                    ? 'border-brand-400 bg-brand-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-brand-300'
                }`}
              >
                <div className="text-4xl mb-3">{tier.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">${tier.amount}</h3>
                <h4 className="text-sm font-semibold text-brand-600 mb-2">{tier.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{tier.description}</p>
                <div className="flex items-center text-brand-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  {tier.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">How to Donate</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We currently accept manual transfers. Please use the details below to send your contribution
          </p>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {/* EcoCash */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-brand-400 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 text-brand-400 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">EcoCash</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Merchant Name</p>
                  <p className="text-lg font-semibold text-slate-900">MTR Zimbabwe</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Phone Number</p>
                  <p className="text-lg font-semibold text-slate-900">+263 78 123 4567</p>
                </div>
                <div className="bg-brand-50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-brand-600">Quick Transfer:</span> Send money to the merchant number above and reply with your name and the amount sent
                  </p>
                </div>
              </div>
            </div>

            {/* Bank Transfer Removed */}
          </div>

          <div className="mt-12 bg-yellow-50 border-l-4 border-l-yellow-400 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-yellow-800">📝 Note:</span> After making a transfer, please{' '}
              <a href="/contact" className="text-brand-600 hover:text-brand-700 underline font-semibold">
                contact us
              </a>{' '}
              with your name, amount transferred, and date so we can record your donation and send you a receipt.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* 
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Stories of Impact</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Hear from beneficiaries and educators who have experienced the impact of your generosity
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">{testimonial.avatar}</span>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* FAQ/Additional Info */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3">What happens to the funds collected?</h3>
              <p className="text-slate-700">
                All funds collected go directly towards paying school fees and providing learning materials for identified
                students. We maintain transparency and provide regular updates on how funds are utilized.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3">Can I donate and request a specific grade level?</h3>
              <p className="text-slate-700">
                Absolutely! When you make a donation, you can specify which grade level you&apos;d like to support. We&apos;ll prioritize
                your donation accordingly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3">Will I receive a receipt for my donation?</h3>
              <p className="text-slate-700">
                Yes, we provide a receipt and acknowledgment for all donations. Simply contact us after making your transfer with
                your donation details.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3">How can I get more involved?</h3>
              <p className="text-slate-700">
                Beyond donations, we welcome volunteers to help with mentoring, tutoring, or community outreach. Visit our{' '}
                <a href="/volunteer" className="text-brand-600 hover:text-brand-700 underline font-semibold">
                  volunteer page
                </a>{' '}
                to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Make a Difference Today</h2>
          <p className="text-lg text-slate-700 mb-8">
            Your contribution, no matter the size, helps ensure that children have the opportunity to receive quality education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/donate"
              className="inline-block border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              View All Ways to Donate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
