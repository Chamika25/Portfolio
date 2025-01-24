/* import Link from "next/link";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import HireMeBtn from "./HireMeBtn";

const Header = () => {

  return (
    <header className="py-6 w-full px-8 mx-auto text-white fixed z-20 transition-colors duration-300 ease-in-out">
        <div className="flex justify-between items-center">

            {/* Logo *}
            <Link href="/" className="cursor-none">
                <h1 className="text-4xl font-semibold hover:text-shadow-white w">
                    Kasun<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* Desktop nav & Hire me button *}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <HireMeBtn />
            </div>

            {/* Mobile nav *}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header; */

//  v2

// Components
import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-6 w-full px-8 mx-auto text-white fixed z-20 transition-colors duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="cursor-none w">
          {/*<h1 className="text-4xl font-semibold hover:text-shadow-white">
             Kasun<span className="text-accent">.</span>
          </h1>*/}
          <Logo />
        </Link>

        {/* Nav & Hire me button */}
        <div className="flex items-center gap-8">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
