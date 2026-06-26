"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, Chip } from "@heroui/react";
import { Camera } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { updateUserProfileImage } from "@/lib/actions/users";

export default function UserProfile({ user }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const isFraud =
    user?.role === "vendor" &&
    user?.isFraud === true;

  const handleImageUpdate = async (e) => {
    if (isFraud) {
      toast.error(
        "Your vendor account has been suspended. You cannot update your profile photo."
      );
      return;
    }

    try {
      setLoading(true);

      const file = e.target.files?.[0];

      if (!file) return;

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error("Image upload failed");
      }

      const imageUrl = data.data.display_url;

      const result = await updateUserProfileImage(
        user.email,
        imageUrl
      );

      if (result?.modifiedCount > 0) {
        router.refresh();
        toast.success("Profile photo updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile photo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Profile Image */}
          <div className="relative">

            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
              <Image
                src={
                  user?.image ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt={user?.name || "User"}
                fill
                className="object-cover"
              />
            </div>

            <label
              htmlFor="profile-image"
              className={`absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition
                ${
                  isFraud
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer hover:scale-105"
                }`}
            >
              <Camera size={18} />
            </label>

            <input
              id="profile-image"
              type="file"
              accept="image/*"
              disabled={loading || isFraud}
              onChange={handleImageUpdate}
              className="hidden"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-default-500 text-sm">
    Welcome back 👋
  </p>

            <h2 className="text-3xl font-bold">
              {user?.name || "User"}
            </h2>

            <p className="mt-2 text-default-500">
              {user?.email}
            </p>

            <Chip
              color={isFraud ? "danger" : "success"}
              variant="soft"
              className="mt-4 capitalize"
            >
              {isFraud
                ? "Vendor (Fraud)"
                : user?.role || "user"}
            </Chip>

            {loading && (
              <p className="mt-3 text-sm text-primary">
                Uploading image...
              </p>
            )}
          </div>

        </div>

        {/* Extra Info */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="rounded-xl bg-default-100 p-4">
            <p className="text-sm text-default-500">
              Account Status
            </p>

            <p
              className={`font-semibold ${
                isFraud
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {isFraud ? "Fraud" : "Active"}
            </p>
          </div>

          <div className="rounded-xl bg-default-100 p-4">
            <p className="text-sm text-default-500">
              Member Since
            </p>

            <p className="font-semibold">
              {new Date(
                user?.createdAt || Date.now()
              ).getFullYear()}
            </p>
          </div>

        </div>
      </Card>
    </div>
  );
}