import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL_PRODUCT = "https://fakestoreapi.com/products";

export function useGetProductId(id) {
  const [productId, setProductId] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL_PRODUCT}/${id}`)
      .then((response) => setProductId(response.data))
      .catch((error) => setMessageError(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    productId,
    loading,
    messageError,
  };
}
