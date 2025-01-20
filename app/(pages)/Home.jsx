
// Components
import CVBtn from "@/components/CVBtn";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import TypingEffect from "@/components/TypingEffect";
import TextShadingView from "../animations/TextShadingView";

const Home = () => {
    return (
        <div className="container mx-auto lg:pt-[60px]">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8">

                {/* Text */}
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <h1 className="h1 mb-6">
                        <span className="w">Hello, I'm</span><br/>
                        <span className="text-accent">Buddika Kasun</span><br/>
                        <span className="text-xl lg:text-4xl"><TypingEffect /></span>
                    </h1>
                    <div className="max-w-[500px] mb-9 text-white/80 w">
                        <TextShadingView>
                            I excel at crafting elegant digital experiences and I am proficient in verious programming languages and thechnology.
                        </TextShadingView>
                    </div>

                    <div className="flex flex-col xl:flex-row items-center gap-8">

                        {/* CV button */}
                        <CVBtn />

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
    );
}

export default Home;