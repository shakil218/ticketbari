"use client";

import { Card } from "@heroui/react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

/* ---------------- FAKE DATA ---------------- */

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 62000 },
  { month: "Mar", revenue: 58000 },
  { month: "Apr", revenue: 72000 },
  { month: "May", revenue: 81000 },
  { month: "Jun", revenue: 94000 },
];

const ticketPerformance = [
  { name: "Added", value: 120 },
  { name: "Sold", value: 78 },
];

const stats = {
  ticketsAdded: 120,
  ticketsSold: 78,
  revenue: 412000,
};

export default function RevenueOverview() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold">
          Revenue Overview
        </h2>

        <p className="text-default-500 mt-1">
          Track ticket sales, revenue and performance insights.
        </p>
      </div>

      {/* KPI CARDS (HeroUI v3 correct structure) */}
      <div className="grid gap-5 md:grid-cols-3">

        <Card className="p-5 border border-default-200">
          <div className="text-sm text-default-500">
            Total Tickets Added
          </div>

          <div className="text-4xl font-bold mt-2">
            {stats.ticketsAdded}
          </div>

          <div className="text-xs text-success mt-2">
            +8.2% this month
          </div>
        </Card>

        <Card className="p-5 border border-default-200">
          <div className="text-sm text-default-500">
            Tickets Sold
          </div>

          <div className="text-4xl font-bold mt-2">
            {stats.ticketsSold}
          </div>

          <div className="text-xs text-primary mt-2">
            Improving conversion
          </div>
        </Card>

        <Card className="p-5 border border-default-200">
          <div className="text-sm text-default-500">
            Total Revenue
          </div>

          <div className="text-4xl font-bold mt-2">
            ৳{stats.revenue.toLocaleString()}
          </div>

          <div className="text-xs text-success mt-2">
            +12.5% growth
          </div>
        </Card>

      </div>

      {/* AREA CHART CARD */}
      <Card className="p-6">
        <div className="mb-5">
          <h3 className="text-xl font-semibold">
            Monthly Revenue Trend
          </h3>

          <p className="text-default-500 text-sm">
            Revenue over the last 6 months
          </p>
        </div>

        <div className="h-90">
          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={revenueData}>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis dataKey="month" />
              <YAxis />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                }}
              />

              {/* gradient */}
              <defs>
                <linearGradient
                  id="rev"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#3b82f6"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="#3b82f6"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#rev)"
              />

            </AreaChart>

          </ResponsiveContainer>
        </div>
      </Card>

      {/* BAR CHART CARD */}
      <Card className="p-6">

        <div className="mb-5">
          <h3 className="text-xl font-semibold">
            Ticket Performance
          </h3>

          <p className="text-default-500 text-sm">
            Added vs sold tickets comparison
          </p>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={ticketPerformance}>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis dataKey="name" />
              <YAxis />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                }}
              />

              <Bar
                dataKey="value"
                fill="#6366F1"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </Card>

    </div>
  );
}