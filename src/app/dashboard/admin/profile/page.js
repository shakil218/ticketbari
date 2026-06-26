import UserProfile from "@/components/dashboard/user/UserProfile";
import { getUserSession } from "@/lib/core/session";

export const metadata = {
  title: "My Profile | TicketBari Dashboard",
  description: "View and manage your TicketBari account profile.",
  robots: {
    index: false,
    follow: false,
  },
};

const AdminProfilePage = async () => {
  const user = await getUserSession();

  return (
    <UserProfile user={user} />
  );
};

export default AdminProfilePage;