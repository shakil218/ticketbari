import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";

export async function POST(Request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const formData = await Request.formData();
    const ticketTitle = formData.get("ticketTitle");
    const imageUrl = formData.get("imageUrl");
    const totalPrice = Number(formData.get("totalPrice"));
    const quantity = Number(formData.get("quantity"));
    const passengerEmail = formData.get("passengerEmail");

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: passengerEmail,
      line_items: [
        {
          price_data: {
            currency: "BDT", // or 'usd'
            product_data: {
              name: ticketTitle,
              images: imageUrl ? [imageUrl] : [],
            },
            unit_amount: (totalPrice / quantity) * 100,
          },
          // Pass your dynamic quantity here
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${origin}/dashboard/user/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
