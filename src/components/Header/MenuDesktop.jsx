"use client"
import Link from "next/link";
import { navLinks } from "./navLinks";

export const MenuDesktop = ({openSidebar}) => {
  return (
    <nav className="hidden gap-10 items-center md:flex">
      <ul className="flex gap-10 items-center">
        {navLinks.map((item) => (
          <li
            className="flex items-center capitalize text-primary-purple"
            key={`${item}`}
          >
            <Link className="text-center font-bold" href={`#${item}`}>
              {item}
            </Link>
          </li>
        ))}
        <li onClick={openSidebar} className="flex items-center capitalize text-primary-purple text-center font-bold cursor-pointer">
          Favorites
        </li>
      </ul>
      <Link
        href="#jobs"
        className="bg-primary-blue text-white font-bold rounded-md py-4 px-6 cursor-pointer transition-all hover:opacity-50"
      >
        GET STARTED
      </Link>
    </nav>
  );
};
