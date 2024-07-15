import axios from "axios";
import { useState, useEffect } from "react";

const BASE_API_URL = "https://api.escuelajs.co/api/v1";

export function useGetProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_API_URL}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => setMessage(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    products,
    loading,
    message,
  };
}