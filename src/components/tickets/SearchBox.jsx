"use client";

import { useState, useEffect } from "react";

export default function SearchBox({ setFilters }) {
  const [form, setForm] = useState({
    from: "",
    to: "",
    transport: "",
    sort: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 🔥 AUTO APPLY FILTERS (REAL-TIME)
  useEffect(() => {
    setFilters(form);
  }, [form, setFilters]);

  return (
    <section className="">
      <div className="">
        <div className="rounded-3xl border bg-background/90 p-6 shadow-xl backdrop-blur-md">

          <h2 className="mb-6 text-center text-2xl font-bold">
            Find Your Journey
          </h2>

          <div className="grid gap-4 md:grid-cols-4">

            {/* FROM */}
            <input
              name="from"
              value={form.from}
              onChange={handleChange}
              placeholder="From (Dhaka)"
              className="rounded-xl border px-4 py-3"
            />

            {/* TO */}
            <input
              name="to"
              value={form.to}
              onChange={handleChange}
              placeholder="To (Cox's Bazar)"
              className="rounded-xl border px-4 py-3"
            />

            {/* TRANSPORT */}
            <select
              name="transport"
              value={form.transport}
              onChange={handleChange}
              className="rounded-xl border px-4 py-3"
            >
              <option value="">All Transport</option>
              <option value="Bus">Bus</option>
              <option value="Train">Train</option>
              <option value="Launch">Launch</option>
              <option value="Flight">Flight</option>
            </select>

            {/* SORT */}
            <select
              name="sort"
              value={form.sort}
              onChange={handleChange}
              className="rounded-xl border px-4 py-3"
            >
              <option value="">Sort by Price</option>
              <option value="low-high">Low → High</option>
              <option value="high-low">High → Low</option>
            </select>

          </div>

        </div>
      </div>
    </section>
  );
}