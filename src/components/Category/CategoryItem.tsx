import { ICategory } from "../../types/types.ts";
import { API_URL } from "../../utils/apiUrl.ts";
import { CategoryContextMenu, CategoryContextMenuItem } from "../ui/CategoryContextMenu.tsx";
import {IconEdit, IconTrash} from "@tabler/icons-react";

type CategoryCardProps = {
    category: ICategory;
    edit: (id: number) => void;
    remove: (id: number) => void;
};

export const CategoryItem = (props: CategoryCardProps) =>  {
    const { category, remove, edit } = props;
    const { id, name, image } = category;

    return (
        <div className="relative flex w-full max-w-[315px] flex-col rounded-lg border border-gray-200 bg-white shadow">
            <div className="absolute top-1 right-1 z-10">
                <CategoryContextMenu>
                    <CategoryContextMenuItem onClick={() => edit(id)}>
                        <IconEdit/>
                        Edit
                    </CategoryContextMenuItem>
                    <CategoryContextMenuItem onClick={() => remove(id)} className="text-red-600 hover:text-red-100">
                        <IconTrash/>
                        Delete
                    </CategoryContextMenuItem>
                </CategoryContextMenu>
            </div>

            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-64 object-cover" src={`${API_URL}/uploads/1200_${image}`} alt={name}/>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <a href="#"
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};