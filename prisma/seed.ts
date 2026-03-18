// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcryptjs';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('🌱 Starting database seed...');

//   // Create admin user
//   const hashedPassword = await bcrypt.hash('admin123', 10);

//   const admin = await prisma.user.upsert({
//     where: { email: 'sbellgam2019@gmail.com' },
//     update: {},
//     create: {
//       email: 'sbellgam2019@gmail.com',
//       password: hashedPassword,
//       name: 'Admin User',
//       role: 'admin',
//     },
//   });
//   console.log('✅ Created admin user:', admin.email);

//   // Create services
//   const services = [
//     {
//       slug: 'carpet-steam-cleaning',
//       title: 'Carpet Steam Cleaning',
//       description: 'Professional hot water extraction carpet cleaning that deep cleans and sanitizes your carpets.',
//       longDescription: `Our carpet steam cleaning service uses state-of-the-art hot water extraction equipment to deeply penetrate carpet fibers, removing dirt, allergens, and bacteria. This method is highly effective and recommended by carpet manufacturers.

// We use eco-friendly, non-toxic cleaning solutions that are safe for your family and pets. Our powerful extraction equipment removes most of the moisture, ensuring faster drying times.

// Perfect for:
// - High-traffic areas
// - Heavily soiled carpets
// - Allergy sufferers
// - Pet owners
// - Annual deep cleaning`,
//       icon: '/images/services/carpet-cleaning.svg',
//       price: 'From $99',
//       featured: true,
//       published: true,
//       order: 1,
//       seoTitle: 'Professional Carpet Steam Cleaning | Bellgams Carpet Cleaning',
//       seoDescription: 'Expert carpet steam cleaning services using hot water extraction. Remove deep dirt, allergens, and stains. Eco-friendly solutions. Call for a free quote!',
//     },
//     {
//       slug: 'upholstery-cleaning',
//       title: 'Upholstery Cleaning',
//       description: 'Deep cleaning for sofas, chairs, and all types of furniture upholstery.',
//       longDescription: `Restore your furniture to its original beauty with our professional upholstery cleaning service. We carefully clean all types of fabric and materials, from delicate silk to durable microfiber.

// Our trained technicians identify the fabric type and use the appropriate cleaning method and solutions to ensure the best results without damaging your furniture.

// We clean:
// - Sofas and couches
// - Dining chairs
// - Office chairs
// - Ottomans
// - Sectionals
// - Recliners`,
//       icon: '/images/services/upholstery.svg',
//       price: 'From $99',
//       featured: true,
//       published: true,
//       order: 2,
//       seoTitle: 'Professional Upholstery Cleaning Services | Bellgams',
//       seoDescription: 'Expert upholstery cleaning for sofas, chairs, and furniture. Safe for all fabrics. Eco-friendly solutions. Free estimates available.',
//     },
//     {
//       slug: 'area-rug-cleaning',
//       title: 'Area Rug Cleaning',
//       description: 'Gentle yet effective cleaning for area rugs, Persian rugs, and delicate textiles.',
//       longDescription: `Your area rugs deserve special care. We provide expert cleaning for all types of area rugs, including Persian, Oriental, wool, silk, and synthetic rugs.

// We understand that each rug is unique and requires specific care. Our technicians are trained in proper rug cleaning techniques to preserve colors, patterns, and fibers while effectively removing dirt and odors.

// We clean:
// - Persian and Oriental rugs
// - Wool rugs
// - Silk rugs
// - Synthetic rugs
// - Antique rugs
// - Contemporary rugs`,
//       icon: '/images/services/rug-cleaning.svg',
//       price: 'From $89',
//       featured: false,
//       published: true,
//       order: 3,
//       seoTitle: 'Area Rug Cleaning Services | Persian & Oriental Rugs',
//       seoDescription: 'Expert area rug cleaning for Persian, Oriental, wool, and silk rugs. Gentle care that preserves colors and fibers. Free pickup available.',
//     },
//     {
//       slug: 'pet-odor-removal',
//       title: 'Pet Odor & Stain Removal',
//       description: 'Eliminate pet stains and odors with our specialized treatment process.',
//       longDescription: `We love pets, but we know the challenges they can bring to your carpets and furniture. Our pet odor and stain removal service uses enzymatic cleaners and specialized equipment to completely eliminate pet accidents.

// Unlike regular cleaners that just mask odors, our treatment breaks down the organic compounds that cause pet odors at the source. We also treat the carpet padding if necessary to ensure complete odor removal.

// Effective for:
// - Urine stains and odors
// - Feces stains
// - Vomit stains
// - Pet dander buildup
// - Lingering pet odors`,
//       icon: '/images/services/pet-cleaning.svg',
//       price: 'From $79',
//       featured: true,
//       published: true,
//       order: 4,
//       seoTitle: 'Pet Stain & Odor Removal | Dog & Cat Urine Treatment',
//       seoDescription: 'Professional pet stain and odor removal. Eliminate urine, feces, and vomit stains. Enzymatic treatment that works. Satisfaction guaranteed.',
//     },
//     {
//       slug: 'stain-removal',
//       title: 'Stain Removal',
//       description: 'Professional treatment for stubborn stains including wine, coffee, and more.',
//       longDescription: `Don't give up on those stubborn stains! Our professional stain removal service tackles even the toughest stains using specialized treatments and techniques.

// We identify the type of stain and use the appropriate treatment method for the best chance of complete removal. While we can't guarantee every stain can be removed (especially old or set-in stains), our success rate is very high.

// Common stains we treat:
// - Red wine
// - Coffee and tea
// - Food and grease
// - Ink and dye
// - Blood
// - Mud and dirt`,
//       icon: '/images/services/stain-removal.svg',
//       price: 'Starting at $59',
//       featured: false,
//       published: true,
//       order: 5,
//       seoTitle: 'Professional Stain Removal Services | Bellgams',
//       seoDescription: 'Expert stain removal for wine, coffee, ink, and more. Specialized treatments for tough stains. High success rate. Free consultation.',
//     },
//   ];

//   for (const service of services) {
//     const created = await prisma.service.upsert({
//       where: { slug: service.slug },
//       update: {},
//       create: service,
//     });
//     console.log('✅ Created service:', created.title);
//   }

//   // Create locations
//   const locations = [
//     {
//       slug: 'vancouver-carpet-cleaning',
//       city: 'Vancouver',
//       province: 'BC',
//       content: `Serving Vancouver and the Greater Vancouver area since 2010. As Vancouver's trusted carpet cleaning service, we've built our reputation on delivering exceptional results and outstanding customer service.

// Vancouver homeowners and businesses trust us for our professional approach, eco-friendly solutions, and commitment to excellence. Whether you're in downtown Vancouver, the West End, Kitsilano, or any Vancouver neighborhood, we're here to serve you.

// Areas we serve in Vancouver:
// - Downtown Vancouver
// - West End
// - Kitsilano
// - Mount Pleasant
// - Fairview
// - Yaletown
// - Coal Harbour
// - Strathcona
// - Gastown
// - And all Vancouver neighborhoods

// Why Vancouver residents choose Bellgams:
// ✓ Same-day service available
// ✓ Eco-friendly, non-toxic cleaning solutions
// ✓ Certified and trained technicians
// ✓ 100% satisfaction guarantee
// ✓ Competitive pricing with no hidden fees

// Call us today for a free quote!`,
//       phoneNumber: '+16049021805',
//       featured: true,
//       published: true,
//       seoTitle: 'Carpet Cleaning Vancouver BC | Professional Steam Cleaning',
//       seoDescription: 'Professional carpet cleaning in Vancouver, BC. Expert steam cleaning, pet stain removal, and upholstery cleaning. Same-day service. Call (604) 902-1805.',
//     },
//     {
//       slug: 'burnaby-carpet-cleaning',
//       city: 'Burnaby',
//       province: 'BC',
//       content: `Professional carpet cleaning services in Burnaby. Serving all Burnaby neighborhoods including Metrotown, Brentwood, Edmonds, and Lougheed.

// Our Burnaby carpet cleaning service provides the same exceptional quality and customer care that has made us a leading choice throughout the Lower Mainland.`,
//       phoneNumber: '+16049021805',
//       featured: true,
//       published: true,
//       seoTitle: 'Carpet Cleaning Burnaby BC | Steam Cleaning Services',
//       seoDescription: 'Expert carpet cleaning in Burnaby. Serving Metrotown, Brentwood, Edmonds. Professional steam cleaning. Same-day service available. Free quotes.',
//     },
//     {
//       slug: 'surrey-carpet-cleaning',
//       city: 'Surrey',
//       province: 'BC',
//       content: `Trusted carpet cleaning services throughout Surrey, BC. From Whalley to South Surrey, Newton to Fleetwood, we provide professional cleaning services to all Surrey neighborhoods.`,
//       phoneNumber: '+16049021805',
//       featured: true,
//       published: true,
//       seoTitle: 'Carpet Cleaning Surrey BC | Professional Cleaning Services',
//       seoDescription: 'Professional carpet cleaning in Surrey, BC. Serving all Surrey neighborhoods. Expert steam cleaning and stain removal. Call for a free quote today.',
//     },
//   ];

//   for (const location of locations) {
//     const created = await prisma.location.upsert({
//       where: { slug: location.slug },
//       update: {},
//       create: location,
//     });
//     console.log('✅ Created location:', created.city);
//   }

//   // Create reviews
//   const reviews = [
//     {
//       customerName: 'Sarah Johnson',
//       rating: 5,
//       content: 'Absolutely amazing service! My carpets look brand new. The team was professional, on time, and the results exceeded my expectations. I will definitely use them again!',
//       location: 'Vancouver, BC',
//       featured: true,
//       published: true,
//     },
//     {
//       customerName: 'Michael Chen',
//       rating: 5,
//       content: 'Best carpet cleaning company I\'ve used. They removed pet stains I thought were permanent. Highly recommend!',
//       location: 'Burnaby, BC',
//       featured: true,
//       published: true,
//     },
//     {
//       customerName: 'Emily Thompson',
//       rating: 5,
//       content: 'Professional, courteous, and thorough. They took the time to explain their process and the results were fantastic. My carpets smell fresh and look great!',
//       location: 'Surrey, BC',
//       featured: true,
//       published: true,
//     },
//     {
//       customerName: 'David Martinez',
//       rating: 5,
//       content: 'Excellent service from start to finish. Easy booking, showed up on time, and did an incredible job. My living room carpet looks 10 years younger!',
//       location: 'Burnaby, BC',
//       featured: false,
//       published: true,
//     },
//     {
//       customerName: 'Jennifer Lee',
//       rating: 5,
//       content: 'We had a major wine spill on our white carpet and thought it was ruined. Bellgams came the next day and completely removed the stain. Miracle workers!',
//       location: 'Vancouver, BC',
//       featured: true,
//       published: true,
//     },
//   ];

//   for (const review of reviews) {
//     const created = await prisma.review.create({
//       data: review,
//     });
//     console.log('✅ Created review from:', created.customerName);
//   }

//   // Create blog posts
//   const blogPosts = [
//     {
//       slug: 'how-often-should-you-clean-your-carpets',
//       title: 'How Often Should You Clean Your Carpets?',
//       excerpt: 'Discover the recommended frequency for professional carpet cleaning based on your household situation.',
//       content: `Many homeowners wonder how often they should have their carpets professionally cleaned. The answer depends on several factors, but there are general guidelines that can help you maintain clean, healthy carpets.

// ## General Recommendation

// For most homes, we recommend professional carpet cleaning every 12-18 months. However, this can vary based on your specific situation.

// ## Factors That Affect Cleaning Frequency

// ### 1. Foot Traffic
// High-traffic areas need more frequent cleaning. If you have a busy household with multiple people, consider cleaning every 6-12 months.

// ### 2. Pets
// Pet owners should clean their carpets more frequently, typically every 6-12 months. Pets bring in dirt, shed fur, and may have accidents that require professional cleaning.

// ### 3. Children
// Young children can be messy! Homes with kids may benefit from cleaning every 6-12 months to address spills and maintain a healthy environment.

// ### 4. Allergies
// If anyone in your household suffers from allergies, regular cleaning (every 3-6 months) can significantly improve indoor air quality.

// ### 5. Carpet Color
// Light-colored carpets show dirt more easily and may need more frequent cleaning to look their best.

// ## Signs Your Carpets Need Cleaning

// - Visible dirt or stains
// - Unpleasant odors
// - Matted or crushed carpet fibers
// - Increased allergy symptoms
// - It's been more than a year since the last cleaning

// ## Benefits of Regular Cleaning

// Regular professional cleaning extends the life of your carpet, improves indoor air quality, removes allergens and bacteria, and maintains your home's appearance.

// Contact Bellgams Carpet Cleaning today to schedule your next cleaning!`,
//       coverImage: '/images/blog/carpet-cleaning-frequency.jpg',
//       category: 'Maintenance',
//       tags: '["carpet care", "maintenance", "cleaning tips"]',
//       published: true,
//       publishedAt: new Date('2024-01-15'),
//       seoTitle: 'How Often Should You Clean Your Carpets? | Expert Guide',
//       seoDescription: 'Learn how often to clean your carpets based on foot traffic, pets, allergies, and more. Expert recommendations from professional carpet cleaners.',
//     },
//     {
//       slug: 'remove-pet-stains-from-carpet',
//       title: 'How to Remove Pet Stains from Carpet',
//       excerpt: 'A comprehensive guide to removing pet stains and odors from your carpets effectively.',
//       content: `Pet accidents happen, but they don't have to mean permanent damage to your carpets. Here's our professional guide to removing pet stains and odors.

// ## Act Quickly

// The faster you address a pet stain, the better your chances of complete removal. Fresh stains are much easier to clean than old, set-in stains.

// ## Step-by-Step Process

// ### 1. Blot the Stain
// Use paper towels or clean cloths to blot up as much liquid as possible. Don't rub – this pushes the stain deeper into the carpet fibers.

// ### 2. Apply Enzymatic Cleaner
// Pet stains require enzymatic cleaners that break down the organic compounds. Regular cleaners may mask the odor but won't eliminate it.

// ### 3. Let It Work
// Allow the cleaner to sit for the recommended time (usually 10-15 minutes) to break down the stain.

// ### 4. Rinse and Blot
// Rinse with clean water and blot dry thoroughly.

// ## Why Professional Cleaning Works Better

// Professional carpet cleaners have access to commercial-grade enzymatic cleaners and equipment that can treat not just the carpet surface, but also the padding underneath where odors often linger.

// ## Prevention Tips

// - Clean accidents immediately
// - Use enzyme cleaners specifically designed for pet stains
// - Consider carpet protection treatments
// - Train pets properly
// - Address behavioral issues

// Don't let pet accidents ruin your beautiful carpets. Contact Bellgams Carpet Cleaning for professional pet stain and odor removal!`,
//       coverImage: '/images/blog/pet-stain-removal.jpg',
//       category: 'Pet Care',
//       tags: '["pet stains", "odor removal", "cleaning tips"]',
//       published: true,
//       publishedAt: new Date('2024-02-01'),
//       seoTitle: 'How to Remove Pet Stains from Carpet | Expert Guide',
//       seoDescription: 'Professional guide to removing pet stains and odors from carpets. Learn the best methods and when to call experts. Dog and cat urine removal tips.',
//     },
//   ];

//   for (const post of blogPosts) {
//     const created = await prisma.blogPost.upsert({
//       where: { slug: post.slug },
//       update: {},
//       create: post,
//     });
//     console.log('✅ Created blog post:', created.title);
//   }

//   // Create gallery images
//   const galleryImages = [
//     {
//       title: 'Living Room Carpet - Before & After',
//       description: 'Deep steam cleaning transformed this heavily soiled living room carpet',
//       imageUrl: '/images/gallery/living-room-after.jpg',
//       category: 'before-after',
//       beforeImage: '/images/gallery/living-room-before.jpg',
//       afterImage: '/images/gallery/living-room-after.jpg',
//       order: 1,
//     },
//     {
//       title: 'Pet Stain Removal Success',
//       description: 'Complete removal of pet stains and odors',
//       imageUrl: '/images/gallery/pet-stain-after.jpg',
//       category: 'before-after',
//       beforeImage: '/images/gallery/pet-stain-before.jpg',
//       afterImage: '/images/gallery/pet-stain-after.jpg',
//       order: 2,
//     },
//     {
//       title: 'Commercial Office Carpet Cleaning',
//       description: 'Professional cleaning for high-traffic commercial spaces',
//       imageUrl: '/images/gallery/commercial-office.jpg',
//       category: 'commercial',
//       order: 3,
//     },
//   ];

//   for (const image of galleryImages) {
//     const created = await prisma.galleryImage.create({
//       data: image,
//     });
//     console.log('✅ Created gallery image:', created.title);
//   }

//   // Create site settings
//   const settings = [
//     {
//       key: 'company_name',
//       value: 'Bellgams Carpet Cleaning',
//     },
//     {
//       key: 'tagline',
//       value: 'Professional Carpet Cleaning Services in British Columbia',
//     },
//     {
//       key: 'phone',
//       value: '+16049021805',
//     },
//     {
//       key: 'email',
//       value: 'sbellgam2019@gmail.com',
//     },
//     {
//       key: 'whatsapp',
//       value: '+16049021805',
//     },
//   ];

//   for (const setting of settings) {
//     const created = await prisma.siteSettings.upsert({
//       where: { key: setting.key },
//       update: {},
//       create: setting,
//     });
//     console.log('✅ Created setting:', created.key);
//   }

//   console.log('\n🎉 Database seeded successfully!');
//   console.log('\n📝 Admin credentials:');
//   console.log('   Email: sbellgam2019@gmail.com');
//   console.log('   Password: admin123');
//   console.log('\n⚠️  Change the admin password after first login!');
// }

// main()
//   .catch((e) => {
//     console.error('❌ Error seeding database:', e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });


import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'sbellgam2019@gmail.com' },
    update: {},
    create: {
      email: 'sbellgam2019@gmail.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    },
  });
  console.log('✅ Created admin user:', admin.email);

  // Create services
  const services = [
    {
      slug: 'carpet-steam-cleaning',
      title: 'Carpet Steam Cleaning',
      description: 'Professional hot water extraction carpet cleaning that deep cleans and sanitizes your carpets.',
      longDescription: `Our carpet steam cleaning service uses state-of-the-art hot water extraction equipment to deeply penetrate carpet fibers, removing dirt, allergens, and bacteria. This method is highly effective and recommended by carpet manufacturers.

We use eco-friendly, non-toxic cleaning solutions that are safe for your family and pets. Our powerful extraction equipment removes most of the moisture, ensuring faster drying times.

Perfect for:
- High-traffic areas
- Heavily soiled carpets
- Allergy sufferers
- Pet owners
- Annual deep cleaning`,
      icon: '/images/services/carpet-cleaning.svg',
      price: 'From $99',
      featured: true,
      published: true,
      order: 1,
      seoTitle: 'Professional Carpet Steam Cleaning | Bellgams Carpet Cleaning',
      seoDescription: 'Expert carpet steam cleaning services using hot water extraction. Remove deep dirt, allergens, and stains. Eco-friendly solutions. Call for a free quote!',
    },
    {
      slug: 'upholstery-cleaning',
      title: 'Upholstery Cleaning',
      description: 'Deep cleaning for sofas, chairs, and all types of furniture upholstery.',
      longDescription: `Restore your furniture to its original beauty with our professional upholstery cleaning service. We carefully clean all types of fabric and materials, from delicate silk to durable microfiber.

Our trained technicians identify the fabric type and use the appropriate cleaning method and solutions to ensure the best results without damaging your furniture.

We clean:
- Sofas and couches
- Dining chairs
- Office chairs
- Ottomans
- Sectionals
- Recliners`,
      icon: '/images/services/upholstery.svg',
      price: 'From $99',
      featured: true,
      published: true,
      order: 2,
      seoTitle: 'Professional Upholstery Cleaning Services | Bellgams',
      seoDescription: 'Expert upholstery cleaning for sofas, chairs, and furniture. Safe for all fabrics. Eco-friendly solutions. Free estimates available.',
    },
    {
      slug: 'area-rug-cleaning',
      title: 'Area Rug Cleaning',
      description: 'Gentle yet effective cleaning for area rugs, Persian rugs, and delicate textiles.',
      longDescription: `Your area rugs deserve special care. We provide expert cleaning for all types of area rugs, including Persian, Oriental, wool, silk, and synthetic rugs.

We understand that each rug is unique and requires specific care. Our technicians are trained in proper rug cleaning techniques to preserve colors, patterns, and fibers while effectively removing dirt and odors.

We clean:
- Persian and Oriental rugs
- Wool rugs
- Silk rugs
- Synthetic rugs
- Antique rugs
- Contemporary rugs`,
      icon: '/images/services/rug-cleaning.svg',
      price: 'From $89',
      featured: false,
      published: true,
      order: 3,
      seoTitle: 'Area Rug Cleaning Services | Persian & Oriental Rugs',
      seoDescription: 'Expert area rug cleaning for Persian, Oriental, wool, and silk rugs. Gentle care that preserves colors and fibers. Free pickup available.',
    },
    {
      slug: 'pet-odor-removal',
      title: 'Pet Odor & Stain Removal',
      description: 'Eliminate pet stains and odors with our specialized treatment process.',
      longDescription: `We love pets, but we know the challenges they can bring to your carpets and furniture. Our pet odor and stain removal service uses enzymatic cleaners and specialized equipment to completely eliminate pet accidents.

Unlike regular cleaners that just mask odors, our treatment breaks down the organic compounds that cause pet odors at the source. We also treat the carpet padding if necessary to ensure complete odor removal.

Effective for:
- Urine stains and odors
- Feces stains
- Vomit stains
- Pet dander buildup
- Lingering pet odors`,
      icon: '/images/services/pet-cleaning.svg',
      price: 'From $79',
      featured: true,
      published: true,
      order: 4,
      seoTitle: 'Pet Stain & Odor Removal | Dog & Cat Urine Treatment',
      seoDescription: 'Professional pet stain and odor removal. Eliminate urine, feces, and vomit stains. Enzymatic treatment that works. Satisfaction guaranteed.',
    },
    {
      slug: 'stain-removal',
      title: 'Stain Removal',
      description: 'Professional treatment for stubborn stains including wine, coffee, and more.',
      longDescription: `Don't give up on those stubborn stains! Our professional stain removal service tackles even the toughest stains using specialized treatments and techniques.

We identify the type of stain and use the appropriate treatment method for the best chance of complete removal. While we can't guarantee every stain can be removed (especially old or set-in stains), our success rate is very high.

Common stains we treat:
- Red wine
- Coffee and tea
- Food and grease
- Ink and dye
- Blood
- Mud and dirt`,
      icon: '/images/services/stain-removal.svg',
      price: 'Starting at $59',
      featured: false,
      published: true,
      order: 5,
      seoTitle: 'Professional Stain Removal Services | Bellgams',
      seoDescription: 'Expert stain removal for wine, coffee, ink, and more. Specialized treatments for tough stains. High success rate. Free consultation.',
    },
  ];

  for (const service of services) {
    const created = await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
    console.log('✅ Created service:', created.title);
  }

  // Create locations
  const locations = [
    {
      slug: 'vancouver-carpet-cleaning',
      city: 'Vancouver',
      province: 'BC',
      content: `Serving Vancouver and the Greater Vancouver area since 2010. As Vancouver's trusted carpet cleaning service, we've built our reputation on delivering exceptional results and outstanding customer service.

Vancouver homeowners and businesses trust us for our professional approach, eco-friendly solutions, and commitment to excellence. Whether you're in downtown Vancouver, the West End, Kitsilano, or any Vancouver neighborhood, we're here to serve you.

Areas we serve in Vancouver:
- Downtown Vancouver
- West End
- Kitsilano
- Mount Pleasant
- Fairview
- Yaletown
- Coal Harbour
- Strathcona
- Gastown
- And all Vancouver neighborhoods

Why Vancouver residents choose Bellgams:
✓ Same-day service available
✓ Eco-friendly, non-toxic cleaning solutions
✓ Certified and trained technicians
✓ 100% satisfaction guarantee
✓ Competitive pricing with no hidden fees

Call us today for a free quote!`,
      phoneNumber: '+16049021805',
      featured: true,
      published: true,
      seoTitle: 'Carpet Cleaning Vancouver BC | Professional Steam Cleaning',
      seoDescription: 'Professional carpet cleaning in Vancouver, BC. Expert steam cleaning, pet stain removal, and upholstery cleaning. Same-day service. Call (604) 902-1805.',
    },
    {
      slug: 'burnaby-carpet-cleaning',
      city: 'Burnaby',
      province: 'BC',
      content: `Professional carpet cleaning services in Burnaby. Serving all Burnaby neighborhoods including Metrotown, Brentwood, Edmonds, and Lougheed.

Our Burnaby carpet cleaning service provides the same exceptional quality and customer care that has made us a leading choice throughout the Lower Mainland.`,
      phoneNumber: '+16049021805',
      featured: true,
      published: true,
      seoTitle: 'Carpet Cleaning Burnaby BC | Steam Cleaning Services',
      seoDescription: 'Expert carpet cleaning in Burnaby. Serving Metrotown, Brentwood, Edmonds. Professional steam cleaning. Same-day service available. Free quotes.',
    },
    {
      slug: 'surrey-carpet-cleaning',
      city: 'Surrey',
      province: 'BC',
      content: `Trusted carpet cleaning services throughout Surrey, BC. From Whalley to South Surrey, Newton to Fleetwood, we provide professional cleaning services to all Surrey neighborhoods.`,
      phoneNumber: '+16049021805',
      featured: true,
      published: true,
      seoTitle: 'Carpet Cleaning Surrey BC | Professional Cleaning Services',
      seoDescription: 'Professional carpet cleaning in Surrey, BC. Serving all Surrey neighborhoods. Expert steam cleaning and stain removal. Call for a free quote today.',
    },
  ];

  for (const location of locations) {
    const created = await prisma.location.upsert({
      where: { slug: location.slug },
      update: {},
      create: location,
    });
    console.log('✅ Created location:', created.city);
  }

  // Create reviews
  const reviews = [
    {
      customerName: 'Priya Sandhu',
      rating: 5,
      content: 'I live in a condo in Kitsilano and my dog had been using a corner of the bedroom as his personal bathroom for weeks before I caught on. The smell was unbearable. Bellgams showed up the next morning, treated the carpet and the padding underneath, and I honestly cannot detect any odour at all now. The tech explained exactly what products they were using and why. Absolutely worth every penny.',
      location: 'Kitsilano, Vancouver, BC',
      featured: true,
      published: true,
    },
    {
      customerName: 'Connor MacPhail',
      rating: 5,
      content: 'We bought a house in Burnaby Heights and the previous owners clearly had a large dog. The carpets in two bedrooms had ground-in dirt and that stale pet smell that hits you right when you walk in. Bellgams did a full deep clean and the difference was night and day. Carpets look almost new and the house finally smells like ours. Friendly crew, quick work.',
      location: 'Burnaby Heights, Burnaby, BC',
      featured: true,
      published: true,
    },
    {
      customerName: 'Mei-Ling Tso',
      rating: 5,
      content: 'I manage a small dental office in Richmond and we needed the waiting room carpet cleaned without shutting down for a full day. Bellgams came in early on a Saturday morning, finished in under two hours, and the carpet was dry enough to walk on by the time we opened. No fuss, no mess left behind. Booking was also really easy online.',
      location: 'Richmond, BC',
      featured: true,
      published: true,
    },
    {
      customerName: 'Derek Oliphant',
      rating: 5,
      content: 'Spilled a full glass of red wine on my beige living room carpet during a dinner party. I tried everything I could find online that night and made it worse. Called Bellgams first thing in the morning and they fit me in the same afternoon. The stain is gone — completely. Not faded, actually gone. I was genuinely shocked. Will be calling them for regular maintenance from now on.',
      location: 'Mount Pleasant, Vancouver, BC',
      featured: true,
      published: true,
    },
    {
      customerName: 'Anika Johansson',
      rating: 5,
      content: 'I have a Persian rug that belonged to my grandmother and I was nervous about having anyone clean it. Bellgams took time to look it over carefully, explained exactly what method they would use on the wool fibres, and did an exceptional job. The colours are brighter than I have seen in years and the fringe is clean and intact. I trusted them with something irreplaceable and they delivered.',
      location: 'West End, Vancouver, BC',
      featured: true,
      published: true,
    },
    {
      customerName: 'James Kowalski',
      rating: 5,
      content: 'We are a family of five with three kids under ten. The traffic path from the front door through the hallway into the living room had turned a dark grey colour. I almost assumed we would need to replace the carpet entirely. One session with Bellgams and the path is the same colour as the rest of the room. My wife was genuinely stunned. Great value.',
      location: 'Newton, Surrey, BC',
      featured: true,
      published: true,
    },
    {
      customerName: 'Fatima Al-Rashid',
      rating: 5,
      content: 'We recently moved into a new rental in Metrotown and the existing carpet clearly had not been cleaned in a long time. Our landlord arranged for Bellgams to come in and the result was remarkable. The tech was polite, moved the lighter furniture without being asked, and the whole thing took about ninety minutes. Carpet smells clean and looks presentable now.',
      location: 'Metrotown, Burnaby, BC',
      featured: false,
      published: true,
    },
    {
      customerName: 'Greg Timmins',
      rating: 5,
      content: 'I run a short-term rental in Gastown and turnarounds are tight. Bellgams has now done three cleans for me on short notice and every time the carpet is done well and they are out within two hours. Makes a huge difference to guest reviews when the place actually smells and looks clean when they arrive. Reliable and professional.',
      location: 'Gastown, Vancouver, BC',
      featured: false,
      published: true,
    },
    {
      customerName: 'Linda Ferreira',
      rating: 5,
      content: 'I am quite sensitive to chemical smells and was worried about what products they would use in my home. I asked ahead of booking and they walked me through their eco-friendly options without any pushback. They used the milder solution and my carpets still came out beautifully clean. I did not have any reaction and the house smelled fresh, not chemical. Really appreciated the care they took.',
      location: 'Cloverdale, Surrey, BC',
      featured: false,
      published: true,
    },
    {
      customerName: 'Harjit Bains',
      rating: 5,
      content: 'We had Bellgams clean all the upholstery in our living room including a large sectional and two armchairs. The fabric on the sectional had some stubborn food stains from the kids that we had been fighting with for months. They pre-treated everything and did a thorough steam clean. The sectional looks like we just bought it. Very satisfied.',
      location: 'Fleetwood, Surrey, BC',
      featured: false,
      published: true,
    },
    {
      customerName: 'Rachel Dubois',
      rating: 4,
      content: 'Good service overall. They were punctual and did a solid job on three bedrooms and the hallway. One small area near the stairs still has a faint mark but the tech said it was a very old permanent dye stain and was upfront about it before they started. Appreciated the honesty rather than overpromising. Would use them again.',
      location: 'Coquitlam, BC',
      featured: false,
      published: true,
    },
    {
      customerName: 'Nathan Yee',
      rating: 5,
      content: 'My parents are elderly and their stair carpet had not been done in years. I booked Bellgams as a surprise for them. The crew was incredibly patient and respectful with my parents, explained everything they were doing, and cleaned up every bit of equipment when they were done. My mum called me after to say how wonderful they were. That kind of genuine care for customers means a lot.',
      location: 'North Vancouver, BC',
      featured: true,
      published: true,
    },
  ];

  for (const review of reviews) {
    const created = await prisma.review.create({
      data: review,
    });
    console.log('✅ Created review from:', created.customerName);
  }

  // Create blog posts
  const blogPosts = [
    {
      slug: 'how-often-should-you-clean-your-carpets',
      title: 'How Often Should You Clean Your Carpets?',
      excerpt: 'Discover the recommended frequency for professional carpet cleaning based on your household situation.',
      content: `Many homeowners wonder how often they should have their carpets professionally cleaned. The answer depends on several factors, but there are general guidelines that can help you maintain clean, healthy carpets.

## General Recommendation

For most homes, we recommend professional carpet cleaning every 12-18 months. However, this can vary based on your specific situation.

## Factors That Affect Cleaning Frequency

### 1. Foot Traffic
High-traffic areas need more frequent cleaning. If you have a busy household with multiple people, consider cleaning every 6-12 months.

### 2. Pets
Pet owners should clean their carpets more frequently, typically every 6-12 months. Pets bring in dirt, shed fur, and may have accidents that require professional cleaning.

### 3. Children
Young children can be messy! Homes with kids may benefit from cleaning every 6-12 months to address spills and maintain a healthy environment.

### 4. Allergies
If anyone in your household suffers from allergies, regular cleaning (every 3-6 months) can significantly improve indoor air quality.

### 5. Carpet Color
Light-colored carpets show dirt more easily and may need more frequent cleaning to look their best.

## Signs Your Carpets Need Cleaning

- Visible dirt or stains
- Unpleasant odors
- Matted or crushed carpet fibers
- Increased allergy symptoms
- It's been more than a year since the last cleaning

## Benefits of Regular Cleaning

Regular professional cleaning extends the life of your carpet, improves indoor air quality, removes allergens and bacteria, and maintains your home's appearance.

Contact Bellgams Carpet Cleaning today to schedule your next cleaning!`,
      coverImage: '/images/blog/carpet-cleaning-frequency.jpg',
      category: 'Maintenance',
      tags: '["carpet care", "maintenance", "cleaning tips"]',
      published: true,
      publishedAt: new Date('2024-01-15'),
      seoTitle: 'How Often Should You Clean Your Carpets? | Expert Guide',
      seoDescription: 'Learn how often to clean your carpets based on foot traffic, pets, allergies, and more. Expert recommendations from professional carpet cleaners.',
    },
    {
      slug: 'remove-pet-stains-from-carpet',
      title: 'How to Remove Pet Stains from Carpet',
      excerpt: 'A comprehensive guide to removing pet stains and odors from your carpets effectively.',
      content: `Pet accidents happen, but they don't have to mean permanent damage to your carpets. Here's our professional guide to removing pet stains and odors.

## Act Quickly

The faster you address a pet stain, the better your chances of complete removal. Fresh stains are much easier to clean than old, set-in stains.

## Step-by-Step Process

### 1. Blot the Stain
Use paper towels or clean cloths to blot up as much liquid as possible. Don't rub – this pushes the stain deeper into the carpet fibers.

### 2. Apply Enzymatic Cleaner
Pet stains require enzymatic cleaners that break down the organic compounds. Regular cleaners may mask the odor but won't eliminate it.

### 3. Let It Work
Allow the cleaner to sit for the recommended time (usually 10-15 minutes) to break down the stain.

### 4. Rinse and Blot
Rinse with clean water and blot dry thoroughly.

## Why Professional Cleaning Works Better

Professional carpet cleaners have access to commercial-grade enzymatic cleaners and equipment that can treat not just the carpet surface, but also the padding underneath where odors often linger.

## Prevention Tips

- Clean accidents immediately
- Use enzyme cleaners specifically designed for pet stains
- Consider carpet protection treatments
- Train pets properly
- Address behavioral issues

Don't let pet accidents ruin your beautiful carpets. Contact Bellgams Carpet Cleaning for professional pet stain and odor removal!`,
      coverImage: '/images/blog/pet-stain-removal.jpg',
      category: 'Pet Care',
      tags: '["pet stains", "odor removal", "cleaning tips"]',
      published: true,
      publishedAt: new Date('2024-02-01'),
      seoTitle: 'How to Remove Pet Stains from Carpet | Expert Guide',
      seoDescription: 'Professional guide to removing pet stains and odors from carpets. Learn the best methods and when to call experts. Dog and cat urine removal tips.',
    },
  ];

  for (const post of blogPosts) {
    const created = await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
    console.log('✅ Created blog post:', created.title);
  }

  // Create gallery images
  const galleryImages = [
    {
      title: 'Living Room Carpet - Before & After',
      description: 'Deep steam cleaning transformed this heavily soiled living room carpet',
      imageUrl: '/images/gallery/living-room-after.jpg',
      category: 'before-after',
      beforeImage: '/images/gallery/living-room-before.jpg',
      afterImage: '/images/gallery/living-room-after.jpg',
      order: 1,
    },
    {
      title: 'Pet Stain Removal Success',
      description: 'Complete removal of pet stains and odors',
      imageUrl: '/images/gallery/pet-stain-after.jpg',
      category: 'before-after',
      beforeImage: '/images/gallery/pet-stain-before.jpg',
      afterImage: '/images/gallery/pet-stain-after.jpg',
      order: 2,
    },
    {
      title: 'Commercial Office Carpet Cleaning',
      description: 'Professional cleaning for high-traffic commercial spaces',
      imageUrl: '/images/gallery/commercial-office.jpg',
      category: 'commercial',
      order: 3,
    },
  ];

  for (const image of galleryImages) {
    const created = await prisma.galleryImage.create({
      data: image,
    });
    console.log('✅ Created gallery image:', created.title);
  }

  // Create site settings
  const settings = [
    {
      key: 'company_name',
      value: 'Bellgams Carpet Cleaning',
    },
    {
      key: 'tagline',
      value: 'Professional Carpet Cleaning Services in British Columbia',
    },
    {
      key: 'phone',
      value: '+16049021805',
    },
    {
      key: 'email',
      value: 'sbellgam2019@gmail.com',
    },
    {
      key: 'whatsapp',
      value: '+16049021805',
    },
  ];

  for (const setting of settings) {
    const created = await prisma.siteSettings.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
    console.log('✅ Created setting:', created.key);
  }

  console.log('\n🎉 Database seeded successfully!');
  console.log('\n📝 Admin credentials:');
  console.log('   Email: sbellgam2019@gmail.com');
  console.log('   Password: admin123');
  console.log('\n⚠️  Change the admin password after first login!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
