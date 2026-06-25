import { getUserSession } from "@/lib/core/session";
import DashboardSidebarClient from "./DashboardSidebarClient";

export async function DashboardSidebar() {
  const user = await getUserSession();

  return (
    <DashboardSidebarClient
      role={user?.role?.toLowerCase() || "user"}
    />
  );
}