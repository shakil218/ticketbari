import UserTransactionHistory from '@/components/dashboard/user/UserTransactionHistory';
import { getUserSession } from '@/lib/core/session';
import { getPaymentsByCustomerEmail } from '@/lib/api/payments';

const UserTransactionHistoryPage = async() => {
  const user = await getUserSession();
  const payments = await getPaymentsByCustomerEmail(user?.email);
  console.log(payments)
  return (
    <div>
      <UserTransactionHistory payments={payments} />
    </div>
  );
};

export default UserTransactionHistoryPage;