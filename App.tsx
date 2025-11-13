// Import necessary React library and components.
import React from 'react';
import HomePage from './pages/HomePage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import WhyChooseUs from './components/layout/WhyChooseUs';
import FeaturedProperties from './components/home/FeaturedProperties';

/**
 * The main App component that serves as the root of the application's component tree.
 * It defines the overall layout and structure of the pages.
 */
const App: React.FC = () => {
  return (
    // Main container with flex layout to ensure footer sticks to the bottom.
    <div className="min-h-screen flex flex-col">
      {/* Application Header */}
      <Header />
      {/* Main content area that grows to fill available space */}
      <main className="flex-grow">
        {/* The main landing page content */}
        <HomePage />
        {/* Section explaining the benefits of the platform */}
        <WhyChooseUs />
        {/* Section showcasing featured properties */}
        <FeaturedProperties />
      </main>
      {/* Application Footer */}
      <Footer />
    </div>
  );
};

export default App;