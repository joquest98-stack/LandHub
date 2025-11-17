import React from 'react';
import { Listing } from '../../types';
import Button from '../ui/Button';

interface InvestmentCardProps {
  opportunity: Listing;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ opportunity: listing }) => {

    const formatCurrency = (amount: number) => {
        if (amount >= 1_000_000) {
            return `UGX ${(amount / 1_000_000).toFixed(0)}M`;
        }
        return `UGX ${new Intl.NumberFormat('en-US').format(amount)}`;
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-gray-100 group">
            <div className="relative">
                <div className="overflow-hidden rounded-t-2xl">
                    <img 
                        className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" 
                        src={listing.imageUrl} 
                        alt={listing.title} 
                    />
                </div>
                <div className="absolute top-4 right-4 bg-accent-green bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-white">
                    {listing.roi}% ROI
                </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-slate-gray text-sm">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{listing.location}</span>
                </div>

                <h3 className="text-2xl font-bold text-text-dark mt-2">{formatCurrency(listing.price)}</h3>
                <p className="text-sm text-slate-gray">{listing.area} acres</p>
                
                <div className="mt-4">
                    <div className="flex justify-between items-center text-sm mb-1">
                        <span className="font-medium text-slate-gray">Funded</span>
                        <span className="font-bold text-text-dark">{listing.fundingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-accent-green h-2 rounded-full" 
                            style={{ width: `${listing.fundingProgress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center text-slate-gray text-sm mt-3">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015.5-4.96A5 5 0 0117 11v5H1v-5a5 5 0 015-5z" />
                    </svg>
                    <span>{listing.investors} investors</span>
                </div>

                <div className="mt-auto pt-5">
                    <Button variant="primary" className="w-full rounded-lg">
                        Invest Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentCard;