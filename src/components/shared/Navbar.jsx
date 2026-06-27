"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.png";
import demoUser from "@/assets/demoUser.png";
import { ThemeSwitch } from "./ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { User, LogOut } from "lucide-react";
import { Button, Dropdown, Label, Spinner } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "All Tickets", href: "/tickets" },
    { label: "Help & Support", href: "/contact" },
  ];

  const dashboardLinks = {
    user: "/dashboard/user/profile",
    vendor: "/dashboard/vendor/profile",
    admin: "/dashboard/admin/profile"
  }

  if (user?.email) {
    navLinks[3] = { label: "Dashboard", href: dashboardLinks[user?.role || "user"] };
    navLinks[4] = { label: "Help & Support", href: "/contact" };
  }

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-divider bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto">
        <header className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <Image src={logo} alt="TicketBari Logo" width={40} height={40} />
            <span className="bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              TicketBari
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`
                    relative text-sm transition-colors duration-200
                    ${
                      isActive(link.href)
                        ? "bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent border-b-2 border-purple-500 font-semibold"
                        : "text-foreground/70 hover:text-primary"
                    }
                  `}
                >
                  {link.label}

                  {/* Active underline */}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeSwitch />
            {isPending ? (
              <div className="flex items-center gap-2">
                <Spinner color="warning" size="sm" />
                <span className="text-xs text-muted">Loading...</span>
              </div>
            ) : user ? (
              <Dropdown>
                <Button
                  variant="light"
                  className="flex items-center gap-3 px-2"
                >
                  <span className="hidden md:block font-medium">
                    Hi, {user?.name.split(" ")[0]}
                  </span>

                  <Image
                    src={user?.image || demoUser}
                    alt={user?.name}
                    width={35}
                    height={35}
                    className="rounded-full"
                  />
                </Button>

                <Dropdown.Popover>
                  <Dropdown.Menu aria-label="User Menu">
                    {/* User Info */}
                    <Dropdown.Item
                      id="user-info"
                      textValue={user?.name}
                      isDisabled
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{user?.name}</span>
                        <span className="text-xs text-default-500">
                          {user?.email}
                        </span>
                      </div>
                    </Dropdown.Item>

                    {/* Profile */}
                    <Dropdown.Item id="profile" textValue="My Profile">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <Label>My Profile</Label>
                      </div>
                    </Dropdown.Item>

                    {/* Logout */}
                    <Dropdown.Item
                      id="logout"
                      textValue="Logout"
                      variant="danger"
                      onClick={async () => await authClient.signOut()}
                    >
                      <div className="flex items-center text-danger gap-2">
                        <LogOut size={16} />
                        <Label>Sign Out</Label>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            ) : (
              <div className="items-center gap-3 md:flex">
                <Link
                  href="/auth/signin"
                  className="rounded-lg bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Sign In
                </Link>
              </div>
            )}

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-foreground md:hidden"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-divider md:hidden">
            <ul className="flex flex-col p-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      block rounded-lg px-3 py-3 text-sm
                      ${
                        isActive(link.href)
                          ? "bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent border-b-2 border-purple-500 font-semibold"
                          : "text-foreground/70 hover:text-primary"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="mt-2">
                <Link
                  href="/auth/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 px-4 py-2 text-center text-sm font-medium text-black transition hover:opacity-90"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
