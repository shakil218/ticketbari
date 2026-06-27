"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@heroui/react";

export default function SearchBox({ onSearch }) {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    transport: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(form);
  };

  return (
    <section className="relative z-20 -mt-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-divider bg-background/95 p-6 shadow-2xl backdrop-blur-md">

          <h2 className="mb-6 text-center text-2xl font-bold">
            <span className="bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Find </span> Your Perfect Journey
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-5">

            {/* From */}
            <div>
              <label className="mb-2 block text-sm">From</label>
              <input
                name="from"
                value={form.from}
                onChange={handleChange}
                placeholder="Dhaka"
                className="w-full rounded-xl border px-4 py-3"
                suppressHydrationWarning
              />
            </div>

            {/* To */}
            <div>
              <label className="mb-2 block text-sm">To</label>
              <input
                name="to"
                value={form.to}
                onChange={handleChange}
                placeholder="Chattogram"
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>

            {/* Date */}
            <div>
              <label className="mb-2 block text-sm">Journey Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>

            {/* Transport */}
            <div>
              <label className="mb-2 block text-sm">Transport</label>
              <select
                name="transport"
                value={form.transport}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              >
                <option value="">All</option>
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
                <option value="Launch">Launch</option>
                <option value="Flight">Flight</option>
              </select>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <Button type="submit" className="flex w-full items-center justify-center gap-2 border border-divider rounded-xl bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 px-4 py-6 font-medium text-black transition hover:opacity-90">
                <Search size={18} />
                Search
              </Button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}