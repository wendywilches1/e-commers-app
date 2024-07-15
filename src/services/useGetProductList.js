import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL_PRODUCTS = "https://fakestoreapi.com/products";

export function useGetProductList() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messageError, setMessageError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL_PRODUCTS)
      .then((response) => setProducts(response.data))
      .catch((error) => setMessageError(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    products,
    loading,
    messageError,
  };
}
