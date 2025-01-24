"use client";

import { useEffect } from "react";

const HideUIOnScroll = () => {
  useEffect(() => {
    // Detect if the device is mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Function to hide address bar
      const hideAddressBar = () => {
        if (window.scrollY === 0) {
          document.body.style.marginTop = "0";
        } else {
          document.body.style.marginTop = "0";
        }
      };

      // Listen to the scroll event
      window.addEventListener("scroll", hideAddressBar);

      // Set a small timeout to ensure the address bar is hidden on load
      setTimeout(() => {
        window.scrollTo(0, 1); // Scroll slightly to hide the address bar on page load
      }, 1000);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", hideAddressBar);
      };
    }
  }, []);

  return null;
};

export default HideUIOnScroll;
