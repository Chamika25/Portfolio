"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

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
  },
];

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  /* const handleInputChange = (e) => {
    const { name, value } = e.target;

    const nameRegex = /^[A-Za-z.]*$/;

    if ((name === "firstName" || name === "lastName") && !nameRegex.test(value)) {
      setErrors({ ...errors, [name]: "Only letters and dots are allowed" });
      setTimeout(() => {
        setErrors({...errors, [name]: "" });
      }, 2000); // Delay of 500ms
      return;
    }
    else{
      setErrors({...errors, [name]: "" });
    }

    setFormData({...formData, [name]: value });
  }; */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Regex for validations
    const nameRegex = /^[A-Za-z.\s]*$/; // Only letters and dots
    const emailRegex = /^[A-Za-z0-9.@]*$/;
    const phoneRegex = /^\+?[0-9]*$/;
    const subjectRegex = /^[A-Za-z0-9.\s]*$/;
  
    let errorMsg = "";
  
    // Name Validation
    if ((name === "firstName" || name === "lastName") && !nameRegex.test(value)) {
      errorMsg = "Only letters, spaces and dots are allowed";
    }
  
    // Email Validation
    if (name === "email"){
      if ((value.match(/@/g) || []).length > 1) {
        errorMsg = "Only one '@' is allowed";
      }
      else if(!emailRegex.test(value)) {
        errorMsg = "Only letters, numbers and @ are allowed";
      }
    }

    // Subject Validation
    if (name === "subject" && !subjectRegex.test(value)) {
      errorMsg = "Only letters, numbers, spaces and dots are allowed";
    }

    // Phone Number Validation
    if (name === "phone"){
      if(value.length > 20){
        errorMsg = "Phone number should not exceed 20 characters";
      }
      else if(!phoneRegex.test(value)) {
        errorMsg = "Only numbers allowed";
      }
    }
  
    // Set error message if there's a validation error
    if (errorMsg) {
      setErrors({ ...errors, [name]: errorMsg });
  
      // Remove error message after 2 seconds
      setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }, 2000);
      return;
    }
  
    // Clear errors and update form data
    setErrors({ ...errors, [name]: "" });
    setFormData({ ...formData, [name]: value });
  };
  
  const validate = () => {
    let newErrors = {};
    let sanitizedFormData = {};
  
    // Regex patterns
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[0-9]{7,20}$/;
    const nameRegex = /^[A-Za-z. ]*$/; // Only letters, dots, and spaces
    
    for (const field in formData) {
      let value = formData[field].trim(); // Trim spaces
  
      // Sanitize all fields (prevent HTML injection)
      value = value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
      // Validation checks
      if (!value) {
        newErrors[field] = "This field is required";
      } 
  
      // Name validation
      if ((field === "firstName" || field === "lastName") && value.length > 0 && !nameRegex.test(value)) {
        newErrors[field] = "Only letters, dots, and spaces are allowed";
      }
  
      // Email validation
      if (field === "email" && value.length > 0 && !emailRegex.test(value)) {
        newErrors[field] = "Invalid email format";
      }
  
      // Phone validation
      if (field === "phone" && value.length > 0 && !phoneRegex.test(value)) {
        newErrors[field] = "Invalid phone number (only digits, 7-20 characters)";
      }
  
      // Store sanitized value
      sanitizedFormData[field] = value;
    }
  
    setErrors(newErrors);
  
    // Return sanitized data if no errors, otherwise return null
    return Object.keys(newErrors).length === 0 ? sanitizedFormData : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validatedData = validate();
    // Send form data to server or API
    if (validatedData) {
      console.log("Form validated data:", validatedData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      toast.success("Message sent", {
        className: "custom-toast",
        position: 'top-center',
        autoClose: 2000,
      });

    }
    else{
      console.log("Form validation failed. Please check the errors.");
      toast.error("Form validation failed. Please check the errors", {
        className: "custom-toast",
        position: 'top-left',
        autoClose: 2000,
      });
      
    }
  };

  return (
    <div className="container max-auto lg:pt-[70px] mb-8 lg:mb-0">
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="order-1 lg:order-none">
          {/* Form */}
          <form className="flex flex-col gap-2 p-6 bg-[#27272c50] rounded-xl">
            <h3 className="text-3xl text-accent pb-4">Let&apos;s work together</h3>
            <p className="text-white/60 text-sm">
              I&apos;m here to help you achieve your goals. Let&apos;s connect and create
              a unique digital experience together.
            </p>
            <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`flex flex-col ${!(errors?.firstName) && 'lg:pb-4'}`}>
                <Input type="firstName" placeholder="First Name" name="firstName" onChange={handleInputChange} value={formData.firstName} />
                {errors.firstName && <p className="text-red-400 text-xs">{errors.firstName}</p>}
              </div>
              <div className={`flex flex-col ${!(errors?.lastName) && 'lg:pb-4'}`}>
                <Input type="lastName" placeholder="Last Name" name="lastName" onChange={handleInputChange} value={formData.lastName} />
                {errors.lastName && <p className="text-red-400 text-xs">{errors.lastName}</p>}
              </div>
              <div className={`flex flex-col ${!(errors?.email) && 'lg:pb-4'}`}>
                <Input type="email" placeholder="Email" name="email" onChange={handleInputChange} value={formData.email} />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
              </div>
              <div className={`flex flex-col ${!(errors?.phone) && 'lg:pb-4'}`}>
                <Input type="phone" placeholder="Phone" name="phone" onChange={handleInputChange} value={formData.phone} />
                {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
              </div>
            </div>
            <div className={`flex flex-col ${!(errors?.subject) && 'lg:pb-4'}`}>
              <Input type="subject" placeholder="Subject" className="w-full" name="subject" onChange={handleInputChange} value={formData.subject} />
              {errors.subject && <p className="text-red-400 text-xs">{errors.subject}</p>}
            </div>
            <div className="flex flex-col lg:pb-2">
              <Textarea
                className="h-[100px]"
                placeholder="Type your message here" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <Button 
                type="submit" 
                className="max-w-36 text-sm h-[30px] mt-2"
                onClick={handleSubmit}
              >
                Send message
              </Button>
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
                    <div className="text-[25px]">{item.icon}</div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h3 className="text-base text-ellipsis line-clamp-2">
                      {item.value}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
