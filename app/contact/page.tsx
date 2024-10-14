"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { navItems } from "@/data";
import { Label } from "../component/ui/Label";
import { Input } from "../component/ui/Input";
import { cn } from "@/lib/utils";
import { Textarea } from "../component/ui/TextArea";
import { ToastContainer, toast } from "react-toastify";
import { FaLocationArrow, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../component/Footer";
import Preloader from "../component/Preloader";
import { motion } from "framer-motion";
import { fadeIn } from "@/data/variants";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        handlePageLoad();
      }, 2000);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  const successNotify = () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 5000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Processing...",
      success: "Email successfully send",
    });
  };

  const errorNotify = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    errorNotify("This function not working yet!");
    // if (formData.name === "") {
    //   errorNotify("Please enter your name");
    // } else if (formData.email === "") {
    //   errorNotify("Please enter your email address");
    // } else if (!validateEmail(formData.email)) {
    //   errorNotify("Please enter valid email address");
    // } else if (formData.subject === "") {
    //   errorNotify("Please enter subject");
    // } else if (formData.message === "") {
    //   errorNotify("Please enter your message");
    // } else {
    // const response = await fetch("/api/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // const result = await response.json();
    // if (result.success) {
    // successNotify();
    //   setFormData({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: "",
    //   });
    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
    // } else {
    //   errorNotify(result.error || "Failed to send message");
    // }
    // }
  };

  return (
    <>
      {!isPageLoaded ? (
        <Preloader />
      ) : (
        <main className="relative flex justify-center items-center flex-col overflow-clip">
          <div className="w-full">
            <Navbar navItems={navItems} />
            <section className="md:min-h-screen bg-white dark:bg-gray-900">
              <div className="pt-40 pb-32 md:pt-48 md:pb-40 flex flex-col justify-evenly items-center">
                <motion.div
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex flex-col items-center w-full"
                >
                  <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
                    Contact Me
                  </h2>
                  <hr className="w-[20%] md:w-[5%] border-blue-700 border-2 rounded-full mt-2" />
                </motion.div>
                <div className="flex flex-col md:flex-row justify-center gap-x-20 gap-y-5 px-6 pt-20">
                  <div className=" text-slate-800 dark:text-white">
                    <motion.p
                      variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.4 }}
                      className="max-w-lg mt-2"
                    >
                      Ready to turn your digital dreams into reality? Let&apos;s
                      connect! I&apos;m here to bring your vision to life. Drop
                      me a line below, and let&apos;s start building something
                      extraordinary together!
                    </motion.p>
                    <div className="flex flex-col gap-4 mt-4">
                      <motion.h5
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex items-center gap-x-2"
                      >
                        <FaLocationDot className="text-lg" /> 98/2, Medagoda,
                        Poojapitiya, Kandy
                      </motion.h5>
                      <motion.h5
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex items-center gap-x-2"
                      >
                        <MdCall className="text-lg" /> +94 76 002 5864
                      </motion.h5>
                      <motion.h5
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex items-center gap-x-2"
                      >
                        <FaWhatsapp className="text-lg" /> +94 76 002 5864
                      </motion.h5>
                      <motion.h5
                        variants={fadeIn("right", 0.7)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex items-center gap-x-2"
                      >
                        <HiOutlineMail className="text-lg" />{" "}
                        contact@disuraaberathna.com
                      </motion.h5>
                    </div>
                  </div>
                  <motion.form
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col mt-8 md:mt-0 gap-y-4 py-10 px-5 md:px-10 shadow-input bg-blue-100 dark:bg-black border-blue-200 border dark:border-gray-800 rounded-xl"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <LabelInputContainer>
                        <Label htmlFor="name">Name*</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="false"
                        />
                      </LabelInputContainer>
                      <LabelInputContainer>
                        <Label htmlFor="email">Email*</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="false"
                        />
                      </LabelInputContainer>
                    </div>
                    <LabelInputContainer>
                      <Label htmlFor="subject">Subject*</Label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        autoComplete="false"
                      />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label>Message*</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        autoComplete="false"
                      />
                    </LabelInputContainer>
                    <div>
                      <button
                        type="submit"
                        className="text-white bg-blue-700 flex items-center gap-2 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm md:px-10 px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Send Message <FaLocationArrow />
                      </button>
                    </div>
                  </motion.form>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
