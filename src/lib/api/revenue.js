import { serverFetch } from "../core/server";

export const getVendorAnalytics = async (vendorEmail) => {
  return serverFetch(`/api/vendor-analytics/${vendorEmail}`);
};