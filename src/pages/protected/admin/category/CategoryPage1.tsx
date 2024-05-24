import Category from "@models/category.model";
import DataTable from "@components/DataTable";

function CategoryPage1() {

  return (
    <DataTable<Category>
        title="Category List"
        columns={['name', 'description']}
        url="category"
    />
);
}

export default CategoryPage1