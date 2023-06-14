/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext(null);

// Define the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUsername());

  // Get username from localStorage or return an empty string
  function getUsername() {
    const temp = localStorage.getItem('username');
    const savedUsername = JSON.parse(temp);
    return savedUsername || '';
  }

  // Store user in localStorage whenever user changes
  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);

  // Login a user
  const login = (user) => setUser(user);

  // Logout a user
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuthContext = () => useContext(AuthContext);
