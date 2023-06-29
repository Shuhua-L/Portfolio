import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shuhua Liu | Developer",
    template: "%s | Shuhua Liu",
  },
  description: "Full stack developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary text-default`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
