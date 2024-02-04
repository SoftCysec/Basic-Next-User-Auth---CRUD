// components/auth/ResetPasswordForm.js
import { useState } from 'react';

const ResetPasswordForm = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement password reset logic here. For demo, just alert.
    alert("Reset link sent to email (this is a placeholder functionality).");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Reset Password</h3>
          <form className="mt-2" onSubmit={handleSubmit}>
            <input
              type="email"
              className="mt-2 p-2 w-full border rounded bg-gray-950"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white w-full rounded hover:bg-blue-700"
            >
              Send Reset Link
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

export default ResetPasswordForm;
