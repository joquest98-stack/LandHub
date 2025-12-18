import React, { useState } from "react";

interface FilterSidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  maxPrice: number;
  areaRange: { min: number; max: number };
  setAreaRange: (range: { min: number; max: number }) => void;
  maxArea: number;
  propertyTypes: string[];
  selectedPropertyTypes: string[];
  setSelectedPropertyTypes: (types: string[]) => void;
  onResetFilters: () => void;
}

const FilterSection: React.FC<{
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-text-dark hover:text-cta-brown transition-colors mb-2"
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-2 pb-1">{children}</div>
      </div>
    </div>
  );
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  searchTerm,
  setSearchTerm,
  priceRange,
  setPriceRange,
  maxPrice,
  areaRange,
  setAreaRange,
  maxArea,
  propertyTypes,
  selectedPropertyTypes,
  setSelectedPropertyTypes,
  onResetFilters,
}) => {
  const handlePropertyTypeChange = (type: string) => {
    const currentIndex = selectedPropertyTypes.indexOf(type);
    const newSelectedTypes = [...selectedPropertyTypes];

    if (currentIndex === -1) {
      newSelectedTypes.push(type);
    } else {
      newSelectedTypes.splice(currentIndex, 1);
    }
    setSelectedPropertyTypes(newSelectedTypes);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
        <h3 className="font-bold text-text-dark">Filters</h3>
        <button
          onClick={onResetFilters}
          className="text-xs font-medium text-cta-brown hover:text-cta-brown-dark transition-colors"
        >
          Reset All
        </button>
      </div>

      <div className="p-4">
        {/* Search */}
        <div className="mb-4">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search properties..."
              className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-cta-brown/20 focus:border-cta-brown outline-none transition-shadow"
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Price Range */}
        <FilterSection title="Price Range">
          <input
            type="range"
            id="price"
            min={0}
            max={maxPrice}
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: Number(e.target.value) })
            }
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cta-brown"
          />
          <div className="flex justify-between text-xs text-slate-gray mt-2 font-medium">
            <span>{formatPrice(0)}</span>
            <span>{formatPrice(priceRange.max)}</span>
          </div>
        </FilterSection>

        {/* Area Range */}
        <FilterSection title="Size (Acres)">
          <input
            type="range"
            id="area"
            min={0}
            max={maxArea}
            value={areaRange.max}
            onChange={(e) =>
              setAreaRange({ ...areaRange, max: Number(e.target.value) })
            }
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cta-brown"
          />
          <div className="flex justify-between text-xs text-slate-gray mt-2 font-medium">
            <span>0 ac</span>
            <span>{areaRange.max.toFixed(1)} ac</span>
          </div>
        </FilterSection>

        {/* Property Type */}
        <FilterSection title="Property Type">
          <div className="space-y-2.5">
            {propertyTypes.map((type) => (
              <label
                key={type}
                className="flex items-center cursor-pointer group"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedPropertyTypes.includes(type)}
                    onChange={() => handlePropertyTypeChange(type)}
                    className="peer h-4 w-4 text-cta-brown border-gray-300 rounded focus:ring-cta-brown transition duration-150 ease-in-out cursor-pointer"
                  />
                </div>
                <span className="ml-2 text-sm text-slate-gray group-hover:text-text-dark transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>
      </div>
    </div>
  );
};

export default FilterSidebar;
