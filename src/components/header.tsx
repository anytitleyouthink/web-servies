import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants'; 
import logo from "../assets/logo.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* --- 1. LOGO --- */}
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                        <img
                            src={logo}
                            alt="Logo TienTai"
                            className="h-10 w-auto hover:opacity-90 transition-opacity"
                        />
                    </div>

                    {/* --- 2. DESKTOP NAVIGATION --- */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {NAV_LINKS.map((item) => (
                            <div key={item.id} className="relative group cursor-pointer flex items-center h-20">
                                {/* Sử dụng class .nav-link đã định nghĩa trong CSS */}
                                <a href={item.link || '#'} className="nav-link">
                                    {item.title}
                                  
                                </a>                                                                                 
                            </div>
                        ))}
                    </nav>

                    {/* --- 3. MOBILE MENU BUTTON --- */}
                    <div className="flex md:hidden items-center">
                        {/* Sử dụng class .menu-btn */}
                        <button onClick={toggleMobileMenu} className="menu-btn">
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform rotate-90 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- 4. MOBILE DROPDOWN MENU CONTENT --- */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
                    {NAV_LINKS.map((item) => (
                        <div key={item.id} className="border-b border-gray-100 last:border-none">
                            {/* Sử dụng class .mobile-link */}
                            <a
                                href={item.link || '#'}
                                className="mobile-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;