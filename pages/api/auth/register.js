// pages/api/auth/register.js
import { connectToDatabase } from '../../../lib/mongodb';
import { hashPassword } from '../../../lib/auth';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { db } = await connectToDatabase();
    const { email, username, password } = req.body;

    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await db.collection('users').insertOne({
        email,
        username,
        password: hashedPassword,
    });

    res.status(201).json({ message: 'User created', userId: newUser.insertedId });
}