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

//pages
import Home from "./(pages)/Home";
import Service from "./(pages)/Service";

// Components
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import CustomScroll from "@/components/CustomScroll";
import PageTransition from "@/components/pageTransition";

export default function Page() {

  return (
    <>
      <ParticlesBackground />
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Body */}
      {/* <CustomScroll> */}

        <section id="home">
            <Home />
        </section>

        <section id="service">
            <Service />
        </section>

        <section id="work">
            <Service />
            <Service />
        </section>

        <section id="about">
            <Service />
        </section>

        <section id="contact">
            <Service />
        </section>

      {/* </CustomScroll> */}
    </>
  );
}
