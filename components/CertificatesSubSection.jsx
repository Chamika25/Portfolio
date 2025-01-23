"use client"

import Image from "next/image";

const CertificatesSubSection = () => {

    const certificates = [
        {
            name: "Build a computer vision app with Azure Cognitive Services",
            issuedBy: "Coursera",
            date: "2024 Oct 10",
            image: "/assets/certificates/AzureCertificate.png",
            link: "https://coursera.org/verify/RO42SEE7KNWQ"
        },
        {
            name: "Azure: create a REST API using NodeJS Serverless Functions",
            issuedBy: "Coursera",
            date: "2024 Oct 12",
            image: "/assets/certificates/AzureAPICertificate.png",
            link: "https://coursera.org/verify/RLJ5Q6WO1YSC"
        },
        {
            name: "Python for Beginners",
            issuedBy: "University of Moratuwa, Sri Lanka",
            date: "2024 Oct 13",
            image: "/assets/certificates/PythonUMO.png",
            link: "https://open.uom.lk/verify",
            verificationCode: "LV1DwyH4AW"
        },
        {
            name: "Web Design for Beginners",
            issuedBy: "University of Moratuwa, Sri Lanka",
            date: "2024 Oct 15",
            image: "/assets/certificates/WebUMO.png",
            link: "https://open.uom.lk/verify",
            verificationCode: "QkevnwBQmq"
        },
        {
            name: "Fundamentals of MERN Stack",
            issuedBy: "Simpli Learn",
            date: "2024 Nov 11",
            image: "/assets/certificates/mern.png",
            link: "https://simpli.app.link/pMXUx9hTnQb"
        }
    ];

    return (
        <section>
            <h1>Certificates</h1>
            <div className="flex flex-col gap-8 p-2">
                {certificates.map((cert, index) => (
                    <div key={index} className="flex flex-col lg:flex-row gap-4 p-4 bg-[#193432cc] rounded-md group">
                        <div className="w-full lg:min-w-96 lg:max-w-96 rounded-md">
                            <Image
                                src={cert.image}
                                alt={cert.name}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover rounded-md lg:brightness-90 lg:group-hover:brightness-100"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg lg:text-2xl font-semibold text-accent">{cert.name}</h2>
                            <div className="py-4 lg:py-8">
                                <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-center py-2 lg:py-1">
                                    <p className="text-sm opacity-80">Issued by:</p> 
                                    <p className="leading-tight">{cert.issuedBy}</p>
                                </div>
                                <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-center py-2 lg:py-1">
                                    <p className="text-sm opacity-80">Date:</p>
                                    <p className="leading-tight">{cert.date}</p>
                                </div>
                                {cert.verificationCode && (
                                    <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-center py-2 lg:py-1">
                                        <p className="text-sm opacity-80">Verification Code:</p>
                                        <p className="leading-tight">{cert.verificationCode}</p>
                                    </div>
                                )}
                            </div>
                            {cert.link && (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                    className="bg-accent bg-opacity-90 lg:hover:bg-accent-hover text-primary px-4 py-1 rounded-full cursor-none"
                                >
                                    Certificate Link
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CertificatesSubSection;