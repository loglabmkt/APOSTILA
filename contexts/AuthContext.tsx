import React, { createContext, useState, useEffect, useContext, ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { type User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  register: (name: string, email: string, photoUrl: string, password: string) => void;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  updateUser: (updatedInfo: Partial<User>) => void; // Nova função para atualizar
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const CURRENT_USER_KEY = 'currentUser';
const REGISTERED_USERS_KEY = 'registeredUsers';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const storedUser = window.localStorage.getItem(CURRENT_USER_KEY);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error reading user from localStorage', error);
      return null;
    }
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (currentUser) {
        window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
      } else {
        window.localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch (error) {
      console.error('Error writing user to localStorage', error);
    }
  }, [currentUser]);

  const register = useCallback((name: string, email: string, photoUrl: string, password: string) => {
    const users = JSON.parse(window.localStorage.getItem(REGISTERED_USERS_KEY) || '[]');
    const userExists = users.some((user: User) => user.email === email);
    
    if (userExists) {
      alert('Este e-mail já está cadastrado.');
      return;
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      photoUrl,
      password
    };

    users.push(newUser);
    window.localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
    setCurrentUser(newUser);
    navigate('/', { replace: true });
  }, [navigate]);
  
  const login = useCallback((email: string, pass: string): boolean => {
    // Lógica do Administrador
    if (email === 'admin@admin.com' && pass === '1234') {
      const adminUser: User = {
        id: 'admin-001',
        name: 'Administrador',
        email: 'admin@admin.com',
        photoUrl: 'https://via.placeholder.com/150/001219/FFFFFF/?text=A'
      };
      setCurrentUser(adminUser);
      navigate('/', { replace: true });
      return true;
    }
    
    // Lógica para usuários registrados
    const users = JSON.parse(window.localStorage.getItem(REGISTERED_USERS_KEY) || '[]');
    const foundUser = users.find((user: User) => user.email === email && user.password === pass);
    
    if (foundUser) {
      setCurrentUser(foundUser);
      navigate('/', { replace: true });
      return true;
    }
    
    return false;
  }, [navigate]);

  const logout = useCallback(() => {
    setCurrentUser(null);
    navigate('/login', { replace: true });
  }, [navigate]);
  
  const updateUser = useCallback((updatedInfo: Partial<User>) => {
    if (!currentUser) return;

    const updatedUser = { ...currentUser, ...updatedInfo };
    setCurrentUser(updatedUser);

    // Atualiza também na lista de usuários registrados
    const users = JSON.parse(window.localStorage.getItem(REGISTERED_USERS_KEY) || '[]');
    const userIndex = users.findIndex((user: User) => user.id === currentUser.id);
    if (userIndex > -1) {
      users[userIndex] = updatedUser;
      window.localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
    }
  }, [currentUser]);


  const isAuthenticated = !!currentUser;

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout, updateUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};