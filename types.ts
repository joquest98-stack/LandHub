// This file contains TypeScript type definitions used across the application.

/**
 * Defines the possible roles for a user.
 */
export enum UserRole {
  ADMIN = 'admin',
  LANDOWNER = 'landowner',
}

/**
 * Represents a user of the platform.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

/**
 * Defines the shape of the authentication context.
 */
export interface AuthContextType {
  currentUser: User | null;
}

/**
 * Defines the possible statuses for a property listing.
 */
export enum ListingStatus {
  APPROVED = 'Approved',
  PENDING = 'Pending',
  REJECTED = 'Rejected',
  DRAFT = 'Draft',
}

/**
 * Represents a property listing.
 */
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

/**

 * Enum for page identifiers, can be used for navigation or conditional rendering.
 */
export enum Page {
    BUY_LAND = 'BUY_LAND',
}

/**
 * Defines the possible statuses for a document.
 */
export enum DocumentStatus {
    VERIFIED = 'Verified',
    PENDING = 'Pending',
    REJECTED = 'Rejected',
}

/**
 * Represents a document uploaded to the platform.
 */
export interface Document {
  id: string;
  name: string;
  size: number; // in bytes
  status: DocumentStatus;
  uploadDate: string;
}
