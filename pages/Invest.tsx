import React, { useState, useMemo } from 'react';
import { LISTINGS } from '../constants';
import { ListingStatus } from '../types';
import PropertyCard from '../components/home/PropertyCard';

type FilterType = 'all' | 'high-roi' | 'low-entry' | 'almost-funded';

const FilterButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; icon?: React.ReactNode }> = ({ label, isActive, onClick, icon }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 flex items-center space-x-2 border ${
            isActive 
            ? 'bg-text-dark text-white border-text-dark shadow-sm' 
            : 'bg-white text-slate-gray hover:bg-gray-50 hover:text-text-dark border-gray-200'
        }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

const InvestPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const investmentOpportunities = useMemo(() => {
        const opportunities = LISTINGS.filter(l => l.status === ListingStatus.APPROVED);

        switch (activeFilter) {
            case 'high-roi':
                return [...opportunities].sort((a, b) => b.roi - a.roi);
            case 'low-entry':
                return [...opportunities].sort((a, b) => a.price - b.price);
            case 'almost-funded':
                return [...opportunities].sort((a, b) => b.fundingProgress - a.fundingProgress);
            case 'all':
            default:
                return opportunities;
        }
    }, [activeFilter]);
    
    const filters: { id: FilterType; label: string }[] = [
        { id: 'all', label: 'All Projects' },
        { id: 'high-roi', label: 'High ROI' },
        { id: 'low-entry', label: 'Low Entry' },
        { id: 'almost-funded', label: 'Almost Funded' }
    ];

    return (
        <div className="bg-light-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
                {/* Header */}
                <div className="text-center mb-12">
                     <h1 className="text-5xl md:text-6xl font-bold text-text-dark tracking-tight">Investment Opportunities</h1>
                     <p className="mt-4 text-lg max-w-3xl mx-auto text-slate-gray">
                        Browse verified land projects across Uganda and start building your wealth
                    </p>
                </div>
                
                {/* Filters */}
                <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
                    {filters.map((filter, index) => (
                        <FilterButton
                            key={filter.id}
                            label={filter.label}
                            isActive={activeFilter === filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            icon={index === 0 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" /></svg> : undefined}
                        />
                    ))}
                </div>

                {/* Investment Cards */}
                <main>
                    {investmentOpportunities.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {investmentOpportunities.map(listing => (
                                <PropertyCard key={listing.id} listing={listing} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-text-dark">No Opportunities Found</h3>
                            <p className="text-slate-gray mt-2">Try adjusting your filters to find what you're looking for.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default InvestPage;