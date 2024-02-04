// pages/dashboard.jsx
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    // Example state for user contacts
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function fetchContacts() {
            const response = await fetch('/api/contact/contacts');
            const data = await response.json();
            setContacts(data);
        }
        fetchContacts();
    }, []);

    return (
        <div className="bg-lightblue p-20">
            <h1 className="text-white text-center">Dashboard</h1>
            {/* Example rendering of contacts */}
            {contacts.map((contact) => (
                <div key={contact._id} className="bg-white p-10 m-10">
                    {contact.name}
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
