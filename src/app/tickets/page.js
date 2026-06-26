import AllTicketsClient from "@/components/tickets/AllTicketsClient";
import { getApprovedTickets } from "@/lib/api/tickets";

export default async function AllTicketsPage() {
  const tickets = await getApprovedTickets();

  return <AllTicketsClient tickets={tickets} />;
}