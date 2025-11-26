"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FxInputProps {
  variant?: "outline" | "";
  size?: "sm" | "md" | "lg";
  type?: string;
  label?: string;
  name: string;
  placeholder?: string;
}

const FxInput = ({
  variant = "outline",
  size = "md",
  type = "text",
  label,
  name,
  placeholder,
}: FxInputProps) => {
  const { control } = useFormContext<any>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-col gap-1">
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`
                ${size === "sm" ? "h-8 text-sm" : ""}
                ${size === "md" ? "h-10" : ""}
                ${size === "lg" ? "h-12 text-lg" : ""}
                ${variant === "outline" ? "border" : ""}
              `}
            />
          </FormControl>

          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default FxInput;
