import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Enable CORS if needed (Vercel handles basic CORS, but good to be explicit for API)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, company, phone } = req.body;

    // Validation
    if (!name || !phone) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailToYou = {
            from: process.env.EMAIL_USER,
            to: 'hihappywinds@gmail.com',
            subject: `🚀 New Project Inquiry: ${name}`,
            html: `
                <div style="font-family: 'Outfit', sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
                    <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px; margin-top: 0;">New Project Inquiry</h2>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #666; font-size: 14px; text-transform: uppercase; margin-bottom: 10px;">Contact Details</h3>
                        <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 5px 0;"><strong>Company:</strong> ${company || 'N/A'}</p>
                        <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                    </div>

                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #888; text-align: center;">Sent from Happy Winds Contact Form</p>
                </div>
            `
        };

        await transporter.sendMail(mailToYou);

        res.status(200).json({
            success: true,
            message: 'Inquiry received successfully. The team will contact you soon.'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            error: 'Failed to process inquiry. Please check your connection or contact us directly.'
        });
    }
}
