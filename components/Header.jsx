import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 text-white">
        <div className="px-8 max-auto flex justify-between items-center">

            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Kasun<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* Desktop nav & Hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* Mobile nav */}
            <div className="xl:hidden">
                
            </div>
        </div>
    </header>
  )
}

export default Header