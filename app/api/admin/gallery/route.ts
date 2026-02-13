import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const image = await prisma.galleryImage.create({
      data: {
        title: body.title,
        description: body.description || null,
        imageUrl: body.imageUrl,
        category: body.category || null,
        beforeImage: body.beforeImage || null,
        afterImage: body.afterImage || null,
        order: body.order || 0,
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to create gallery image' },
      { status: 500 }
    );
  }
}
