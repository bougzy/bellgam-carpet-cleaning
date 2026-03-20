
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