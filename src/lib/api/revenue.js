import { serverFetch,protectedFetch } from "../core/server";

export const getVendorAnalytics = async (vendorEmail) => {
  return protectedFetch(`/api/vendor-analytics/${vendorEmail}`);
};