"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        value: "+94 715315915",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "buddikakasun80@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        value: "No:12, Parakkrama MW, Panadura, Sri Lanka",
    }
]

const Contact = () => {
  return (
    <div className="container max-auto lg:pt-[70px] mb-8 lg:mb-0">
        <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="order-1 lg:order-none">
                {/* Form */}
                <form className="flex flex-col gap-2 p-6 bg-[#27272c50] rounded-xl">
                    <h3 className="text-3xl text-accent pb-4">Let's work together</h3>
                    <p className="text-white/60 text-sm">
                        I'm here to help you achieve your goals. Let's connect and create a unique digital experience together.
                    </p>
                    <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Input type="firstname" placeholder="First Name" />
                        <Input type="lastname" placeholder="Last Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="phone" placeholder="Phone" />
                    </div>
                    <Input type="subject" placeholder="Subject" className="w-full" />
                    <Textarea
                        className="h-[100px]"
                        placeholder="Type your message here"
                    />
                    <div className="flex items-center justify-center lg:justify-start">
                        <Button type="submit" className="max-w-36 text-sm h-[30px] mt-2">Send message</Button>
                    </div>
                </form>
            </div>
            {/* Info */}
            <div className="flex-1 flex items-center lg:justify-end order-2 lg:order-none mb-8 lg:mb-0 lg:pr-10 lg:pl-4">
                <ul className="flex flex-col gap-10 w-full">
                    {info.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center gap-6">
                                <div className="min-w-[52px] h-[52px] lg:min-w-[60px] lg:h-[60px] bg-[#27272c60] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[25px]">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-white/60 text-sm">{item.title}</p>
                                    <h3 className="text-base text-ellipsis line-clamp-2">{item.value}</h3>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Contact;