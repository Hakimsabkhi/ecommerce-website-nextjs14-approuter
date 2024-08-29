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

  const excludedPaths = ["/signup", "/signin"];

  if (excludedPaths.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col h-full">
      <Headertop />
      <Header session={session} />
      <HeaderBottom />
      {children}
      <Bb />
    </div>
  );
};

export default ClientLayout;
