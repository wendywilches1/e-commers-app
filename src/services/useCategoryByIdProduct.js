import axios from "axios";
import { useEffect, useState } from "react";

const API_BASE_CATEGORIES_URL = "https://fakestoreapi.com/products/category";

export function useCategoryByIdProduct(CategoryId) {
  const [dataProductByCategory, setProductByCategory] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE_CATEGORIES_URL}/${CategoryId}`)
      .then((response) => setProductByCategory(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [CategoryId]);

  return {
    dataProductByCategory,
    error,
    loading,
  };
}
