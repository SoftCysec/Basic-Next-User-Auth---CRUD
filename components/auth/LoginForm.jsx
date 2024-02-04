// components/auth/LoginForm.js
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import ResetPasswordForm from './ResetPassowrd'; // Adjust the path as necessary

const LoginForm = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result.error) {
            alert(result.error);
        } else {
            onClose(); // Close the modal on successful login
        }
    };

    const toggleResetPasswordForm = () => setShowResetPasswordForm(!showResetPasswordForm);

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            {!showResetPasswordForm ? (
                <div className="bg-white p-5 border w-96 shadow-lg rounded-md">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Login</h3>
                    <form className="mt-2" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="mt-2 p-2 w-full border rounded bg-gray-950"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="mt-2 p-2 w-full border rounded bg-gray-950"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="mt-4 p-2 bg-blue-500 text-white w-full rounded hover:bg-blue-700"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="mt-4 flex justify-between">
                        <button onClick={onClose} className="text-sm text-blue-500 hover:text-blue-700">Cancel</button>
                        <button onClick={toggleResetPasswordForm} className="text-sm text-blue-500 hover:text-blue-700">Forgot Password?</button>
                    </div>
                </div>
            ) : (
                <ResetPasswordForm onClose={toggleResetPasswordForm} />
            )}
        </div>
    );
};

export default LoginForm;
