import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const NavAvatarWithDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="absolute w-56 bg-red-300 p-4 space-y-2 rounded-md shadow-md"
        sideOffset={5}
        align="center"
      >
        <DropdownMenuItem asChild>
          <Link
            href="/profile"
            className="block w-full px-3 py-2 rounded hover:bg-gray-300"
          >
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/profile/create-post"
            className="block w-full px-3 py-2 rounded hover:bg-gray-300"
          >
            Create Post
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/profile/"
            className="block w-full px-3 py-2 rounded hover:bg-gray-300"
          >
            Claim Requests
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/profile/about"
            className="block w-full px-3 py-2 rounded hover:bg-gray-300"
          >
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/profile/settings"
            className="block w-full px-3 py-2 rounded hover:bg-gray-300"
          >
            Settings
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
