"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// Import Hero UI components
import { Form, Input, Select, ListBox, Button } from "@heroui/react";

export default function SearchBox() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const debounceRef = useRef(null);

  const [form, setForm] = useState({
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    transport: searchParams.get("transport") || "",
    sort: searchParams.get("sort") || "",
  });

  // Keep state synced with URL (Back/Forward & Refresh)
  useEffect(() => {
    setForm({
      from: searchParams.get("from") || "",
      to: searchParams.get("to") || "",
      transport: searchParams.get("transport") || "",
      sort: searchParams.get("sort") || "",
    });
  }, [searchParams]);

  const updateURL = (values) => {
    const params = new URLSearchParams(searchParams.toString());

    values.from ? params.set("from", values.from) : params.delete("from");
    values.to ? params.set("to", values.to) : params.delete("to");
    values.transport ? params.set("transport", values.transport) : params.delete("transport");
    values.sort ? params.set("sort", values.sort) : params.delete("sort");

    // Whenever filters change, go back to first page
    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };

    setForm(updatedForm);

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      updateURL(updatedForm);
    }, 250);
  };

  // Hero UI v3 Select returns the chosen value directly from onChange
  const handleSelectChange = (name, value) => {
    // If user picks the default empty option, normalize it to empty string
    const normalizedValue = value === "all" || value === "none" ? "" : value;
    const updatedForm = { ...form, [name]: normalizedValue };

    setForm(updatedForm);
    updateURL(updatedForm);
  };

  const clearFilters = () => {
    clearTimeout(debounceRef.current);

    setForm({
      from: "",
      to: "",
      transport: "",
      sort: "",
    });

    router.replace(pathname, {
      scroll: false,
    });
  };

  return (
    <section>
      {/* Hero UI Native accessible Form Container */}
      <Form className="rounded-3xl border border-border bg-background/90 p-6 shadow-xl backdrop-blur-md w-full">
        <h2 className="mb-6 w-full text-center text-2xl font-bold text-foreground">
          Find Your Journey
        </h2>

        <div className="grid w-full gap-4 md:grid-cols-4 items-end">
          {/* FROM INPUT */}
          <Input
            name="from"
            value={form.from}
            onChange={handleInputChange}
            placeholder="From (Dhaka)"
            variant="primary"
            aria-label="From Location"
          />

          {/* TO INPUT */}
          <Input
            name="to"
            value={form.to}
            onChange={handleInputChange}
            placeholder="To (Cox's Bazar)"
            variant="primary"
            aria-label="To Location"
          />

          {/* TRANSPORT SELECT */}
          <Select
            placeholder="All Transport"
            aria-label="Transport Type"
            value={form.transport || "all"}
            onChange={(val) => handleSelectChange("transport", val)}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="all" textValue="All Transport">All Transport</ListBox.Item>
                <ListBox.Item id="Bus" textValue="Bus">Bus</ListBox.Item>
                <ListBox.Item id="Train" textValue="Train">Train</ListBox.Item>
                <ListBox.Item id="Launch" textValue="Launch">Launch</ListBox.Item>
                <ListBox.Item id="Flight" textValue="Flight">Flight</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* SORT SELECT */}
          <Select
            placeholder="Sort by Price"
            aria-label="Sort Order"
            value={form.sort || "none"}
            onChange={(val) => handleSelectChange("sort", val)}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="none" textValue="Sort by Price">Sort by Price</ListBox.Item>
                <ListBox.Item id="low-high" textValue="Low → High">Low → High</ListBox.Item>
                <ListBox.Item id="high-low" textValue="High → Low">High → Low</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* CLEAR FILTERS BUTTON */}
        <div className="mt-5 flex w-full justify-end">
          <Button
            type="button"
            onPress={clearFilters}
            variant="bordered"
            className="rounded-xl border border-border"
          >
            Clear Filters
          </Button>
        </div>
      </Form>
    </section>
  );
}