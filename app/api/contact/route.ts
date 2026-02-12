import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Save to database
    const contact = await prisma.contactSubmission.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        service: body.service || null,
        location: body.location || null,
        message: body.message,
        status: 'new',
      },
    });

    // TODO: Send email notification via Resend (optional)
    // For now, we're just saving to database

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: contact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { message: 'Error submitting form' },
      { status: 500 }
    );
  }
}
