import Product from "./product.model";
import Sale from "./sale.model";

export default interface SaleLine {
    id: number;
    quantity: number;
    price: number;
    sale: Sale;
    product: Product;
}