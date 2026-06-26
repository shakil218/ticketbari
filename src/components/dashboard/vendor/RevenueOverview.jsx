"use client";

import React, { useEffect, useState } from "react";
import { Card, Spinner } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { getVendorAnalytics } from "@/lib/api/revenue";
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

export default function RevenueOverview() {
  const { data: session, isPending: sessionLoading } = authClient.useSession();
  const user = session?.user;

  const [loading, setLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState({
    stats: { ticketsAdded: 0, ticketsSold: 0, revenue: 0 },
    revenueData: [],
    ticketPerformance: [],
  });

  useEffect(() => {
    async function fetchRealAnalytics() {
      if (!user?.email) return;
      
      try {
        setLoading(true);
        // Using your structured helper utility
        const res = await getVendorAnalytics(user.email);
        
        if (res && res.success) {
          setAnalyticsData({
            stats: res.stats,
            revenueData: res.revenueData,
            ticketPerformance: res.ticketPerformance,
          });
        }
      } catch (error) {
        console.error("Error connecting to analytics stream:", error);
      } finally {
        setLoading(false);
      }
    }

    if (!sessionLoading && user?.email) {
      fetchRealAnalytics();
    }
  }, [user?.email, sessionLoading]);

  if (sessionLoading || loading) {
    return (
      <div className="min-h-100 flex flex-col items-center justify-center gap-3">
        <Spinner size="lg" color="primary" />
        <p className="text-sm text-default-400 font-medium">Compiling dynamic billing metrics...</p>
      </div>
    );
  }

  const { stats, revenueData, ticketPerformance } = analyticsData;

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Revenue Overview</h2>
        <p className="text-default-500 mt-1 text-sm">
          Dynamic metrics calculated directly from active marketplace inventories and customer invoices.
        </p>
      </div>

      {/* KPI RENDERING CARDS */}
      <div className="grid gap-5 md:grid-cols-3">
        <Card className="p-5 border border-default-200 shadow-sm">
          <div className="text-sm text-default-500 font-medium">Total Listing Units Pool</div>
          <div className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
            {stats.ticketsAdded}
          </div>
          <div className="text-xs text-success mt-2 font-medium">Active inventory balance</div>
        </Card>

        <Card className="p-5 border border-default-200 shadow-sm">
          <div className="text-sm text-default-500 font-medium">Tickets Handed to Customers</div>
          <div className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">
            {stats.ticketsSold}
          </div>
          <div className="text-xs text-primary mt-2 font-medium">Processed checkouts</div>
        </Card>

        <Card className="p-5 border border-default-200 shadow-sm">
          <div className="text-sm text-default-500 font-medium">Gross Revenue Stream</div>
          <div className="text-4xl font-bold mt-2 text-emerald-600 dark:text-emerald-400">
            ৳{stats.revenue.toLocaleString()}
          </div>
          <div className="text-xs text-success mt-2 font-medium">Settled account balance</div>
        </Card>
      </div>

      {/* GRAPHS AND CHARTS BOX */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* AREA CHART */}
        <Card className="p-6 lg:col-span-7 shadow-sm">
          <div className="mb-5">
            <h3 className="text-lg font-semibold">Monthly Revenue Trend</h3>
            <p className="text-default-500 text-xs">Live monthly metrics timeline across chronological data streams</p>
          </div>

          <div className="h-80 w-full">
            {revenueData.length === 0 ? (
              <div className="h-full flex items-center justify-center text-xs text-default-400">No active billing history recorded</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-default-800" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#888888" />
                  <YAxis tick={{ fontSize: 12 }} stroke="#888888" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "var(--background)",
                    }}
                  />
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="revenue" name="Revenue (৳)" stroke="#10b981" strokeWidth={2.5} fill="url(#rev)" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </Card>

        {/* BAR CHART */}
        <Card className="p-6 lg:col-span-5 shadow-sm">
          <div className="mb-5">
            <h3 className="text-lg font-semibold">Conversion Proportions</h3>
            <p className="text-default-500 text-xs">Contrast metrics mapping global ticket pools versus closed sales metrics</p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ticketPerformance} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-default-800" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#888888" />
                <YAxis tick={{ fontSize: 12 }} stroke="#888888" />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "var(--background)",
                  }}
                />
                <Bar dataKey="value" name="Units Count" fill="#6366F1" radius={[6, 6, 0, 0]} barSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

      </div>
    </div>
  );
}