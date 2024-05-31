import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const user = { name: "paul" };
  const loggedIn = { name: "paul" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={user} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default layout;
