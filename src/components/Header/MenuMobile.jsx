"use client"
import { Box, Drawer, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks } from "./navLinks";
import Link from "next/link";

export const MenuMobile = ({ open, onClose, openSidebar }) => {
  return (
    <Drawer
      transitionDuration={500}
      className="md:hidden"
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        className="bg-primary-purple w-screen h-screen flex flex-col items-start p-6 gap-10 text-white"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <div className="w-full flex justify-between items-center">
          <Image
            className="w-44"
            src="/logoWhite.png"
            alt="JobFindly Logo"
            width={80}
            height={30}
            priority={true}
            quality={100}
          />
          <IconButton onClick={onClose}>
            <CloseIcon className="text-white" fontSize="large" />
          </IconButton>
        </div>
        <ul className="flex flex-col gap-5">
          {navLinks.map((item) => (
            <li
              className="flex items-center capitalize text-white"
              key={`${item}`}
            >
              <Link className="h-11 text-center font-bold" href={`#${item}`}>
                {item}
              </Link>
            </li>
          ))}
          <li onClick={openSidebar} className="flex h-11 text-center font-bold items-center capitalize text-white cursor-pointer">
            Favorites
          </li>
          <a href="#people" className="bg-primary-blue text-white font-bold rounded-md py-4 px-6">
            GET STARTED
          </a>
        </ul>
      </Box>
    </Drawer>
  );
};
