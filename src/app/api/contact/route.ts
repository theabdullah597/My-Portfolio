// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // 1. Honeypot Anti-Spam Check
    if (honeypot) {
      // If honeypot is filled, it's a bot. Return success to fool them.
      return NextResponse.json({ success: true });
    }

    // 2. Server-side Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 3. Construct Email
    const msg = {
      to: process.env.EMAIL_TO,
      from: process.env.SENDGRID_FROM as string, // Must be verified in SendGrid
      subject: `Portfolio Lead: ${subject || 'New Message'}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f4f4f4;">
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h2 style="color: #333;">New Project Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // 4. Send
    await sgMail.send(msg);

    return NextResponse.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("SendGrid Error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}