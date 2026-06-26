import ManageUsers from "@/components/dashboard/admin/ManageUsers"
import {getAllUsers} from "@/lib/api/users.js"

export const metadata = {
  title: "Manage Users | TicketBari Dashboard",
  description: "View and manage user accounts in the TicketBari admin dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

const ManageUsersPage = async() => {
  const users = await getAllUsers();
  return (
    <div>
      <ManageUsers users={users} />
    </div>
  );
};

export default ManageUsersPage;