import { useState } from "react";
import { CategoryMenu } from "../components/menu/CategoryMenu";
import { ProductContainer } from "../components/product/ProductContainer";

export function StorePage () {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (categoryId) => {
        setSelectedCategory(categoryId);
    }

    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row">
            <CategoryMenu onSelectCategory={handleSelectCategory}/>
            <ProductContainer selectedCategory={selectedCategory} />
        </div>
    )
}


