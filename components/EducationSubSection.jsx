
const EducationSubSection = () => {

    const education = [
        {
            title: "Hight School",
            year: 2020,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum vero sapiente quod repellat et aliquam illo neque aspernatur porro suscipit quo, quidem accusamus pariatur possimus nam ipsa earum similique.",
        },
        {
            title: "University of Sri Jayewardenepura",
            year: 2023,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum vero sapiente quod repellat et aliquam illo neque aspernatur porro suscipit quo, quidem accusamus pariatur possimus nam ipsa earum similique.",
        },
        {
            title: "Bachelor of Information and Communication Technology (BICT) (Hons.)",
            year: 2025,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum vero sapiente quod repellat et aliquam illo neque aspernatur porro suscipit quo, quidem accusamus pariatur possimus nam ipsa earum similique.",
        }
    ];

    return (
        <div className="relative">
            <h1>Education</h1>
            <div className="before:absolute before:w-[2px] before:h-full before:bg-accent before:left-[calc(50%-1px)]">

                {education.map((item, index) => (
                    <div key={index} className="mb-5 w-full relative odd:pr-[calc(50%+30px)] odd:text-right even:pl-[calc(50%+30px)]">
                        <div className="h-5 w-5 bg-accent absolute left-[calc(50%-10px)] rounded-full top-2" />
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