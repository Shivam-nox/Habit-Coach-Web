// frontend/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';

interface AuthContextType {
  isAuthenticated: boolean;
  isAuthLoaded: boolean;
  isDemo: boolean;
  login: (token: string) => Promise<void>;
  loginDemo: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await storage.getItem('jwt_token');
        const demo = await storage.getItem('demo_mode');
        setIsAuthenticated(!!token || demo === 'true');
        setIsDemo(demo === 'true');
      } catch (error) {
        console.error('Failed to read token from storage', error);
      } finally {
        setIsAuthLoaded(true);
      }
    };
    loadToken();
  }, []);

  const login = async (token: string) => {
    await storage.setItem('jwt_token', token);
    await storage.deleteItem('demo_mode');
    setIsDemo(false);
    setIsAuthenticated(true);
  };

  const loginDemo = async () => {
    await storage.deleteItem('jwt_token');
    await storage.setItem('demo_mode', 'true');
    setIsDemo(true);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await storage.deleteItem('jwt_token');
    await storage.deleteItem('demo_mode');
    setIsDemo(false);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAuthLoaded, isDemo, login, loginDemo, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
