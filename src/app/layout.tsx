import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import { categories } from "./data";
import Link from "next/link";

const helvetica = localFont({
  src: "./fonts/HelveticaNeueLTPro-Md.woff",
  variable: "--font-helvetica",
});
const helveticaRoman = localFont({
  src: "./fonts/HelveticaNeueLTPro-Roman.woff",
  variable: "--font-helvetica-roman",
});

const futura = localFont({
  src: "./fonts/FuturaLTPro-BoldCond.woff2",
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${helvetica.variable} ${helveticaRoman.variable} ${futura.variable} flex min-h-full flex-col antialiased`}
      >
        <div className="flex flex-grow flex-col">
          <header className="font-futura flex items-center justify-between border-b-2 border-yellow-300 p-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <Link href="/" className="text-4xl font-bold text-green-800">
                NextMaster
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input placeholder="Search" className="w-[300px]" />
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
              <Button variant="ghost" className="text-lg text-green-800">
                ORDER
              </Button>
              <Button variant="ghost" className="text-lg text-green-800">
                ORDER HISTORY
              </Button>
            </div>
          </header>
          <div className="flex flex-grow font-helvetica-roman">
            <aside className="hidden w-64 border-r border-gray-400 p-4 md:block">
              <h2 className="border-b border-green-800 text-sm font-semibold text-green-900">
                Choose a Category
              </h2>
              <ul className="">
                {categories.map((category) => (
                  <li key={category} className="group pb-2 hover:bg-yellow-200">
                    <a
                      href="#"
                      className="text-xs text-gray-800 group-hover:underline"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <main className="flex-grow">{children}</main>
          </div>
        </div>
        <footer className="flex h-6 items-center justify-between border-t border-gray-400 px-4 font-helvetica text-[11px]">
          <div>
            <Link
              href="/about"
              className="p-1 hover:bg-yellow-200 hover:underline"
            >
              Home
            </Link>
            <span>|</span>
            <Link
              href="/contact"
              className="p-1 hover:bg-yellow-200 hover:underline"
            >
              Location
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="p-1 hover:bg-yellow-200 hover:underline"
            >
              Returns
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="p-1 hover:bg-yellow-200 hover:underline"
            >
              Careers
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="p-1 hover:bg-yellow-200 hover:underline"
            >
              Mobile App
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="p-1 hover:bg-yellow-200 hover:underline"
            >
              Solidworks Add-In
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="p-1 hover:bg-yellow-200 hover:underline"
            >
              Help
            </Link>
            <span>|</span>
            <Link
              href="/privacy"
              className="p-1 hover:bg-yellow-200 hover:underline"
            >
              Settings
            </Link>
          </div>
          <div>
            By using this website, you agree to our Terms and Conditions and
            Privacy Policy
          </div>
        </footer>
      </body>
    </html>
  );
}