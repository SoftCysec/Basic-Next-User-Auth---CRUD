// pages/index.js
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/auth/LoginForm'; // Ensure this path is correct
import RegisterForm from '../components/auth/RegisterForm'; // Ensure this path is correct

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mocked authentication state
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    // Function to toggle the login modal
    const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

    // Function to toggle the registration modal
    const toggleRegisterModal = () => setShowRegisterModal(!showRegisterModal);

    // Close modals and simulate a login state change
    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLoginModal(false);
    };

    // Simulate logout
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Header />
            <main className="container mx-auto my-8">
                <h1 className="text-4xl font-bold text-center mb-4">Welcome to Your App</h1>
                <p className="text-center mb-8">This is a simple web application built with Next.js, TailwindCSS, and MongoDB.</p>
                <div className="flex justify-center space-x-4">
                    {!isLoggedIn ? (
                        <>
                            <button onClick={toggleLoginModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Login
                            </button>
                            <button onClick={toggleRegisterModal} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                Register
                            </button>
                        </>
                    ) : (
                        <>
                            <a href="/dashboard" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Dashboard
                            </a>
                            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </main>
            {showLoginModal && <LoginForm onClose={toggleLoginModal} onLoginSuccess={handleLoginSuccess} />}
            {showRegisterModal && <RegisterForm onClose={toggleRegisterModal} />}
            <Footer />
        </div>
    );
}
