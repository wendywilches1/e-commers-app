import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL_CATEGORY = "https://fakestoreapi.com/products/categories";

export function useGetCategorys() {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL_CATEGORY)
      .then((response) => setCategories(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    categories,
    error,
    loading,
  };
}
