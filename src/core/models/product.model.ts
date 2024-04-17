import Category from "./category.model";

export default interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
}