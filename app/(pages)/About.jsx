"use client"

import AboutNav from "@/components/AboutNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const About = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="min-h-[80px] flex items-center justify-center py-0"
        >
            <div className="container mx-auto relative">
                {/* <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience">Experience</TabsContent>
                    </div>
                </Tabs>*/}
                <div className="flex flex-col xl:flex-row gap-5">
                    {/* Menu */}
                    <div className="flex flex-col w-full max-w-80 h-fit mx-auto xl:mx-0 gap-6 sticky top-[100px] xl:top-0 xl:pt-[100px] border border-white z-10">
                        <AboutNav />
                    </div>

                    {/* Content */}
                    <div className="relative top-[-220px] xl:top-0 z-0">
                        <div className="aboutSubSection" id="experience">Experience</div>
                        <div className="aboutSubSection" id="education">Education</div>
                        <div className="aboutSubSection" id="skills">Skills</div>
                        <div className="aboutSubSection" id="aboutMe">About Me</div>
                    </div>
                </div>
            </div>                
        </motion.div>
    )
}

export default About;