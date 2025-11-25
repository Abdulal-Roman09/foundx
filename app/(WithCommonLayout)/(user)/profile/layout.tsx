import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      profile
      {children}
    </div>
  );
};

export default layout;
