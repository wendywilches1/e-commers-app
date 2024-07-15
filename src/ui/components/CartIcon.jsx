
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../context/ContextCart";

export function CartIcon () {
    const { cart } = useCart();
    return (
        <div className="relative w-[50px]">
            <FontAwesomeIcon icon={faShoppingCart} />
            {
                cart.length > 0 && (
                    <span className="absolute top-0 right-0 text-xs rounded-xl text-white bg-red-500 px-2 py-1">
                        {cart.length}
                    </span>
                )
            }
        </div>
    )
}
