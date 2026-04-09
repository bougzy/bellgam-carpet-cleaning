// import { prisma } from '@/lib/prisma';
// import Link from 'next/link';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
// import { MapPin, ArrowRight } from 'lucide-react';

// async function getLocations() {
//   return await prisma.location.findMany({
//     where: { published: true },
//     orderBy: { city: 'asc' },
//   });
// }

// export const metadata = {
//   title: 'Service Areas | Carpet Cleaning Across Canada | Bellgam',
//   description: 'Professional carpet cleaning services in Vancouver, Toronto, Calgary, and more. Find your local Bellgam carpet cleaning service.',
// };

// export default async function LocationsPage() {
//   const locations = await getLocations();

//   // Group by province
//   const locationsByProvince = locations.reduce((acc, location) => {
//     if (!acc[location.province]) {
//       acc[location.province] = [];
//     }
//     acc[location.province].push(location);
//     return acc;
//   }, {} as Record<string, typeof locations>);

//   return (
//     <div>
//       {/* Hero */}
//       <section className="section-padding bg-gradient-bg-1">
//         <div className="container-custom text-center">
//           <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
//             <MapPin className="w-4 h-4 text-primary-400" />
//             <span className="text-sm text-gray-300">Service Areas</span>
//           </div>
//           <h1 className="heading-1 mb-6">
//             Serving <span className="gradient-text">Communities</span> Across Canada
//           </h1>
//           <p className="body-large text-gray-400 max-w-2xl mx-auto">
//             Professional carpet cleaning services in major cities in British Columbia.
//             Find your local Bellgam service area below.
//           </p>
//         </div>
//       </section>

//       {/* Locations by Province */}
//       <section className="section-padding">
//         <div className="container-custom space-y-12">
//           {Object.entries(locationsByProvince).map(([province, locs]) => (
//             <div key={province}>
//               <h2 className="text-3xl font-bold mb-6">
//                 <span className="gradient-text">{province}</span>
//               </h2>
//               <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {locs.map((location) => (
//                   <StaggerItem key={location.id}>
//                     <Link href={`/locations/${location.slug}`}>
//                       <Card hover className="h-full">
//                         <CardHeader>
//                           <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
//                             <MapPin className="w-6 h-6 text-green-400" />
//                           </div>
//                           <CardTitle>{location.city}, {location.province}</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-gray-400 mb-4 line-clamp-3">
//                             {location.content}
//                           </p>
//                           <div className="flex items-center text-primary-400 text-sm font-medium">
//                             View Details
//                             <ArrowRight className="w-4 h-4 ml-2" />
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </Link>
//                   </StaggerItem>
//                 ))}
//               </StaggerContainer>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { MapPin, ArrowRight } from 'lucide-react';
import { useRegion } from '@/lib/region-context';

const BC_LOCATION_DESCRIPTIONS: Record<string, string> = {
  Vancouver: 'Professional carpet cleaning across all Vancouver neighbourhoods — from Kitsilano and the West End to East Van and Downtown.',
  Burnaby: 'Serving Burnaby homes and businesses with expert steam cleaning, pet stain removal, and upholstery care.',
  Surrey: 'Reliable carpet and rug cleaning across Newton, Fleetwood, Cloverdale, and all Surrey neighbourhoods.',
  Richmond: 'Deep carpet cleaning for Richmond condos, townhouses, and commercial spaces. Same-day service available.',
  Coquitlam: 'Expert cleaning services for Coquitlam families and businesses. Eco-friendly solutions and fast drying.',
  'New Westminster': 'Trusted carpet and upholstery cleaning in the Royal City. Residential and commercial services.',
  'North Vancouver': 'Professional carpet cleaning for North Shore homes — from Lynn Valley to Deep Cove.',
  'West Vancouver': 'Premium carpet and area rug cleaning for West Vancouver residences and strata properties.',
  Langley: 'Serving Township and City of Langley with professional carpet cleaning and pet odour removal.',
  Abbotsford: 'Reliable carpet cleaning across Abbotsford. Serving the Fraser Valley with care and expertise.',
  Delta: 'Carpet and upholstery cleaning for Delta, Ladner, and Tsawwassen homes and businesses.',
  'Maple Ridge': 'Professional carpet steam cleaning for Maple Ridge and Pitt Meadows households.',
  'Port Coquitlam': 'Expert carpet cleaning in Port Coquitlam — quick booking, reliable results.',
  'Port Moody': 'Trusted carpet and rug cleaning for Port Moody and the Tri-Cities area.',
  'White Rock': 'Professional cleaning for White Rock and South Surrey homes, condos, and suites.',
};

const TO_LOCATION_DESCRIPTIONS: Record<string, string> = {
  Toronto: 'Professional carpet cleaning across all Toronto neighbourhoods — from the Annex and Leslieville to North York and Scarborough.',
  Mississauga: 'Expert carpet and upholstery cleaning across Mississauga. Serving condos, family homes, and commercial spaces.',
  Brampton: 'Reliable carpet steam cleaning for Brampton families. Eco-friendly solutions and same-day service available.',
  Markham: 'Professional carpet and area rug cleaning in Markham. Trusted by hundreds of GTA families.',
  Vaughan: 'Deep carpet cleaning for Vaughan homes and businesses — from Woodbridge to Maple and beyond.',
  'Richmond Hill': 'Expert carpet cleaning in Richmond Hill. Residential and commercial services with fast turnaround.',
  Oakville: 'Premium carpet and upholstery cleaning for Oakville homes and townhouses.',
  Burlington: 'Professional carpet steam cleaning for Burlington families. Eco-friendly, pet-safe solutions.',
  Ajax: 'Reliable carpet cleaning in Ajax and across Durham Region. Same-day appointments available.',
  Pickering: 'Expert carpet and rug cleaning in Pickering. Trusted results for Durham Region households.',
  Whitby: 'Professional carpet cleaning for Whitby homes. Serving Durham Region with care and expertise.',
  Oshawa: 'Affordable, professional carpet cleaning in Oshawa. Commercial and residential services.',
  Scarborough: 'Expert carpet cleaning across Scarborough neighbourhoods. Fast, eco-friendly, reliable.',
  Etobicoke: 'Professional carpet and upholstery cleaning for Etobicoke homes, condos, and rental units.',
  'North York': 'Trusted carpet cleaning in North York. Deep steam cleaning for condos, houses, and offices.',
};

export default function LocationsPage() {
  const { regionConfig } = useRegion();

  const isBC = regionConfig.id === 'bc';
  const descriptions = isBC ? BC_LOCATION_DESCRIPTIONS : TO_LOCATION_DESCRIPTIONS;
  const province = isBC ? 'BC' : 'ON';

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <MapPin className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Service Areas — {regionConfig.flag} {regionConfig.label}</span>
          </div>
          <h1 className="heading-1 mb-6">
            {regionConfig.locationsPageTitle.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="gradient-text">
              {regionConfig.locationsPageTitle.split(' ').slice(2).join(' ')}
            </span>
          </h1>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            {regionConfig.locationsPageSubtitle}
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="gradient-text">{isBC ? 'British Columbia' : 'Ontario — Greater Toronto Area'}</span>
            </h2>
            <p className="text-gray-400 text-sm">
              {regionConfig.locations.length} cities and communities served
            </p>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionConfig.locations.map((city) => {
              const slug = `${city.toLowerCase().replace(/\s+/g, '-')}-carpet-cleaning`;
              return (
                <StaggerItem key={city}>
                  <Link href={`/locations/${slug}`}>
                    <Card hover className="h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                          <MapPin className="w-6 h-6 text-primary-400" />
                        </div>
                        <CardTitle>{city}, {province}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {descriptions[city] ?? `Professional carpet cleaning services in ${city}. Same-day service available.`}
                        </p>
                        <div className="flex items-center text-primary-400 text-sm font-medium">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
