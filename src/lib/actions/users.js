"use server";
import { serverMutation } from "../core/server";

export const updateUserProfileImage = async (email,imageUrl) => {
  return serverMutation(`/api/users/image/${email}`,{ image: imageUrl},"PATCH")
};

export const updateUserRole = async (email,role) => {
  return serverMutation(`/api/users/${email}`,{ role },"PATCH");
};

export const updateFraudStatus = async (email,isFraud) => {
  return serverMutation(`/api/users/${email}`,{ isFraud },"PATCH");
};