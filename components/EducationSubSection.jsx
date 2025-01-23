
const EducationSubSection = () => {

    const education = [
        {
            title: "GCE Ordinary Level (O/L)",
            year: 2017,
            description: "Achieved 6 A's, 2 B's, and 1 C while studying at Royal College, Panadura. Main subjects with distinctions (A's) include Mathematics, Science, ICT and English, showcasing strong analytical and linguistic skills.",
        },
        {
            title: "GCE Advanced Level (A/L)",
            year: 2020,
            description: "Achieved 3 A's in the Technology Stream with an island rank of 20. Completed studies at Taxila Central College, Horana, demonstrating exceptional performance and expertise in technology-focused subjects.",
        },
        {
            title: "Bachelor of Information and Communication Technology (BICT) (Hons.)",
            year: "Expected 2027",
            description: "Currently pursuing a Bachelor of Information and Communication Technology (BICT) (Hons.) at the University of Sri Jayewardenepura. Acquired comprehensive knowledge and skills in areas such as advanced mathematics, physics, statistics, data structures, cybersecurity, networking, and programming. Proficient in multiple programming languages including C, C#, C++, Java, Python, SQL, and MongoDB, as well as front-end and back-end technologies like React, JavaScript, HTML, and CSS. Gained experience in IoT, machine learning, data mining, multimedia systems, and more.",
        },
        
    ];

    return (
        <div className="relative">
            <h1>Education</h1>
            <div className="before:absolute before:w-[2px] before:h-full before:bg-accent before:left-0 xl:before:left-[calc(50%-1px)]">

                {education.map((item, index) => (
                    <div key={index} className="mb-6 w-full relative pl-4 xl:odd:pr-[calc(50%+30px)] xl:odd:text-right xl:even:pl-[calc(50%+30px)]">
                        <div className="h-5 w-5 bg-accent absolute -left-2 xl:left-[calc(50%-10px)] rounded-full top-2" />
                        <div className="m-2">{item.year}</div>
                        <div className="border-2 rounded-xl border-accent py-4 px-6 hover:scale-105 transition-all duration-300 hover:bg-[#38383f55]">
                            <h3 className="text-accent text-lg pb-4">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default EducationSubSection;