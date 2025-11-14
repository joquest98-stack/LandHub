// User roles
export enum UserRole {
  ADMIN = 'admin',
  LANDOWNER = 'landowner',
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
  APPROVED = 'Approved',
  PENDING = 'Pending',
  REJECTED = 'Rejected',
  DRAFT = 'Draft',
}

// Property listing
export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  area: number; // in acres
  landType: string;
  imageUrl: string;
  status: ListingStatus;
  description?: string; // Optional description
}

// Page identifiers
export enum Page {
    HOME = 'HOME',
    HOW_IT_WORKS = 'HOW_IT_WORKS',
    BUY_LAND = 'BUY_LAND',
}

// Document status
export enum DocumentStatus {
    VERIFIED = 'Verified',
    PENDING = 'Pending',
    REJECTED = 'Rejected',
}

// Uploaded document
export interface Document {
  id: string;
  name: string;
  size: number; // in bytes
  status: DocumentStatus;
  uploadDate: string;
}
