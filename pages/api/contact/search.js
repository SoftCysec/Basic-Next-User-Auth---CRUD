// pages/api/contact/search.js
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { registrationNumber } = req.query;

    const { db } = await connectToDatabase();
    const contacts = await db.collection('contacts').find({ registrationNumber }).toArray();

    if (!contacts.length) {
        return res.status(404).json({ message: 'No contacts found with that registration number' });
    }

    res.status(200).json(contacts);
}