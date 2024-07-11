import DataGrid from "@components/DataGrid";
import Product from "@models/product.model";


function ProductPage() {
  return (
    <>
      <DataGrid<Product> title="Products" url="product" columns={['name', 'price', 'description']} />
    </>
  );
}

export default ProductPage