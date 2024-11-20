import Link from "next/link";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import HireMeBtn from "./HireMeBtn";

const Header = () => {

  return (
    <header className="py-6 w-full px-8 mx-auto text-white fixed z-20 transition-colors duration-300 ease-in-out" /* bg-[#193432cc] */>
        <div className="flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="cursor-none">
                <h1 className="text-4xl font-semibold hover:text-shadow-white w">
                    Kasun<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* Desktop nav & Hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <HireMeBtn />
            </div>

            {/* Mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header