import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionFromCookies } from '@/lib/auth-simple';

export async function GET(request: NextRequest) {
  try {
    const reviews = await prisma.review.findMany({
      include: { service: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    const review = await prisma.review.create({
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

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating review' },
      { status: 500 }
    );
  }
}
