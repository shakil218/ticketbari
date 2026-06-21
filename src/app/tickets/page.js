import AllTicketsClient from "@/components/tickets/AllTicketsClient";
import { getAllTickets } from "@/lib/api/tickets";

export default async function AllTicketsPage() {
  const tickets = await getAllTickets();

  return <AllTicketsClient tickets={tickets} />;
}