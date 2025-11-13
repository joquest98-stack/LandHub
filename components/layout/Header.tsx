import React, { useState } from 'react';
import Button from '../ui/Button';

const NAV_LINKS = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Invest', href: '#' },
    { name: 'Buy Land', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
];

/**
 * Logo component for the application.
 */
const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
        {/* Icon container with gradient background */}
        <div className="p-1.5 bg-gradient-to-br from-accent-green to-green-400 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </div>
        {/* Brand name */}
        <span className="text-2xl font-bold text-text-dark">LandHub</span>
    </div>
);

/**
 * The main Header component for the application.
 * It includes the logo, navigation, and a call-to-action button.
 * It is responsive and includes a mobile menu.
 */
const Header: React.FC = () => {
    // State to manage the visibility of the mobile menu.
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        // Header container with fixed positioning and styling.
        <header className="fixed top-4 inset-x-0 z-50 px-4">
            <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/30">
                <div className="flex items-center justify-between h-16 px-6">
                    {/* Logo section */}
                    <div className="flex-shrink-0">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <Logo />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <nav className="flex items-center space-x-2">
                            {NAV_LINKS.map((link) => (
                                <a key={link.name} href={link.href} onClick={(e) => e.preventDefault()} className="font-medium px-4 py-2 rounded-full text-text-dark hover:bg-black/5 transition-colors duration-300">
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        <Button onClick={() => { /* no-op */ }} variant="primary" size="md">Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-full text-text-dark hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-text-dark">
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                // Close icon
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                // Hamburger icon
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 overflow-hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:bg-black/5">{link.name}</a>
                        ))}
                    </div>
                    <div className="px-5 py-4">
                        <Button onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">Get Started</Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
