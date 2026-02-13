import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const heroImagesSettings = await prisma.siteSettings.findUnique({
      where: { key: 'hero_images' },
    });

    if (!heroImagesSettings) {
      return NextResponse.json({
        heroImages: [
          { url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&q=80', alt: 'Professional carpet cleaning - Modern living room' },
          { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop&q=80', alt: 'Clean carpet interior' },
          { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop&q=80', alt: 'Upholstery cleaning - Sofa in living room' },
          { url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&h=1080&fit=crop&q=80', alt: 'Clean white carpet bedroom' },
        ],
      });
    }

    return NextResponse.json(JSON.parse(heroImagesSettings.value));
  } catch (error) {
    console.error('Error fetching media settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Save hero images
    await prisma.siteSettings.upsert({
      where: { key: 'hero_images' },
      update: {
        value: JSON.stringify({
          heroImages: body.heroImages,
        }),
      },
      create: {
        key: 'hero_images',
        value: JSON.stringify({
          heroImages: body.heroImages,
        }),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving media settings:', error);
    return NextResponse.json(
      { error: 'Failed to save media settings' },
      { status: 500 }
    );
  }
}
