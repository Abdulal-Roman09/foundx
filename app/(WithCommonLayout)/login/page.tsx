"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import FXForm from "@/components/from/FXForm";
import FxInput from "@/components/from/FxInput";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/schemas/login.schema";
import Link from "next/link";
import { useUserLogin } from "@/hooks/auth.hooks";
import { FieldValues } from "react-hook-form";
import { LoadingSpnner } from "@/components/Ux/Loading/LoadingSpnner";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { mutateAsync: handleUserLoginAsync, isPending } = useUserLogin();

  const handleLogin = async (data: FieldValues) => {
    try {
      await handleUserLoginAsync(data);
    } catch (err) {
      // error handled by hook toast; optionally handle here
    }
  };

  return (
    <>
      <div className="h-[calc(100vh-100px)] flex justify-center items-center bg-muted/30 px-3">
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
                placeholder="Enter your email"
              />

              <FxInput
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />

              <Button
                type="submit"
                className="w-full mt-2 flex justify-center"
                disabled={isPending}
              >
                {isPending ? <LoadingSpnner /> : "Login"}
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
    </>
  );
};

export default LoginPage;
