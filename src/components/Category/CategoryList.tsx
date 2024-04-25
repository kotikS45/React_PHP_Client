import { CategoryItem } from "./CategoryItem.tsx";
import { Skeleton } from "../helpers/Skeleton.tsx";
import {ICategory} from "../../types/types.ts";
import Pagination from "../Pagination.tsx";
import EmptyData from "../EmptyData.tsx";

type CategoryGridProps = {
    categories: ICategory[] | undefined;
    totalPages: number | undefined;
    isLoading: boolean;
    edit: (id: number) => void;
    remove: (id: number) => void;
};

export const CategoryList = ({ categories, isLoading, remove, edit, totalPages }: CategoryGridProps) => {
    return (
        <>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {isLoading && Array.from(Array(8).keys()).map((index) => <Skeleton key={index}/>)}
                {categories?.map((category) => (
                    <CategoryItem key={category.id} edit={edit} remove={remove} category={category}/>
                ))}
            </div>
            {categories?.length === 0 && <EmptyData />}
            <Pagination totalPages={totalPages || 0} />
        </>
    );
}