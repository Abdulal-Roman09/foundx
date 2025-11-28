import { Spinner } from "@/components/ui/spinner";
import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <Spinner className="w-10 h-10 text-blue-600 animate-spin" />
    </div>
  );
};
