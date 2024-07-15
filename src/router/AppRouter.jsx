import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, StorePage, CartPage } from '../e-commers/pages';
import { Navbar } from "../ui";
import { ProductDetailPage } from "../e-commers/pages/ProductDetailPage";

export function AppRouter () {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="home" element={<HomePage />} />
            
                <Route path="store" element={<StorePage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="product/:id" element={<ProductDetailPage />} />
                <Route path="/" element={ <Navigate to="/home" /> } />
            </Routes>
        </>
    )
}