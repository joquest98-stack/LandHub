import React from 'react';
import Button from '../components/ui/Button';
import StepCard from '../components/how-it-works/StepCard';
import FaqItem from '../components/how-it-works/FaqItem';
import { FAQS } from '../constants';
import { Page } from '../types';

interface HowItWorksPageProps {
  onNavigate: (page: Page) => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      stepNumber: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cta-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      title: 'Explore Verified Properties',
      description: 'Browse our curated selection of legally verified land listings. Each property includes detailed information, legal documents, and investment potential to help you make an informed decision.'
    },
    {
      stepNumber: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cta-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 21z" />
        </svg>
      ),
      title: 'Invest Any Amount',
      description: 'Decide how much you want to invest. Our fractional ownership model allows you to start with an amount that\'s comfortable for you. Complete your investment through our secure payment gateway.'
    },
    {
      stepNumber: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cta-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      title: 'Watch Your Investment Grow',
      description: 'Monitor your portfolio\'s performance through your personal dashboard. Earn annual returns as the land value appreciates, and continue investing to build your capital towards full ownership.'
    },
  ];

  return (
    <div className="w-full bg-light-bg">
      {/* Hero Section */}
      <section 
        className="relative pt-40 pb-24 text-text-dark bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620912189873-518873433543?q=80&w=1932&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-dark">
            Your Path to Land Ownership, <span className="text-accent-green">Simplified</span>.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-gray">
            Discover how LandHub makes investing in verified Ugandan land accessible, transparent, and rewarding. Follow our simple process to start building your portfolio.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark">Three Simple Steps</h2>
            <p className="mt-4 text-lg text-slate-gray">
              Start your investment journey in minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <StepCard key={step.stepNumber} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-subtle-gray py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-gray">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Ready to Build Your Legacy?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-gray">
            Start your journey towards land ownership today. Explore our verified projects and make your first investment with confidence.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" onClick={() => onNavigate(Page.BUY_LAND)}>
              Explore Properties
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
