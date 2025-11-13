// Import React and necessary types/components.
import React from 'react';
import { Listing } from '../../types';
import Button from '../ui/Button';

// Define the props interface for the PropertyCard component.
interface PropertyCardProps {
  listing: Listing;
}

/**
 * A card component to display a summary of a single property listing.
 * @param {PropertyCardProps} props - The component props, containing the listing data.
 */
const PropertyCard: React.FC<PropertyCardProps> = ({ listing }) => {
  
  /**
   * Formats a number into a currency string (UGX).
   * @param {number} price - The price to format.
   * @returns {string} The formatted price string.
   */
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    // Main card container with styling and hover effects.
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
      {/* Image section */}
      <div className="relative">
        <img className="w-full h-56 object-cover" src={listing.imageUrl} alt={listing.title} />
        {/* Land type badge */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-text-dark">
          {listing.landType}
        </div>
      </div>
      {/* Content section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-text-dark truncate">{listing.title}</h3>
        {/* Location */}
        <div className="flex items-center text-slate-gray mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-green" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p>{listing.location}</p>
        </div>
        {/* Price and Area */}
        <div className="mt-4 flex items-baseline justify-between">
            <div>
                 <span className="text-2xl font-bold text-cta-brown">{formatPrice(listing.price)}</span>
                 <span className="text-sm text-slate-gray"> / acre</span>
            </div>
             <p className="text-lg font-semibold text-text-dark">{listing.area} acres</p>
        </div>
         {/* View Details Button - appears on hover */}
         <Button variant="primary" className="w-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
