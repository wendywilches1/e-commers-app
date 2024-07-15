import { useFetchCategories } from "../../../services/useFetchCategories"

export function CategoryMenu ({ onSelectCategory }) {
    const { categories } = useFetchCategories();
    return(
        <div className="w-full md:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">
                <ul className="space-y-2">
                    <li>
                        <button
                            className="w-full text-left p-2 hover:bg-gray-200 rounded" 
                            onClick={() => onSelectCategory('')}
                        >
                            Todos los articulos. 
                        </button>
                    </li>
                    {
                        categories?.map((category, index) => (
                            <li key={index}>
                                <button 
                                    className="w-full text-left p-2 hover:bg-gray-200 rounded"
                                    onClick={()=> onSelectCategory(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </h2>
        </div>
    )
}