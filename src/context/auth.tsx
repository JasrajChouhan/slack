import { createContext, useContext, useEffect, useState } from 'react';

interface AuthState {
  user: any | null;
  token: string | null;
  isLoading: boolean;
}

interface AuthContextType {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}

// Create Context with a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: null,
    isLoading: true,
  });

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');

      if (token && user) {
        setAuth({
          user: JSON.parse(user),
          token,
          isLoading: false,
        });
      } else {
        setAuth({
          user: null,
          token: null,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error('Error parsing user data from localStorage', error);
    }
  }, []);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
