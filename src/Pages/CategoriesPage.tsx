import { IconPencilPlus } from "@tabler/icons-react";
import CategoryEditModal from "../components/Category/CategoryEditModal.tsx";
import {CategoryList} from "../components/Category/CategoryList.tsx";
import {CategoryCreateModal} from "../components/Category/CategoryCreateModal.tsx";
import { Button } from "../components/ui/Button.tsx";
import { useState } from "react";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../services/category.ts";
import {showToast} from "../utils/showToast.ts";
import { useSearchParams } from "react-router-dom";
import { Input } from "../components/ui/Input.tsx";
import {useDebouncedCallback} from "use-debounce";

const CategoriesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [currentCategory, setCurrentCategory] = useState<number | null>(null);

    const { data: categories, isLoading } = useGetCategoriesQuery({
        page: Number(searchParams.get("page")) || 1,
        search: searchParams.get("search") || ""
    });
    const [deleteCategory] = useDeleteCategoryMutation();

    const handleDeleteCategory = async (id: number) => {
        try {
            await deleteCategory(id).unwrap();
            showToast(`Category ${id} successful deleted!`, "success");
        } catch (err) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            showToast(`Error deleted ${id} category! ${err.error}`, "error");
        }
    };

    const handleEditCategory = async (id: number) => {
        try {
            setCurrentCategory(id);
            setEditModalOpen(true);
        } catch (err) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            showToast(`Error edited category! ${err.error}`, "error");
        }
    };

    const handleSearch = useDebouncedCallback((term) => {
        if (term) {
            searchParams.set("search", term);
            setSearchParams(searchParams);
        } else {
            searchParams.delete("search");
            setSearchParams(searchParams);
        }
    }, 400);

    return (
        <>
            <div className="mb-3 flex flex-row-reverse">
                <Button variant="outlined" size="lg" onClick={() => setCreateModalOpen(true)}>
                    <IconPencilPlus />
                    Add new category
                </Button>
                <Input
                    defaultValue={searchParams.get("search") || ""}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    className="hidden md:flex"
                    variant="search"
                    placeholder="Search..."
                />
            </div>
            <CategoryList
                categories={categories?.data}
                totalPages={categories?.last_page}
                edit={handleEditCategory}
                remove={handleDeleteCategory}
                isLoading={isLoading}
            />
            {createModalOpen && <CategoryCreateModal open={createModalOpen} close={() => setCreateModalOpen(false)} />}
            {editModalOpen && currentCategory && (
                <CategoryEditModal id={currentCategory} open={editModalOpen} close={() => setEditModalOpen(false)} />
            )}
        </>
    );
};

export default CategoriesPage;