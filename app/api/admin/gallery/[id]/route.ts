import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const image = await prisma.galleryImage.findUnique({
      where: { id: params.id },
    });

    if (!image) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(image);
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery image' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.galleryImage.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to delete gallery image' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const image = await prisma.galleryImage.update({
      where: { id: params.id },
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
    console.error('Error updating gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to update gallery image' },
      { status: 500 }
    );
  }
}
