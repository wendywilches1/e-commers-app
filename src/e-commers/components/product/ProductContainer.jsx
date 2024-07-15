import { useEffect, useState } from "react";
import { useCategoryByIdProduct } from "../../../services/useCategoryByIdProduct";
import { useGetProductList } from "../../../services/useGetProductList";
import { Loading } from "../../../ui/components/Loading";
import { ProductCard } from "./ProductCard";

export function ProductContainer({selectedCategory}) {
  const { dataProductByCategory } = useCategoryByIdProduct(selectedCategory);
  const { products, loading } = useGetProductList();
  const [dataProducts, setDataProduct] = useState([]);

  useEffect(()=>{
    if (dataProductByCategory.length === 0) {
      setDataProduct(products);
    }else{
      setDataProduct(dataProductByCategory);
    }
  }, [dataProductByCategory, products])

  if (loading) {
    return (
      <div className="w-full flex justify-center mx-auto">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full mx-auto md:w-3/4 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {dataProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
