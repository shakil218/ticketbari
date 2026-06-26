import { serverFetch,protectedFetch } from "../core/server";

export const getPaymentsByCustomerEmail = async (customerEmail) => {
  return protectedFetch(`/api/payments?customerEmail=${customerEmail}`);
};