"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { BarsIcon, CloseIcon, EmailIcon, GithubIcon, LinkedinIcon } from "../components/icons";
import { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className='sticky top-0 p-5 py-8 font-medium flex items-start justify-between
        max-w-7xl mx-auto xl:items-center bg-slate-50 border-gray-300'>
      <nav className='hidden w-full md:block md:w-auto space-x-4'>
        <NavLinks />
      </nav>

      {/* Mobile Navbar */}
      <button className='md:hidden' onClick={() => setOpenMenu(!openMenu)}>
        <BarsIcon />
      </button>
      {openMenu && (
        <div
          className='z-10 h-screen w-full top-0 left-0 fixed bg-slate-100
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
        <Link href='https://www.linkedin.com/in/shuhua-liu/' target={"_blank"} className='w-6 mr-3'>
          <LinkedinIcon />
        </Link>
        <Link href='/' target={"_blank"} className='w-6 mr-3'>
          <EmailIcon />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
