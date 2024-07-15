import axios from "axios";
import { useState, useEffect } from "react";

const API_CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_CATEGORIES_URL)
      .then((response) => setCategories(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    categories,
    error,
    loading,
  };
};
