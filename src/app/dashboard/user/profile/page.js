import UserProfile from "@/components/dashboard/user/UserProfile";
import { getUserSession } from "@/lib/core/session";

const UserProfilePage = async () => {
  const user = await getUserSession();

  return (
    <UserProfile user={user} />
  );
};

export default UserProfilePage;