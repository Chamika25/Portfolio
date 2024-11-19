"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items
import menuItems from "@/data/nav";

const Nav = () => {

    const pathName = usePathname();

    return (
        <nav className="flex gap-8">
            {menuItems.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={`${item.path === pathName && "text-accent border-b-2 border-accent"} cursor-none capitalize font-medium hover:text-accent transition-all ${item.path !== pathName &&"hover:text-shadow-accent"}`}>
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav