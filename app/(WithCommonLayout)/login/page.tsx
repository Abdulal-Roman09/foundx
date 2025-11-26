"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import FXForm from "@/components/from/FXForm";
import FxInput from "@/components/from/FxInput";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/schemas/login.schema";
import Link from "next/link";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const handleLogin = (data: LoginFormData) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-muted/30 px-3">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 shadow-xl p-8 rounded-2xl border">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Login to your account
        </h1>

        <FXForm
          onSubmit={handleLogin}
          resolver={zodResolver(loginValidationSchema)}
        >
          <div className="flex flex-col gap-4">
            <FxInput
              name="email"
              label="Email"
              type="email"
              placeholder="enter your email"
            />

            <FxInput
              name="password"
              label="Password"
              type="password"
              placeholder="enter your password"
            />

            <Button type="submit" className="w-full mt-2">
              Login
            </Button>
          </div>
        </FXForm>

        <div className="text-sm  text-muted-foreground mt-4">
          If you have no account, please{" "}
          <Link href="/register" className="text-primary underline">
            register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
