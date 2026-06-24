"use server";
import {serverMutation} from "../core/server"

export const submitTicketBooking = async (bookingTicketInfo) => {
  return serverMutation("/api/bookings",bookingTicketInfo);
}

export const updateBookingTicketsStatus = async (id, data)=>{
  return serverMutation(`/api/bookings/${id}`,data,'PATCH');
}