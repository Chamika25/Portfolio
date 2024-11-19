import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hello, I'm <br/> <span className="text-accent">Buddika Kasun</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in verious programming languages and thechnology.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* CV */}
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 btn">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              {/* Social media */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border-[1.5px] border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 cursor-none"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:mr-20">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
