import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const {
        name, email, phone, website,
        projectBrief, services,
        startDate, deadline, budget, selectedPackage,
        source
    } = req.body;

    // DEBUG: log everything received
    console.log('📩 Form submission received:', JSON.stringify(req.body, null, 2));

    // Validation
    if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const servicesText = services && services.length > 0 ? services.join(', ') : 'None specified';

        // Email to you
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
                        <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                    </div>

                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #888; text-align: center;">Sent from Happy Winds Contact Form</p>
                </div>
            `
        };

        // Confirmation email to customer
        const mailToCustomer = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We\'ve received your project details - Happy Winds',
            html: `
                <div style="font-family: 'Outfit', sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #000;">Thank you for reaching out, ${name.split(' ')[0]}!</h2>
                    <p>We've received your project details. Our team is currently reviewing your brief and we'll be in touch within 24-48 hours to discuss the next steps.</p>
                    
                    <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
                        <p style="margin: 0;">Warm regards,</p>
                        <p style="margin: 0; font-weight: 700;">Team Happy Winds</p>
                    </div>
                </div>
            `
        };

        // Send emails
        await transporter.sendMail(mailToYou);
        await transporter.sendMail(mailToCustomer);

        res.status(200).json({
            success: true,
            message: 'Inquiry received successfully. Check your email for confirmation.'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            error: 'Failed to process inquiry. Please check your connection or contact us directly.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
