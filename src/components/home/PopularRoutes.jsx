"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { MapPinned } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PopularRoutes() {
  const router = useRouter();

  const routes = [
    {
      id: 1,
      title: "Cox's Bazar",
      transport: "Bus & Flight",
      trips: "45 Trips Daily",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    },
    {
      id: 2,
      title: "Sylhet",
      transport: "Rail & Bus",
      trips: "22 Trips Daily",
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&q=80",
    },
    {
      id: 3,
      title: "Barisal",
      transport: "Launch Services",
      trips: "18 Trips Daily",
      image:
        "https://images.unsplash.com/photo-1502621737164-fb78cb47e276?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=80",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Explore Popular Routes
          </h2>

          <p className="mt-2 text-default-500">
            Discover the most traveled destinations. Quick book your next trip.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4">
          
          {/* Large Card */}
          <div
            className="group relative overflow-hidden rounded-2xl md:row-span-2 min-h-105 cursor-pointer"
            onClick={() => router.push("/tickets")}
          >
            <Image
              src={routes[0].image}
              alt={routes[0].title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl font-bold text-white">
                {routes[0].title}
              </h3>

              <p className="text-white/80 text-sm">
                {routes[0].transport}
              </p>

              <p className="text-white/70 text-sm">
                {routes[0].trips}
              </p>
            </div>
          </div>

          {/* Small Card 1 */}
          <div
            className="group relative overflow-hidden rounded-2xl min-h-50 cursor-pointer"
            onClick={() => router.push("/tickets")}
          >
            <Image
              src={routes[1].image}
              alt={routes[1].title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-xl text-white">
                {routes[1].title}
              </h3>

              <p className="text-white/80 text-sm">
                {routes[1].transport}
              </p>
            </div>
          </div>

          {/* Small Card 2 */}
          <div
            className="group relative overflow-hidden rounded-2xl min-h-50 cursor-pointer"
            onClick={() => router.push("/tickets")}
          >
            <Image
              src={routes[2].image}
              alt={routes[2].title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-xl text-white">
                {routes[2].title}
              </h3>

              <p className="text-white/80 text-sm">
                {routes[2].transport}
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="rounded-2xl border border-divider bg-content1 p-8 flex flex-col items-center justify-center text-center md:col-span-2 min-h-50 bg-linear-to-r from-violet-200/10 via-purple-300/10 to-purple-500/10">
            <div className="w-14 h-14 rounded-full bg-linear-to-r from-violet-200/20 via-purple-300/20 to-purple-500/20 flex items-center justify-center mb-4">
              <MapPinned className="w-7 h-7 text-purple-500" />
            </div>

            <h3 className="font-bold text-xl text-foreground">
              View All Destinations
            </h3>

            <p className="text-default-500 text-sm mt-2 mb-5">
              Find tickets for over 50+ routes nationwide.
            </p>

            <Button
              className="bg-linear-to-r from-violet-200 via-purple-300 to-purple-500"
              onPress={() => router.push("/routes")}
            >
              Explore Routes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}