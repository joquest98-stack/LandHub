import React, { useState, useMemo, useEffect } from 'react';
import { LISTINGS, PROPERTY_TYPES } from '../constants';
import { ListingStatus } from '../types';
import PropertyCard from '../components/home/PropertyCard';
import FilterSidebar from '../components/Filter/FilterSidebar';
import Button from '../components/ui/Button';

interface BuyLandPageProps {
    onShowDetails?: (id: string) => void;
}

const BuyPropertiesPage: React.FC<BuyLandPageProps> = ({ onShowDetails }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
    const [areaRange, setAreaRange] = useState({ min: 0, max: 100 });
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 1024;
        }
        return false;
    });

    const maxPrice = useMemo(() => Math.max(...LISTINGS.map(l => l.price)) * 1.1, []);
    const maxArea = useMemo(() => Math.max(...LISTINGS.map(l => l.area)) * 1.1, []);

    const filteredListings = useMemo(() => {
        return LISTINGS.filter(listing => {
            if (listing.status !== ListingStatus.APPROVED) return false;

            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = listing.title.toLowerCase().includes(searchLower) || 
                                  listing.location.toLowerCase().includes(searchLower);
            
            const matchesPrice = listing.price <= priceRange.max;

            const matchesArea = listing.area <= areaRange.max;

            const matchesType = selectedPropertyTypes.length === 0 || selectedPropertyTypes.includes(listing.propertyType);

            return matchesSearch && matchesPrice && matchesArea && matchesType;
        });
    }, [searchTerm, priceRange, areaRange, selectedPropertyTypes]);

    const handleResetFilters = () => {
        setSearchTerm('');
        setPriceRange({ min: 0, max: maxPrice });
        setAreaRange({ min: 0, max: maxArea });
        setSelectedPropertyTypes([]);
    };

    return (
        <div className="bg-light-bg dark:bg-gray-900 min-h-screen pt-20 pb-12 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center sm:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white">Find Your Perfect Plot</h1>
                    <p className="mt-2 text-slate-gray dark:text-gray-400">Search through our exclusive listings of verified Properties available for purchase.</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sticky top-16 z-30 bg-light-bg/95 dark:bg-gray-900/95 backdrop-blur-sm py-4 border-b border-gray-200 dark:border-gray-700">
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm text-text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm w-full sm:w-auto justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
                    </button>

                    <div className="text-sm text-slate-gray dark:text-gray-400 font-medium w-full sm:w-auto text-center">
                        Showing <span className="text-text-dark dark:text-white font-bold">{filteredListings.length}</span> {filteredListings.length === 1 ? 'property' : 'properties'}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 relative items-start">
                    <div 
                        className={`
                            lg:sticky lg:top-32 transition-all duration-300 ease-in-out w-full
                            ${isSidebarOpen ? 'lg:w-1/4 opacity-100 translate-x-0' : 'lg:w-0 lg:opacity-0 lg:-translate-x-4 lg:pointer-events-none hidden lg:block'}
                        `}
                    >
                        {isSidebarOpen && (
                            <div className="animate-fadeIn">
                                <FilterSidebar 
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    priceRange={priceRange}
                                    setPriceRange={setPriceRange}
                                    maxPrice={maxPrice}
                                    areaRange={areaRange}
                                    setAreaRange={setAreaRange}
                                    maxArea={maxArea}
                                    propertyTypes={PROPERTY_TYPES}
                                    selectedPropertyTypes={selectedPropertyTypes}
                                    setSelectedPropertyTypes={setSelectedPropertyTypes}
                                    onResetFilters={handleResetFilters}
                                />
                            </div>
                        )}
                    </div>

                    <div className={`transition-all duration-300 ease-in-out w-full ${isSidebarOpen ? 'lg:w-3/4' : 'lg:w-full'}`}>
                        {filteredListings.length > 0 ? (
                            <div className={`grid grid-cols-1 md:grid-cols-2 ${isSidebarOpen ? 'xl:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4'} gap-6`}>
                                {filteredListings.map(listing => (
                                    <PropertyCard key={listing.id} listing={listing} onShowDetails={onShowDetails} />
                                ))}
                            </div>
                        ) : (
                             <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-300">
                                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-subtle-gray dark:bg-gray-700 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-gray dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-text-dark dark:text-white">No properties found</h3>
                                <p className="text-slate-gray dark:text-gray-400 mt-1 max-w-xs mx-auto">We couldn't find any properties matching your current filters.</p>
                                <button onClick={handleResetFilters} className="mt-6 px-4 py-2 bg-cta-brown text-white rounded-lg hover:bg-cta-brown-dark transition-colors font-medium text-sm">Clear all filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyPropertiesPage;