"use client";

import { useState } from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
  Button,
} from "@heroui/react";
import { Mail, User, BookText, SendHorizonal } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    console.log(data);

    setIsSubmitting(true);

    // TODO:
    // await sendMessage(data);

    setTimeout(() => {
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm dark:border-gray-700 dark:bg-zinc-900">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
            </span>

            <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200">
              Send Message
            </span>
          </div>
        </div>

          <h2 className="text-4xl font-bold lg:text-5xl">
            We&apos;d Love to
            <span className="block bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h2>

          <p className="mt-5 text-lg text-default-500">
            Have a question, feedback, or need help with your booking? Fill out
            the form below and our team will respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-3xl border border-default-200 bg-content1 p-8 shadow-sm">
            <Form
              validationBehavior="native"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <TextField name="name" isRequired>
                <Label>Full Name</Label>

                <Input
                  placeholder="Enter your full name"
                  startContent={<User size={18} />}
                />

                <FieldError />
              </TextField>

              {/* Email */}
              <TextField name="email" type="email" isRequired>
                <Label>Email Address</Label>

                <Input
                  placeholder="Enter your email"
                  startContent={<Mail size={18} />}
                />

                <FieldError />
              </TextField>

              {/* Subject */}
              <TextField name="subject" isRequired>
                <Label>Subject</Label>

                <Input
                  placeholder="What's your message about?"
                  startContent={<BookText size={18} />}
                />

                <FieldError />
              </TextField>

              {/* Message */}
              <TextField name="message" isRequired>
                <Label>Message</Label>

                <TextArea placeholder="Write your message..." rows={6} />

                <FieldError />
              </TextField>

              <Button
                type="submit"
                className="w-full bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500"
                isLoading={isSubmitting}
              >
                {!isSubmitting && <SendHorizonal size={18} />}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </div>

          {/* MAP */}
          <div className="overflow-hidden rounded-3xl border border-default-200 shadow-sm">
            <iframe
              title="TicketBari Office"
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              loading="lazy"
              allowFullScreen
              className="h-full min-h-155 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
