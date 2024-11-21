"use client";

import { useEffect, useState } from "react";

const useCustomScroll = () => {

    // ----- State to hold scroll direction (up or down) and last scroll position -----
    const [scrollDirection, setScrollDirection] = useState("down"); // 'up' or 'down'
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > lastScrollPosition) {
                setScrollDirection("down");
            } else if (currentScrollPosition < lastScrollPosition) {
                setScrollDirection("up");
            }

            setLastScrollPosition(currentScrollPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [lastScrollPosition]);
    // ---------------------------------------------------------------------------------

    // ------------- Scroll Entered(5%),Active(50%),Leaved(95%) Section ---------------
    const [enteredSection, setEnteredSection] = useState({});
    const [leavedSection, setLeavedSection] = useState({});
    const [activeSection, setActiveSection] = useState("home"); // Track active section

    useEffect(() => {

        const enterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setEnteredSection(entry.target.id); // Update entered section
                    }
                });
            },
            { threshold: 0.04 } // Trigger when 5% of the section is visible
        );

        const leaveObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setLeavedSection(entry.target.id); // Update leaved section
                    }
                });
            },
            { threshold: 0.94 }
        );

        const activeObserver = new IntersectionObserver(
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
        sections.forEach((section) => {
            enterObserver.observe(section)
            leaveObserver.observe(section);
            activeObserver.observe(section);
        });

        return () => observer.disconnect(); // Cleanup on component unmount

    }, []);
    // ----------------------------------------------------------------------------------

    // ---------------- Function to calculate progress for each section -----------------
    const [sectionProgress, setSectionProgress] = useState({}); // Track progress for each section

    const calculateProgress = () => {
        const sections = document.querySelectorAll("section");
        const progressData = {};

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionHeight = rect.height;
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;

            // Calculate the percentage of the section visible in the viewport
            const visibleHeight = Math.min(sectionBottom, window.innerHeight) - Math.max(sectionTop, 0);
            const sectionProgressValue = Math.max(0, Math.min(visibleHeight / sectionHeight, 1));
            progressData[section.id] = sectionProgressValue; // Store progress for this section
        });

        setSectionProgress(progressData);
    };

    // Listen to scroll events and calculate section progress
    useEffect(() => {
        const handleScroll = () => {
            calculateProgress();
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // ----------------------------------------------------------------------------------

    // ------------------ Function to handle header background color --------------------
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 0) {
                header.classList.add("bg-[#193432cc]", "shadow-lg");
            } else {
                header.classList.remove("bg-[#193432cc]", "shadow-lg");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // -----------------------------------------------------------------------------------

    // Return values
    return {
        scrollDirection,
        lastScrollPosition,
        enteredSection,
        leavedSection,
        activeSection,
        sectionProgress,
    };
};

export default useCustomScroll;