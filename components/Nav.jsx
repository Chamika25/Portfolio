"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items
import menuItems from "@/data/menu";

const Nav = () => {

    const pathName = usePathname();

    return (
        <nav className="flex gap-8">
            {menuItems.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={`${item.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav