import React from "react";
import { Listing } from "../../types";
import Button from "../ui/Button";

interface InvestmentCardProps {
  opportunity: Listing;
  onShowDetails?: (id: string) => void;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  opportunity: listing,
  onShowDetails,
}) => {
  const formatNumber = (num: number) =>
    new Intl.NumberFormat("en-US").format(num);

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={listing.imageUrl}
          alt={listing.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>

        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-text-dark shadow-sm uppercase tracking-wide z-10">
          {listing.propertyType}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-text-dark mb-2 truncate leading-tight group-hover:text-cta-brown transition-colors duration-300">
          {listing.title}
        </h3>

        <div className="flex items-center text-slate-gray text-sm mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-accent-green flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="truncate">{listing.location}</span>
        </div>

        <div className="mt-auto relative lg:h-12 lg:overflow-hidden">
          <div className="flex items-end justify-between mb-3 lg:mb-0 lg:absolute lg:inset-0 lg:transition-all lg:duration-500 lg:ease-in-out lg:transform lg:group-hover:-translate-y-full lg:group-hover:opacity-0">
            <div>
              <span className="text-xl font-bold text-cta-brown block leading-none">
                USD {formatNumber(listing.price)}
              </span>
              <span className="text-xs text-slate-gray font-medium mt-1 block">
                / acre
              </span>
            </div>
            <span className="text-sm font-medium text-text-dark mb-1">
              {listing.area} acres
            </span>
          </div>

          <div className="block lg:absolute lg:inset-0 lg:flex lg:items-end lg:justify-center lg:transition-all lg:duration-500 lg:ease-in-out lg:transform lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            <Button
              variant="primary"
              className="w-full shadow-md rounded-lg text-sm bg-cta-brown hover:bg-cta-brown-dark text-white font-semibold py-2.5"
              onClick={() => onShowDetails && onShowDetails(listing.id)}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
