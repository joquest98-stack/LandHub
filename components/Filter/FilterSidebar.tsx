import React from 'react';

interface FilterSidebarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    priceRange: { min: number, max: number };
    setPriceRange: (range: { min: number, max: number }) => void;
    maxPrice: number;
    areaRange: { min: number, max: number };
    setAreaRange: (range: { min: number, max: number }) => void;
    maxArea: number;
    landTypes: string[];
    selectedLandTypes: string[];
    setSelectedLandTypes: (types: string[]) => void;
    onResetFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
    searchTerm,
    setSearchTerm,
    priceRange,
    setPriceRange,
    maxPrice,
    areaRange,
    setAreaRange,
    maxArea,
    landTypes,
    selectedLandTypes,
    setSelectedLandTypes,
    onResetFilters
}) => {
    
    const handleLandTypeChange = (type: string) => {
        const currentIndex = selectedLandTypes.indexOf(type);
        const newSelectedTypes = [...selectedLandTypes];

        if (currentIndex === -1) {
            newSelectedTypes.push(type);
        } else {
            newSelectedTypes.splice(currentIndex, 1);
        }
        setSelectedLandTypes(newSelectedTypes);
    };
    
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'UGX', minimumFractionDigits: 0 }).format(price);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
            <h3 className="text-xl font-bold text-text-dark mb-4">Filter Properties</h3>
            
            <div className="space-y-6">
                {/* Search */}
                <div>
                    <label htmlFor="search" className="block text-sm font-medium text-slate-gray mb-1">Search by Name/Location</label>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="e.g., Legacy Farms"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-cta-brown focus:border-cta-brown"
                    />
                </div>

                {/* Price Range */}
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-slate-gray mb-1">Price Range</label>
                    <input
                        type="range"
                        id="price"
                        min={0}
                        max={maxPrice}
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cta-brown"
                        aria-label="Price range slider"
                    />
                    <div className="flex justify-between text-sm text-text-dark mt-1">
                        <span>{formatPrice(0)}</span>
                        <span>{formatPrice(priceRange.max)}</span>
                    </div>
                </div>

                {/* Area Range */}
                <div>
                    <label htmlFor="area" className="block text-sm font-medium text-slate-gray mb-1">Area (Acres)</label>
                    <input
                        type="range"
                        id="area"
                        min={0}
                        max={maxArea}
                        value={areaRange.max}
                        onChange={(e) => setAreaRange({ ...areaRange, max: Number(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cta-brown"
                        aria-label="Area range slider"
                    />
                    <div className="flex justify-between text-sm text-text-dark mt-1">
                        <span>0 acres</span>
                        <span>{areaRange.max.toFixed(1)} acres</span>
                    </div>
                </div>

                {/* Land Type */}
                <div>
                    <h4 className="text-sm font-medium text-slate-gray mb-2">Land Type</h4>
                    <div className="space-y-2">
                        {landTypes.map(type => (
                            <div key={type} className="flex items-center">
                                <input
                                    id={`type-${type}`}
                                    type="checkbox"
                                    checked={selectedLandTypes.includes(type)}
                                    onChange={() => handleLandTypeChange(type)}
                                    className="h-4 w-4 text-cta-brown border-gray-300 rounded focus:ring-cta-brown"
                                />
                                <label htmlFor={`type-${type}`} className="ml-2 text-sm text-text-dark">{type}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reset Button */}
                <button
                    onClick={onResetFilters}
                    className="w-full text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-brown"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default FilterSidebar;