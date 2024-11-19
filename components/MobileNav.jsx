"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

// Menu items
import menuItems from "@/data/menu";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    //setIsOpen(false); // Close the sheet
    setTimeout(() => {
        setIsOpen(false);
      }, 200);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} className='ease-out'>
      <SheetTrigger asChild>
        <button className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-12 text-center text-4xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1>
              Kasun<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`cursor-none text-xl capitalize hover:text-accent transition-all ${
                pathname === item.path && "text-accent border-b-2 border-accent"
              }`}
              onClick={handleLinkClick} // Close the sheet when a link is clicked
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
