import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { createPayment } from "@/lib/actions/payments";

export const metadata = {
  title: "Payment Successful | TicketBari",
  description: "Your payment has been completed successfully.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Success({
  searchParams,
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Missing session_id");
  }

  const session =
    await stripe.checkout.sessions.retrieve(
      session_id,
      {
        expand: ["payment_intent"],
      }
    );

  if (session.status === "open") {
    redirect("/");
  }

  if (session.status === "complete") {
    const transactionId =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : session.payment_intent?.id;

    const paymentInfo = {
      bookingId: session.metadata.bookingId,
      ticketId: session.metadata.ticketId,

      transactionId,

      amount: session.amount_total / 100,

      ticketTitle: session.metadata.ticketTitle,

      paymentDate: new Date(),

      customerEmail: session.customer_email,

      bookingQuantity: Number(
        session.metadata.bookingQuantity
      ),

      stripeSessionId: session.id,
    };

    await createPayment(paymentInfo);

    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">
            🎉
          </div>

          <h1 className="text-3xl font-bold text-green-600">
            Payment Successful
          </h1>

          <p className="mt-4 text-gray-600">
            Your ticket payment has been
            completed successfully.
          </p>

          <div className="mt-6 rounded-xl bg-gray-100 p-4 text-left space-y-3">
            <div>
              <p className="text-xs text-gray-500">
                Transaction ID
              </p>

              <p className="font-medium break-all">
                {transactionId}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Ticket Title
              </p>

              <p className="font-medium">
                {session.metadata.ticketTitle}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Amount Paid
              </p>

              <p className="font-medium">
                ৳{session.amount_total / 100}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Payment Date
              </p>

              <p className="font-medium">
                {new Date().toLocaleString()}
              </p>
            </div>
          </div>

          <a
            href="/dashboard/user/transactions"
            className="inline-block mt-6 px-6 py-3 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white rounded-lg"
          >
            View Transactions
          </a>
        </div>
      </section>
    );
  }

  return null;
}