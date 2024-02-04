// pages/api/contact/contacts.js
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    switch (req.method) {
        case 'POST':
            const contact = await db.collection('contacts').insertOne(req.body);
            res.status(201).json(contact.ops[0]);
            break;
        case 'GET':
            const contacts = await db.collection('contacts').find({}).toArray();
            res.status(200).json(contacts);
            break;
        default:
            res.setHeader('Allow', ['POST', 'GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}