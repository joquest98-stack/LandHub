// Import necessary hooks and context from React.
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AuthContextType } from '../types';

/**
 * Custom hook `useAuth` for consuming the authentication context.
 * It provides a convenient way for components to access authentication state.
 * @returns {AuthContextType} The authentication context value.
 * @throws {Error} If the hook is used outside of an `AuthProvider`.
 */
export const useAuth = (): AuthContextType => {
  // Get the context value.
  const context = useContext(AuthContext);
  // If the context is undefined, it means the component is not wrapped in an AuthProvider.
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  // Return the context value.
  return context;
};
