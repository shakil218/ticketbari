"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Icon } from "@iconify/react";

import {
  Form,
  TextField,
  Input,
  Label,
  Button,
  FieldError,
} from "@heroui/react";

export default function SignInForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("FORM DATA:", data);

    // =====================================================
    // 🔐 BETTER AUTH LOGIC WILL GO HERE LATER
    // =====================================================

    router.push("/");
  };

  return (
    <div className="flex items-center justify-center bg-background text-foreground px-4 py-16 transition-colors duration-300">
      <div className="space-y-6 w-full max-w-md bg-card text-card-foreground shadow-xl rounded-2xl p-8 border border-border">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center">
          Join <span className="bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 bg-clip-text text-transparent">TicketBari</span>
        </h1>

        <p className="text-sm text-muted-foreground text-center">
          Sign in to your account to start booking or listing tickets today
        </p>

        {/* Google Button */}
        <Button className="w-full" variant="tertiary">
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>

        <Form onSubmit={onSubmit} className="space-y-4">

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type={showPassword ? "text" : "password"}
            validate={(value) => {
              if (!value || value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>

            <div className="relative w-full">
              <Input
                name="password"
                placeholder="••••••••"
                className="w-full pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 text-black hover:opacity-90"
          >
            Sign In
          </Button>

          {/* Sign Up */}
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => router.push("/auth/signup")}
              className="bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 bg-clip-text text-transparent cursor-pointer font-medium"
            >
              Sign Up here
            </span>
          </p>

        </Form>
      </div>
    </div>
  );
}