import DataGrid from "@components/DataGrid";
import Sale from "@models/sale.model";


function SalePage() {
  return (
    <>
      <DataGrid<Sale> title="Sales" url="sale" columns={['code', 'discount']} />
    </>
  );
}

export default SalePage