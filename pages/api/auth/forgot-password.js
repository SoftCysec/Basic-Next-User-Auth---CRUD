// pages/api/auth/reset-password.js
import { connectToDatabase } from '../../../lib/mongodb';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { db } = await connectToDatabase();
    const { email } = req.body;

    const user = await db.collection('users').findOne({ email });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Generate a password reset token. In a real app, this should be a secure, random token.
    // Here it's simplified for demonstration.
    const resetToken = Math.random().toString(36).substring(2, 15);

    // Store the token in the database, associated with the user
    // For security, tokens should have an expiration time and be hashed
    await db.collection('users').updateOne({ email }, { $set: { resetToken } });

    // Set up Nodemailer transport (configure with your SMTP server)
    const transporter = nodemailer.createTransport({
        // Example using Gmail. For production, use a professional SMTP service
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Send the email with the reset link (customize your domain and route as needed)
    const resetLink = `https://21e0-102-220-14-242.ngrok-free.app/reset-password?token=${resetToken}&email=${email}`;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset Request',
        html: `<p>Please click on the following link to reset your password:</p><a href="${resetLink}">${resetLink}</a>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Error sending email' });
        } else {
            return res.status(200).json({ message: 'Reset email sent' });
        }
    });
}