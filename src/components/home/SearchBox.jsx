"use client";

import { Search } from "lucide-react";
import { Button } from "@heroui/react";

export default function SearchBox() {
  return (
    <section className="relative z-20 -mt-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-divider bg-background/95 p-6 shadow-2xl backdrop-blur-md">
          
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
            Find Your Perfect Journey
          </h2>

          <form className="grid gap-4 md:grid-cols-5">
            
            {/* From */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                From
              </label>

              <input
                type="text"
                placeholder="Dhaka"
                className="w-full rounded-xl border border-divider bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            {/* To */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                To
              </label>

              <input
                type="text"
                placeholder="Chattogram"
                className="w-full rounded-xl border border-divider bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            {/* Journey Date */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Journey Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-divider bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            {/* Ticket Type */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Transport
              </label>

              <select className="w-full rounded-xl border border-divider bg-background px-4 py-3 outline-none transition focus:border-primary">
                <option>Bus</option>
                <option>Train</option>
                <option>Launch</option>
                <option>Flight</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button
                type="submit"
                className="flex w-full items-center justify-center gap-2 border border-divider rounded-xl bg-primary px-4 py-6 font-medium text-primary-foreground transition hover:opacity-90"
              >
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