// Components
import CVBtn from "@/components/CVBtn";
import Photo from "@/components/Photo";
import Social from "@/components/Social";

const Service = () => {
  const services = [
    {
      title: "Front-End Development",
      description:
        "Crafting responsive, user-friendly, and visually engaging interfaces using React and Next.js. Expertise in building modern, fast, and SEO-friendly web applications with cutting-edge technologies like HTML, CSS, and JavaScript.",
    },
    {
      title: "Back-End Development",
      description:
        "Developing robust, scalable, and secure server-side solutions using Next.js, Node.js, Express, MongoDB, SQL, Spring Boot, and ASP.NET. Expertise in creating RESTful APIs, managing databases, and implementing backend logic for complex systems.",
    },
    {
      title: "Testing",
      description:
        "Ensuring software reliability through comprehensive testing strategies, including unit testing, integration testing, and end-to-end testing.",
    },
    {
      title: "Bug Fixing",
      description:
        "Diagnosing and resolving software issues efficiently to enhance performance and maintain seamless functionality.",
    },
  ];

  return (
    <div className="container mx-auto lg:pt-[120px]">
      <h1 className="pb-4 lg:pb-0">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:pt-8 xl:pb-8 gap-4 h-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full bg-accent bg-opacity-80 rounded-md text-primary h-fit md:min-h-[35vh] lg:max-h-[35vh] py-4 px-6 hover:bg-accent-hover hover:shadow-md"
          >
            <h2 className="text-xl pb-2 font-semibold">{service.title}</h2>
            <p className="text-base py-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
