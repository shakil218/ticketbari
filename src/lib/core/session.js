import { auth } from "../auth"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getUserSession = async() => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  return session?.user || null;
}

export const requireRole = async (role) => {
  const user = await getUserSession();

  if (!user) {
    redirect("/auth/signin");
  }

  // Treat missing role as regular user
  const userRole = user?.role || "user";

  if (userRole !== role) {
    redirect("/unauthorized");
  }

  return user;
};