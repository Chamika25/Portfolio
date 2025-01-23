import useCustomScroll from "@/app/hooks/useCustomScroll";
import { Button } from "./ui/button";

const AboutNav = () => {

    const { 
        sectionProgress,
        activeSection
     } = useCustomScroll({ sectionsClassName: "aboutSubSection" });

    const aboutItems = [
        {
            name: 'About Me',
            path: 'aboutMe',
        },
        {
            name: 'Skills',
            path:'skills',
        },
        {
            name: 'Certificate',
            path: 'certificate',
        },
        {
            name: 'Education',
            path: 'education',
        },
    ];

    // Scroll handling for smooth navigation
    const onNavigate = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="grid grid-cols-2 gap-4 xl:flex xl:flex-col">
            {aboutItems.map((item,index) => (
                <Button
                    key={index}
                    className={`${activeSection === item.path ? 'bg-accent text-primary': 'bg-accent bg-opacity-20  text-white'} rounded-md lg:hover:text-primary`} //lg:bg-[#38383dbb]
                    onClick={() => onNavigate(item.path)}
                >
                    {item.name}
                </Button>
            ))}
        </nav>
    );
}

export default AboutNav;