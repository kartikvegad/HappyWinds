import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const STUDIO_EMAIL = process.env.GMAIL_USER || "hihappywinds@gmail.com";
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isAllowedResume(file: File) {
  if (ALLOWED_RESUME_TYPES.has(file.type)) return true;
  return /\.(pdf|doc|docx)$/i.test(file.name);
}

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const portfolio = String(formData.get("portfolio") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  let roles: string[] = [];
  const rolesRaw = String(formData.get("roles") ?? "");
  try {
    const parsed = JSON.parse(rolesRaw);
    if (Array.isArray(parsed)) {
      roles = parsed.map((r) => String(r).trim()).filter(Boolean);
    }
  } catch {
    roles = [];
  }

  const resume = formData.get("resume");

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and phone number are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json(
      { ok: false, error: "Please upload your resume or CV." },
      { status: 400 },
    );
  }

  if (!isAllowedResume(resume)) {
    return NextResponse.json(
      { ok: false, error: "Resume must be a PDF or Word document." },
      { status: 400 },
    );
  }

  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Resume must be 5 MB or smaller." },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER || "hihappywinds@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    console.error("GMAIL_APP_PASSWORD is not set.");
    return NextResponse.json(
      {
        ok: false,
        error: `Careers form isn't configured yet. Please email ${STUDIO_EMAIL} directly.`,
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass.replace(/\s/g, ""),
    },
  });

  const resumeBuffer = Buffer.from(await resume.arrayBuffer());

  const inquiryText = [
    "New career application via the Happywinds website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Portfolio: ${portfolio || "—"}`,
    `Roles: ${roles.length ? roles.join(", ") : "—"}`,
    `Resume: ${resume.name}`,
    "",
    "About the applicant:",
    message || "—",
  ].join("\n");

  const confirmationText = [
    `Hi ${name},`,
    "",
    "Thank you for applying to Happywinds Logos.",
    "",
    "We've received your application and resume, and will review them carefully. If there's a fit, we'll be in touch.",
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
      subject: `Career application — ${name}${roles.length ? ` (${roles.join(", ")})` : ""}`,
      text: inquiryText,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type || undefined,
        },
      ],
    });

    await transporter.sendMail({
      from: `"Happywinds Logos" <${gmailUser}>`,
      to: email,
      replyTo: STUDIO_EMAIL,
      subject: "We've received your application — Happywinds Logos",
      text: confirmationText,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Gmail careers send failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your application. Please try again." },
      { status: 502 },
    );
  }
}
