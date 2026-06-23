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
  Spinner,
} from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link'

export default function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    
    // BETTER AUTH LOGIC WILL GO HERE LATER
    try {
      setLoading(true);
      const { data, error } = await authClient.signUp.email({
        ...userData,
        role:"user",
      });
      console.log("user:", data);

      if (error) {
        throw new Error(
          error?.message ||
            "Registration failed. Email might already be in use.",
        );
      }

      toast.success("Account created successfully! Welcome to TicketBari.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      router.push(redirectTo);
    } catch (err) {
      toast.error(
        err.message || "An unexpected error occurred during signup.",
        {
          position: "top-center",
          autoClose: 4000,
          theme: "colored",
        },
      );
    } finally {
      setLoading(false);
    }
  };

  //Google Sign-In Handler
  const handleGoogleLogin = async () => {
    try {
      const data = await authClient.signIn.social({
        provider: "google",
      });

      if (data?.session) {
        toast.success("Welcome back to TicketBari! Redirecting...", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
        router.push(redirectTo);
      }
    } catch (err) {
      toast.error("Google authentication failed. Please try again.");
    }
    console.log("data",data);
  };

  return (
    <div className="flex items-center justify-center bg-background text-foreground px-4 py-16 transition-colors duration-300">
      <div className="space-y-6 w-full max-w-md bg-card text-card-foreground shadow-xl rounded-2xl p-8 border border-border">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center">
          Join <span className="bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 bg-clip-text text-transparent">TicketBari</span>
        </h1>

        <p className="text-sm text-muted-foreground text-center">
          Create an account to start booking or listing tickets today
        </p>

        {/* Google Button */}
        <Button className="w-full" variant="tertiary" onClick={handleGoogleLogin}>
          <Icon icon="devicon:google" />
          Continue with Google
        </Button>

        <Form onSubmit={onSubmit} className="space-y-4">

          {/* Name */}
          <TextField isRequired name="name">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

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
            disabled={loading}
            className="w-full bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 text-black hover:opacity-90"
          >
            {loading ? <Spinner color="current" size="sm" /> : null}
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

          {/* Login */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
            href={`/auth/signin?redirect=${redirectTo}`}
              className="bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 bg-clip-text text-transparent cursor-pointer font-medium hover:underline"
            >
              Sign In here
            </Link>
          </p>

        </Form>
      </div>
    </div>
  );
}