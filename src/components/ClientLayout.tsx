"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Bb from "./bb";
import Header from "./Header";
import Headertop from "./Headertop";
import HeaderBottom from "./Headerbottom";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const { data: session } = useSession(); // Fetch session using useSession hook
  const pathname = usePathname();

  const excludedPaths = ["/signup", "/signin", "/checkout"];

  if (excludedPaths.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className=" flex flex-col min-h-screen">
      <Headertop />
      <Header/>
      <HeaderBottom />
      <div className="flex-grow">
      {children}
      </div>
      <Bb />
    </div>
  );
};

export default ClientLayout;
