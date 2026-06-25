"use server";

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const updateUserProfileImage = async (email,imageUrl) => {
  return serverMutation(`/api/users/${email}`,{ image: imageUrl},"PATCH")
  revalidatePath("/dashboard/user/profile");
};