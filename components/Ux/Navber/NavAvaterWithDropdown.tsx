"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  User,
  FilePlus,
  BadgeCheck,
  Info,
  Settings,
  LogOut,
} from "lucide-react";
import { logout } from "@/services/AuthServices";
import { useUser } from "@/context/user.porvider";

export const NavAvatarWithDropdown = () => {
  const { setIsLoading: userLoading } = useUser();
  const hendelLogout = () => {
    logout();
    userLoading(true);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        sideOffset={8}
        className="w-56 max-h-80 overflow-auto bg-neutral-100 p-2 space-y-1 rounded-lg shadow-lg border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700"
      >
        <DropdownMenuItem asChild>
          <Link
            href="/profile"
            className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <User size={18} /> Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/profile/create-post"
            className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <FilePlus size={18} /> Create Post
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/profile"
            className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <BadgeCheck size={18} /> Claim Requests
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/profile/about"
            className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <Info size={18} /> About
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/profile/settings"
            className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <Settings size={18} /> Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <button
            onClick={hendelLogout}
            className="flex items-center gap-2 text-red-600 w-full px-3 py-2 rounded hover:bg-red-100 dark:hover:bg-red-900"
          >
            <LogOut size={18} /> Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
