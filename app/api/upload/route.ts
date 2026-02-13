import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, '-');
    const filename = `${timestamp}-${originalName}`;

    // Determine upload directory based on file type
    let uploadDir = 'gallery'; // default
    const folder = formData.get('folder') as string;
    if (folder) {
      uploadDir = folder;
    }

    // Save file to public directory
    const publicPath = join(process.cwd(), 'public', 'images', uploadDir, filename);
    await writeFile(publicPath, buffer);

    // Return the public URL
    const url = `/images/${uploadDir}/${filename}`;

    return NextResponse.json({
      success: true,
      url,
      filename
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
