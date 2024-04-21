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