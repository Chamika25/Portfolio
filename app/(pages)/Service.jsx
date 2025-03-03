"use client"

import { motion } from "framer-motion";
import isMobile from "is-mobile";
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Audio Engineering",
      description:
        "Producing high-quality sound experiences through mixing, mastering, and sound design. Expertise in crafting immersive audio landscapes for music, film, games, and multimedia projects using industry-standard tools like Pro Tools, Ableton Live, and FL Studio.",
      variant: {
        initial: {
          opacity: 0,
          y: -50,
          x: -50,
        }
      }
    },
    {
      title: "3D Development",
      description:
        "Creating stunning 3D assets and environments with precision and realism. Specializing in modeling, texturing, and rendering for games, animation, and virtual experiences using tools like Blender, Maya, and Unreal Engine.",
      variant: {
        initial: {
          opacity: 0,
          y: -50,
          x: 50,
        }
      }
    },
    {
      title: "Game Development",
      description:
        "Building engaging and interactive gaming experiences with Unity and Unreal Engine. Proficient in game mechanics, physics, AI, and immersive storytelling to bring creative visions to life in 2D and 3D games.",
      variant: {
        initial: {
          opacity: 0,
          y: 50,
          x: -50,
        }
      }
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive, visually appealing, and user-centric interfaces. Expertise in wireframing, prototyping, and interaction design using Figma and Adobe XD to enhance user experiences across web and mobile platforms.",
      variant: {
        initial: {
          opacity: 0,
          y: 50,
          x: 50,
        }
      }
    },
  ];

  const viewportMarginH1 = isMobile()
    ? "-25% 0px -25% 0px" // For mobile devices
    : "-15% 0px -25% 0px"; // For larger screens

  const viewportMarginP = isMobile()
    ? "-40% 0px -25% 0px" // For mobile devices
    : "-30% 0px -30% 0px"; // For larger screens

  return (
    <div className="container mx-auto lg:pt-[120px]">
      <motion.h1
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
          },
        }}
        viewport={{
          margin: viewportMarginH1,
          //once: true,
        }}
        className="pb-4 lg:pb-0 text-2xl font-semibold"
      >
        Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:pt-8 xl:pb-8 gap-4 h-full overflow-hidden">
        {services.map((service, index) => (
          <motion.div
            variants={service.variant}
            initial='initial'
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                duration: 0.3,
              },
            }}
            viewport={{
              margin: viewportMarginP,
              //once: true,
            }}
            key={index}
            className="w-full bg-accent bg-opacity-80 rounded-md text-primary h-fit md:min-h-[35vh] lg:max-h-[35vh] py-4 px-6 hover:bg-accent-hover hover:shadow-md"
          >
            <h2 className="text-xl pb-2 font-semibold">{service.title}</h2>
            <p className="text-base py-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
