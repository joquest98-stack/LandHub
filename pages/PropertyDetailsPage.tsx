import React, { useState, useEffect } from "react";
import { LISTINGS } from "../constants";
import { Page, Listing, ListingStatus, Review } from "../types";
import Button from "../components/ui/Button";

interface PropertyDetailsPageProps {
  listingId: string | null;
  onNavigate: (page: Page) => void;
  previousPage: Page;
}

const DetailIcons = {
  Appreciation: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-cta-brown"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
  Water: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-500"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
    </svg>
  ),
  Infrastructure: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-600"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M12 2v20"></path>
      <path d="M2 12h20"></path>
    </svg>
  ),
  Tenure: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent-gold"
    >
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  ),
  Calendar: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
};

const getExtendedDetails = (id: string) => {
  return {
    highlights: [
      { iconType: "Appreciation", text: "High Appreciation Potential" },
      { iconType: "Water", text: "Direct Water Access" },
      { iconType: "Infrastructure", text: "Developed Infrastructure" },
      { iconType: "Tenure", text: "Freehold Tenure" },
    ],
    soilQuality: "Loamy Sand (High Fertility)",
    waterAccess: "Lake Victoria / Municipal",
    currentUsage: "Fallow / Vacant",
    zoning: "Residential (R3) & Mixed Use",
    targetYield: "12-15%",
    minInvestment: "UGX 50,000",
    holdingPeriod: "3-5 Years",
    managementFee: "2%",
    platformFee: "1%",
    sponsorInvestment: "10%",
    projectedReturns: {
      y1: "14%",
      y3: "48%",
      y5: "92%",
    },
    documents: [
      {
        id: 1,
        name: "Certificate of Title",
        type: "Legal",
        size: "2.4 MB",
        date: "12 Oct 2023",
        required: true,
      },
      {
        id: 2,
        name: "Survey Map",
        type: "Technical",
        size: "5.1 MB",
        date: "15 Nov 2023",
        required: true,
      },
      {
        id: 3,
        name: "Valuation Report",
        type: "Financial",
        size: "1.2 MB",
        date: "02 Jan 2024",
        required: false,
      },
      {
        id: 4,
        name: "Environmental Impact Assessment",
        type: "Technical",
        size: "8.5 MB",
        date: "10 Feb 2024",
        required: false,
      },
    ],
  };
};

const StarRating = ({
  rating,
  size = "md",
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = { sm: "h-3 w-3", md: "h-5 w-5", lg: "h-6 w-6" };
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`${sizeClasses[size]} ${
          i <= rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};

const PropertyDetailsPage: React.FC<PropertyDetailsPageProps> = ({
  listingId,
  onNavigate,
  previousPage,
}) => {
  const listing = LISTINGS.find((l) => l.id === listingId);
  const [activeTab, setActiveTab] = useState<
    "overview" | "financials" | "documents" | "reviews"
  >("overview");
  const [reviews, setReviews] = useState<Review[]>(listing?.reviews || []);
  const extendedData = getExtendedDetails(listingId || "");

  const sharePrice = 50000;
  const [shareCount, setShareCount] = useState(10);

  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: "",
    name: "",
  });
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-dark dark:text-white">
            Property Not Found
          </h2>
          <Button
            variant="primary"
            className="mt-4"
            onClick={() => onNavigate(previousPage || Page.BUY_PROPERTIES)}
          >
            Back to Listings
          </Button>
        </div>
      </div>
    );
  }

  const formatUGX = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(val);
  const formatUSD = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(val);

  const investmentAmount = shareCount * sharePrice;
  const projectedReturnAmount = investmentAmount * (listing.roi / 100);
  const totalValueUGX = listing.price * listing.area * 3700;
  const fundedAmountUGX = totalValueUGX * (listing.fundingProgress / 100);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.rating === 0 || !newReview.comment || !newReview.name) return;

    setIsSubmittingReview(true);
    setTimeout(() => {
      const review: Review = {
        id: Date.now().toString(),
        userName: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split("T")[0],
        userAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          newReview.name
        )}&background=random`,
      };
      setReviews([review, ...reviews]);
      setNewReview({ rating: 0, comment: "", name: "" });
      setIsSubmittingReview(false);
    }, 800);
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
        ).toFixed(1)
      : "New";

  const getBackNavigationInfo = () => {
    switch (previousPage) {
      case Page.INVEST:
        return {
          label: "Back to Investments",
          breadcrumb: "Invest Opportunities",
        };
      case Page.BUY_PROPERTIES:
        return { label: "Back to Properties", breadcrumb: "Properties" };
      default:
        return { label: "Back", breadcrumb: "Previous" };
    }
  };
  const { label: backLabel, breadcrumb: backBreadcrumb } =
    getBackNavigationInfo();

  const getHighlightIcon = (type: string) => {
    switch (type) {
      case "Appreciation":
        return <DetailIcons.Appreciation />;
      case "Water":
        return <DetailIcons.Water />;
      case "Infrastructure":
        return <DetailIcons.Infrastructure />;
      case "Tenure":
        return <DetailIcons.Tenure />;
      default:
        return <DetailIcons.Appreciation />;
    }
  };

  return (
    <div className="bg-light-bg dark:bg-gray-900 min-h-screen pt-20 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate(previousPage)}
            className="self-start flex items-center group hover:border-cta-brown hover:text-cta-brown dark:border-gray-600 dark:text-gray-300 dark:hover:text-cta-brown transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {backLabel}
          </Button>
          <nav className="text-sm text-slate-gray dark:text-gray-400 hidden sm:block truncate">
            <span
              onClick={() => onNavigate(Page.HOME)}
              className="cursor-pointer hover:text-cta-brown"
            >
              Home
            </span>
            <span className="mx-2">/</span>
            <span className="text-text-dark dark:text-white font-medium">
              {listing.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-[400px] group bg-gray-100 dark:bg-gray-800">
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-text-dark dark:text-white shadow-sm uppercase tracking-wide">
                  {listing.propertyType}
                </span>
                {listing.featured && (
                  <span className="bg-accent-gold/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-white shadow-sm flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                  </span>
                )}
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-black/80">
                View Photos (5)
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden sticky top-16 sm:top-20 z-20 transition-colors duration-300">
              <div className="flex border-b border-gray-100 dark:border-gray-700 overflow-x-auto scrollbar-hide scroll-smooth">
                {(
                  ["overview", "financials", "documents", "reviews"] as const
                ).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-none py-4 px-6 text-sm font-bold capitalize transition-all relative whitespace-nowrap ${
                      activeTab === tab
                        ? "text-cta-brown bg-orange-50/50 dark:bg-orange-900/20"
                        : "text-slate-gray dark:text-gray-400 hover:text-text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cta-brown"></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                {activeTab === "overview" && (
                  <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-dark dark:text-white mb-4">
                        Property Overview
                      </h3>
                      <p className="text-slate-gray dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                        {listing.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-text-dark dark:text-white mb-4">
                        Investment Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {extendedData.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start p-3 bg-light-bg dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700"
                          >
                            <span className="mr-3 mt-0.5">
                              {getHighlightIcon(h.iconType)}
                            </span>
                            <span className="text-text-dark dark:text-white font-medium mt-1">
                              {h.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-text-dark dark:text-white mb-4">
                        Property Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-4 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-slate-gray dark:text-gray-400">
                            Location
                          </span>
                          <span className="font-semibold text-text-dark dark:text-white">
                            {listing.location}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-slate-gray dark:text-gray-400">
                            Total Area
                          </span>
                          <span className="font-semibold text-text-dark dark:text-white">
                            {listing.area} Acres
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-slate-gray dark:text-gray-400">
                            Soil Quality
                          </span>
                          <span className="font-semibold text-text-dark dark:text-white">
                            {extendedData.soilQuality}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-slate-gray dark:text-gray-400">
                            Water Access
                          </span>
                          <span className="font-semibold text-text-dark dark:text-white">
                            {extendedData.waterAccess}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-slate-gray dark:text-gray-400">
                            Zoning
                          </span>
                          <span className="font-semibold text-text-dark dark:text-white">
                            {extendedData.zoning}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-slate-gray dark:text-gray-400">
                            Current Usage
                          </span>
                          <span className="font-semibold text-text-dark dark:text-white">
                            {extendedData.currentUsage}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50/50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                      <h4 className="font-bold text-primary-navy dark:text-blue-200 mb-2 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Regional Context
                      </h4>
                      <p className="text-sm text-slate-gray dark:text-gray-300 leading-relaxed">
                        Located in the heart of {listing.location.split(",")[0]}
                        , this property benefits from the region's strong
                        agricultural supply chain. The area is known for stable
                        rainfall patterns and has seen a 15% increase in land
                        value over the last 2 years due to improved road
                        networks.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "financials" && (
                  <div className="space-y-8 animate-fadeIn">
                    <div>
                      <h3 className="text-xl font-bold text-text-dark dark:text-white mb-4">
                        Projected Returns
                      </h3>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                        <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 text-center">
                          <div className="text-xs sm:text-sm text-slate-gray dark:text-gray-400 mb-1">
                            1 Year
                          </div>
                          <div className="text-lg sm:text-2xl font-bold text-green-700 dark:text-green-400">
                            {extendedData.projectedReturns.y1}
                          </div>
                        </div>
                        <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 text-center">
                          <div className="text-xs sm:text-sm text-slate-gray dark:text-gray-400 mb-1">
                            3 Years
                          </div>
                          <div className="text-lg sm:text-2xl font-bold text-green-700 dark:text-green-400">
                            {extendedData.projectedReturns.y3}
                          </div>
                        </div>
                        <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 text-center">
                          <div className="text-xs sm:text-sm text-slate-gray dark:text-gray-400 mb-1">
                            5 Years
                          </div>
                          <div className="text-lg sm:text-2xl font-bold text-green-700 dark:text-green-400">
                            {extendedData.projectedReturns.y5}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-text-dark dark:text-white mb-4">
                          Fee Structure
                        </h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex justify-between">
                            <span className="text-slate-gray dark:text-gray-400">
                              Management Fee
                            </span>
                            <span className="font-medium dark:text-white">
                              {extendedData.managementFee}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-slate-gray dark:text-gray-400">
                              Platform Fee
                            </span>
                            <span className="font-medium dark:text-white">
                              {extendedData.platformFee}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-slate-gray dark:text-gray-400">
                              Performance Fee
                            </span>
                            <span className="font-medium dark:text-white">
                              10% of profit greater than 8%
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-dark dark:text-white mb-4">
                          Sponsor Alignment
                        </h4>
                        <div className="flex items-center p-4 bg-light-bg dark:bg-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="h-10 w-10 bg-cta-brown/10 dark:bg-cta-brown/20 rounded-full flex items-center justify-center mr-4">
                            <svg
                              className="w-5 h-5 text-cta-brown"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="font-bold text-text-dark dark:text-white">
                              Sponsor Co-Investment
                            </div>
                            <div className="text-sm text-slate-gray dark:text-gray-400">
                              The sponsor has invested{" "}
                              <span className="font-bold text-text-dark dark:text-white">
                                {extendedData.sponsorInvestment}
                              </span>{" "}
                              of the total equity.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800">
                      <h4 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        Risk Disclosure
                      </h4>
                      <p className="text-sm text-red-700 dark:text-red-200 leading-relaxed">
                        Agricultural investments carry risks including weather
                        dependence, crop prices, and land value fluctuations.
                        Past performance is not indicative of future results.
                        Please read the Offering Memorandum carefully before
                        investing.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "documents" && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-text-dark dark:text-white">
                        Project Documentation
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:border-white"
                      >
                        Download All
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {extendedData.documents.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                        >
                          <div className="flex items-start sm:items-center space-x-4 mb-3 sm:mb-0">
                            <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-bold text-text-dark dark:text-white flex items-center gap-2">
                                {doc.name}
                                {doc.required && (
                                  <span className="text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-1.5 rounded uppercase font-bold tracking-wider">
                                    Required
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-slate-gray dark:text-gray-400 mt-0.5">
                                {doc.type} • {doc.size} • Uploaded {doc.date}
                              </div>
                            </div>
                          </div>
                          <button className="flex items-center text-sm font-medium text-cta-brown hover:text-cta-brown-dark transition-colors bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-1.5 rounded-lg shadow-sm group-hover:border-cta-brown/30 w-full sm:w-auto justify-center">
                            <svg
                              className="w-4 h-4 mr-1.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="bg-light-bg dark:bg-gray-700/30 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl sm:text-5xl font-bold text-text-dark dark:text-white">
                          {averageRating}
                        </div>
                        <div>
                          <StarRating
                            rating={Number(averageRating) || 5}
                            size="lg"
                          />
                          <p className="text-slate-gray dark:text-gray-400 text-sm mt-1">
                            {reviews.length} Verified Investor Reviews
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-center w-full md:w-auto justify-center md:justify-end border-t md:border-t-0 border-gray-200 dark:border-gray-600 pt-4 md:pt-0">
                        <div>
                          <div className="font-bold text-text-dark dark:text-white text-xl">
                            100%
                          </div>
                          <div className="text-xs text-slate-gray dark:text-gray-400 uppercase tracking-wide">
                            Verification
                          </div>
                        </div>
                        <div className="w-px bg-gray-300 dark:bg-gray-600"></div>
                        <div>
                          <div className="font-bold text-text-dark dark:text-white text-xl">
                            A+
                          </div>
                          <div className="text-xs text-slate-gray dark:text-gray-400 uppercase tracking-wide">
                            Trust Score
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {reviews.length > 0 ? (
                        reviews.map((review) => (
                          <div
                            key={review.id}
                            className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-6 last:pb-0"
                          >
                            <div className="flex items-start gap-4">
                              <img
                                src={
                                  review.userAvatar ||
                                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    review.userName
                                  )}&background=random`
                                }
                                alt={review.userName}
                                className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-gray-700 shadow-sm flex-shrink-0"
                              />
                              <div className="flex-grow">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                                  <div className="flex items-center gap-2 mb-1 sm:mb-0">
                                    <h4 className="font-bold text-text-dark dark:text-white">
                                      {review.userName}
                                    </h4>
                                    <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full font-bold flex items-center">
                                      <svg
                                        className="w-3 h-3 mr-0.5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                      Verified
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-gray dark:text-gray-500">
                                    {review.date}
                                  </span>
                                </div>
                                <div className="mb-2">
                                  <StarRating
                                    rating={review.rating}
                                    size="sm"
                                  />
                                </div>
                                <p className="text-slate-gray dark:text-gray-300 text-sm leading-relaxed">
                                  {review.comment}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-10">
                          <p className="text-slate-gray dark:text-gray-400">
                            No reviews yet.
                          </p>
                          <p className="text-sm text-cta-brown font-medium mt-1">
                            Be the first to share your experience!
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-lg font-bold text-text-dark dark:text-white mb-4">
                        Leave a Review
                      </h4>
                      <form onSubmit={handleSubmitReview} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-gray dark:text-gray-400 mb-2">
                            Rating
                          </label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() =>
                                  setNewReview({ ...newReview, rating: star })
                                }
                                className="focus:outline-none transition-transform hover:scale-110"
                              >
                                <svg
                                  className={`h-8 w-8 ${
                                    newReview.rating >= star
                                      ? "text-yellow-400"
                                      : "text-gray-300 dark:text-gray-600 hover:text-yellow-200"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={newReview.name}
                            onChange={(e) =>
                              setNewReview({
                                ...newReview,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-text-dark dark:text-white focus:ring-2 focus:ring-cta-brown/20 outline-none"
                          />
                          <input
                            type="text"
                            placeholder="Title of your review (optional)"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-text-dark dark:text-white focus:ring-2 focus:ring-cta-brown/20 outline-none"
                          />
                        </div>
                        <textarea
                          rows={3}
                          placeholder="Share your experience..."
                          required
                          value={newReview.comment}
                          onChange={(e) =>
                            setNewReview({
                              ...newReview,
                              comment: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-text-dark dark:text-white focus:ring-2 focus:ring-cta-brown/20 outline-none resize-none"
                        />
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={
                            isSubmittingReview || newReview.rating === 0
                          }
                        >
                          {isSubmittingReview
                            ? "Submitting..."
                            : "Submit Review"}
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-text-dark dark:text-white mb-4">
                Similar Investments
              </h3>
              <p className="text-slate-gray dark:text-gray-400">
                More opportunities in this region coming soon.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-5 md:p-8 lg:sticky lg:top-24 z-10 transition-colors duration-300">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-cta-brown/10 dark:bg-cta-brown/20 text-cta-brown text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {listing.investmentCategory || "Investment"}
                  </span>
                  {listing.status === ListingStatus.APPROVED && (
                    <div className="group relative">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-50 dark:bg-green-900/30 text-verified-green dark:text-green-400 border border-green-100 dark:border-green-800 cursor-help">
                        <svg
                          className="w-3.5 h-3.5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        VERIFIED
                      </span>
                    </div>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-text-dark dark:text-white leading-tight">
                  {listing.title}
                </h1>
                <div className="flex items-center text-slate-gray dark:text-gray-400 text-sm mt-1">
                  <svg
                    className="h-4 w-4 mr-1 text-slate-gray dark:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {listing.location}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-cta-brown">
                    {formatUSD(listing.price)}
                  </span>
                  <span className="text-slate-gray dark:text-gray-400 font-medium">
                    / acre
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-100 dark:border-gray-700">
                  <div className="text-center border-r border-gray-100 dark:border-gray-700 last:border-0">
                    <div className="text-xs text-slate-gray dark:text-gray-400 uppercase tracking-wide mb-1">
                      Target Yield
                    </div>
                    <div className="font-bold text-green-700 dark:text-green-400 text-sm sm:text-base">
                      {extendedData.targetYield}
                    </div>
                  </div>
                  <div className="text-center border-r border-gray-100 dark:border-gray-700 last:border-0">
                    <div className="text-xs text-slate-gray dark:text-gray-400 uppercase tracking-wide mb-1">
                      Min Invest
                    </div>
                    <div className="font-bold text-text-dark dark:text-white text-sm sm:text-base">
                      {extendedData.minInvestment}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-gray dark:text-gray-400 uppercase tracking-wide mb-1">
                      Hold Period
                    </div>
                    <div className="font-bold text-text-dark dark:text-white text-sm sm:text-base">
                      {extendedData.holdingPeriod}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-8 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-text-dark dark:text-white">
                    Funding Progress
                  </span>
                  <span className="font-bold text-cta-brown">
                    {listing.fundingProgress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-cta-brown h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${listing.fundingProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-slate-gray dark:text-gray-400 mt-1">
                  <span>{formatUGX(fundedAmountUGX)} raised</span>
                  <span>Target: {formatUGX(totalValueUGX)}</span>
                </div>
                <div className="text-xs text-center text-accent-green dark:text-accent-green font-medium pt-2 border-t border-gray-200/50 dark:border-gray-600/50 mt-2 flex items-center justify-center gap-1">
                  <DetailIcons.Calendar /> Dividends Paid Quarterly
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-text-dark dark:text-white mb-3 flex items-center">
                  Investment Calculator
                  <span className="ml-2 text-xs bg-accent-green/10 dark:bg-accent-green/20 text-accent-green px-2 py-0.5 rounded font-normal">
                    Est. Returns
                  </span>
                </h4>
                <div className="bg-light-bg dark:bg-gray-700/30 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-gray dark:text-gray-400">
                      Shares (UGX 50k each)
                    </span>
                    <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 px-2 py-1">
                      <button
                        onClick={() =>
                          setShareCount(Math.max(1, shareCount - 1))
                        }
                        className="w-10 h-10 flex items-center justify-center text-slate-gray dark:text-gray-400 hover:text-cta-brown font-bold active:bg-gray-100 dark:active:bg-gray-700 rounded text-xl"
                      >
                        -
                      </button>
                      <span className="font-bold w-12 text-center text-text-dark dark:text-white text-lg">
                        {shareCount}
                      </span>
                      <button
                        onClick={() => setShareCount(shareCount + 1)}
                        className="w-10 h-10 flex items-center justify-center text-slate-gray dark:text-gray-400 hover:text-cta-brown font-bold active:bg-gray-100 dark:active:bg-gray-700 rounded text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4 justify-between">
                    {[5, 10, 20, 50].map((count) => (
                      <button
                        key={count}
                        onClick={() => setShareCount(count)}
                        className={`text-xs flex-1 py-2 rounded border ${
                          shareCount === count
                            ? "bg-cta-brown text-white border-cta-brown"
                            : "bg-white dark:bg-gray-800 text-slate-gray dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:border-cta-brown"
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2 pt-3 border-t border-gray-200/50 dark:border-gray-600/50">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-gray dark:text-gray-400">
                        Total Investment:
                      </span>
                      <span className="font-bold text-text-dark dark:text-white">
                        {formatUGX(investmentAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-gray dark:text-gray-400">
                        Proj. 1Y Return:
                      </span>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        +{formatUGX(projectedReturnAmount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-lg shadow-cta-brown/20 mb-3 group h-12"
              >
                Invest Now
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button
                variant="secondary"
                className="w-full text-sm dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 h-12"
              >
                Contact Agent
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all text-text-dark dark:text-gray-400">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-6 h-6 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="text-[10px] font-bold">SSL Secure</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-6 h-6 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-[10px] font-bold">Regulated</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-6 h-6 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-[10px] font-bold">
                    {listing.investors || 0} Investors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
