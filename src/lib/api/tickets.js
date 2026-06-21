import { serverFetch } from "../core/server";

export const getAllTickets = async()=>{
  return serverFetch('/api/tickets')
}

export const getVendorTickets = async (vendorEmail) => {
  return serverFetch(`/api/tickets?email=${vendorEmail}`)
};