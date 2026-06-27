import { NextResponse } from 'next/server';

interface ContactInput {
  email: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request body.' },
        { status: 400 }
      );
    }

    const { email, message } = body as Record<string, unknown>;

    // 1. Email validation (the only required validation check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const validatedData: ContactInput = {
      email: email.trim().toLowerCase(),
      message: message && typeof message === 'string' ? message.trim() : undefined,
    };

    console.log('[LEAD RECEIVED] Simplified KOOLIXA Inbound Form:', validatedData);

    // Simulate network write delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your request has been registered. An operations lead will reach out to you.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error. Please try again.' },
      { status: 500 }
    );
  }
}
