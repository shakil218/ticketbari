import { getUserSession } from "@/lib/core/session";
import { getVendorTickets } from "@/lib/api/tickets";
import VendorAddedTickets from "@/components/dashboard/vendor/VendorAddedTickets";

const VendorTicketsPage = async () => {
  const user = await getUserSession();

  const tickets = await getVendorTickets(user?.email);

  return (
    <div>
      <VendorAddedTickets totalTickets={tickets}/>
    </div>
  );
};

export default VendorTicketsPage;