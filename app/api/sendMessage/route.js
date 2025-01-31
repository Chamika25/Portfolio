
import { NextResponse } from 'next/server';

const ALLOWED_ORIGIN = process.env.ALLOW_ORIGIN;
const API_KEY = process.env.NEXT_PUBLIC_API_SECRET_KEY;

export async function POST(req) {
  try {

    const origin = req.headers.get('origin') || req.headers.get('referer'); 
    const apiKey = req.headers.get('x-api-key');

    if (!origin || !origin.startsWith(ALLOWED_ORIGIN) || apiKey !== API_KEY) {
        return NextResponse.json(
          { message: 'Unauthorized access' },
          { status: 403 }
        );
    }

    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    //console.log(firstName, lastName, email, phone, subject, message);

    // Return success response
    return NextResponse.json(
      { message: 'Form submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    //console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error.' },
      { status: 500 }
    );
  }
}