"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false); // Track button hover state

  useEffect(() => {
    // Track mouse movements to update cursor position
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.pageX, y: event.pageY });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle mouse enter and leave for buttons
  const handleButtonMouseEnter = () => {
    setIsHoveringButton(true); // Change cursor when hovering over button
  };

  const handleButtonMouseLeave = () => {
    setIsHoveringButton(false); // Revert cursor when leaving button
  };

  return (
    <>
      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{
          left: cursorPosition.x - 15 + "px", // Adjust cursor to center it on the pointer
          top: cursorPosition.y - 15 + "px",  // Adjust cursor to center it on the pointer
          width: "15px", // Size of the custom cursor
          height: "15px",
          backgroundColor: isHoveringButton ? "#ffffff" : "#01ffbb", // White on hover, green by default
          border: isHoveringButton ? "2px solid #000000" : "none", // Black border on button hover
          borderRadius: "50%", // Make it circular
          pointerEvents: "none", // Ensure the cursor doesn't interfere with interactions
          transition: "background-color 0.3s, border 0.3s", // Smooth transition
        }}
      />

      {/* Add event listener for buttons dynamically */}
      <style jsx>{`
        button,
        .btn {
          outline: none;
          cursor: none; /* Hide the default cursor */
        }

        button:hover,
        .btn:hover {
          transform: scale(1.05); /* Slightly scale button on hover */
        }
      `}</style>

      {/* Add event listener to buttons dynamically */}
      <div
        className="button-hover-listener"
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      />
    </>
  );
};

export default CustomCursor;
