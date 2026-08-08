import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  budget?: string;
  message?: string;
  services?: string[];
};

const STUDIO_EMAIL =
  process.env.GMAIL_USER || "hihappywinds@gmail.com";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const budget = payload.budget?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const services = Array.isArray(payload.services)
    ? payload.services.map((s) => String(s).trim()).filter(Boolean)
    : [];

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and phone number are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER || "hihappywinds@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    console.error("GMAIL_APP_PASSWORD is not set.");
    return NextResponse.json(
      {
        ok: false,
        error: `The contact form isn't configured yet. Please email ${STUDIO_EMAIL} directly.`,
      },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass.replace(/\s/g, ""),
    },
  });

  const inquiryText = [
    "New business inquiry via the Happywinds website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Company: ${company || "—"}`,
    `Budget: ${budget || "—"}`,
    `Services: ${services.length ? services.join(", ") : "—"}`,
    "",
    "Project / company details:",
    message || "—",
  ].join("\n");

  const confirmationText = [
    `Hi ${name},`,
    "",
    "Thank you for reaching out to Happywinds Logos.",
    "",
    "We've received your request and will get back to you soon with next steps.",
    "",
    "Warm regards,",
    "Happywinds Logos",
    STUDIO_EMAIL,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Happywinds Logos" <${gmailUser}>`,
      to: STUDIO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: inquiryText,
    });

    await transporter.sendMail({
      from: `"Happywinds Logos" <${gmailUser}>`,
      to: email,
      replyTo: STUDIO_EMAIL,
      subject: "We've received your request — Happywinds Logos",
      text: confirmationText,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Gmail contact send failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 502 }
    );
  }
}
