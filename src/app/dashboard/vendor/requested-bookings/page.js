import RequestedTicketsBookings from "@/components/dashboard/vendor/RequestedTicketsBookings";
import { getBookingsByVendor } from '@/lib/api/bookings';
import { getUserSession } from '@/lib/core/session';

const RequestedTicketsBookingPage = async() => {
  const user = await getUserSession();
  const tickets = await getBookingsByVendor(user?.email);
  return (
    <div>
      <RequestedTicketsBookings requestedBookings={tickets} />
    </div>
  );
};

export default RequestedTicketsBookingPage;