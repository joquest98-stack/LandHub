import React from 'react';
import { Listing } from '../../types';
import Button from '../ui/Button';

interface PropertyCardProps {
  listing: Listing;
}

// Card component for a single property listing.
const PropertyCard: React.FC<PropertyCardProps> = ({ listing }) => {
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
      <div className="relative">
        <img className="w-full h-48 sm:h-56 object-cover" src={listing.imageUrl} alt={listing.title} />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-text-dark">
          {listing.landType}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-bold text-text-dark truncate">{listing.title}</h3>
        <div className="flex items-center text-slate-gray mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-green" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p>{listing.location}</p>
        </div>
        <div className="mt-4 flex items-baseline justify-between">
            <div>
                 <span className="text-2xl font-bold text-cta-brown">{formatPrice(listing.price)}</span>
                 <span className="text-sm text-slate-gray"> / acre</span>
            </div>
             <p className="text-lg font-semibold text-text-dark">{listing.area} acres</p>
        </div>
         <Button variant="primary" className="w-full mt-6 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;