// lib/mongodb.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export async function connectToDatabase() {
    if (!client.isConnected()) await client.connect();
    const db = client.db(process.env.DB_NAME); // Replace with your actual DB name
    return { db, client };
}