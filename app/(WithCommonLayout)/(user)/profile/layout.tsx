"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import React, { ReactNode } from "react";
import { useUser } from "@/context/user.porvider";

const layout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  console.log(user)

  return (
    <div className="container mx-auto flex gap-12 py-10">
      {/* Profile Card */}
      <div className="w-2/5">
        <Card className="rounded-2xl shadow-lg border border-gray-200 dark:border-neutral-700">
          <CardHeader className="flex flex-col items-center gap-3 pb-2">
            <Avatar className="w-24 h-24 border-4 border-primary/30 shadow">
              <AvatarImage src={user?.profilePhoto} />
              <AvatarFallback>
                <User className="w-10 h-10" />
              </AvatarFallback>
            </Avatar>

            <CardTitle className="text-xl font-semibold text-center">
              {user?.name || "Unknown User"}
            </CardTitle>

            <p className="text-sm text-gray-600 dark:text-gray-300 text-center capitalize">
              {user?.role || "User"}
            </p>
          </CardHeader>

          <CardContent className="space-y-4 mt-4">
            {/* Email */}
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Email:
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {user?.email || "N/A"}
              </span>
            </div>

            {/* Mobile */}
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Mobile:
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {user?.mobileNumber || "N/A"}
              </span>
            </div>

            {/* Role */}
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Role:
              </span>
              <span className="text-gray-600 dark:text-gray-300 capitalize">
                {user?.role || "User"}
              </span>
            </div>

            {/* Status */}
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Status:
              </span>
              <span className="text-gray-600 dark:text-gray-300 capitalize">
                {user?.status || "Active"}
              </span>
            </div>

            {/* Joined Date */}
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Joined:
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Area */}
      <div className="w-3/5">{children}</div>
    </div>
  );
};

export default layout;
