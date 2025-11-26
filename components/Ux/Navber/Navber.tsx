import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "../Theme/ModeToggle";
import { NavAvatarWithDropdown } from "./NavAvaterWithDropdown";
import { Home, Menu } from "lucide-react";

// Navigation links array
const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
  { href: "/found-items", label: "Found Items" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <header className="border-b px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Menu className="md:hidden cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent align="start" className="w-40 p-2 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="block w-full py-2 px-2 rounded hover:bg-muted"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            {/* Main nav */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Home />
              {/* Desktop navigation menu */}
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="gap-4">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <ModeToggle />
            <NavAvatarWithDropdown />
          </div>
        </div>
      </header>
    </div>
  );
}
