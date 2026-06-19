"use client";

import {
  Card,
  Button,
  Chip,
} from "@heroui/react";

import {
  Envelope,
  Pencil,
  CircleCheckFill,
} from "@gravity-ui/icons";
import { LogOut, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function VendorProfile({ user }) {
  return (
    <section className="p-4 lg:p-6">

      {/* ================= GREETING ================= */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          Welcome back, {user?.name} 👋
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">

        {/* ================= LEFT SIDEBAR ================= */}
        <div className="lg:col-span-4">
          <div className="space-y-4">

            {/* PROFILE CARD */}
            <Card className="overflow-hidden border border-default-200">
              
              {/* cover */}
              <div className="h-16 bg-content2" />

              <Card.Content className="flex flex-col items-center pb-6 px-6">

                {/* avatar */}
                <div className="-mt-10 relative">
                  <Image
                    src={user?.image}
                    alt={user?.name}
                    width={96}
                    height={96}
                    className="h-24 w-24 border-4 rounded-full border-background"
                  />

                  {/* verified badge */}
                  <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-success text-success-foreground">
                    <CircleCheckFill className="h-4 w-4" />
                  </div>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  {user?.name}
                </h2>

                <p className="text-sm text-default-500">
                  Vendor Account
                </p>

                <Chip
                  color="success"
                  variant="flat"
                  size="sm"
                  className="mt-3"
                >
                  Active Vendor
                </Chip>

                <Button
                  color="primary"
                  className="mt-5 w-full max-w-45 rounded-lg bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 text-black"
                >
                  <Pencil />
                  Edit Profile
                </Button>
              </Card.Content>
            </Card>

            {/* LOGOUT */}
            <Button
              variant="outline"
              size="lg"
              className="w-full border-2 border-default rounded-lg"
            >
              <LogOut />
              Log Out
            </Button>

          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-6 lg:col-span-8">

          {/* STATS */}
          <div className="grid gap-4 md:grid-cols-2">

            <Card className="border border-default-200">
              <Card.Content className="p-5">
                <p className="text-xs text-default-500">
                  Active Tickets
                </p>
                <h3 className="mt-1 text-3xl font-bold text-foreground">
                  14
                </h3>
                <p className="mt-2 text-sm text-success">
                  ↗ +2 this month
                </p>
              </Card.Content>
            </Card>

            <Card className="border border-default-200">
              <Card.Content className="p-5">
                <p className="text-xs text-default-500">
                  Total Bookings
                </p>
                <h3 className="mt-1 text-3xl font-bold text-foreground">
                  320
                </h3>
                <p className="mt-2 text-sm text-default-500">
                  All time
                </p>
              </Card.Content>
            </Card>

          </div>

          {/* CONTACT DETAILS */}
          <Card className="border border-default-200">
            <Card.Header className="px-6 pt-6">
              <h3 className="text-lg font-semibold text-foreground">
                Contact Details
              </h3>
            </Card.Header>

            <Card.Content className="p-6">
              <div className="grid gap-6 md:grid-cols-2">

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <Envelope />
                  </div>
                  <div>
                    <p className="text-xs text-default-500">
                      Email
                    </p>
                    <p className="font-medium text-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>

                {/* PHONE (placeholder if not in DB) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-xs text-default-500">
                      Phone
                    </p>
                    <p className="font-medium text-foreground">
                      +880 1700-000000
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4 md:col-span-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-xs text-default-500">
                      Location
                    </p>
                    <p className="font-medium text-foreground">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

              </div>
            </Card.Content>
          </Card>

        </div>
      </div>
    </section>
  );
}