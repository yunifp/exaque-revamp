import React, { createContext, useState, useEffect, useContext } from "react";
import useApi from "../hooks/useApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { request } = useApi();

  // Cek apakah user sudah login saat aplikasi pertama kali dimuat (refresh page)
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        // Endpoint ini harus ada di backend (authRoutes.js -> /me)
        const response = await request("/auth/me");
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setIsInitialized(true);
      }
    };

    checkUserLoggedIn();
  }, [request]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await request("/auth/logout", "POST");
      setUser(null);
      // Opsional: Redirect atau reload
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isInitialized }}>
      {/* Jangan render anak sampai cek login selesai agar tidak flicker */}
      {isInitialized ? children : <div className="h-screen flex items-center justify-center">Loading...</div>}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);