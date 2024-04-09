import CategoryItem from "./categoryItem.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

interface Category {
    id: number;
    name: string;
    image: string;
}
const CategoryListPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        axios.get<Category[]>('http://laravel.web.api.com:8000/api/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {categories.map(category => (
                    <CategoryItem key={category.id} {...category} />
                ))}
            </div>
        </>
    );
}

export default CategoryListPage;