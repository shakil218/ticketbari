import AllTicketsClient from "@/components/tickets/AllTicketsClient";
import { getApprovedTickets } from "@/lib/api/tickets";

export const metadata = {
  title: "TicketBari | All Tickets",
  description:
    "Browse and book bus, train, and launch tickets across Bangladesh. Find the best routes, schedules, and prices with TicketBari.",
}

export default async function AllTicketsPage({ searchParams }) {
  const params = await searchParams;

  const page = Number(params.page || 1);

  const data = await getApprovedTickets({
    from: params.from || "",
    to: params.to || "",
    transport: params.transport || "",
    sort: params.sort || "",
    page,
    limit: 9,
  });

  return (
    <AllTicketsClient
      tickets={data.tickets}
      totalTickets={data.totalTickets}
      currentPage={data.currentPage}
      totalPages={data.totalPages}
    />
  );
}