import { redirect } from "next/navigation";

import { stripe } from "@/lib/stripe";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section id="success">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>

            <h1 className="text-3xl font-bold text-green-600">
              Payment Successful
            </h1>

            <p className="mt-4 text-gray-600">
              Your ticket payment has been completed successfully.
            </p>

            <div className="mt-4 rounded-lg bg-gray-100 p-3">
              <p className="text-xs text-gray-600">Transaction Reference</p>
              <p className="font-medium">{session_id.slice(0, 20)}...</p>
            </div>

            <a
              href="/dashboard/user/transactions"
              className="inline-block mt-6 px-6 py-3 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white rounded-lg"
            >
              View My Tickets
            </a>
          </div>
        </div>
      </section>
    );
  }
}
