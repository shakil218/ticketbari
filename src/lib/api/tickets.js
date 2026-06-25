import { serverFetch } from "../core/server";

export const getAllTickets = async () => {
  return serverFetch("/api/tickets");
};

export const getTicketById = async (jobId) => {
  return serverFetch(`/api/tickets/${jobId}`);
};

export const getVendorTickets = async (vendorEmail) => {
  return serverFetch(`/api/tickets?vendorEmail=${vendorEmail}`);
};

export const getApprovedTickets = async () => {
  return serverFetch("/api/tickets/approved");
};