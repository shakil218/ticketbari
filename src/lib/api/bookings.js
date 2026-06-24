import { serverFetch } from "../core/server";

export const getBookingTickets = async () => {
  return serverFetch("/api/bookings");
};

export const getBookingsByPassenger = async (passengerId) => {
  return serverFetch(`/api/bookings?passengerId=${passengerId}`);
};