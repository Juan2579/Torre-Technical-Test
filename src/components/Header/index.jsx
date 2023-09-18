"use client";
import Image from "next/image";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  return (
    <header className="w-[90%] mx-auto xl:w-[85%] flex items-center justify-between py-5">
      <Image
        className="w-44 md:w-64"
        src="/logoPurple.png"
        width={100}
        height={30}
        alt="JobFindly Logo"
      />
      <MenuDesktop />

      <button
        onClick={openMobileMenu}
        className="w-auto h-[min-content] md:hidden"
      >
        <MenuIcon fontSize="large" sx={{ color: "black" }} />
      </button>

      <MenuMobile open={mobileMenu} onClose={closeMobileMenu} />
    </header>
  );
};
