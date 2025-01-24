"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import useCustomScroll from "../hooks/useCustomScroll";
import MotionBtn from "@/components/MotionBtn";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "BikzIK E-Commerce Platform",
      image: "/assets/projects/BikzIK.png",
      description: "BIKZIK is a modern, full-stack e-commerce platform that offers seamless shopping experiences. It is built using the latest technologies with features like user authentication, product management, and cloud image storage.",
      link: "https://bikzik.vercel.app",
      git: "https://github.com/Buddika-Kasun/BikzIK_E-commarce_Web-MERN-"
    },    
    {
      title: "UniCore ERP System",
      image: "/assets/projects/Unicore.png",
      description: "UniCore is a powerful ERP system built with Next.js, React, and MongoDB, designed to streamline university management with modules for resource utilization, reservations, user profiles, and administrative operations.",
      link: "",    
      git: "https://github.com/Buddika-Kasun/UMS_Unicore_ERP-NextJs-",
    },
    {
      title: "Project 3",
      image: "/assets/projects/Unicore.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/3",
      git: "a",
    },
    {
      title: "Project 4",
      image: "/assets/projects/Unicore.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/4",
      git: "a",
    },
    {
      title: "Project 5",
      image: "/assets/projects/Unicore.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/5",
      git: "a",
    },
  ];

  const { scrollYProgress } = useCustomScroll({
    sectionsClassName: "projects",
  }); //console.log(scrollYProgress); output = 0 to 1 value

  //const xTranslate = useTransform(scrollYProgress, [0,1], [0, - window?.innerWidth * project?.length]); console.log(xTranslate);

  // Dynamically calculate the X translation
  const translateX =
    scrollYProgress * -window?.innerWidth * (projects?.length - 0.55 || 1);

  const imageVariant = {
    initial: {
      opacity: 0,
      y: 500,
      x: -500,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const textVariant = {
    initial: {
      opacity: 0,
      y: 500,
      x: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  const ListItem = ({ item }) => {
    const ref = useRef();

    const inView = useInView(ref, { margin: "-100px" });

    return (
      <div
        ref={ref}
        className="h-full min-w-full overflow-hidden flex flex-col lg:flex-row lg:gap-20 items-start lg:items-center lg:justify-center lg:px-8 lg:pl-16"
      >
        <div className="w-full lg:min-w-[400px] lg:max-w-[400px] rounded-md">
          <Image
            src={item.image}
            width={600}
            height={600}
            alt={item.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 p-2 lg:p-0">
          <h2 className="text-lg lg:text-3xl font-semibold text-ellipsis line-clamp-2 leading-tight lg:leading-normal text-accent">
            {item.title}
          </h2>
          <p className="lg:py-4 leading-tight lg:leading-normal">{item.description}</p>
          <div className="flex gap-6">
            { 
              item.link &&
              <Link
                href={item.link}
                target="_blank"
                className="bg-accent rounded-lg w-fit px-4 text-primary lg:hover:bg-accent-hover cursor-none"
              >
                View Project
              </Link>
            }
            <MotionBtn
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Link href={item.git} target="_blank" className='w-9 h-9 border-[1.5px] border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 cursor-none'>
                <FaGithub />
              </Link>
            </MotionBtn>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container max-auto lg:pt-[120px] mb-8 lg:mb-0 min-h-[calc(100vh)] h-full relative projects">
      <div className="sticky top-24 lg:top-28 w-full overflow-hidden">
        <h1 className="text-2xl font-semibold pb-4 lg:pb-8">Projects</h1>
        <motion.div
          className="flex h-full items-center w-full sticky top-0 gap-8"
          style={{
            transform: `translateX(${translateX}px)`, // Apply X translation based on scroll progress
            transition: "transform 0.1s ease-out", // Smooth transition
          }}
          //style={{x: translateX}}
        >
          {projects.map((project, index) => (
            <ListItem key={index} item={project} />
          ))}
        </motion.div>
      </div>

      {/* Add extra space for smooth scrolling */}
      {[...Array(projects.length)].map((_, i) => (
        <div key={i} className="min-h-[100vh]" />
      ))}
    </div>
  );
};

export default Project;
