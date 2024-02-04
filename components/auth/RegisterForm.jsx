// components/auth/RegisterForm.js
import { useState } from 'react';

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send formData to your API for registration
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        // Handle success (e.g., show a success message, close the modal, or redirect)
        alert('Registration successful!');
        onClose();
      } else {
        // Handle errors (e.g., display error messages to the user)
        alert(data.message || 'An error occurred during registration.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-5 border w-96 shadow-lg rounded-md">
        <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder='Username'
              className="mt-1 p-2 w-full border rounded-md bg-gray-950"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Email'
              className="mt-1 p-2 w-full border rounded-md bg-gray-950"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='Password'
              className="mt-1 p-2 w-full border rounded-md bg-gray-950"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Register</button>
        </form>
        <button onClick={onClose} className="mt-4 w-full text-blue-500 hover:text-blue-700 text-sm">Cancel</button>
      </div>
    </div>
  );
};

export default RegisterForm;
