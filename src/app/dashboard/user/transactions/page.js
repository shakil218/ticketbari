import UserTransactionHistory from '@/components/dashboard/user/UserTransactionHistory';
import { getUserSession } from '@/lib/core/session';
import { getPaymentsByCustomerEmail } from '@/lib/api/payments';

export const metadata = {
  title: "Transaction History | TicketBari Dashboard",
  description: "View your TicketBari payment and transaction history.",
  robots: {
    index: false,
    follow: false,
  },
};

const UserTransactionHistoryPage = async() => {
  const user = await getUserSession();
  const payments = await getPaymentsByCustomerEmail(user?.email);
  return (
    <div>
      <UserTransactionHistory payments={payments} />
    </div>
  );
};

export default UserTransactionHistoryPage;