import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Page } from './types';
import HowItWorksPage from './pages/HowItWorksPage';
import BuyLandPage from './pages/BuyLandPage';
import InvestPage from './pages/InvestPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GetStartedPage from './pages/GetStartedPage';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [previousPage, setPreviousPage] = useState<Page>(Page.HOME);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);

  const handleNavigate = (page: Page) => {
    if (currentPage !== page) {
        setPreviousPage(currentPage);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0); 
  };

  const handleShowDetails = (id: string) => {
    setPreviousPage(currentPage);
    setSelectedListingId(id);
    handleNavigate(Page.PROPERTY_DETAILS);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onNavigate={handleNavigate} onShowDetails={handleShowDetails} />;
      case Page.HOW_IT_WORKS:
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case Page.INVEST:
        return <InvestPage onShowDetails={handleShowDetails} />;
      case Page.BUY_PROPERTIES:
        return <BuyLandPage onShowDetails={handleShowDetails} />;
      case Page.PROPERTY_DETAILS:
        return <PropertyDetailsPage listingId={selectedListingId} onNavigate={handleNavigate} previousPage={previousPage} />;
      case Page.ABOUT:
        return <AboutPage onNavigate={handleNavigate} />;
      case Page.CONTACT:
        return <ContactPage onNavigate={handleNavigate} />;
      case Page.GET_STARTED:
        return <GetStartedPage onNavigate={handleNavigate} onClose={() => handleNavigate(previousPage)} />;
      default:
        return <HomePage onNavigate={handleNavigate} onShowDetails={handleShowDetails} />;
    }
  };

  const isAuthPage = currentPage === Page.GET_STARTED;

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-light-bg dark:bg-gray-900 transition-colors duration-300">
        {!isAuthPage && <Header onNavigate={handleNavigate} currentPage={currentPage} />}
        
        <main className="flex-grow">
          {renderPage()}
        </main>

        {!isAuthPage && <Footer />}
      </div>
    </ThemeProvider>
  );
};

export default App;