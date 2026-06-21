import { getUserSession } from "@/lib/core/session";
import { getVendorTickets } from "@/lib/api/tickets";
import VendorTickets from "@/components/dashboard/VendorTickets";

const VendorTicketsPage = async () => {
  const user = await getUserSession();

  const tickets = await getVendorTickets(user?.email);

  return (
    <div>
      <VendorTickets totalTickets={tickets}/>
    </div>
  );
};

export default VendorTicketsPage;