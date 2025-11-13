import { createContext } from 'react';
import { AuthContextType } from '../types';

// Authentication context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);