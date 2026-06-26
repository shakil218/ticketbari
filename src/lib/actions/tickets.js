"use server";
import {serverMutation} from "../core/server"

export const createTicket = async (ticketData) => {
  return serverMutation("/api/tickets",ticketData);
}

export const updateTicketStatus = async (id, status) => {
  return serverMutation(`/api/tickets/${id}`, { status }, "PATCH");
};

export const toggleTicketAdvertisement = async (id,isAdvertised) => {
  return serverMutation(`/api/tickets/advertise/${id}`,{ isAdvertised },"PATCH");
};

export const updateTicketWithVendor = async (id, ticketData) => {
  return serverMutation(`/api/tickets/update/${id}`,ticketData,"PATCH");
};

export const deleteTicket = async (id) => {
  return serverMutation(`/api/tickets/${id}`,{}, "DELETE");
};
