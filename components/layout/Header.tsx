import React, { useState } from 'react';
import Button from '../ui/Button';
import { Page } from '../../types';

interface HeaderProps {
    onNavigate: (page: Page) => void;
    currentPage: Page;
}

const NAV_LINKS = [
    { name: 'Home', page: Page.HOME },
    { name: 'How It Works', page: Page.HOW_IT_WORKS },
    { name: 'Invest', page: Page.BUY_LAND },
    { name: 'Buy Land', page: Page.BUY_LAND },
    { name: 'About', page: Page.HOME },
    { name: 'Contact', page: Page.HOME },
];

// Logo component
const Logo: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
        <div className="p-1.5 bg-gradient-to-br from-accent-green to-green-400 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </div>
        <span className="text-2xl font-bold text-text-dark">LandHub</span>
    </div>
);

// Header component
const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 inset-x-0 z-50 px-4">
            <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/30">
                <div className="flex items-center justify-between h-16 px-6">
                    <div className="flex-shrink-0">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.HOME); }}>
                            <Logo onNavigate={onNavigate} />
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <nav className="flex items-center space-x-2">
                            {NAV_LINKS.map((link) => {
                                const isActive = currentPage === link.page && link.name !== 'Invest' && link.name !== 'Buy Land' && link.name !== 'About' && link.name !== 'Contact';
                                return (
                                    <a 
                                        key={link.name} 
                                        href="#" 
                                        onClick={(e) => { e.preventDefault(); onNavigate(link.page); }}
                                        className={`font-medium px-4 py-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-black/10 text-text-dark' : 'text-text-dark hover:bg-black/5'}`}
                                    >
                                        {link.name}
                                    </a>
                                )
                            })}
                        </nav>
                        <Button onClick={() => onNavigate(Page.BUY_LAND)} variant="primary" size="md">Get Started</Button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-full text-text-dark hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-text-dark">
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 overflow-hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <a 
                                key={link.name} 
                                href="#" 
                                onClick={(e) => { e.preventDefault(); onNavigate(link.page); setIsMobileMenuOpen(false); }} 
                                className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:bg-black/5"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="px-5 py-4">
                        <Button onClick={() => { onNavigate(Page.BUY_LAND); setIsMobileMenuOpen(false); }} variant="primary" className="w-full">Get Started</Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
