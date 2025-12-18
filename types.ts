export enum UserRole {
  ADMIN = 'admin',
  PROPERTY_OWNER = 'property_owner',
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

export interface AuthContextType {
  currentUser: User | null;
}

export enum ListingStatus {
  APPROVED = 'Approved',
  PENDING = 'Pending',
  REJECTED = 'Rejected',
  DRAFT = 'Draft',
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Listing {
  fundingProgress: any;
  roi: any;
  id: string;
  title: string;
  location: string;
  price: number;
  area: number;
  propertyType: string;
  imageUrl: string;
  status: ListingStatus;
  description?: string;
  investors?: number;
  featured?: boolean;
  reviews?: Review[];
  investmentCategory?: 'Short Term' | 'Long Term';
}

export enum Page {
    HOME = 'HOME',
    HOW_IT_WORKS = 'HOW_IT_WORKS',
    BUY_PROPERTIES = 'BUY_PROPERTIES',
    INVEST = "INVEST",
    ABOUT = "ABOUT",
    CONTACT = "CONTACT",
    PROPERTY_DETAILS = "PROPERTY_DETAILS",
    GET_STARTED = "GET_STARTED",
}

export enum DocumentStatus {
    VERIFIED = 'Verified',
    PENDING = 'Pending',
    REJECTED = 'Rejected',
}

export interface Document {
  id: string;
  name: string;
  size: number;
  status: DocumentStatus;
  uploadDate: string;
}