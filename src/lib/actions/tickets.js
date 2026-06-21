"use server";
import {serverMutation} from "../core/server"

export const createTicket = async (ticketData) => {
  return serverMutation("/api/tickets",ticketData);
}
