"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/ticketBari.webp";
import { ThemeSwitch } from "./ThemeSwitch";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Tickets", href: "/tickets" },
    { label: "Dashboard", href: "/dashboard" },
  ];

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
            {/* <span className="text-2xl">🚆</span> */}
            <Image src={logo} alt="TicketBari Logo" width={40} height={40} />
            <span>TicketBari</span>
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
                        ? "text-primary font-medium"
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
            <div className="items-center gap-3 md:flex">
              <Link
                href="/login"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Login
              </Link>
            </div>
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
                          ? "bg-default-100 text-primary font-medium"
                          : "text-foreground/70 hover:bg-default-100 hover:text-primary"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="mt-2">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
