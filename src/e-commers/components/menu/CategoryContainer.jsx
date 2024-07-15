import { useGetCategorys } from "../../../services/useGetCategorys"

export function CategoryContainer ({ onSelectCategory }) {
    const {categories} = useGetCategorys();
    return (
        <div className="w-full md:w-1/4 p-/">
            <h2 className="text-xl font-bold mb-4">Categorias</h2>
            <ul className="space-y-2">
                {
                    categories?.map((category, index) => (
                        <li key={index}>
                            <button onClick={() => onSelectCategory(category)} className="w-full text-left p-2 hover:bg-gray-200 rounded">
                                {category}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}