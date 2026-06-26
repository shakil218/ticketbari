import { requireRole, getUserSession } from "@/lib/core/session";
import FraudBanner from "@/components/dashboard/vendor/FraudBanner";

const VendorLayout = async ({ children }) => {
  // Ensure only vendors can access
  await requireRole("vendor");

  // Get the logged-in vendor
  const user = await getUserSession();

  const isFraud =
    user?.role === "vendor" &&
    user?.isFraud === true;
  if(isFraud){
    return <FraudBanner />
  }
  return (
    <div className="space-y-6">
      {children}
    </div>
  );
};

export default VendorLayout;