import { useGetProducts } from "../../../services/useGetProducts"
import { ProductCard } from "./ProductCard";

export function ProductList () {
    const { products } = useGetProducts();
    return(
        <div className="w-full md:w-[60rem] mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                products?.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
}