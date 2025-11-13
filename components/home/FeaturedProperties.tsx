import React from 'react';
import { LISTINGS } from '../../constants';
import { ListingStatus } from '../../types';
import PropertyCard from './PropertyCard';

// Section for featured properties
const FeaturedProperties: React.FC = () => {
  const featuredListings = LISTINGS.filter(
    (listing) => listing.status === ListingStatus.APPROVED
  ).slice(0, 4);

  return (
    <section className="bg-subtle-gray py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark">Featured Properties</h2>
          <p className="mt-4 text-lg text-slate-gray">
            Explore a curated selection of our finest land investment opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredListings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;