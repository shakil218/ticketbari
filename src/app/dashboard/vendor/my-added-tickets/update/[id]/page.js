import { getTicketById } from "@/lib/api/tickets";
import UpdateTicketForm from "@/components/dashboard/vendor/UpdateTicketForm";

const UpdateTicketPage = async ({ params }) => {
  const { id } = await params;
  const ticket = await getTicketById(id);

  return <UpdateTicketForm ticket={ticket} />;
};

export default UpdateTicketPage;