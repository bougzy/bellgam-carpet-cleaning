import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionFromCookies } from '@/lib/auth-simple';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const review = await prisma.review.findUnique({
      where: { id: params.id },
      include: { service: true },
    });

    if (!review) {
      return NextResponse.json(
        { message: 'Review not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching review' },
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

    const review = await prisma.review.update({
      where: { id: params.id },
      data: {
        customerName: body.customerName,
        rating: body.rating,
        content: body.content,
        serviceId: body.serviceId || null,
        location: body.location || null,
        featured: body.featured || false,
        published: body.published || true,
      },
    });

    return NextResponse.json(review);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Review not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Error updating review' },
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

    await prisma.review.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Review deleted successfully' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Review not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Error deleting review' },
      { status: 500 }
    );
  }
}
