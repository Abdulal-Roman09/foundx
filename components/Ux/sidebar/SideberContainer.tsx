import { Card } from "@/components/ui/card";
import React, { ReactNode } from "react";

export const SideberContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto flex gap-12">
      <div className="w-2/5">
        <Card>this is common card</Card>
      </div>
      <div className="3/5">{children}</div>
    </div>
  );
};
