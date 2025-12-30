import React, { useState } from 'react';
import { Page } from '../types';
import Button from '../components/ui/Button';

interface GetStartedPageProps {
  onNavigate: (page: Page) => void;
  onClose?: () => void;
}

const GetStartedPage: React.FC<GetStartedPageProps> = ({ onNavigate, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onNavigate(Page.INVEST);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {onClose && (
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-slate-gray dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-cta-brown dark:hover:text-white transition-all shadow-md border border-gray-200 dark:border-gray-700 group"
                aria-label="Close"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        )}

        <div className="absolute inset-0 z-0">
             <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2068&auto=format&fit=crop"
                alt="Background"
                className="w-full h-full object-cover opacity-20 dark:opacity-10"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-gray-900 dark:via-transparent dark:to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] m-4 border border-gray-100 dark:border-gray-700">

            <div className="md:w-1/2 bg-primary-navy relative overflow-hidden flex flex-col justify-between p-10 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
                        alt="Modern House"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                     <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/80 to-primary-navy/90"></div>
                </div>

                <div className="relative z-10">
                     <div className="flex items-center space-x-2 mb-8 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
                         <div className="p-1.5 bg-accent-green rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold">Asset Cycle Africa</span>
                    </div>
                    <h2 className="text-4xl font-bold leading-tight mb-4">
                        {isSignUp ? "Join the Future of Land Investment" : "Welcome Back to Your Portfolio"}
                    </h2>
                    <p className="text-gray-300 text-lg">
                        {isSignUp
                            ? "Start your journey towards property ownership with as little as USD 50,000. Secure, transparent, and profitable."
                            : "Track your assets, monitor returns, and discover new opportunities in the Ugandan real estate market."
                        }
                    </p>
                </div>
                
                <div className="relative z-10 mt-12">
                     <div className="flex items-center gap-4">
                         <div className="flex -space-x-4">
                            <img className="w-10 h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/150?img=33" alt="Investor" />
                            <img className="w-10 h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/150?img=47" alt="Investor" />
                            <img className="w-10 h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/150?img=12" alt="Investor" />
                            <div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full">+2k</div>
                        </div>
                        <div className="text-sm font-medium">Join 2,000+ Investors</div>
                     </div>
                </div>
            </div>

            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white dark:bg-gray-800">
                <div className="max-w-md mx-auto w-full">
                    <div className="flex flex-col mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-text-dark dark:text-white">
                                    {isSignUp ? 'Create Account' : 'Sign In'}
                                </h3>
                                <p className="text-sm text-slate-gray dark:text-gray-400 mt-1">
                                    {isSignUp ? 'Enter details to register' : 'Enter details to login'}
                                </p>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg flex items-center">
                                <button
                                    onClick={() => setIsSignUp(false)}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${!isSignUp ? 'bg-white dark:bg-gray-600 text-text-dark dark:text-white shadow-sm' : 'text-slate-gray dark:text-gray-400'}`}
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setIsSignUp(true)}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${isSignUp ? 'bg-white dark:bg-gray-600 text-text-dark dark:text-white shadow-sm' : 'text-slate-gray dark:text-gray-400'}`}
                                >
                                    Register
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-2 p-1 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700">
                             <button 
                                type="button"
                                onClick={() => setLoginMethod('email')}
                                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${loginMethod === 'email' ? 'bg-white dark:bg-gray-800 text-cta-brown shadow-sm border border-gray-100 dark:border-gray-700' : 'text-slate-gray dark:text-gray-400'}`}
                             >
                                Email Address
                             </button>
                             <button 
                                type="button"
                                onClick={() => setLoginMethod('phone')}
                                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${loginMethod === 'phone' ? 'bg-white dark:bg-gray-800 text-cta-brown shadow-sm border border-gray-100 dark:border-gray-700' : 'text-slate-gray dark:text-gray-400'}`}
                             >
                                Phone Number
                             </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                         {isSignUp && (
                            <div className="animate-fadeIn">
                                <label className="block text-sm font-medium text-text-dark dark:text-gray-300 mb-1.5">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        required={isSignUp}
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cta-brown/50 focus:border-cta-brown outline-none transition-all text-text-dark dark:text-white"
                                        placeholder="Dev Ivan"
                                    />
                                </div>
                            </div>
                        )}

                        {loginMethod === 'email' ? (
                            <div className="animate-fadeIn">
                                <label className="block text-sm font-medium text-text-dark dark:text-gray-300 mb-1.5">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        required={loginMethod === 'email'}
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cta-brown/50 focus:border-cta-brown outline-none transition-all text-text-dark dark:text-white"
                                        placeholder="ivan@example.com"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="animate-fadeIn">
                                <label className="block text-sm font-medium text-text-dark dark:text-gray-300 mb-1.5">Phone Number</label>
                                <div className="flex gap-2">
                                    <div className="flex items-center justify-center px-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm font-bold text-slate-gray dark:text-gray-300">+256</div>
                                    <div className="relative flex-1">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            required={loginMethod === 'phone'}
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cta-brown/50 focus:border-cta-brown outline-none transition-all text-text-dark dark:text-white"
                                            placeholder="700 123 456"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div>
                             <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-medium text-text-dark dark:text-gray-300">Password</label>
                                {!isSignUp && <a href="#" className="text-xs font-medium text-cta-brown hover:underline">Forgot?</a>}
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cta-brown/50 focus:border-cta-brown outline-none transition-all text-text-dark dark:text-white"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full h-12 shadow-lg shadow-cta-brown/20"
                            disabled={isLoading}
                        >
                             {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Processing...
                                </span>
                            ) : (
                                isSignUp ? 'Create Account' : 'Sign In'
                            )}
                        </Button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-gray-700"></div></div>
                        <div className="relative flex justify-center text-sm"><span className="px-4 bg-white dark:bg-gray-800 text-slate-gray dark:text-gray-400">Or continue with</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium text-text-dark dark:text-white">
                             <img className="h-5 w-5 mr-2" src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" />
                            Google
                        </button>
                        <button className="flex items-center justify-center px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium text-text-dark dark:text-white">
                             <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.1 1.88-2.61 5.79 1.07 7.22-.67 1.72-1.6 3.42-3.12 3.99zm-3.17-15.1c.61-1.24 2.3-1.9 3.06-1.57.25 2.22-2.11 4.54-4.53 4.1-.21-1.32.74-2.53 1.47-2.53z" /></svg>
                            Apple
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 z-10 text-center w-full text-xs text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Asset Cycle Africa. All rights reserved. <a href="#" className="hover:text-cta-brown ml-2 underline">Privacy Policy</a>
            </div>
        </div>
    </div>
  );
};

export default GetStartedPage;