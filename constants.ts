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
      "https://images.unsplash.com/photo-1620832326873-95098ca0a89c?q=80&w=870&auto=format&fit=crop",
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
        userAvatar: "https://i.pravatar.cc/150?img=33",
        rating: 5,
        comment:
          "Absolutely stunning location. The documentation process was smooth and the team was very helpful.",
        date: "2023-10-15",
      },
      {
        id: "r2",
        userName: "Sarah Smith",
        userAvatar: "https://i.pravatar.cc/150?img=47",
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
      "https://images.unsplash.com/photo-1587012163890-428f413d89e9?q=80&w=435&auto=format&fit=crop",
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
      "A large 3-acre tract of fertile land in Jinja, perfect for farming.",
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
      "https://images.unsplash.com/photo-1614969263964-f381e32b337d?q=80&w=1031&auto=format&fit=crop",
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
        userAvatar: "https://i.pravatar.cc/150?img=12",
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
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=870&auto=format&fit=crop",
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
    question: "What is fractional property ownership?",
    answer:
      "Fractional ownership allows multiple investors to co-own a piece of property. Asset Cycle Africa makes this possible by letting you invest an amount you are comfortable with, giving you a share of the property equivalent to your investment.",
  },
  {
    question: "How does Asset Cycle Africa verify the properties?",
    answer:
      "Every property listed undergoes a rigorous due diligence process. We partner with legal experts and surveyors to verify titles, check for any encumbrances, and confirm boundaries.",
  },
  {
    question: "What kind of returns can I expect?",
    answer:
      "Returns are primarily based on land appreciation. While we cannot guarantee specific returns, Ugandan land has historically shown strong growth. You can track estimated value in your dashboard.",
  },
  {
    question: "Can I sell my shares in a property?",
    answer:
      "Yes. We are building a secondary marketplace that will allow you to list your shares for sale to other investors on the platform.",
  },
  {
    question: "What fees are involved in the process?",
    answer:
      "We charge a one-time administrative fee on your initial investment to cover legal verification and processing. There are no hidden recurring fees.",
  },
];
