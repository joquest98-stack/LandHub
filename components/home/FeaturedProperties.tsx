import React from "react";
import { LISTINGS } from "../../constants";
import { ListingStatus } from "../../types";
import PropertyCard from "./PropertyCard";

interface FeaturedPropertiesProps {
  onShowDetails?: (id: string) => void;
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onShowDetails,
}) => {
  const featuredListings = LISTINGS.filter(
    (listing) =>
      listing.status === ListingStatus.APPROVED && listing.featured === true
  ).slice(0, 4);

  return (
    <section className="bg-subtle-gray dark:bg-gray-800/50 py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark dark:text-white">
            Featured Properties
          </h2>
          <p className="mt-4 text-lg text-slate-gray dark:text-gray-400">
            Explore a curated selection of our finest property investment
            opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredListings.map((listing) => (
            <PropertyCard
              key={listing.id}
              listing={listing}
              onShowDetails={onShowDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
