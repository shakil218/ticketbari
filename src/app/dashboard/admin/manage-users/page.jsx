import ManageUsers from "@/components/dashboard/admin/ManageUsers"
import {getAllUsers} from "@/lib/api/users.js"

const ManageUsersPage = async() => {
  const users = await getAllUsers();
  return (
    <div>
      <ManageUsers users={users} />
    </div>
  );
};

export default ManageUsersPage;