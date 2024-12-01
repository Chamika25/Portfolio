import useCustomScroll from "@/app/hooks/useCustomScroll";
import { Button } from "./ui/button";

const AboutNav = () => {

    const aboutItems = [
        {
            name: 'Experience',
            path: 'experience',
        },
        {
            name: 'Education',
            path: 'education',
        },
        {
            name: 'Skills',
            path:'skills',
        },
        {
            name: 'About Me',
            path: 'aboutMe',
        }
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
                    className="rounded-md bg-[#000000a0] text-white"
                    onClick={() => onNavigate(item.path)}
                >
                    {item.name}
                </Button>
            ))}
        </nav>
    );
}

export default AboutNav;