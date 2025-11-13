// Import React to create the component.
import React from 'react';

/**
 * The Footer component for the application.
 * Contains navigation links, legal information, social media links, and copyright notice.
 */
const Footer: React.FC = () => {
    // Data for quick navigation links.
    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'How It Works', href: '#' },
        { name: 'Invest', href: '#' },
        { name: 'Buy Land', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    // Data for legal information links.
    const legalLinks = [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Investment Disclaimer', href: '#' },
    ];

    return (
        <footer className="bg-dark-charcoal text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Logo and mission statement */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold">Land Hub</h2>
                        <p className="mt-2 text-gray-400">Own Land, One Step at a Time.</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-base text-gray-300 hover:text-white">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            {legalLinks.map(link => (
                                <li key={link.name}> 
                                    <a href={link.href} className="text-base text-gray-300 hover:text-white">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 4: Social Media Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Connect</h3>
                        <div className="mt-4 flex space-x-4">
                            {/* Facebook */}
                             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            {/* X (formerly Twitter) */}
                            <a href="#" aria-label="X (formerly Twitter)" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.33 5.71c-.66-.02-1.28-.2-1.82-.5v.05a4.28 4.28 0 0 0 3.43 4.2c-.5.14-1.03.17-1.58.06a4.28 4.28 0 0 0 3.99 2.97A8.59 8.59 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.7 8.7 0 0 0 22.46 6z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth="2" />
                                    <path d="M16 11.37A4 4 0 1 1 11.37 7 4 4 0 0 1 16 11.37z" strokeWidth="2" fill="none" />
                                    <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8 8.98h4.78v2.05h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 6 3.33 6 7.66V24h-5V16.7c0-1.75-.03-4-2.44-4-2.45 0-2.82 1.9-2.82 3.86V24H8V8.98z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom section with copyright notice */}
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Land Hub Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
