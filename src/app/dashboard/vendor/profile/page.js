
import LoadingSpinner from "@/app/loading";
import {getUserSession} from "@/lib/core/session";
import UserProfile from "@/components/dashboard/user/UserProfile";

export default async function VendorProfilePage() {
  

  const user = await getUserSession();
  
  // if(isPending){
  //   return <LoadingSpinner />
  // }

  return <UserProfile user={user} />;
}