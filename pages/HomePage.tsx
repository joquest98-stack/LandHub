import React from 'react';
import Button from '../components/ui/Button';
import WhyChooseUs from '../components/layout/WhyChooseUs';
import FeaturedProperties from '../components/home/FeaturedProperties';
import { Page } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onShowDetails?: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onShowDetails }) => {
    return (
        <div className="w-full">
            <section 
                className="relative min-h-screen flex items-center justify-center text-text-dark bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-light-bg opacity-30 dark:bg-black dark:opacity-60 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center px-4 pt-28 pb-12 sm:pt-32 md:pt-24">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-text-dark dark:text-white leading-tight transition-colors duration-300 drop-shadow-sm">
                        Own Property, <span className="text-cta-brown block md:inline">One Step</span>{' '}
                        <span className="text-accent-green block md:inline">at a Time</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-slate-gray dark:text-gray-100 font-medium transition-colors duration-300 px-2 shadow-sm">
                        Start investing in verified Ugandan properties with as little as USD 50,000. 
                        Earn annual returns while building capital toward full ownership.
                    </p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl font-bold text-slate-gray dark:text-white transition-colors duration-300">
                        Be independent 1 step at a time.
                    </p>
                    
                    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
                        <Button variant="primary" size="lg" onClick={() => onNavigate(Page.BUY_PROPERTIES)} className="w-full sm:w-auto min-h-[50px]">
                            Start Investing
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Button>
                        <Button variant="secondary" size="lg" onClick={() => onNavigate(Page.HOW_IT_WORKS)} className="w-full sm:w-auto min-h-[50px]">Learn How It Works</Button>
                    </div>

                    <div className="mt-10 flex justify-center items-center gap-x-6 gap-y-3 flex-wrap font-semibold dark:text-white text-sm sm:text-base">
                        <div className="flex items-center bg-white/50 dark:bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 bg-accent-green rounded-full mr-2"></span>
                            Legally Verified
                        </div>
                        <div className="flex items-center bg-white/50 dark:bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 bg-accent-green rounded-full mr-2"></span>
                            Secure Payments
                        </div>
                        <div className="flex items-center bg-white/50 dark:bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 bg-accent-green rounded-full mr-2"></span>
                            Transparent Returns
                        </div>
                    </div>
                </div>
            </section>
            
            <WhyChooseUs />
            <FeaturedProperties onShowDetails={onShowDetails} />
        </div>
    );
};

export default HomePage;