import Navber from "@/components/Ux/Navber/Navber";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navber />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
