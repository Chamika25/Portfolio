// // Pages
// import Home from "./(pages)/Home";
// import Stats from "@/components/Stats";

// // Components
// import CustomCursor from "@/components/CustomCursor";
// import ParticlesBackground from "@/components/ParticlesBackground";
// import Header from "@/components/Header";
// import CustomScroll from "@/components/CustomScroll";
// import PageTransition from "@/components/pageTransition";

// export default function Page() {
//     return (
//         <>
//             <ParticlesBackground />
//             <CustomCursor />

//             {/* Header */}
//             <Header />

//             {/* Body */}
//             <CustomScroll>

//               {/* Home */}
//               <section id="home">
//                 <PageTransition id="home">
//                   <Home />
//                 </PageTransition>
//               </section>

//               <section id="service">
//                 <PageTransition id="service">
//                   <Stats />
//                 </PageTransition>
//               </section>

//             </CustomScroll>
//         </>
//     );
// }

//2

"use client"

import dynamic from 'next/dynamic';
// Components
//import CustomCursor from "@/components/CustomCursor";
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false
});
//import ParticlesBackground from "@/components/ParticlesBackground";
const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), {
  ssr: false
});
//import CustomScrollLayout from "@/components/CustomScrollLayout";
const CustomScrollLayout = dynamic(() => import("@/components/CustomScrollLayout"), {
  ssr: false
});
//import Header from "@/components/Header";
const Header = dynamic(() => import("@/components/Header"), {
  ssr: false
});
//pages
//import Home from "./(pages)/Home";
const Home = dynamic(() => import("./(pages)/Home"), {
  ssr: false
});
//import About from "./(pages)/About";
const About = dynamic(() => import("./(pages)/About"), {
  ssr: false
});
import Service from "./(pages)/Service";
import Project from "./(pages)/Project";
import Contact from "./(pages)/Contact";

import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      {/* <CustomScrollLayout /> */}
      <ParticlesBackground />
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Body */}
      <section id="home" className="section">
        <Home />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="service" className="section">
        <Service />
      </section>

      <section id="projects" className="section">
        <Project />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
      </>
    //</CustomScrollLayout>
  );
}
