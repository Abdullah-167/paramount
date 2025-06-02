import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email settings - use environment variables in production
const hostingerEmail = process.env.HOSTINGER_EMAIL || "info@paramountsolutions.online";
const hostingerPassword = process.env.HOSTINGER_PASSWORD || "Paramountsolutions@bilal1";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, phone and message are required",
        },
        { status: 400 }
      );
    }

    // Nodemailer transporter for Hostinger
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: hostingerEmail,
        pass: hostingerPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Admin email (organized layout)
    await transporter.sendMail({
      from: `"Paramount Solutions" <${hostingerEmail}>`,
      to: hostingerEmail,
      subject: "📩 New Contact Form Submission",
      html: `
        <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7; border-radius: 10px; border: 1px solid #ddd;">
          <h2 style="color: #333; text-align: center;">🚀 New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #f0f0f0;">👤 Name:</td>
              <td style="padding: 10px; background-color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #f0f0f0;">📧 Email:</td>
              <td style="padding: 10px; background-color: #fff;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #f0f0f0;">📞 Phone:</td>
              <td style="padding: 10px; background-color: #fff;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #f0f0f0;">💬 Message:</td>
              <td style="padding: 10px; background-color: #fff; white-space: pre-line;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            You received this message from the Paramount Solutions website contact form.
          </p>
        </div>
      `,
    });

    // Thank you email to the user
    await transporter.sendMail({
      from: `"Paramount Solutions" <${hostingerEmail}>`,
      to: email,
      subject: "Thank You for Contacting Paramount Solutions",
      html: `
        <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; text-align: center;">Thank You for Contacting Us!</h2>
          <p style="font-size: 16px; color: #555;">Dear <strong>${name}</strong>,</p>
          <p style="font-size: 15px; color: #555;">
            We’ve received your message and our team will get back to you shortly. Here's a summary of what you sent:
          </p>
          <ul style="font-size: 15px; color: #444; padding-left: 20px; line-height: 1.6;">
            <li><strong>📞 Phone:</strong> ${phone}</li>
            <li><strong>📧 Email:</strong> ${email}</li>
            <li><strong>💬 Message:</strong> ${message}</li>
          </ul>
          <p style="margin-top: 20px; font-size: 15px; color: #555;">Thank you again for reaching out to Paramount Solutions!</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://paramountsolutions.online" style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 6px;">Visit Our Website</a>
          </div>
          <p style="text-align: center; margin-top: 20px; font-size: 12px; color: #888;">This is an automated message — please do not reply.</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error: any) {
    console.error("Email Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error sending email",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
