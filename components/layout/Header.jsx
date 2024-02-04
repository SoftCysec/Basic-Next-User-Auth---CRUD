// components/layout/Header.js
import React, { useState } from 'react';

const Header = ({ appName, loggedIn, username }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        // Implement your logout logic here
    };

    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg">{appName}</h1>
                <nav className="flex">
                    {loggedIn ? (
                        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                            <span className="username">{username}</span>
                            <a href="/" className="menu-item">Home</a>
                            {loggedIn && (
                                <>
                                    <a href="/dashboard" className="menu-item">Dashboard</a>
                                    <a href="/services" className="menu-item">Services</a>
                                </>
                            )}
                            <button className="logout bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                            <a href="/" className="menu-item">Home</a>
                            <a href="/login" className="menu-item">Login</a>
                            <a href="/register" className="menu-item">Register</a>
                        </div>
                    )}
                    <button className="hamburger bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
