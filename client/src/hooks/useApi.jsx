import { useState, useCallback } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint, method = "GET", body = null) => {
    setLoading(true);
    setError(null);

    try {
      const headers = {};
      let config = {
        method,
        credentials: "include",
      };

      if (body instanceof FormData) {
        config.body = body;
      } else if (body) {
        headers["Content-Type"] = "application/json";
        config.body = JSON.stringify(body);
      }

      config.headers = headers;

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
      throw err;
    }
  }, []);

  return { request, loading, error };
};

export default useApi;