import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionFromCookies } from '@/lib/auth-simple';

export async function GET(request: NextRequest) {
  try {
    const locations = await prisma.location.findMany({
      orderBy: { city: 'asc' },
    });

    return NextResponse.json(locations);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching locations' },
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

    const location = await prisma.location.create({
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

    return NextResponse.json(location, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { message: 'A location with this slug already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Error creating location' },
      { status: 500 }
    );
  }
}
