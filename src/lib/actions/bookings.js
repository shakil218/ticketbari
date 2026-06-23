"use server";
import {serverMutation} from "../core/server"

export const submitTicketBooking = async (bookingTicketInfo) => {
  return serverMutation("/api/bookings",bookingTicketInfo);
}