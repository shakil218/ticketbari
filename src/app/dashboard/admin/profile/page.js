import UserProfile from "@/components/dashboard/user/UserProfile";
import { getUserSession } from "@/lib/core/session";

const AdminProfilePage = async () => {
  const user = await getUserSession();

  return (
    <UserProfile user={user} />
  );
};

export default AdminProfilePage;