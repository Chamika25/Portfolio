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
import Contact from "./(pages)/Contact";
import CustomScrollLayout from "@/components/CustomScrollLayout";
import Footer from "@/components/Footer";

export default function Page() {

  return (
    <CustomScrollLayout>

      <ParticlesBackground />
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Body */}
      <section id="home" className="section">
          <Home />
      </section>

      <section id="about" className="section">
          <Service />
      </section>

      <section id="service" className="section">
          <Service />
      </section>

      <section id="work" className="section">
          <Contact />
      </section>

      <section id="contact" className="section">
          <Contact />
      </section>

      {/* Footer */}
      <Footer />

    </CustomScrollLayout>
  );
}
