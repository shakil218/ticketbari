import { serverFetch,protectedFetch } from "../core/server";

export const getBookingsByVendor = async (vendorEmail) => {
  return protectedFetch(`/api/bookings?vendorEmail=${vendorEmail}`);
}; 

export const getBookingsByPassenger = async (passengerId) => {
  return protectedFetch(`/api/bookings?passengerId=${passengerId}`);
};