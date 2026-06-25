import {requireRole} from "@/lib/core/session";

const VendorLayout = async ({ children }) => {
  await requireRole("vendor");

  return <>{children}</>;
};

export default VendorLayout;