export interface ICategory {
    id: number;
    name: string;
    image: string;
    description: string;
}

export interface ICreateCategory {
    name: string;
    image: File;
    description: string;
}

export interface IEditCategory {
    name: string;
    image?: File;
    description: string;
}
export interface IPaginationData {
    current_page: number;
    per_page: number;
    last_page: number;
    total: number;
}

export interface ICategoryResponse extends IPaginationData {
    data: ICategory[];
}