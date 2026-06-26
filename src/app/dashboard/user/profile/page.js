import UserProfile from "@/components/dashboard/user/UserProfile";
import { getUserSession } from "@/lib/core/session";

export const metadata = {
  title: "My Profile | TicketBari Dashboard",
  description: "View and update your TicketBari profile information.",
  robots: {
    index: false,
    follow: false,
  },
};

const UserProfilePage = async () => {
  const user = await getUserSession();

  return (
    <UserProfile user={user} />
  );
};

export default UserProfilePage;