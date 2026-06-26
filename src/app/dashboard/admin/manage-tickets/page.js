import ManageTickets from "@/components/dashboard/admin/ManageTickets";
import {getAllTickets} from "@/lib/api/tickets";

export const metadata = {
  title: "Manage Tickets | TicketBari Dashboard",
  description: "View, manage, update, and approve tickets in the TicketBari admin dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

const ManageTicketsPage = async() => {
  const tickets = await getAllTickets();
  return (
    <div>
      <ManageTickets tickets={tickets} />
    </div>
  );
};

export default ManageTicketsPage;