"use client"
import LoadingSpinner from "@/app/loading";
import VendorProfile from "@/components/dashboard/VendorProfile";
import { authClient } from "@/lib/auth-client";

export default async function Page() {
  const {data:session, isPending} = await authClient.useSession()

  const user = session?.user;
  console.log(user)

  if(isPending){
    return <LoadingSpinner />
  }

  return <VendorProfile user={user} />;
}