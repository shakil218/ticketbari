"use client";
import { Button } from "@heroui/react";
const routes = [
  {
    from: "Dhaka",
    to: "Cox's Bazar",
    price: "৳1200 - ৳1800",
    trips: "15+ daily trips",
  },
  {
    from: "Dhaka",
    to: "Sylhet",
    price: "৳800 - ৳1400",
    trips: "12+ daily trips",
  },
  {
    from: "Dhaka",
    to: "Chattogram",
    price: "৳700 - ৳1300",
    trips: "20+ daily trips",
  },
  {
    from: "Dhaka",
    to: "Rajshahi",
    price: "৳900 - ৳1500",
    trips: "10+ daily trips",
  },
  {
    from: "Dhaka",
    to: "Barisal",
    price: "৳600 - ৳1100",
    trips: "8+ daily trips",
  },
  {
    from: "Dhaka",
    to: "Khulna",
    price: "৳750 - ৳1200",
    trips: "9+ daily trips",
  },
];

export default function PopularRoutes() {
  return (
    <section className="w-full py-12 px-4 md:px-10 bg-background text-foreground">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Popular Routes
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, index) => (
          <div
            key={index}
            className="p-5 rounded-xl border border-divider bg-background text-foreground hover:shadow-lg transition"
          >
            {/* Route */}
            <h3 className="text-lg font-semibold">
              {route.from} → {route.to}
            </h3>

            {/* Trips */}
            <p className="text-sm text-default-500 mt-2">
              {route.trips}
            </p>

            {/* Price */}
            <p className="text-sm font-medium text-success mt-1">
              {route.price}
            </p>

            {/* Button */}
            <Button
              className="w-full mt-4"
              color="primary"
              onPress={() =>
                router.push(
                  `/tickets?from=${route.from}&to=${route.to}`
                )
              }
            >
              View Tickets
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}