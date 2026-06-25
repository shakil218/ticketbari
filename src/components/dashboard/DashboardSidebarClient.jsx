"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronRight } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

import {
  LayoutDashboard,
  User,
  Ticket,
  CreditCard,
  PlusCircle,
  ClipboardList,
  BarChart3,
  Users,
  Megaphone,
} from "lucide-react";

export default function DashboardSidebarClient({ role }) {
  const pathname = usePathname();

  // User Dashboard
  const userNavItems = [
    {
      icon: User,
      label: "Profile",
      href: "/dashboard/user/profile",
    },
    {
      icon: Ticket,
      label: "My Booked Tickets",
      href: "/dashboard/user/my-bookings",
    },
    {
      icon: CreditCard,
      label: "Transaction History",
      href: "/dashboard/user/transactions",
    },
  ];

  // Vendor Dashboard
  const vendorNavItems = [
    {
      icon: User,
      label: "Profile",
      href: "/dashboard/vendor/profile",
    },
    {
      icon: PlusCircle,
      label: "Add Ticket",
      href: "/dashboard/vendor/add-ticket",
    },
    {
      icon: Ticket,
      label: "My Added Tickets",
      href: "/dashboard/vendor/my-added-tickets",
    },
    {
      icon: ClipboardList,
      label: "Requested Bookings",
      href: "/dashboard/vendor/requested-bookings",
    },
    {
      icon: BarChart3,
      label: "Revenue Overview",
      href: "/dashboard/vendor/revenue-overview",
    },
  ];

  // Admin Dashboard
  const adminNavItems = [
    {
      icon: User,
      label: "Profile",
      href: "/dashboard/admin/profile",
    },
    {
      icon: Ticket,
      label: "Manage Tickets",
      href: "/dashboard/admin/manage-tickets",
    },
    {
      icon: Users,
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
    },
    {
      icon: Megaphone,
      label: "Advertise Tickets",
      href: "/dashboard/admin/advertise-tickets",
    },
  ];

  const navItemsMap = {
    user: userNavItems,
    vendor: vendorNavItems,
    admin: adminNavItems,
  };

  const navItems = navItemsMap[role] || userNavItems;

  const navContent = (
    <nav className="flex flex-col gap-1">
      {/* Header */}
      <div className="border-b border-divider pb-4 mb-3">
        <p className="flex items-center gap-3 px-3 text-lg font-semibold text-foreground">
          <LayoutDashboard className="size-5 text-primary" />
          Dashboard
        </p>
      </div>

      {/* Navigation Links */}
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
  key={item.label}
  href={item.href}
  className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-primary/15 text-primary border border-primary/20"
      : "text-foreground hover:bg-default"
  }`}
>
  <item.icon
    className={`size-5 transition-colors ${
      isActive
        ? "text-primary"
        : "text-default-500 group-hover:text-primary"
    }`}
  />

  <span>{item.label}</span>
</Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden sm:block sm:w-56 lg:w-64 shrink-0 border-r border-divider bg-content1 p-4">
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      <Drawer>
        <Button
          className="sm:hidden rounded-xl"
          variant="ghost"
        >
          <ChevronRight />
          Menu
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />

              <Drawer.Body className="bg-content1 p-4">
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}