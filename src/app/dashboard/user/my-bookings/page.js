import UserBookedTickets from '@/components/dashboard/user/UserBookedTickets';
import { getBookingsByPassenger } from '@/lib/api/bookings';
import { getUserSession } from '@/lib/core/session';

const UserBookedTicketsPage = async () => {
  const user = await getUserSession();
  const bookings = await getBookingsByPassenger(user?.id);
 
  return (
    <div>
      <UserBookedTickets passenger={user} bookings={bookings} />
    </div>
  );
};

export default UserBookedTicketsPage;