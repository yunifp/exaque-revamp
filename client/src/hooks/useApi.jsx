import { useState, useCallback } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint, method = "GET", body = null) => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const config = {
        method,
        headers,
        // PENTING: credentials 'include' agar cookie token dikirim/diterima
        credentials: "include", 
      };

      if (body) {
        config.body = JSON.stringify(body);
      }

      const response = await fetch(`${BASE_URL}${endpoint}`, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.meta?.message || data.message || "Terjadi kesalahan");
      }

      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err; // Lempar error agar bisa ditangkap di component
    }
  }, []);

  return { request, loading, error };
};

export default useApi;