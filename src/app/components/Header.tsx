"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { BarsIcon, CloseIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon } from "../assets/icons";
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { mode, toggleTheme } = useDarkMode();

  return (
    <header
      className='bg-primary sticky w-full top-0 px-5 py-4 lg:py-6  z-10
        border-b-2 border-inherit dark:border-neutral-400'>
      <div
        className='flex items-start justify-between
        max-w-6xl mx-auto xl:items-center '>
        <nav className='hidden w-full md:block md:w-auto space-x-4 font-medium'>
          <NavLinks />
        </nav>

        {/* Mobile Navbar */}
        <button className='md:hidden' onClick={() => setOpenMenu(!openMenu)}>
          <BarsIcon className='h-5 w-5 md:h-6 md:w-6' />
        </button>
        {openMenu && (
          <div
            className='z-10 h-screen w-full top-0 left-0 fixed bg-primary
        flex items-center justify-center text-center'>
            <span className='absolute top-8 right-8' onClick={() => setOpenMenu(!openMenu)}>
              <CloseIcon className='w-8 h-8 cursor-pointer' />
            </span>
            <nav
              className='flex flex-col gap-8 font-medium prose-xl'
              onClick={() => setOpenMenu(!openMenu)}>
              <NavLinks />
            </nav>
          </div>
        )}

        <nav className='flex items-center justify-center flex-wrap space-x-3 ld:space-x-5 not-prose'>
          <Link href='https://github.com/Shuhua-L' target={"_blank"}>
            <GithubIcon className='h-5 w-5 md:h-6 md:w-6' />
          </Link>
          <Link href='https://www.linkedin.com/in/shuhua-liu/' target={"_blank"}>
            <LinkedinIcon className='h-5 w-5 md:h-6 md:w-6' />
          </Link>
          <button className='w-6' onClick={toggleTheme}>
            {mode === "dark" ? (
              <MoonIcon className='h-5 w-5 md:h-6 md:w-6' />
            ) : (
              // <Image src='/icons8-sun.gif' alt='sun icon' width={32} height={32}></Image>
              <SunIcon className='h-5 w-5 md:h-6 md:w-6' />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
