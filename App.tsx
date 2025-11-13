import React from 'react';
import HomePage from './pages/HomePage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import WhyChooseUs from './components/layout/WhyChooseUs';
import FeaturedProperties from './components/home/FeaturedProperties';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HomePage />
        <WhyChooseUs />
        <FeaturedProperties />
      </main>
      <Footer />
    </div>
  );
};

export default App;