"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Bb from "./bb";
import Headerbottom from "./Headerbottom";
import Header from "./Header";
import Headertop from "./Headertop";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  const excludedPaths = ["/configurateur", "/signin"];

  if (excludedPaths.includes(pathname)) {
    return <>{children}</>;
  }

  return (
 
      <div className=" flex flex-col  h-full">
        <Headertop />
        <Header />
        <Headerbottom />
        {children}
        <Bb />
      </div>
    
  );
};

export default ClientLayout;
