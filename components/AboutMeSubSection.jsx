import React from "react";

const AboutMeSubSection = () => {
  const aboutMeDetails = [
    {
      title: "Name",
      description: "D. L. Buddika Kasun",
    },
    {
      title: "Nationality",
      description: "Sri Lankan",
    },
    {
      title: "Phone",
      description: "+94 71 531 5915",
    },
    {
      title: "Email",
      description: "buddikakasun80@gmail.com",
    },
    {
      title: "Address",
      description: "No: 12, Parakkrama MW, Panadura, Sri Lanka",
    },
    {
      title: "Languages",
      description: "English, Sinhala",
    },
  ];

  return (
    <section className="relative">
      <h1 className="">About Me</h1>
      <p className="py-4 opacity-80">
        A passionate software engineering undergraduate with a love for
        technology, web development, and SE projects.
      </p>
      <div className="grid lg:grid-cols-2 gap-4 p-4">
        {aboutMeDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col leading-normal lg:flex-row lg:items-center lg:gap-3 pr-8 "
          >
            <p className="opacity-60">{item.title}:</p>
            <p className=" text-lg font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMeSubSection;
