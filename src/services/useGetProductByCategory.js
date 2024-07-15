import axios from "axios";
import { useEffect, useState } from "react";

export function useGetProductByCategory(category) {
  const [productByCategory, setProductsByCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messageError, setMessageError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => setProductsByCategory(response.data))
      .catch((error) => setMessageError(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    productByCategory,
    loading,
    messageError,
  };
}
