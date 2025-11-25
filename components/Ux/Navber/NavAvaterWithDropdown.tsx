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
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 bg-gray-200 p-2 space-y-1 rounded-md shadow-md">
        {/* Dropdown items as a neat list */}
        <DropdownMenuItem asChild>
          <Link href="/profile/create-post" className="block w-full px-2 py-1 rounded hover:bg-amber-300">
            Create Post
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile/" className="block w-full px-2 py-1 rounded hover:bg-amber-300">
            Claim Requests
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile/about" className="block w-full px-2 py-1 rounded hover:bg-amber-300">
            Avout
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile/settings" className="block w-full px-2 py-1 rounded hover:bg-amber-300">
            Settings
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
