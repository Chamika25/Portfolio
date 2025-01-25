"use client";

import AboutMeSubSection from "@/components/AboutMeSubSection";
import AboutNav from "@/components/AboutNav";
import CertificatesSubSection from "@/components/CertificatesSubSection";
import EducationSubSection from "@/components/EducationSubSection";
import SkillsSubSection from "@/components/SkillsSubSection";
import { motion } from "framer-motion";
import useCustomScroll from "../hooks/useCustomScroll";

const About = () => {
  const { sectionProgress } = useCustomScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
    >
      <div className="lg:container lg:mx-auto w-full relative">
        <div className="flex flex-col xl:flex-row gap-5">
          {/* Menu */}
          <div
            className={`flex flex-col lg:max-w-80 lg:min-w-64 h-fit lg:mx-auto xl:mx-0 gap-6 sticky top-[87.5px] p-4 px-8 lg:p-0 xl:top-[20vh] xl:pt-[100px] z-10 ${sectionProgress.home == 0 && "bg-[#193432cc]"} lg:bg-transparent`}
          >
            <AboutNav />
          </div>

          {/* Content */}
          <div className="relative top-[-220px] xl:top-0 -z-10 px-12 lg:px-0">
            <div className="aboutSubSection" id="aboutMe">
              <AboutMeSubSection />
            </div>

            <div className="aboutSubSection" id="skills">
              <SkillsSubSection />
            </div>

            <div className="aboutSubSection" id="certificate">
              <CertificatesSubSection />
            </div>

            <div className="aboutSubSection" id="education">
              <EducationSubSection />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
