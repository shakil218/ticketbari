"use client";

import Image from "next/image"
import {
  Button,
  Card,
  Chip,
} from "@heroui/react";

import {
  Envelope,
  MapPin,
  Calendar,
  Pencil,
} from "@gravity-ui/icons";

import {
  Ticket,
  Phone,
  Users,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";
import demoUser from "@/assets/demoUser.png";

export default function VendorProfile({ user }) {
  const vendor = {
    businessName: "TicketBari Express",
    vendorType: "Bus Operator",
    phone: "+880 1712-345678",
    address: "Dhaka, Bangladesh",
    joinedDate: "18 June 2026",

    stats: {
      activeTickets: 14,
      totalBookings: 245,
      revenue: "৳85,000",
    },
  };

  return (
    <section className="mx-auto max-w-7xl p-4 lg:p-6">
      {/* ======================================
          WELCOME SECTION
      ====================================== */}

      <Card className="mb-6 border border-default-200">
        <Card.Content className="p-6">
          <h1 className="text-2xl font-bold md:text-3xl">
            Welcome back, {user?.name} 👋
          </h1>

          <p className="mt-2 text-default-500">
            Manage your vendor profile, bookings and ticket
            inventory from one place.
          </p>
        </Card.Content>
      </Card>

      {/* ======================================
          MAIN GRID
      ====================================== */}

      <div className="grid gap-6 lg:grid-cols-12">
        {/* ======================================
            LEFT SIDEBAR
        ====================================== */}

        <div className="lg:col-span-4">
          <Card className="border border-default-200">
            <Card.Content className="p-6">
              <div className="flex flex-col items-center">
                <Image
                  src={user?.image || demoUser}
                  alt={user?.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 text-lg rounded-full object-cover"
                />

                <h2 className="mt-4 text-xl font-semibold">
                  {user?.name}
                </h2>

                <p className="text-default-500">
                  {vendor.vendorType}
                </p>

                <Chip
                  color="success"
                  variant="flat"
                  className="mt-3"
                >
                  Verified Vendor
                </Chip>

                <Button
                  className="mt-5 w-full bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 text-black"
                >
                  <Pencil />
                  Edit Profile
                </Button>
              </div>

              <div className="my-6 border-t border-default-200" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Envelope className="h-4 w-4" />
                  <span className="text-sm">
                    {user?.email}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">
                    {vendor.phone}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">
                    {vendor.address}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    Joined {vendor.joinedDate}
                  </span>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* ======================================
            RIGHT CONTENT
        ====================================== */}

        <div className="space-y-6 lg:col-span-8">
          {/* STATS */}

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border border-default-200">
              <Card.Content className="p-5">
                <div className="flex items-center justify-between">
                  <Ticket className="h-5 w-5 text-primary" />

                  <Chip
                    size="sm"
                    variant="flat"
                    color="primary"
                  >
                    Active
                  </Chip>
                </div>

                <h3 className="mt-4 text-3xl font-bold">
                  {vendor.stats.activeTickets}
                </h3>

                <p className="text-sm text-default-500">
                  Active Tickets
                </p>
              </Card.Content>
            </Card>

            <Card className="border border-default-200">
              <Card.Content className="p-5">
                <div className="flex items-center justify-between">
                  <Users className="h-5 w-5 text-success" />

                  <Chip
                    size="sm"
                    variant="flat"
                    color="success"
                  >
                    Total
                  </Chip>
                </div>

                <h3 className="mt-4 text-3xl font-bold">
                  {vendor.stats.totalBookings}
                </h3>

                <p className="text-sm text-default-500">
                  Bookings
                </p>
              </Card.Content>
            </Card>

            <Card className="border border-default-200">
              <Card.Content className="p-5">
                <div className="flex items-center justify-between">
                  <BadgeDollarSign className="h-5 w-5 text-warning" />

                  <Chip
                    size="sm"
                    variant="flat"
                    color="warning"
                  >
                    Revenue
                  </Chip>
                </div>

                <h3 className="mt-4 text-3xl font-bold">
                  {vendor.stats.revenue}
                </h3>

                <p className="text-sm text-default-500">
                  Total Revenue
                </p>
              </Card.Content>
            </Card>
          </div>

          {/* BUSINESS INFORMATION */}

          <Card className="border border-default-200">
            <Card.Header className="px-6 pt-6">
              <h3 className="text-lg font-semibold">
                Business Information
              </h3>
            </Card.Header>

            <Card.Content className="p-6">
              <div className="grid gap-5 md:grid-cols-2">
                <InfoItem
                  label="Business Name"
                  value={vendor.businessName}
                />

                <InfoItem
                  label="Vendor Type"
                  value={vendor.vendorType}
                />

                <InfoItem
                  label="Email"
                  value={user?.email}
                />

                <InfoItem
                  label="Phone"
                  value={vendor.phone}
                />

                <InfoItem
                  label="Location"
                  value={vendor.address}
                />

                <InfoItem
                  label="Joined Date"
                  value={vendor.joinedDate}
                />
              </div>
            </Card.Content>
          </Card>

          {/* VERIFICATION */}

          <Card className="border border-default-200">
            <Card.Header className="px-6 pt-6">
              <h3 className="text-lg font-semibold">
                Verification Status
              </h3>
            </Card.Header>

            <Card.Content className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <VerificationItem label="Email Verification" />
                <VerificationItem label="Phone Verification" />
                <VerificationItem label="Trade License" />
                <VerificationItem label="Vendor Approval" />
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-sm text-default-500">
        {label}
      </p>

      <p className="mt-1 font-medium">
        {value}
      </p>
    </div>
  );
}

function VerificationItem({ label }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-default-200 p-4">
      <span>{label}</span>

      <Chip
        color="success"
        variant="flat"
      >
        <ShieldCheck size={14} />
        Verified
      </Chip>
    </div>
  );
}