"use client"
import LoadingSpinner from "@/app/loading";
import VendorProfile from "@/components/dashboard/vendor/VendorProfile";
import { authClient } from "@/lib/auth-client";

export default function VendorProfilePage() {
  const {data:session, isPending} = authClient.useSession()

  const user = session?.user;
  console.log(user)

  if(isPending){
    return <LoadingSpinner />
  }

  return <VendorProfile user={user} />;
}