import { CategoryItem } from "./CategoryItem.tsx";
import { Skeleton } from "../helpers/Skeleton.tsx";
import {ICategory} from "../../types/types.ts";

type CategoryGridProps = {
    categories: ICategory[] | undefined;
    isLoading: boolean;
    edit: (id: number) => void;
    remove: (id: number) => void;
};

export const CategoryList = ({ categories, isLoading, remove, edit }: CategoryGridProps) => {
    return (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {isLoading && Array.from(Array(8).keys()).map((index) => <Skeleton key={index} />)}
            {categories?.map((category) => (
                <CategoryItem key={category.id} edit={edit} remove={remove} category={category} />
            ))}
        </div>
    );
}