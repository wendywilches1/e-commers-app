import React from 'react';
import { useCart } from '../../context/ContextCart';

export function CartPage() {
    const { cart, dispatch } = useCart();

    const handleSuma = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const handleRest = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    if (cart === undefined) {
        return <p>Cargando...</p>;
    }

    const totalValue = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Carro de la compra</h1>

            {
                cart.length === 0 ? (
                    <p className="text-xl mt-4">Tu carrito esta vacío..</p>
                ) : (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {cart.map(product => (
                                <div key={product.id} className="border p-4 rounded shadow">
                                    <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4"/>
                                    <h2 className="text-xl font-semibold">{product.title}</h2>
                                    <p>{product.description}</p>
                                    <p className="font-bold">${product.price}</p>
                                    <p>Clasificación: {product.rating.rate} ({product.rating.count} opiniones)</p>
                                    <div className="flex items-center mt-2">
                                        <button onClick={() => handleRest(product)}>-</button>
                                        <span className="mx-2">{product.quantity}</span>
                                        <button onClick={() => handleSuma(product)}>+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold">Total: ${totalValue.toFixed(2)}</h2>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
