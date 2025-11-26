"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import FXForm from "@/components/from/FXForm";
import FxInput from "@/components/from/FxInput";
import registerValidationSchema from "@/schemas/register.schema";


// Dynamic fields for register
const registerFields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
  { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
  { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
  { name: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Confirm your password" },
];

const RegisterPage = () => {
  const handleRegister = (data: any) => {
    console.log("Register Data:", data);
    // Send data to API here
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-muted/30 px-3">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 shadow-xl p-8 rounded-2xl border">
        <h1 className="text-2xl font-semibold text-center mb-6">Create an Account</h1>

        <FXForm onSubmit={handleRegister} resolver={zodResolver(registerValidationSchema)}>
          <div className="flex flex-col gap-4">
            {registerFields.map((field) => (
              <FxInput key={field.name} {...field} />
            ))}

            <Button type="submit" className="w-full mt-2">
              Register
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
