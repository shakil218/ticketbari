import { serverFetch } from "../core/server";

export const getBookingsByPassenger = async (passengerId) => {
  return serverFetch(`/api/bookings?passengerId=${passengerId}`);
};