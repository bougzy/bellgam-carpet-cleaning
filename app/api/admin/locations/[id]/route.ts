import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionFromCookies } from '@/lib/auth-simple';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const location = await prisma.location.findUnique({
      where: { id: params.id },
    });

    if (!location) {
      return NextResponse.json(
        { message: 'Location not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(location);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching location' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const cookieHeader = request.headers.get('cookie');
    const session = getSessionFromCookies(cookieHeader);

    if (!session || !session.isAuthenticated) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();

    const location = await prisma.location.update({
      where: { id: params.id },
      data: {
        city: body.city,
        province: body.province,
        slug: body.slug,
        content: body.content,
        phoneNumber: body.phoneNumber || null,
        featured: body.featured || false,
        published: body.published || true,
        seoTitle: body.seoTitle || null,
        seoDescription: body.seoDescription || null,
      },
    });

    return NextResponse.json(location);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { message: 'A location with this slug already exists' },
        { status: 400 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Location not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Error updating location' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const cookieHeader = request.headers.get('cookie');
    const session = getSessionFromCookies(cookieHeader);

    if (!session || !session.isAuthenticated) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    await prisma.location.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Location deleted successfully' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Location not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Error deleting location' },
      { status: 500 }
    );
  }
}
