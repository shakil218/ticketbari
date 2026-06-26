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

export const getApprovedTickets = async () => {
  return serverFetch("/api/tickets/approved");
};