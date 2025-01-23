import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { RiPhpFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiGit } from "react-icons/di";
import { RiVercelFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import { DiDotnet } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

const SkillsSubSection = () => {

    const skills = [
        {
            name: 'Next Js',
            icon: <TbBrandNextjs className="w-full h-full" />,
        },
        {
            name: 'Mongo DB',
            icon: <BiLogoMongodb className="w-full h-full p-2" />,
        },
        {
            name: 'React Js',
            icon: <RiReactjsLine className="w-full h-full" />,
        },
        {
            name: 'Express Js',
            icon: <SiExpress className="w-full h-full p-2" />,
        },
        {
            name: 'Node Js',
            icon: <TbBrandNodejs className="w-full h-full" />,
        },
        {
            name: 'MySQL',
            icon: <GrMysql className="w-full h-full p-2" />,
        },
        {
            name: 'PHP',
            icon: <RiPhpFill className="w-full h-full p-2" />,
        },
        {
            name: 'Java',
            icon: <FaJava className="w-full h-full p-2" />,
        },
        {
            name: 'JavaScript',
            icon: <RiJavascriptFill className="w-full h-full" />,
        },
        {
            name: 'HTML5',
            icon: <FaHtml5 className="w-full h-full p-2" />,
        },
        {
            name: 'CSS3',
            icon: <FaCss3 className="w-full h-full p-4" />,
        },
        {
            name: 'Tailwind',
            icon: <RiTailwindCssFill className="w-full h-full p-4" />,
        },
        {
            name: 'Git',
            icon: <DiGit className="w-full h-full " />,
        },
        {
            name: 'Vercel',
            icon: <RiVercelFill className="w-full h-full p-4" />,
        },
        {
            name: 'Python',
            icon: <FaPython className="w-full h-full p-2" />,
        },
        {
            name: 'SQL Server',
            icon: <DiMsqlServer className="w-full h-full p-1" />,
        },
        {
            name: '.Net',
            icon: <DiDotnet className="w-full h-full p-2" />,
        },
        {
            name: 'Spring Boot',
            icon: <SiSpringboot className="w-full h-full p-2" />,
        },
        {
            name: 'Docker',
            icon: <FaDocker className="w-full h-full p-2" />,
        },
        {
            name: 'Framer Motion',
            icon: <TbBrandFramerMotion className="w-full h-full p-2" />,
        },
        {
            name: 'Postman',
            icon: <SiPostman className="w-full h-full p-2" />,
        },
        {
            name: 'C',
            icon: (
                <svg
                    className="w-full h-full p-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                >
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="80"
                        fontWeight="bold"
                        dy=".35em"
                    >
                        C
                    </text>
                </svg>
            )
        },
        {
            name: 'C#',
            icon: (
                <svg
                    className="w-full h-full p-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                >
                    <text
                        x="40%"
                        y="50%"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="80"
                        fontWeight="bold"
                        dy=".35em"
                    >
                        C
                    </text>
                    <text
                        x="60%"
                        y="50%"
                        fill="currentColor"
                        fontSize="25"
                        fontWeight="bold"
                        dy=".35em"
                    >
                        #
                    </text>
                </svg>
            )
        },
        {
            name: 'C++',
            icon: (
                <svg
                    className="w-full h-full p-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                >
                    <text
                        x="36%"
                        y="50%"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="80"
                        fontWeight="bold"
                        dy=".35em"
                    >
                        C
                    </text>
                    <text
                        x="48%"
                        y="48%"
                        fill="currentColor"
                        fontSize="25"
                        fontWeight="bold"
                        dy=".35em"
                    >
                        +
                    </text>
                    <text
                        x="70%"
                        y="48%"
                        fill="currentColor"
                        fontSize="25"
                        fontWeight="bold"
                        dy=".35em"
                    >
                        +
                    </text>
                </svg>
            ),
        }
    ];

    return (
        <section>
            <h1>Skills</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-accent opacity-80 hover:bg-transparent min-w-24 max-w-24 min-h-24 max-h-24 rounded-md border-4 border-accent overflow-hidden group">
                            <div className="min-w-16 max-w-16 lg:min-w-20 lg:max-w-20 aspect-auto group-hover:min-w-16 group-hover:max-w-16 transition-all duration-500 text-primary group-hover:text-accent">{skill.icon}</div>
                            <p className="text-sm text-center text-primary group-hover:text-accent font-semibold lg:hidden group-hover:block transition-all duration-500 leading-none">{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default SkillsSubSection;