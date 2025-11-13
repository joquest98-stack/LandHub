// Import createContext from React to create a new context.
import { createContext } from 'react';
// Import the AuthContextType for type safety.
import { AuthContextType } from '../types';

/**
 * Creates a React Context for authentication.
 * This will be used to provide and consume authentication state (like the current user)
 * throughout the component tree without passing props down manually.
 */
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
