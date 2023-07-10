"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { BarsIcon, CloseIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon } from "../assets/icons";
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Image from "next/image";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { mode, toggleTheme } = useDarkMode();

  // console.log("inside header", document.documentElement.classList);
  // console.log("query", window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <header
      className='bg-primary sticky w-full top-0 p-5 py-8 font-medium text-lg z-10
        border-b-2 border-inherit dark:border-neutral-400 md:prose-lg lg:prose-xl'>
      <div
        className='flex items-start justify-between
        max-w-7xl mx-auto xl:items-center '>
        <nav className='hidden w-full md:block md:w-auto space-x-4'>
          <NavLinks />
        </nav>

        {/* Mobile Navbar */}
        <button className='md:hidden' onClick={() => setOpenMenu(!openMenu)}>
          <BarsIcon />
        </button>
        {openMenu && (
          <div
            className='z-10 h-screen w-full top-0 left-0 fixed bg-primary
        flex items-center justify-center text-center'>
            <span className='absolute top-8 right-8' onClick={() => setOpenMenu(!openMenu)}>
              <CloseIcon className='w-8 h-8 cursor-pointer' />
            </span>
            <nav
              className='flex flex-col gap-8 font-medium text-xl '
              onClick={() => setOpenMenu(!openMenu)}>
              <NavLinks />
            </nav>
          </div>
        )}

        <nav className='flex items-center justify-center flex-wrap'>
          <Link href='https://github.com/Shuhua-L' target={"_blank"} className='w-6 mx-3'>
            <GithubIcon />
          </Link>
          <Link
            href='https://www.linkedin.com/in/shuhua-liu/'
            target={"_blank"}
            className='w-6 mr-3'>
            <LinkedinIcon />
          </Link>
          <button className='w-6 mr-3' onClick={toggleTheme}>
            {mode === "dark" ? (
              <MoonIcon />
            ) : (
              // <Image src='/icons8-sun.gif' alt='sun icon' width={32} height={32}></Image>
              <SunIcon />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
