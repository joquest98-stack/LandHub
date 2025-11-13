

export enum UserRole {
  ADMIN = 'admin',
  LANDOWNER = 'landowner',
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


export enum Page {
    BUY_LAND = 'BUY_LAND',
}


export enum DocumentStatus {
    VERIFIED = 'Verified',
    PENDING = 'Pending',
    REJECTED = 'Rejected',
}


export interface Document {
  id: string;
  name: string;
  size: number; // in bytes
  status: DocumentStatus;
  uploadDate: string;
}
