import DataGrid from "@components/DataGrid";
import User from "@models/user.model";


function UserPage() {
  return (
    <>
      <DataGrid<User> title="User" url="user" columns={['name', 'email','role']} />
    </>
  );
}

export default UserPage