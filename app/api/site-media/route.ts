// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

// export async function GET() {
//   try {
//     const heroImagesSettings = await prisma.siteSettings.findUnique({
//       where: { key: 'hero_images' },
//     });

//     // Default images if not set
//     const defaultImages = {
//       heroImages: [
//         { url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&q=80', alt: 'Professional carpet cleaning - Modern living room' },
//         { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop&q=80', alt: 'Clean carpet interior' },
//         { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop&q=80', alt: 'Upholstery cleaning - Sofa in living room' },
//         { url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&h=1080&fit=crop&q=80', alt: 'Clean white carpet bedroom' },
//       ],
//     };

//     if (!heroImagesSettings) {
//       return NextResponse.json(defaultImages);
//     }

//     return NextResponse.json(JSON.parse(heroImagesSettings.value));
//   } catch (error) {
//     console.error('Error fetching site media:', error);
//     // Return default images on error
//     return NextResponse.json({
//       heroImages: [
//         { url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&q=80', alt: 'Professional carpet cleaning' },
//       ],
//     });
//   }
// }

// // Enable ISR (Incremental Static Regeneration) - revalidate every hour
// export const revalidate = 3600;




import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const heroImagesSettings = await prisma.siteSettings.findUnique({
      where: { key: 'hero_images' },
    });

    // Default images including your local b.jpeg
    const defaultImages = {
      heroImages: [
        { 
          url: '/images/b.jpeg',
          alt: 'Professional window cleaning service' 
        },
        { 
          url: '/images/bus.png', 
          alt: 'Professional carpet cleaning - Modern living room' 
        },
        { 
          url: '/images/rug.png', 
          alt: 'Clean carpet interior' 
        },
        { 
          url: '/images/uphostry.png', 
          alt: 'Upholstery cleaning - Sofa in living room' 
        },
        { 
          url: '', 
          alt: 'Clean white carpet bedroom' 
        },
      ],
    };

    if (!heroImagesSettings) {
      return NextResponse.json(defaultImages);
    }

    // Parse existing settings
    const existingSettings = JSON.parse(heroImagesSettings.value);
    
    // Add type annotation directly in the callback
    if (!existingSettings.heroImages.some((img: { url: string; alt: string }) => img.url.includes('b.jpeg'))) {
      existingSettings.heroImages.unshift({
        url: '/images/b.jpeg',
        alt: 'Professional window cleaning service'
      });
    }
    
    return NextResponse.json(existingSettings);
  } catch (error) {
    console.error('Error fetching site media:', error);
    // Return default images including b.jpeg on error
    return NextResponse.json({
      heroImages: [
        { 
          url: '/images/b.jpeg', 
          alt: 'Professional window cleaning service' 
        },
        { 
          url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&q=80', 
          alt: 'Professional carpet cleaning' 
        },
      ],
    });
  }
}

// Enable ISR (Incremental Static Regeneration) - revalidate every hour
export const revalidate = 3600;