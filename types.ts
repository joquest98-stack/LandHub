// User roles
export enum UserRole {
  ADMIN = "admin",
  PROPERTY_OWNER = "property_owner",
}

// User profile
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

// Auth context shape
export interface AuthContextType {
  currentUser: User | null;
}

// Property listing status
export enum ListingStatus {
  APPROVED = "Approved",
  PENDING = "Pending",
  REJECTED = "Rejected",
  DRAFT = "Draft",
}

// Review interface
export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

// Property listing
export interface Listing {
  fundingProgress: any;
  roi: any;
  id: string;
  title: string;
  location: string;
  price: number;
  area: number; // in acres
  propertyType: string;
  imageUrl: string;
  status: ListingStatus;
  description?: string; // Optional description
  investors?: number;
  featured?: boolean;
  reviews?: Review[];
  investmentCategory?: "Short Term" | "Long Term";
}

// Page identifiers
export enum Page {
  HOME = "HOME",
  HOW_IT_WORKS = "HOW_IT_WORKS",
  BUY_PROPERTIES = "BUY_PROPERTIES",
  INVEST = "INVEST",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
  PROPERTY_DETAILS = "PROPERTY_DETAILS",
}

// Document status
export enum DocumentStatus {
  VERIFIED = "Verified",
  PENDING = "Pending",
  REJECTED = "Rejected",
}

// Uploaded document
export interface Document {
  id: string;
  name: string;
  size: number; // in bytes
  status: DocumentStatus;
  uploadDate: string;
}
