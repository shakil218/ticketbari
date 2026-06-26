import {getUserSession} from "@/lib/core/session";
import UserProfile from "@/components/dashboard/user/UserProfile";

export const metadata = {
  title: "My Profile | TicketBari Dashboard",
  description: "View and update your vendor profile on TicketBari.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function VendorProfilePage() {
  const user = await getUserSession();

  return <UserProfile user={user} />;
}