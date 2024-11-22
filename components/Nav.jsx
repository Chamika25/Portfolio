/*  v1
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
                    <Link href={item.path} onClick={()=>console.log("click")} key={index} className={`${item.path === pathName && "text-accent border-b-2 border-accent"} cursor-none capitalize font-medium hover:text-accent transition-all ${item.path !== pathName &&"hover:text-shadow-accent"}`}>
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav; */

//  v2
/*
"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { motion, useScroll, useSpring } from "framer-motion";

// Menu items
import menuItems from "@/data/nav";

// Components
import PageTransition from "./pageTransition";
import HireMeBtn from "./HireMeBtn";

const Nav = () => {

    const [activeSection, setActiveSection] = useState("home"); // Track active section
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id); // Update active section
            }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        // Observe each section
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect(); // Cleanup on component unmount
    }, []);

    const onNavigate = (id) => {

        setTimeout(() => {
            setIsOpen(false);
        }, 100);

        setIsTransitioning(true); // Set transitioning state

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                setIsTransitioning(false);
            }, 1850);
        }
    };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div className="progress-bar fixed left-0 right-0 top-0 bg-accent h-1" style={{ scaleX }} />
            {/* Desktop Nav *}
            <nav className="gap-8 hidden lg:flex">

                {menuItems.map((item, index) => (
                    <motion.div
                        initial={{ y: 0}}
                        whileHover={{
                            y: item.path !== activeSection ? [20, -30, 30] : 0, // Smooth bounce only if not active
                            transition: {
                              duration: 0.4, // Slightly longer for a smoother bounce
                              repeat: Infinity, // Infinite bounce while hovering
                              repeatType: "loop", // Ensure seamless looping
                              ease: "easeInOut", // Smooth easing for natural motion
                            },
                        }}
                        whileTap={{
                            scale: 0.2,
                            y: 0,
                            ease: "easeInOut",
                            transition: { duration: 0.2 },
                        }}
                        key={index}
                        onClick={() => onNavigate(item.path)}
                        className={`${
                            item.path === activeSection
                            ? "text-accent"
                            : "hover:text-shadow-accent"
                        } relative cursor-none capitalize font-medium hover:text-accent transition-all ease-in`}
                    >

                        {item.name}

                        {/* Scroll Progress Bar *}
                        {activeSection === item.path && (
                            <motion.div
                            className="progress-bar absolute bottom-2 left-0 right-0 h-1 bg-accent"
                            style={{ scaleX }}
                            transition={{
                                stiffness: 100,
                                damping: 30,
                                restDelta: 0.001,
                            }}
                            />
                        )}

                    </motion.div>
                ))}

                <HireMeBtn onNavigate={onNavigate} />

            </nav>

            {/* Mobile Nav *}
            <Sheet open={isOpen} onOpenChange={setIsOpen} className='ease-out'>
                <SheetTrigger asChild>
                    <button className="flex lg:hidden justify-center items-center">
                        <CiMenuFries className="text-[32px] text-accent" />
                    </button>
                </SheetTrigger>
                <SheetContent className="flex lg:hidden flex-col">
                    {/* Logo *}
                    <div className="mt-24 mb-12 text-center text-4xl w">
                        <button href="/" onClick={onNavigate}>
                            <h1>
                                Kasun<span className="text-accent">.</span>
                            </h1>
                        </button>
                    </div>
                    {/* Navigation *}
                    <nav className="flex flex-col justify-center items-center gap-8">
                        {menuItems.map((item, index) => (
                            <button
                                href={item.path}
                                key={index}
                                className={`cursor-none text-xl capitalize hover:text-accent transition-all ${
                                    activeSection === item.path && "text-accent border-b-2 border-accent"
                                }`}
                                onClick={() => onNavigate(item.path)}
                            >
                                {item.name}
                            </button>
                        ))}

                        {/* Hire Me Button *}
                        <div className="pt-8">
                            <HireMeBtn onNavigate={onNavigate} />
                        </div>
                    </nav>


                </SheetContent>
            </Sheet>

            {/* Render PageTransition during navigation *}
            {isTransitioning && (
                <div className="absolute inset-0">
                    <PageTransition />
                </div>
            )}

        </>
    );
};

export default Nav;

*/

//  v3
"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { motion, useScroll, useSpring } from "framer-motion";

// Menu items
import menuItems from "@/data/nav";

// Components
import PageTransition from "./pageTransition";
import HireMeBtn from "./HireMeBtn";
import useCustomScroll from "@/app/hooks/useCustomScroll";

const Nav = () => {

    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const {
        scrollDirection,
        enteredSection,
        leavedSection,
        activeSection,
        sectionProgress,
    } = useCustomScroll(); // Custom scroll hook

    //console.log(scrollDirection,enteredSection,leavedSection)

    // Scroll handling for smooth navigation
    const onNavigate = (id) => {
        setTimeout(() => {
            setIsOpen(false);
        }, 100);

        setIsTransitioning(true); // Set transitioning state

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                setIsTransitioning(false);
            }, 1850);
        }
    };

    // Scroll progress using framer-motion
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {/* Global scroll progress bar */}
            <motion.div className="progress-bar-left fixed left-0 right-0 top-0 bg-accent h-1" style={{ scaleX }} />

            {/* Desktop Nav */}
            <nav className="gap-8 hidden lg:flex">
                {menuItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 0 }}
                        whileHover={{
                            y: item.path !== activeSection ? [20, -30, 30] : 0, // Smooth bounce only if not active
                            transition: {
                                duration: 0.4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            },
                        }}
                        whileTap={{
                            scale: 0.2,
                            y: 0,
                            ease: "easeInOut",
                            transition: { duration: 0.2 },
                        }}
                        onClick={() => onNavigate(item.path)}
                        className={`${
                            item.path === activeSection
                                ? "text-accent"
                                : "hover:text-shadow-accent"
                        } relative cursor-none capitalize font-medium hover:text-accent transition-all ease-in`}
                    >
                        {item.name}

                        {/* Section-specific progress bar */}
                        { sectionProgress[item.path] < 1 && (
                            <motion.div
                                className={`
                                    ${/*
                                        enteredSection === item.path ?
                                            (scrollDirection === 'down' ?
                                                "progress-bar-left"
                                            :
                                                "progress-bar-right"
                                            )
                                        :
                                            (scrollDirection === 'down' ?
                                                "progress-bar-right"
                                            :
                                                "progress-bar-left"
                                            )
                                    */ /*
                                        scrollDirection === 'down' ?
                                            (enteredSection === item.path ?
                                                'progress-bar-left'
                                            :
                                                'progress-bar-right'
                                            )
                                        :
                                            (leavedSection === item.path ?
                                                'progress-bar-left'
                                            :
                                                'progress-bar-right'
                                            )
                                    */''}
                                    absolute bottom-2 left-0 right-0 h-1 bg-accent
                                    `}
                                style={{ scaleX: sectionProgress[item.path] }}
                                transition={{
                                    stiffness: 100,
                                    damping: 30,
                                    restDelta: 0.001,
                                }}
                            />
                        )}
                    </motion.div>
                ))}
                <HireMeBtn onNavigate={onNavigate} />
            </nav>

            {/* Mobile Nav */}
            <Sheet open={isOpen} onOpenChange={setIsOpen} className='ease-out'>
                <SheetTrigger asChild>
                    <button className="flex lg:hidden justify-center items-center">
                        <CiMenuFries className="text-[32px] text-accent" />
                    </button>
                </SheetTrigger>
                <SheetContent className="flex lg:hidden flex-col">
                    <div className="mt-24 mb-12 text-center text-4xl w">
                        <button onClick={() => onNavigate("home")}>
                            <h1>
                                Kasun<span className="text-accent">.</span>
                            </h1>
                        </button>
                    </div>
                    <nav className="flex flex-col justify-center items-center gap-8">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className={`cursor-none text-xl capitalize hover:text-accent transition-all ${
                                    activeSection === item.path && "text-accent border-b-2 border-accent"
                                }`}
                                onClick={() => onNavigate(item.path)}
                            >
                                {item.name}
                            </button>
                        ))}
                        <div className="pt-8">
                            <HireMeBtn onNavigate={onNavigate} />
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>

            {/* Page Transition */}
            {isTransitioning && (
                <div className="absolute inset-0">
                    <PageTransition />
                </div>
            )}
        </>
    );
};

export default Nav;

