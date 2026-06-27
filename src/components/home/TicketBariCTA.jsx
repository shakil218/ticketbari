"use client";

import { Button, Card } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function TicketBariCTA() {
  const router = useRouter();

  return (
    <section className="relative w-full py-16 px-4 md:px-10 text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1680109060627-3a48796b74c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex justify-center">
        <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 p-10 text-center rounded-2xl max-w-3xl">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white">
            Ready to <span className="bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Book Your Next Journey?</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-white/80 mb-8">
            Explore thousands of bus, train, and launch tickets across Bangladesh.
            Fast booking, secure payments, and verified vendors.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-linear-to-r from-violet-600 via-purple-500 to-purple-500 text-white hover:opacity-90"
              onPress={() => router.push("/tickets")}
            >
              Explore Tickets
            </Button>

            <Button
              size="lg"
              variant="bordered"
              className="border border-white/20 text-white"
              onPress={() => router.push("/routes")}
            >
              View Routes
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-xs text-white/70 mt-6">
            Secure payments • Verified vendors • Instant booking
          </p>
        </Card>
      </div>
    </section>
  );
}