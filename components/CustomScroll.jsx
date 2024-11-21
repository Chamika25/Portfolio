"use client";

import { useEffect } from "react";

const CustomScroll = ({ children }) => {
    useEffect(() => {
        const scrollContainer = document.querySelector(".custom-scroll");

        const handleScroll = () => {
          const header = document.querySelector("header");

          if (scrollContainer.scrollTop > 0) {
            header.classList.add("bg-[#193432cc]", "shadow-lg");
          } else {
            header.classList.remove("bg-[#193432cc]", "shadow-lg");
          }
        };

        scrollContainer.addEventListener("scroll", handleScroll);

        return () => {
          scrollContainer.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div className="pt-4 pb-2 h-[100vh] overflow-hidden">
            <div className="custom-scroll h-full overflow-auto">
                {children}
            </div>
        </div>
    );
};

export default CustomScroll;
