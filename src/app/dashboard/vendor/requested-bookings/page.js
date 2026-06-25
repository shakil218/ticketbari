import RequestedTicketsBookings from "@/components/dashboard/vendor/RequestedTicketsBookings";
import { getBookingTickets } from '@/lib/api/bookings';
import { getUserSession } from '@/lib/core/session';

const RequestedTicketsBookingPage = async() => {
  const user = await getUserSession();
  const tickets = await getBookingTickets();
  return (
    <div>
      <RequestedTicketsBookings requestedBookings={tickets} />
    </div>
  );
};

export default RequestedTicketsBookingPage;