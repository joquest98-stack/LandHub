// This file contains constant data used throughout the application for mock-ups and predefined options.

import { User, UserRole, Listing, ListingStatus } from './types';

/**
 * A list of available land types for property listings.
 */
export const LAND_TYPES = [
    'Agricultural',
    'Residential',
    'Commercial',
    'Recreational',
    'Ranch',
];

/**
 * A mock list of users for demonstration purposes.
 */
export const USERS: User[] = [
    { id: '1', name: 'Admin User', email: 'admin@landhub.com', role: UserRole.ADMIN, avatar: 'https://i.pravatar.cc/150?u=admin' },
    { id: '2', name: 'John Landowner', email: 'john@landhub.com', role: UserRole.LANDOWNER, avatar: 'https://i.pravatar.cc/150?u=landowner1' },
    { id: '3', name: 'Jane Investor', email: 'jane@landhub.com', role: UserRole.LANDOWNER, avatar: 'https://i.pravatar.cc/150?u=landowner2' },
];

/**
 * A mock list of property listings for demonstration purposes.
 */
export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Lake Side Villa',
    location: 'Entebbe, Uganda',
    price: 75000,
    area: 5.2,
    landType: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1920&auto=format&fit=crop',
    status: ListingStatus.APPROVED,
    description: 'A beautiful 5.2-acre lot with stunning coastal views. Perfect for building your dream home. Zoned for residential use with utilities nearby.'
  },
  {
    id: '2',
    title: 'Rocky Mountain Vista',
    location: 'Boulder, Colorado',
    price: 120000,
    area: 10,
    landType: 'Recreational',
    imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1920&auto=format&fit=crop',
    status: ListingStatus.APPROVED,
    description: '10 acres of pristine mountain land with breathtaking views of the Rockies. Ideal for a cabin, camping, or just enjoying nature.'
  },
  {
    id: '3',
    title: 'Fertile Farmland Tract',
    location: 'Kampala, Uganda',
    price: 45000,
    area: 25,
    landType: 'Agricultural',
    imageUrl: 'https://images.unsplash.com/photo-1464979681340-3293e10a6a84?q=80&w=1920&auto=format&fit=crop',
    status: ListingStatus.PENDING,
    description: 'A large 25-acre tract of fertile land, perfect for farming. Currently pending final approval for sale.'
  },
  {
    id: '4',
    title: 'Urban Commercial Plot',
    location: 'Kampala, Uganda',
    price: 250000,
    area: 1.5,
    landType: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1920&auto=format&fit=crop',
    status: ListingStatus.APPROVED,
    description: 'A prime 1.5-acre commercial plot in a rapidly developing urban area. Excellent investment opportunity.'
  },
  {
    id: '5',
    title: 'Secluded Forest Retreat',
    location: 'Jinja, Uganda',
    price: 60000,
    area: 8,
    landType: 'Recreational',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1920&auto=format&fit=crop',
    status: ListingStatus.REJECTED,
    description: 'An 8-acre wooded lot. Listing was rejected due to documentation issues, which are being resolved.'
  },
];

/**
 * A mock list of recent activities for a dashboard or activity feed.
 */
export const RECENT_ACTIVITY = [
  { id: 1, user: 'John Landowner', action: 'submitted a new listing', target: 'Fertile Farmland Tract', timestamp: '2 hours ago' },
  { id: 2, user: 'Admin', action: 'approved the listing', target: 'Coastal Paradise Lot', timestamp: '5 hours ago' },
  { id: 3, user: 'Jane Investor', action: 'made an offer on', target: 'Rocky Mountain Vista', timestamp: '1 day ago' },
  { id: 4, user: 'Admin', action: 'rejected the listing', target: 'Secluded Forest Retreat', timestamp: '2 days ago' },
  { id: 5, user: 'John Landowner', action: 'updated his profile', target: '', timestamp: '3 days ago' },
];
