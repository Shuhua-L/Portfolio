import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shuhua Liu",
    template: "%s | Shuhua Liu",
  },
  description: "Full stack developer",
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
          <nav>
            <Link href='/' className='mr-4'>
              Home
            </Link>
            <Link href='/#about' className='mx-4'>
              About
            </Link>
            <Link href='/#projects' className='mx-4'>
              Projects
            </Link>
            <Link href='/#contact' className='ml-4'>
              Contact
            </Link>
          </nav>
          <nav className='flex items-center justify-center flex-wrap'>
            <Link href='https://github.com/Shuhua-L' target={"_blank"} className='w-fit mx-3'>
              Github
            </Link>
            <Link
              href='https://www.linkedin.com/in/shuhua-liu/'
              target={"_blank"}
              className='w-fit mr-3'>
              Linkedin
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
