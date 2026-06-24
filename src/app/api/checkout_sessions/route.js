import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "../../../lib/stripe";

export async function POST(request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const formData = await request.formData();

    const bookingId = formData.get("bookingId");
    const ticketId = formData.get("ticketId");
    const ticketTitle = formData.get("ticketTitle");
    const imageUrl = formData.get("imageUrl");
    const totalPrice = Number(formData.get("totalPrice"));
    const quantity = Number(formData.get("quantity"));
    const passengerEmail = formData.get("passengerEmail");

    const session = await stripe.checkout.sessions.create({
      customer_email: passengerEmail,

      line_items: [
        {
          price_data: {
            currency: "bdt",
            product_data: {
              name: ticketTitle,
              images: imageUrl ? [imageUrl] : [],
            },
            unit_amount: (totalPrice / quantity) * 100,
          },
          quantity,
        },
      ],

      mode: "payment",

      metadata: {
        bookingId,
        ticketId,
        ticketTitle,
        bookingQuantity: quantity.toString(),
        totalPrice: totalPrice.toString(),
      },

      success_url: `${origin}/dashboard/user/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${origin}/dashboard/user/booked-tickets`,
    });

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}