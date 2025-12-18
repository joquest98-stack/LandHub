import { User, UserRole, Listing, ListingStatus } from "./types";

export const PROPERTY_TYPES = [
  "Agricultural",
  "Residential",
  "Commercial",
  "Recreational",
  "Ranch",
];

export const LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Lake-Side Villa",
    location: "Entebbe, Uganda",
    price: 75000,
    area: 2,
    propertyType: "Residential",
    imageUrl:
      "https://images.unsplash.com/photo-1620832326873-95098ca0a89c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: ListingStatus.APPROVED,
    description:
      "A beautiful 5.2-acre lot with stunning coastal views. Perfect for building your dream home. Zoned for residential use with utilities nearby.",
    roi: 12,
    fundingProgress: 68,
    investors: 12,
    featured: true,
    investmentCategory: "Short Term",
    reviews: [
      {
        id: "r1",
        userName: "John Doe",
        userAvatar: "https://i.pravatar.cc/150?img=11",
        rating: 5,
        comment:
          "Absolutely stunning location. The documentation process was smooth and the team was very helpful.",
        date: "2023-10-15",
      },
      {
        id: "r2",
        userName: "Sarah Smith",
        userAvatar: "https://i.pravatar.cc/150?img=5",
        rating: 4,
        comment:
          "Great investment opportunity. Returns have been steady so far.",
        date: "2023-11-02",
      },
    ],
  },
  {
    id: "2",
    title: "Legacy Farms",
    location: "Masaka, Uganda",
    price: 120000,
    area: 10,
    propertyType: "Agricultural",
    imageUrl:
      "https://images.unsplash.com/photo-1587012163890-428f413d89e9?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: ListingStatus.APPROVED,
    description: "1.5 acres of pristine farmland in Mukono.",
    roi: 10,
    fundingProgress: 45,
    investors: 8,
    featured: true,
    investmentCategory: "Short Term",
    reviews: [
      {
        id: "r3",
        userName: "Michael Brown",
        rating: 5,
        comment: "Soil quality is excellent. Verification was thorough.",
        date: "2023-09-20",
      },
    ],
  },
  {
    id: "3",
    title: "Fertile Farmland Tract",
    location: "Mukono, Uganda",
    price: 45000,
    area: 25,
    propertyType: "Agricultural",
    imageUrl:
      "https://images.unsplash.com/photo-1464979681340-3293e10a6a84?q=80&w=1920&auto=format&fit=crop",
    status: ListingStatus.PENDING,
    description:
      "A large 3-acre tract of fertile Properties in Jinja, perfect for farming.",
    roi: 15,
    fundingProgress: 23,
    investors: 3,
    featured: false,
    investmentCategory: "Short Term",
    reviews: [],
  },
  {
    id: "4",
    title: "Urban Commercial Development",
    location: "Kampala, Uganda",
    price: 250000,
    area: 1.5,
    propertyType: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1614969263964-f381e32b337d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: ListingStatus.APPROVED,
    description:
      "A prime 1.5-acre commercial project in a rapidly developing urban area. Development of a shopping complex planned.",
    roi: 18,
    fundingProgress: 92,
    investors: 28,
    featured: true,
    investmentCategory: "Long Term",
    reviews: [
      {
        id: "r4",
        userName: "David Wilson",
        userAvatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        comment:
          "Prime location indeed. Looking forward to the development phase.",
        date: "2023-12-10",
      },
    ],
  },
  {
    id: "5",
    title: "Secluded Forest Retreat",
    location: "Jinja, Uganda",
    price: 60000,
    area: 8,
    propertyType: "Recreational",
    imageUrl:
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: ListingStatus.APPROVED,
    description:
      "An 8-acre wooded lot. Listing was rejected due to documentation issues, which are being resolved.",
    roi: 9,
    fundingProgress: 81,
    investors: 10,
    featured: false,
    investmentCategory: "Short Term",
    reviews: [],
  },
];

export const FAQS = [
  {
    question: "What is fractional Properties ownership?",
    answer:
      "Fractional ownership allows multiple investors to co-own a piece of Properties. Asset Cycle Africa makes this possible by letting you invest an amount you are comfortable with, giving you a share of the property equivalent to your investment. This lowers the barrier to entry for Properties ownership.",
  },
  {
    question: "How does Asset Cycle Africa verify the properties?",
    answer:
      "Every property listed on Asset Cycle Africa undergoes a rigorous due diligence process. We partner with legal experts and surveyors to verify Properties titles, check for any encumbrances, confirm boundaries, and ensure all documentation is authentic and up-to-date.",
  },
  {
    question: "What kind of returns can I expect?",
    answer:
      "Returns are primarily based on the appreciation of the Properties' value. While we cannot guarantee specific returns, Ugandan Properties has historically shown strong appreciation. You can track the estimated value of your portfolio directly from your dashboard.",
  },
  {
    question: "Can I sell my shares in a property?",
    answer:
      "Yes. We are building a secondary marketplace that will allow you to list your shares for sale to other investors on the Asset Cycle Africa platform, providing you with liquidity for your investment.",
  },
  {
    question: "What fees are involved in the process?",
    answer:
      "Asset Cycle Africa is transparent about all costs. We charge a one-time administrative fee on your initial investment to cover legal verification and processing. There are no hidden recurring fees. All costs are clearly outlined before you confirm any investment.",
  },
];
