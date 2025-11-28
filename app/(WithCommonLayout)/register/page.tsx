"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import FXForm from "@/components/from/FXForm";
import FxInput from "@/components/from/FxInput";
import registerValidationSchema from "@/schemas/register.schema";
import { useUserRegisteration } from "@/hooks/auth.hooks";

const RegisterPage = () => {
  const { mutate: handleUserRegister, isPending } = useUserRegisteration();

  const onSubmit = (data: any) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    console.log("Submitting user data:", userData);
    handleUserRegister(userData);
  };

  if (isPending) {
    console.log("loading");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-muted/30 px-3">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 shadow-xl p-8 rounded-2xl border">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h1>

        <FXForm
          onSubmit={onSubmit}
          resolver={zodResolver(registerValidationSchema)}
        >
          <div className="flex flex-col gap-4">
            <FxInput
              name="name"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
            />
            <FxInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />
            <FxInput
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <FxInput
              name="mobileNumber"
              label="Mobile Number"
              type="text"
              placeholder="Enter your mobile number"
            />

            <Button type="submit" className="w-full mt-2" disabled={isPending}>
              {isPending ? "Registering..." : "Register"}
            </Button>
          </div>
        </FXForm>

        <div className="text-sm text-center text-muted-foreground mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-primary underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
