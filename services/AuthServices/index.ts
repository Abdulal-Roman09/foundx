"use server";

import axiosInstance from "@/lib/AxiosInstance/Index";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (err: any) {
    console.error("❌ API Error:", err?.response?.data || err);
    throw new Error(err?.response?.data?.message || err.message || "Unknown error");
  }

};
