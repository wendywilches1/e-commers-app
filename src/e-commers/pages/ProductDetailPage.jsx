import { useParams } from "react-router";
import { useGetProductId } from "../../services/useGetProductId";
import { Loading } from "../../ui/components/Loading";
import {useCart} from "../../context/ContextCart"

export function ProductDetailPage() {
  const { id } = useParams();
  const { productId, loading } = useGetProductId(id);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: productId })
    toast.success(`${productId.title} added to cart`);
  }

  if (loading) {
    return (
        <div className="w-screen h-screen flex flex-col justify-center"> 
            <Loading />
        </div>
    )
  }

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-4">
      <div className="w-[150px] md:w-[800px] md:h-[400px]">
        <img
          src={productId?.image}
          alt={productId?.title}
          className="w-full md:w-[800px] md:h-[400px] object-contain"
        />
      </div>
      <div className="w-full h-[500px] flex justify-around">
        <div className="w-full bg-white border-2 border-gray-300 p-4 rounded-lg flex flex-col justify-around">
          <h1 className="text-3xl md:text-4xl font-bold mb-10">
            {productId?.title}
          </h1>
          <h5 className="text-lg">{productId?.description}</h5>
          <div className="flex items-center gap-4 justify-end">
            <span className="text-3xl font-bold text-gray-900 dark:text-black">
                $ {productId?.price}
            </span>
            <button 
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleAddToCart}
            >
                Añadir carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
