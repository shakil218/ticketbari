"use client";

import { Accordion } from "@heroui/react";
import Link from "next/link";
import {
  CircleHelp,
  Ticket,
  CreditCard,
  RotateCcw,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    id: "booking",
    icon: <Ticket size={20} />,
    question: "How do I book a ticket?",
    answer:
      "Browse available tickets, open the ticket details page, choose the number of seats, and confirm your booking. After successful payment your booking will be confirmed.",
  },
  {
    id: "payment",
    icon: <CreditCard size={20} />,
    question: "Which payment methods are supported?",
    answer:
      "We support secure online payment methods. Available gateways may include bKash, Nagad, Rocket, Visa and Mastercard depending on your region.",
  },
  {
    id: "cancel",
    icon: <RotateCcw size={20} />,
    question: "Can I cancel my booking?",
    answer:
      "Cancellation depends on the transport provider's policy. If cancellation is available, the refund will be processed according to the provider's refund terms.",
  },
  {
    id: "arrival",
    icon: <Clock3 size={20} />,
    question: "When should I arrive before departure?",
    answer:
      "We recommend arriving at least 30 minutes before departure to complete any necessary verification and boarding procedures.",
  },
  {
    id: "security",
    icon: <ShieldCheck size={20} />,
    question: "Is my payment information secure?",
    answer:
      "Yes. All payments are processed through secure encrypted payment gateways to help protect your personal and financial information.",
  },
  {
    id: "support",
    icon: <CircleHelp size={20} />,
    question: "How can I contact support?",
    answer:
      "If you need assistance, you can reach our support team through the Contact page or the support email listed on our website.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-10 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 backdrop-blur-md">
              {/* Glow Dot */}
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_var(--color-violet-500)]" />
              </span>

              <span className="text-sm font-semibold tracking-wide text-primary">
                Frequently Asked Questions
              </span>
            </div>
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold">
            Everything You Need to 
            <span className="block bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                          Know
                        </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-default-500">
            Find quick answers about booking tickets, payments, cancellations,
            travel information, and customer support.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          allowsMultipleExpanded
          variant="surface"
          className="rounded-3xl"
        >
          {faqs.map((faq) => (
            <Accordion.Item key={faq.id} id={faq.id} className="rounded-2xl">
              <Accordion.Heading>
                <Accordion.Trigger className="px-6 py-5 hover:bg-default-100 transition">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {faq.icon}
                    </div>

                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                    </div>

                    <Accordion.Indicator />
                  </div>
                </Accordion.Trigger>
              </Accordion.Heading>

              <Accordion.Panel>
                <Accordion.Body className="px-6 pb-6 pl-21 text-default-600 leading-7">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* Bottom Card */}
        <div className="mt-12 rounded-3xl bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">Still Have Questions?</h3>

          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Our support team is always ready to help you with booking, payment,
            or travel-related questions.
          </p>

          <Link href="/contact">
          <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-violet-700 transition hover:scale-105">
            Contact Support
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
