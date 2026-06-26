import { serverFetch } from "../core/server";

export const getAllTickets = async () => {
  return serverFetch("/api/tickets");
};

export const getTicketById = async (id) => {
  return serverFetch(`/api/tickets/${id}`);
};

export const getVendorTickets = async (vendorEmail) => {
  return serverFetch(`/api/tickets?vendorEmail=${vendorEmail}`);
};

export const getApprovedTickets = async () => {
  return serverFetch("/api/tickets/approved");
};