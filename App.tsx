import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Page } from './types';
import HowItWorksPage from './pages/HowItWorksPage';
import InvestPage from './pages/Invest';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onNavigate={handleNavigate} />;
      case Page.HOW_IT_WORKS:
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case Page.INVEST:
      case Page.BUY_LAND:
        return <InvestPage />;
      case Page.ABOUT:
      case Page.CONTACT:
        return <HomePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;