import TextShadingView from "@/app/animations/TextShadingView";
import React from "react";
import { motion } from "framer-motion";

const AboutMeSubSection = () => {
  const aboutMeDetails = [
    {
      title: "Name",
      description: "D. L. Buddika Kasun",
    },
    {
      title: "Nationality",
      description: "Sri Lankan",
    },
    {
      title: "Phone",
      description: "+94 71 531 5915",
    },
    {
      title: "Email",
      description: "buddikakasun80@gmail.com",
    },
    {
      title: "Address",
      description: "No: 12, Parakkrama MW, Panadura, Sri Lanka",
    },
    {
      title: "Languages",
      description: "English, Sinhala",
    },
  ];

  return (
    <section className="relative">
      <h1 className="text-2xl font-semibold pb-4">About Me</h1>
      <p className="py-4 opacity-80">
        <TextShadingView>
          A passionate software engineering undergraduate with a love for
          technology, web development, and SE projects.
        </TextShadingView>
      </p>
      <div className="grid lg:grid-cols-2 gap-4 p-4">
        {aboutMeDetails.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col leading-normal lg:flex-row lg:items-center lg:gap-3 pr-8"
            /* whileInView={{
              opacity: 1,
              x: 0,
            }}
            initial={{
              opacity: 0,
              x: -50, // Adjust this value to set the starting position (from the left)
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2, // Stagger animations for each detail
            }}
            viewport={{ once: true }} */ // Trigger the animation only once when in view
          >
            <motion.p
              className="opacity-60"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.4,
                  //delay: index * 0.2,
                }
              }}
              viewport={{margin: "-25% 0px -25% 0px"}}
            >
              {item.title}:
            </motion.p>
            <motion.p
              className="text-lg font-semibold"
              initial={{
                x: 100, // Starts slightly off-screen from the right
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  //delay: index * 0.2, // Matches the delay for the title
                }
              }}
              viewport={{margin: "-25% 0px -25% 0px"}}
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutMeSubSection;
