"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useCustomScroll from "../hooks/useCustomScroll";
import MotionBtn from "@/components/MotionBtn";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import isMobile from "is-mobile";

//import ProjectItem from "@/components/ProjectItem";
/* import dynamic from "next/dynamic";
const ProjectItem = dynamic(() => import("@/components/ProjectItem") , {
  ssr: false,
}); */

const Project = () => {

  const projects = [   
    {
      title: "3D House Modeling and Design",
      image: "/assets/projects/s2.png",
      description: "The 3D House Modeling and Design project showcases a highly detailed and realistic architectural model, created using Autodesk Maya. This project reflects a seamless blend of creativity and technical expertise, aiming to bring architectural concepts to life in a visually compelling manner.",
      link: "https://drive.google.com/drive/folders/1WFayMehtA4ckQtkLaKk158AnblIu2IV5?usp=sharing",
    },
    {
      title: "3D Ball-Collecting Game",
      image: "/assets/projects/s1.png",
      description: "The 3D Ball-Collecting Game is an interactive and visually engaging project developed using Unity Engine and C#. In this game, players navigate a dynamic environment, collecting balls while engaging with thoughtfully designed mechanics and vibrant visuals.",
      link: " https://lnkd.in/ewMgVNyJ"
    },
    {
      title: "Redesigned SLT Mobitel App Interface",
      image: "/assets/projects/s4.png",
      description: "Evaluated and redesigned the home interface of the SLT Mobitel app with the goal of improving user experience and interface clarity. This redesign focuses on enhancing usability while maintaining a visually appealing and cohesive look.",
      link: " https://lnkd.in/eXEuPZWd",
    },
  ];

  const { scrollYProgress } = useCustomScroll({
    sectionsClassName: "projects",
  }); //console.log(scrollYProgress); output = 0 to 1 value

  /* const ref2 = useRef();
  const { scrollYProgress: scroll } = useScroll(ref2);
  const xxTranslate = useTransform(scroll, [0,1], [0, - window?.innerWidth * projects?.length]); console.log(xxTranslate); */

  // Dynamically calculate the X translation
  //const translateX = scrollYProgress * -window.innerWidth * (projects?.length - 0.55 || 1);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    // Add an event listener to handle scroll and update the translateX value dynamically
    const handleScroll = () => {
      const progress = scrollYProgress;
      const width = window?.innerWidth || 0;
      const translation =
        progress * -width * (projects?.length - 0.55 || 1);
      setTranslateX(translation);
    };

    // Trigger the scroll update once at mount
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress, projects]);

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
        className="h-full min-w-full overflow-hidden flex flex-col lg:flex-row lg:gap-20 items-start lg:justify-center lg:px-8 lg:pl-16"
      >
        <div className="w-full lg:min-w-[400px] lg:max-w-[400px] lg:min-h-[400px] lg:max-h-[400px] rounded-md">
          <Image
            src={item.image}
            width={200}
            height={200}
            alt={item.title}
            loading="lazy"
            className=" h-full w-full object-fit rounded-md"
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
                className="bg-accent rounded-lg w-fit px-4 text-primary lg:hover:bg-accent-hover cursor-none lg:hover:scale-105 lg:hover:transition-all duration-200"
              >
                View Project
              </Link>
            }
            {/* <MotionBtn
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
            </MotionBtn> */}
          </div>
        </div>
      </div>
    );
  };

  const ref = useRef(null);

  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  const isInMobile = isMobile();

  const leftVariant = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }
  }

  const rightVariant = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }
  }

  return (
    <div
      //ref={ref}
      className="container max-auto lg:pt-[120px] mb-8 lg:mb-0 min-h-[calc(100vh)] h-full relative projects z-10"
    >
      
          <div className=" w-full">
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
                margin: "-25% 0px -25% 0px",
                //once: true,
              }}
              className="text-2xl font-semibold pb-4 lg:pb-8"
            >
                Projects
            </motion.h1>
            <div className="flex flex-col gap-16">
              {projects.map((project, index) => (
                //<ProjectItem item={project} key={index} />
                // <ListItem key={index} item={project} />
                <motion.div
                  key={index}
                  variants={textVariant}
                  //initial="initial"
                  //animate={inView ? 'animate' : 'initial'}
                  //whileInView="animate"
                  //viewport={{amount: 0.5}}
                  className="h-full min-w-full overflow-hidden flex flex-col lg:flex-row lg:gap-20 items-center lg:justify-center lg:px-8 lg:pl-16 lg:pb-8 lg:pt-4"
                >
                  <motion.div
                    variants={leftVariant}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                      margin: "-25% 0px -25% 0px",
                    }}
                    className="w-full lg:min-w-[400px] lg:max-w-[400px] rounded-md"
                  >
                    <Image
                      src={project.image}
                      width={200}
                      height={200}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md -z-10"
                      />
                  </motion.div>
                  <div className="flex flex-col gap-4 p-2 lg:p-0">
                    <motion.h2 
                      variants={rightVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{
                        margin: "-25% 0px -25% 0px",
                      }}
                      className="text-lg lg:text-3xl font-semibold text-ellipsis line-clamp-2 leading-tight lg:leading-normal text-accent">
                      {project.title}
                    </motion.h2>
                    <motion.p
                      variants={leftVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{
                        margin: "-25% 0px -25% 0px",
                      }}
                      className="lg:py-4 leading-tight lg:leading-normal">
                        {project.description}
                      </motion.p>
                    <motion.div
                      variants={rightVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{
                        margin: "-25% 0px 0px 0px",
                      }}
                      className="flex gap-6"
                    >
                      { 
                        project.link &&
                        <Link
                        href={project.link}
                        target="_blank"
                        className="bg-accent rounded-lg w-fit px-4 text-primary lg:hover:bg-accent-hover cursor-none"
                        >
                          View Project
                        </Link>
                      }
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        

    </div>
  );
};

export default Project;
