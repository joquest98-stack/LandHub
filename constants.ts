
import { User, UserRole, Listing, ListingStatus } from './types';

export const LAND_TYPES = [
    'Agricultural',
    'Residential',
    'Commercial',
    'Recreational',
    'Ranch',
];


export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Lake-Side Villa',
    location: 'Entebbe, Uganda',
    price: 75000,
    area: 5.2,
    landType: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1620832326873-95098ca0a89c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: ListingStatus.APPROVED,
    description: 'A beautiful 5.2-acre lot with stunning coastal views. Perfect for building your dream home. Zoned for residential use with utilities nearby.'
  },
  {
    id: '2',
    title: 'Legacy Farms',
    location: 'Masaka, Uganda',
    price: 120000,
    area: 10,
    landType: 'Agricultural',
    imageUrl: 'https://images.unsplash.com/photo-1587012163890-428f413d89e9?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: ListingStatus.APPROVED,
    description: '10 acres of pristine mountain land with breathtaking views of the Rockies. Ideal for a cabin, camping, or just enjoying nature.'
  },
  {
    id: '3',
    title: 'Fertile Farmland Tract',
    location: 'Mukono, Uganda',
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
    imageUrl: 'https://images.unsplash.com/photo-1614969263964-f381e32b337d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    imageUrl: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: ListingStatus.APPROVED,
    description: 'An 8-acre wooded lot. Listing was rejected due to documentation issues, which are being resolved.'
  },
];

