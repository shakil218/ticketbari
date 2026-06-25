import ManageTickets from "@/components/dashboard/admin/ManageTickets";
import {getAllTickets} from "@/lib/api/tickets";

const ManageTicketsPage = async() => {
  const tickets = await getAllTickets();
  return (
    <div>
      <ManageTickets tickets={tickets} />
    </div>
  );
};

export default ManageTicketsPage;