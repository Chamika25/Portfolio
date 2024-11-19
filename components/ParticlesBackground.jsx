"use client";

import { useEffect } from "react";
import "particles.js";

const ParticlesBackground = () => {
  const delay = 1000;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize particles.js with the interactivity events enabled
      const initializeParticles = () => {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 150,
              density: { enable: true, value_area: 1500 },
            },
            color: { value: "#00ff99" },
            shape: {
              type: "circle",
              stroke: { width: 2, color: "#00ff99" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" }, // Hover to trigger repulse
              onclick: { enable: true, mode: "push" }, // Click to push particles
              resize: true, // Resize event enabled
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: false,
        });
      };

      // Add delay before initializing particles
      const timer = setTimeout(initializeParticles, delay);

      // Handle mousemove event
      const handleMouseMove = (event) => {
        if (window.pJSDom && window.pJSDom.length > 0) {
          const particlesInstance = window.pJSDom[0].pJS;

          // Manually trigger repulse effect by setting the position
          if (particlesInstance && particlesInstance.fn && particlesInstance.fn.interactivity) {
            particlesInstance.fn.interactivity.mouse.pos_x = event.clientX;
            particlesInstance.fn.interactivity.mouse.pos_y = event.clientY;

            // Refresh particles with the new mouse position
            particlesInstance.fn.particlesRefresh();
          }
        }
      };

      // Handle click event to trigger push mode (click to add particles)
      const handleClick = (event) => {

        const par = { pos_x: event.clientX, pos_y: event.clientY };

        if (window.pJSDom && window.pJSDom.length > 0) {
          const particlesInstance = window.pJSDom[0].pJS; console.log(particlesInstance);
          particlesInstance.fn.modes.pushParticles(2, par);
        }
      }

      // Add event listeners for mousemove and click
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("click", handleClick);

      // Cleanup event listeners on component unmount
      return () => {
        clearTimeout(timer);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return <div id="particles-js" /> ;
};

export default ParticlesBackground;
