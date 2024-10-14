"use client";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import Navbar from "@/app/component/Navbar";
import { navItems, serivices } from "../data";
import { Typewriter } from "react-simple-typewriter";
import Footer from "./component/Footer";
import { HoverEffect } from "./component/ui/CardHoverEffect";
import Preloader from "./component/Preloader";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/data/variants";

export const socials = [
  {
    name: "Whatsapp",
    link: "https://wa.me/+94760052864?text=Hello%20there!%20I%27m%20interested%20in%20your%20services.",
    icon: <FaWhatsapp />,
    class:
      "bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-400 hover:via-green-400 hover:to-green-500 focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/disura-chathwara",
    icon: <FaLinkedin />,
    class:
      "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-700 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
  },
  {
    name: "Github",
    link: "https://github.com/DisuraAberathna",
    icon: <FaGithub />,
    class:
      "bg-gradient-to-br from-purple-600 to-black hover:from-purple-500 hover:to-black focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100074785265866&mibextid=ZbWKwL",
    icon: <FaFacebook />,
    class:
      "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:from-blue-400 hover:via-blue-600 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@disura_aberathna",
    icon: <FaYoutube />,
    class:
      "bg-gradient-to-br from-red-500 via-red-600 to-red-700 hover:from-red-400 hover:via-red-600 hover:to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
  },
];

export default function Home() {
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

  return (
    <>
      {!isPageLoaded ? (
        <Preloader />
      ) : (
        <main className="relative flex justify-center items-center flex-col overflow-clip">
          <div className="w-full">
            <Navbar navItems={navItems} />
            <section className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center">
              <div className="flex flex-col-reverse md:flex-row justify-center">
                <div className="flex flex-col justify-center items-center gap-4 text-slate-800 dark:text-white w-full">
                  <div className="border-2 rounded-full dark:border-gray-700">
                    <img src="/profile.svg" alt="Profile Img" className="rounded-full md:w-72 md:h-72" />
                  </div>
                  <motion.h1
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-4xl"
                  >
                    Hello there!
                  </motion.h1>
                  <motion.h1
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-2xl md:text-4xl"
                  >
                    I&apos;m <b>Disura Aberathna</b>
                  </motion.h1>
                  <motion.h2
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-sm md:text-2xl text-center px-5 md:px-0 md:max-w-5xl"
                  >
                    An undergraduate software engineer with a passion for
                    building innovative solutions.
                  </motion.h2>
                  <motion.h2
                    variants={fadeIn("down", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-xl md:text-3xl font-semibold"
                  >
                    <Typewriter
                      words={[
                        "Freelancer",
                        "Web Designer",
                        "Web Developer",
                        "Software Developer",
                        "Mobile Application Developer",
                      ]}
                      loop={true}
                      cursor
                      typeSpeed={150}
                      deleteSpeed={120}
                      delaySpeed={1500}
                    />
                  </motion.h2>
                  <motion.div
                    variants={fadeIn("down", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex justify-center gap-4 w-full"
                    >
                    <Link
                      href="/portfolio"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-4 py-1.5 md:px-6 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View My Work
                    </Link>
                    <Link
                      href="/contact"
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-base px-4 py-1.5 md:px-6 md:py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Contact Me
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("down", 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex justify-center gap-4 w-full"
                  >
                    {socials.map((social, idx) => {
                      return (
                        <a
                          href={social.link}
                          key={idx}
                          target="_blank"
                          className={`text-white focus:ring-2 focus:outline-none font-medium rounded-lg md:text-2xl p-2 text-center ${social.class}`}
                        >
                          {social.icon}
                        </a>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </section>
            {/* <section className="bg-white dark:bg-gray-900">
              <div className="py-32 flex flex-col justify-evenly items-center">
                <motion.div
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex flex-col items-center w-full"
                >
                  <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
                    What I Do
                  </h2>
                  <hr className="w-[20%] md:w-[5%] border-blue-700 border-2 rounded-full mt-2" />
                </motion.div>
                <div className="md:w-[40rem] lg:w-[77rem] mt-8 md:mt-14 px-10 md:px-0">
                  <HoverEffect items={serivices} />
                </div>
              </div>
            </section> */}
          </div>
        </main>
      )}
    </>
  );
}
