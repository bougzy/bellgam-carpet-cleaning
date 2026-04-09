// import Link from 'next/link';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { SITE_CONFIG, WHY_CHOOSE_US, STATS, CLEANING_PROCESS } from '@/lib/constants';
// import { generateWhatsAppLink } from '@/lib/whatsapp';
// import {
//   Shield,
//   Leaf,
//   Sparkles,
//   CheckCircle,
//   Clock,
//   DollarSign,
//   Phone,
//   ArrowRight,
//   Award,
//   Users,
//   MapPin,
//   Heart,
// } from 'lucide-react';

// export const metadata = {
//   title: 'About Us | Bellgams Carpet Cleaning',
//   description:
//     "Learn about Bellgams Carpet Cleaning — British Columbia's trusted carpet and upholstery cleaning specialists. Family-run, eco-friendly, and committed to exceptional results since 2010.",
// };

// const iconMap: Record<string, React.ElementType> = {
//   'shield-check': Shield,
//   leaf: Leaf,
//   sparkles: Sparkles,
//   'check-circle': CheckCircle,
//   clock: Clock,
//   'dollar-sign': DollarSign,
// };

// const teamValues = [
//   {
//     icon: Heart,
//     title: 'Family-Run Business',
//     description:
//       'Bellgams was built from the ground up by a family who believed British Columbia deserved a carpet cleaning company that actually cares about the result, not just the invoice.',
//   },
//   {
//     icon: Award,
//     title: 'Trained & Certified',
//     description:
//       "Every technician is certified, background-checked, and trained on our specific cleaning protocols before they set foot in a customer's home.",
//   },
//   {
//     icon: Users,
//     title: 'Community First',
//     description:
//       "We serve over 15 cities across BC and invest in the communities we work in — from Vancouver's West End to Surrey's suburbs and beyond.",
//   },
//   {
//     icon: MapPin,
//     title: 'Local Expertise',
//     description:
//       'We understand BC homes: the damp Lower Mainland climate, pet-friendly households, and the high-density condo market. Our methods are tailored for local conditions.',
//   },
// ];

// export default function AboutPage() {
//   const whatsappLink = generateWhatsAppLink({
//     message: "Hi! I'd like to learn more about Bellgams and get a free quote.",
//   });

//   return (
//     <div>
//       {/* Hero */}
//       <section className="section-padding bg-gradient-bg-1">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center">
//             <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
//               <Heart className="w-4 h-4 text-primary-400" />
//               <span className="text-sm text-gray-300">About Bellgams</span>
//             </div>
//             <h1 className="heading-1 mb-6">
//               BC&apos;s Trusted{' '}
//               <span className="gradient-text">Carpet Cleaning</span>{' '}
//               Specialists
//             </h1>
//             <p className="body-large text-gray-300 mb-8">
//               Since 2010, Bellgams has delivered professional carpet, upholstery, and area rug
//               cleaning to thousands of homes and businesses across British Columbia. We are a
//               family-run company built on honest work, eco-friendly methods, and results that
//               speak for themselves.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                 <Button variant="primary" size="lg" className="group">
//                   Get a Free Quote
//                   <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
//                 </Button>
//               </a>
//               <a href={`tel:${SITE_CONFIG.phone}`}>
//                 <Button variant="outline" size="lg" className="group">
//                   <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
//                   {SITE_CONFIG.phoneDisplay}
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {STATS.map((stat) => (
//               <div key={stat.label} className="glass-card p-6 text-center">
//                 <p className="text-4xl font-bold gradient-text mb-1">
//                   {stat.value.toLocaleString()}
//                   {stat.suffix}
//                 </p>
//                 <p className="text-sm text-gray-400">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
//                 <Award className="w-4 h-4 text-primary-400" />
//                 <span className="text-sm text-gray-300">Our Story</span>
//               </div>
//               <h2 className="heading-2 mb-6">
//                 Started With a{' '}
//                 <span className="gradient-text">Simple Promise</span>
//               </h2>
//               <div className="space-y-4 text-gray-300 body-normal">
//                 <p>
//                   Bellgams started in Burnaby in 2010 with one machine, one van, and a commitment
//                   to never leave a job until the customer was genuinely satisfied. That promise
//                   hasn&apos;t changed.
//                 </p>
//                 <p>
//                   Over the years we&apos;ve grown into a team serving more than 15 cities across the
//                   Lower Mainland, Fraser Valley, and beyond. Our customers range from young
//                   families in Surrey condos to commercial property managers in downtown Vancouver
//                   — and we treat every job with the same level of care.
//                 </p>
//                 <p>
//                   We use eco-friendly, non-toxic cleaning solutions because we work in homes
//                   where kids and pets live. We invest in modern hot water extraction equipment
//                   because it produces better results with shorter drying times. And we hire
//                   technicians who take pride in their work.
//                 </p>
//                 <p>
//                   Today, more than 10,000 BC households trust Bellgams. We&apos;re proud of that
//                   number — and equally proud that most of our new customers come from referrals.
//                 </p>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="glass-card p-4 rounded-2xl overflow-hidden">
//                 <Image
//                   src="/images/b.jpeg"
//                   alt="Bellgams professional cleaning team at work"
//                   width={600}
//                   height={450}
//                   className="rounded-xl object-cover w-full h-80"
//                 />
//               </div>
//               {/* Floating badge */}
//               <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
//                     <CheckCircle className="w-6 h-6 text-primary-400" />
//                   </div>
//                   <div>
//                     <p className="text-white font-semibold text-sm">100% Satisfaction</p>
//                     <p className="text-gray-400 text-xs">Guaranteed on every job</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="section-padding bg-gradient-bg-1">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
//               <Heart className="w-4 h-4 text-primary-400" />
//               <span className="text-sm text-gray-300">What We Stand For</span>
//             </div>
//             <h2 className="heading-2 mb-4">
//               Our <span className="gradient-text">Values</span>
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {teamValues.map((value) => {
//               const Icon = value.icon;
//               return (
//                 <div key={value.title} className="glass-card p-8 flex gap-5 items-start">
//                   <div className="w-12 h-12 bg-primary-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Icon className="w-6 h-6 text-primary-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
//                     <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
//               <Sparkles className="w-4 h-4 text-primary-400" />
//               <span className="text-sm text-gray-300">Why Bellgams</span>
//             </div>
//             <h2 className="heading-2 mb-4">
//               Why BC Chooses <span className="gradient-text">Bellgams</span>
//             </h2>
//             <p className="body-normal text-gray-400 max-w-2xl mx-auto">
//               There are plenty of cleaning companies in BC. Here&apos;s what makes us different.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {WHY_CHOOSE_US.map((item) => {
//               const Icon = iconMap[item.icon] ?? CheckCircle;
//               return (
//                 <div key={item.title} className="glass-card p-6">
//                   <div className="w-10 h-10 bg-primary-500/15 rounded-lg flex items-center justify-center mb-4">
//                     <Icon className="w-5 h-5 text-primary-400" />
//                   </div>
//                   <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
//                   <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Our Process */}
//       <section className="section-padding bg-gradient-bg-1">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
//               <CheckCircle className="w-4 h-4 text-primary-400" />
//               <span className="text-sm text-gray-300">How We Work</span>
//             </div>
//             <h2 className="heading-2 mb-4">
//               Our <span className="gradient-text">Cleaning Process</span>
//             </h2>
//             <p className="body-normal text-gray-400 max-w-2xl mx-auto">
//               Every Bellgams clean follows a consistent four-step process so you know exactly
//               what to expect.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {CLEANING_PROCESS.map((step) => (
//               <div key={step.step} className="glass-card p-6 text-center relative">
//                 <div className="w-12 h-12 bg-primary-500/20 border border-primary-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-primary-300 font-bold text-lg">{step.step}</span>
//                 </div>
//                 <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service area */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
//             <MapPin className="w-10 h-10 text-primary-400 mx-auto mb-4" />
//             <h2 className="heading-3 mb-4">
//               Serving <span className="gradient-text">All of British Columbia</span>
//             </h2>
//             <p className="text-gray-300 mb-6 text-sm leading-relaxed">
//               From downtown Vancouver and Burnaby to Surrey, Richmond, Coquitlam, North
//               Vancouver, and further into the Fraser Valley — if you&apos;re in BC, we can come
//               to you. Same-day and weekend appointments available.
//             </p>
//             <div className="flex flex-wrap justify-center gap-2 mb-8">
//               {[
//                 'Vancouver', 'Burnaby', 'Surrey', 'Richmond', 'Coquitlam',
//                 'North Vancouver', 'New Westminster', 'Langley', 'Abbotsford',
//                 'Delta', 'Port Moody', 'White Rock',
//               ].map((city) => (
//                 <span
//                   key={city}
//                   className="px-3 py-1 rounded-full text-xs glass-card text-gray-300"
//                 >
//                   {city}
//                 </span>
//               ))}
//             </div>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                 <Button variant="primary" size="lg" className="group">
//                   Book a Clean
//                   <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
//                 </Button>
//               </a>
//               <Link href="/locations">
//                 <Button variant="outline" size="lg">
//                   See All Locations
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WHY_CHOOSE_US, CLEANING_PROCESS } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { useRegion } from '@/lib/region-context';
import {
  Shield,
  Leaf,
  Sparkles,
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  ArrowRight,
  Award,
  Users,
  MapPin,
  Heart,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'shield-check': Shield,
  leaf: Leaf,
  sparkles: Sparkles,
  'check-circle': CheckCircle,
  clock: Clock,
  'dollar-sign': DollarSign,
};

export default function AboutPage() {
  const { regionConfig } = useRegion();

  const whatsappLink = generateWhatsAppLink({
    message: "Hi! I'd like to learn more about Bellgams and get a free quote.",
  });

  const teamValues = [
    {
      icon: Heart,
      title: 'Family-Run Business',
      description:
        regionConfig.id === 'bc'
          ? "Bellgams was built from the ground up by a family who believed British Columbia deserved a carpet cleaning company that actually cares about the result, not just the invoice."
          : "Bellgams was built from the ground up by a family committed to delivering results that speak for themselves. We're now proud to bring that same dedication to Toronto and the GTA.",
    },
    {
      icon: Award,
      title: 'Trained & Certified',
      description:
        "Every technician is certified, background-checked, and trained on our specific cleaning protocols before they set foot in a customer's home.",
    },
    {
      icon: Users,
      title: 'Community First',
      description: regionConfig.communityText,
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: regionConfig.localExpertise,
    },
  ];

  const stats = [
    { label: 'Years in Business', value: '15+' },
    { label: 'Happy Customers', value: '10,000+' },
    { label: regionConfig.statsLabel, value: '15+' },
    { label: '5-Star Reviews', value: '500+' },
  ];

  const isBC = regionConfig.id === 'bc';

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <Heart className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300">About Bellgams</span>
            </div>
            <h1 className="heading-1 mb-6">
              {isBC ? "BC's" : "Toronto's"} Trusted{' '}
              <span className="gradient-text">Carpet Cleaning</span>{' '}
              Specialists
            </h1>
            <p className="body-large text-gray-300 mb-8">
              {regionConfig.aboutDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="group">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </a>
              <a href={`tel:${regionConfig.phone}`}>
                <Button variant="outline" size="lg" className="group">
                  <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  {regionConfig.phoneDisplay}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <p className="text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
                <Award className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-gray-300">Our Story</span>
              </div>
              <h2 className="heading-2 mb-6">
                Started With a{' '}
                <span className="gradient-text">Simple Promise</span>
              </h2>
              <div className="space-y-4 text-gray-300 body-normal">
                <p>
                  Bellgams started in Burnaby, BC in 2010 with one machine, one van, and a
                  commitment to never leave a job until the customer was genuinely satisfied.
                  That promise hasn&apos;t changed.
                </p>
                {isBC ? (
                  <>
                    <p>
                      Over the years we&apos;ve grown into a team serving more than 15 cities
                      across the Lower Mainland, Fraser Valley, and beyond. Our customers range
                      from young families in Surrey condos to commercial property managers in
                      downtown Vancouver — and we treat every job with the same level of care.
                    </p>
                    <p>
                      We use eco-friendly, non-toxic cleaning solutions because we work in homes
                      where kids and pets live. We invest in modern hot water extraction equipment
                      because it produces better results with shorter drying times.
                    </p>
                    <p>
                      Today, more than 10,000 BC households trust Bellgams — and most of our new
                      customers come from referrals. That&apos;s the standard we hold ourselves to.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      After over a decade serving British Columbia&apos;s Lower Mainland, we&apos;re
                      expanding to bring the same level of service to Toronto and the Greater
                      Toronto Area. Whether you&apos;re in a downtown condo, a Mississauga family
                      home, or a Brampton townhouse — we treat every job with identical care.
                    </p>
                    <p>
                      We use eco-friendly, non-toxic cleaning solutions because we work in homes
                      where kids and pets live. We invest in modern hot water extraction equipment
                      because it produces better results with shorter drying times.
                    </p>
                    <p>
                      With over 10,000 satisfied customers to our name and 500+ five-star reviews,
                      we&apos;re bringing proven expertise to the GTA — and we&apos;re proud to be here.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-4 rounded-2xl overflow-hidden">
                <Image
                  src="/images/b.jpeg"
                  alt="Bellgams professional cleaning team at work"
                  width={600}
                  height={450}
                  className="rounded-xl object-cover w-full h-80"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">100% Satisfaction</p>
                    <p className="text-gray-400 text-xs">Guaranteed on every job</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <Heart className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300">What We Stand For</span>
            </div>
            <h2 className="heading-2 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamValues.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="glass-card p-8 flex gap-5 items-start">
                  <div className="w-12 h-12 bg-primary-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300">Why Bellgams</span>
            </div>
            <h2 className="heading-2 mb-4">
              Why{' '}
              {isBC ? 'BC' : 'the GTA'}{' '}
              Chooses <span className="gradient-text">Bellgams</span>
            </h2>
            <p className="body-normal text-gray-400 max-w-2xl mx-auto">
              There are plenty of cleaning companies in {isBC ? 'BC' : 'the GTA'}. Here&apos;s what makes us different.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.icon] ?? CheckCircle;
              return (
                <div key={item.title} className="glass-card p-6">
                  <div className="w-10 h-10 bg-primary-500/15 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <CheckCircle className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300">How We Work</span>
            </div>
            <h2 className="heading-2 mb-4">
              Our <span className="gradient-text">Cleaning Process</span>
            </h2>
            <p className="body-normal text-gray-400 max-w-2xl mx-auto">
              Every Bellgams clean follows a consistent four-step process so you know exactly
              what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLEANING_PROCESS.map((step) => (
              <div key={step.step} className="glass-card p-6 text-center relative">
                <div className="w-12 h-12 bg-primary-500/20 border border-primary-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-300 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
            <MapPin className="w-10 h-10 text-primary-400 mx-auto mb-4" />
            <h2 className="heading-3 mb-4">
              Serving{' '}
              <span className="gradient-text">
                {isBC ? 'All of British Columbia' : 'Toronto & the Greater Toronto Area'}
              </span>
            </h2>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {isBC
                ? "From downtown Vancouver and Burnaby to Surrey, Richmond, Coquitlam, North Vancouver, and further into the Fraser Valley — if you're in BC, we can come to you. Same-day and weekend appointments available."
                : "From downtown Toronto and Etobicoke to Mississauga, Brampton, Markham, Vaughan, and across the GTA — we come to you. Same-day and weekend appointments available."}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {regionConfig.locations.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 rounded-full text-xs glass-card text-gray-300"
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="group">
                  Book a Clean
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </a>
              <Link href="/locations">
                <Button variant="outline" size="lg">
                  See All Locations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
