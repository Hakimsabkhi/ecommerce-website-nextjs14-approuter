"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Bb from "./bb";

import Header from "./Header";
import Headertop from "./Headertop";
import CategoryHeader from "./Category/CategoryHeader";

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
      <CategoryHeader />
      {children}
      <Bb />
    </div>
  );
};

export default ClientLayout;
