import DataGrid from "@components/DataGrid";
import Category from "@models/category.model";


function CategoryPage() {
  return (
    <>
      <DataGrid<Category> title="Categories" url="category" columns={['id','name', 'description']} />
    </>
  );
}

export default CategoryPage