"use client"

import { motion } from "framer-motion";
import isMobile from "is-mobile";
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Graphic Design",
      description:
        "Creating visually appealing designs for branding, social media, and digital platforms. Skilled in design posters, banners, and marketing materials using modern design principles. Experienced with Adobe Photoshop, Illustrator and Canva.",
      variant: {
        initial: {
          opacity: 0,
          y: -50,
          x: -50,
        }
      }
    },
    {
      title: "Video Editing",
      description:
        "Producing high-quality video content with smooth transitions, effects, and storytelling techniques. Experienced in editing promotional videos, reels, advertisements, and social media content. Skilled in Adobe Premiere Pro and CapCut for professional video production.",
      variant: {
        initial: {
          opacity: 0,
          y: -50,
          x: 50,
        }
      }
    },
    {
      title: "Motion Graphic Design",
      description:
        "Creating engaging motion graphics and animated visual content for digital media projects. Combining animation, typography, and visual effects to enhance audience interaction. Experienced in Adobe After Effects and creative motion design workflows.",
      variant: {
        initial: {
          opacity: 0,
          y: 50,
          x: -50,
        }
      }
    },
    {
      title: "Digital Marketing",
      description:
        "Developing creative digital marketing strategies to improve brand awareness and audience engagement. Experienced in social media marketing, content creation, and campaign management. Focused on creating impactful content for platforms like Facebook, Instagram, and YouTube.",
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
