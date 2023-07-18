import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shuhua Liu | Software Engineer",
    template: "%s | Shuhua Liu",
  },
  description: "Full stack software engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-primary text-default`}>{children}</body>
    </html>
  );
}
