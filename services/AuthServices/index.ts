"use server";

import axiosInstance from "@/lib/AxiosInstance/Index";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: string;
  status: string;
  profilePhoto: string
}

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message || "Unknown error");
  }
};

export const loginUser = async (credentials: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", credentials);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message || "Unknown error");
  }
};

export const logout = async () => {
  cookies().delete("accessToken")
  cookies().delete("refreshToken")
}

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null
  if (accessToken) {
    decodedToken = jwtDecode<DecodedToken>(accessToken);

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
      profilePhoto: decodedToken.profilePhoto,
    };
  }
  return decodedToken

};
