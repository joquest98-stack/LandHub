import React from "react";
import Button from "../components/ui/Button";
import WhyChooseUs from "../components/layout/WhyChooseUs";
import FeaturedProperties from "../components/home/FeaturedProperties";
import { Page } from "../types";

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onShowDetails?: (id: string) => void;
}

// The main landing page for the application.
const HomePage: React.FC<HomePageProps> = ({ onNavigate, onShowDetails }) => {
  return (
    <div className="w-full">
      <section
        className="relative min-h-screen flex items-center justify-center text-text-dark bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-light-bg opacity-30"></div>

        <div className="relative z-10 text-center px-4 pt-24 pb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-dark leading-tight">
            Own Properties, <span className="text-cta-brown">One Step</span>
            <br />
            <span className="text-accent-green">at a Time</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-gray">
            Start investing in verified Ugandan Properties with as little as UGX
            50,000.
            <br />
            Earn annual returns while building capital toward full ownership.
          </p>
          <p className="mt-2 text-lg md:text-xl font-medium text-slate-gray">
            Be independent 1 step at a time.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate(Page.BUY_PROPERTIES)}
            >
              Start Investing in Properties
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate(Page.HOW_IT_WORKS)}
            >
              Learn How It Works
            </Button>
          </div>

          <div className="mt-10 flex justify-center items-center gap-x-8 gap-y-2 flex-wrap font-medium">
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 bg-accent-green rounded-full mr-2.5"></span>
              Legally Verified Properties
            </div>
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 bg-accent-green rounded-full mr-2.5"></span>
              Secure Payments
            </div>
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 bg-accent-green rounded-full mr-2.5"></span>
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
