// Import React and necessary data/types.
import React from 'react';
import { LISTINGS } from '../../constants';
import { ListingStatus } from '../../types';
import PropertyCard from './PropertyCard';

/**
 * A section component to display a curated list of featured properties.
 */
const FeaturedProperties: React.FC = () => {
  // Filter the main listings to get only 'Approved' properties and take the first 4.
  const featuredListings = LISTINGS.filter(
    (listing) => listing.status === ListingStatus.APPROVED
  ).slice(0, 4);

  return (
    <section className="bg-subtle-gray py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark">Featured Properties</h2>
          <p className="mt-4 text-lg text-slate-gray">
            Explore a curated selection of our finest land investment opportunities.
          </p>
        </div>
        {/* Grid of Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* To add more featured properties, update the LISTINGS array in the `constants.ts` file. */}
          {/* Map over the filtered listings and render a PropertyCard for each. */}
          {featuredListings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
