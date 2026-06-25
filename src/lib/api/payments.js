import { serverFetch } from "../core/server";

export const getPaymentsByCustomerEmail = async (customerEmail) => {
  return serverFetch(`/api/payments?customerEmail=${customerEmail}`);
};