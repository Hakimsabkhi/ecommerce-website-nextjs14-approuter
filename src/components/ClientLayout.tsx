"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Bb from "./bb";

import Header from "./Header";
import Headertop from "./Headertop";
import HeaderBottom from "./Headerbottom";

interface ClientLayoutProps {
  children: React.ReactNode;

  // Use the imported Category type
}
const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const excludedPaths = ["/signup", "/signin"];

  if (excludedPaths.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className=" flex flex-col  h-full">
      <Headertop />
      <Header />
      <HeaderBottom />
      {children}
      <Bb />
    </div>
  );
};

export default ClientLayout;
