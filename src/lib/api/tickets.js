const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

export const getVendorTickets = async (vendorEmail) => {
  const res = await fetch(`${baseURL}/api/tickets?vendorId=${vendorEmail}`);
  return res.json();
};