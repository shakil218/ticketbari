"use server";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const createTicket = async (ticketData) => {
  const res = await fetch(`${baseURL}/api/tickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticketData),
  });
  return res.json();
};
