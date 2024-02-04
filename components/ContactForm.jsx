// components/ContactForm.js
import { useState } from 'react';

const ContactForm = ({ onClose, onSave }) => {
  const [contact, setContact] = useState({
    mobilePhone: '',
    email: '',
    address: '',
    registrationNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    onSave(contact);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Details</h3>
          <form className="mt-2" onSubmit={handleSubmit}>
            <input
              name="mobilePhone"
              type="text"
              className="mt-2 p-2 w-full border rounded"
              placeholder="Mobile Phone"
              value={contact.mobilePhone}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              className="mt-2 p-2 w-full border rounded"
              placeholder="Email"
              value={contact.email}
              onChange={handleChange}
              required
            />
            <input
              name="address"
              type="text"
              className="mt-2 p-2 w-full border rounded"
              placeholder="Address"
              value={contact.address}
              onChange={handleChange}
              required
            />
            <input
              name="registrationNumber"
              type="text"
              className="mt-2 p-2 w-full border rounded"
              placeholder="Registration Number"
              value={contact.registrationNumber}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white w-full rounded hover:bg-blue-700"
            >
              Save
            </button>
          </form>
          <div className="mt-4">
            <button onClick={onClose} className="text-sm text-blue-600 hover:underline">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
