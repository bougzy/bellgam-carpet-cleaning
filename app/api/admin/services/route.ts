import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionFromCookies } from '@/lib/auth-simple';

// GET - List all services
export async function GET(request: NextRequest) {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching services' },
      { status: 500 }
    );
  }
}

// POST - Create new service
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const cookieHeader = request.headers.get('cookie');
    const session = getSessionFromCookies(cookieHeader);

    if (!session || !session.isAuthenticated) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Create service
    const service = await prisma.service.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description,
        longDescription: body.longDescription,
        price: body.price || null,
        icon: body.icon || null,
        featured: body.featured || false,
        published: body.published || true,
        order: body.order || 0,
        seoTitle: body.seoTitle || null,
        seoDescription: body.seoDescription || null,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { message: 'A service with this slug already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Error creating service' },
      { status: 500 }
    );
  }
}
