import { serverFetch , protectedFetch } from "../core/server";

export const getAllTickets = async () => {
  return protectedFetch("/api/tickets");
};

export const getTicketById = async (id) => {
  return serverFetch(`/api/tickets/${id}`);
};

export const getVendorTickets = async (vendorEmail) => {
  return protectedFetch(`/api/tickets?vendorEmail=${vendorEmail}`);
};

export const getAllApprovedTickets = async () => {
  return serverFetch("/api/tickets/approved/all");
};

export const getApprovedTickets = async ({from = "",to = "",transport = "",sort = "",page = 1,limit = 9,} = {}) => {
  const params = new URLSearchParams();

  if (from) params.set("from", from);
  if (to) params.set("to", to);
  if (transport) params.set("transport", transport);
  if (sort) params.set("sort", sort);

  params.set("page", page);
  params.set("limit", limit);

  return serverFetch(`/api/tickets/approved?${params.toString()}`);
};