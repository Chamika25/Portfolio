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

const Project = () => {
  const projects = [
    {
      title: "Project 1",
      image: "/public/assets/certificates/mern.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/1",
    },
    {
      title: "Project 2",
      image: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/2",
    },
    {
      title: "Project 3",
      image: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/3",
    },
    {
      title: "Project 4",
      image: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/4",
    },
    {
      title: "Project 5",
      image: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/5",
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
        className="h-full min-w-full overflow-hidden flex flex-col lg:flex-row lg:gap-[100px] items-center justify-center"
      >
        <div className="w-full lg:w-96 rounded-md">
          <Image
            src="/assets/certificates/AzureCertificate.png"
            width={600}
            height={600}
            alt={item.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 p-2 lg:p-0">
          <h2 className="text-lg lg:text-3xl text-ellipsis line-clamp-2">
            {item.title}
          </h2>
          <p>{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            className="bg-accent rounded-lg w-fit px-4 text-primary lg:hover:bg-accent-hover cursor-none"
          >
            View Project
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="container max-auto lg:pt-[120px] mb-8 lg:mb-0 min-h-[calc(100vh)] h-full relative projects">
      <div className="sticky top-28 w-full overflow-hidden">
        <h1>Projects</h1>
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
