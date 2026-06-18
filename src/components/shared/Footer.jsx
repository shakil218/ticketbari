import Link from "next/link";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import logo from "@/assets/ticketBari.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1 - Logo + Description */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Image src={logo} alt="TicketBari Logo" width={40} height={40} />
              <span className="bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 bg-clip-text text-transparent">TicketBari</span>
            </div>

            <p className="mt-3 text-sm text-foreground/70">
              Book bus, train, launch & flight tickets easily with TicketBari.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="hover:text-primary">
                  All Tickets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Contact Info
            </h3>

            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <span className="font-medium">Email:</span>{" "}
                support@ticketbari.com
              </li>
              <li>
                <span className="font-medium">Phone:</span> +880 1XXXXXXXXX
              </li>
              <li className="mt-3 flex items-center gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition hover:text-primary"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </Link>

                <Link
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition hover:text-primary"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="h-5 w-5" />
                </Link>

                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition hover:text-primary"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Payment Methods */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Payment Methods
            </h3>

            <div className="flex items-center gap-3 text-sm text-foreground/70">
              {/* Replace with real icons later */}
              <div className="rounded-md border border-divider px-3 py-2">
                Stripe
              </div>
              <div className="rounded-md border border-divider px-3 py-2">
                Card
              </div>
              <div className="rounded-md border border-divider px-3 py-2">
                Mobile Pay
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-divider pt-4 text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} <span className="bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 bg-clip-text text-transparent font-semibold">TicketBari</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
