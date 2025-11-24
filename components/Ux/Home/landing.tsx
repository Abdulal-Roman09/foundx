import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import React from "react";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-50px)] bg-[url('https://i.ibb.co.com/27jPMbhN/davide-sibilio-qu-Oy9-JPj-EKs-unsplash.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-3xl mx-auto flex-1">
        <form className="flex flex-col gap-4 items-center">
          <Label htmlFor="search" className="text-white text-xl">
            Search Here
          </Label>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <Input
              id="search"
              placeholder="Search here..."
              className="pl-10 bg-gray-100"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
