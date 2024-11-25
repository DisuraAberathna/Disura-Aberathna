"use client";

import React, {useEffect, useState} from "react";
import Navbar from "../component/Navbar";
import {certificates, educations, navItems, skills} from "@/data";
import Footer from "../component/Footer";
import {HoverEffect} from "../component/ui/CardHoverEffect";
import Preloader from "../component/Preloader";
import {AnimatedTooltip} from "../component/ui/AnimatedTooltip";
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeIn} from "@/data/variants";
import WPButton from "@/app/component/WP-Button";

const About = () => {
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
                <Preloader/>
            ) : (
                <main className="relative flex justify-center items-center flex-col overflow-clip">
                    <div className="w-full">
                        <Navbar navItems={navItems}/>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="md:pt-48 md:pb-32 py-28 flex flex-col justify-evenly items-center">
                                <motion.div
                                    variants={fadeIn("down", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="flex flex-col items-center w-full"
                                >
                                    <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
                                        About Me
                                    </h2>
                                    <hr className="w-[20%] md:w-[5%] border-blue-700 border-2 rounded-full mt-2"/>
                                </motion.div>
                                <div className="grid md:grid-cols-2 gap-y-5 px-6 pb-20 md:pb-0 mt-14">
                                    <div
                                        className="text-slate-800 dark:text-white w-full order-2 md:order-1 flex flex-col justify-center">
                                        <motion.p
                                            variants={fadeIn("right", 0.2)}
                                            initial="hidden"
                                            whileInView={"show"}
                                            viewport={{once: false, amount: 0.4}}
                                            className="max-w-md md:max-w-xl my-6 text-base"
                                        >
                                            Welcome to my personal corner of the internet! I&apos;m
                                            Disura Aberathna, a passionate Software Developer, Web
                                            Designer, and Mobile Application Developer based in the
                                            vibrant city of Kandy, Sri Lanka. Currently, I&apos;m
                                            pursuing my studies as an undergraduate software engineer,
                                            where I&apos;ve been honing my skills and deepening my
                                            knowledge in the ever-evolving tech world.
                                        </motion.p>
                                        <motion.p
                                            variants={fadeIn("right", 0.4)}
                                            initial="hidden"
                                            whileInView={"show"}
                                            viewport={{once: false, amount: 0.4}}
                                            className="max-w-md md:max-w-xl my-6 text-base"
                                        >
                                            My journey into software development began with a
                                            fascination for how technology can solve real-world
                                            problems. This curiosity quickly grew into a full-blown
                                            passion, leading me to specialize in Object-Oriented
                                            Programming (OOP), Java, and Object-Oriented Design
                                            Principles (OODP). I&apos;ve also immersed myself in the
                                            world of web development, particularly with React-based
                                            frameworks, allowing me to build dynamic and responsive
                                            web applications.
                                        </motion.p>
                                        <motion.p
                                            variants={fadeIn("right", 0.6)}
                                            initial="hidden"
                                            whileInView={"show"}
                                            viewport={{once: false, amount: 0.4}}
                                            className="max-w-md md:max-w-xl my-6 text-base"
                                        >
                                            Through this website, I aim to share my journey, showcase
                                            my projects, and connect with like-minded individuals who
                                            are as passionate about technology as I am. Feel free to
                                            explore my work, check out my blog, or reach out if
                                            you&apos;re interested in collaborating or simply having a
                                            chat!
                                        </motion.p>
                                        <motion.div
                                            variants={fadeIn("right", 0.8)}
                                            initial="hidden"
                                            whileInView={"show"}
                                            viewport={{once: false, amount: 0.4}}
                                            className="pb-2 md:pt-2 md:pb-0 flex"
                                        >
                                            <Link
                                                href="/contact"
                                                className="text-white bg-blue-700 flex items-center gap-2 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm md:px-10 px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Contact Me
                                            </Link>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        variants={fadeIn("left", 0.4)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{once: false, amount: 0.4}}
                                        className="flex justify-center md:ps-24 order-1 md:order-2"
                                    >
                                        <div className="border-2 rounded-full dark:border-gray-700 h-fit">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src="/assets/images/about-profile.svg"
                                                className="md:h-auto md:w-[30rem] w-96 h-96 rounded-full"
                                                alt="profile"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-blue-100 dark:bg-black">
                            <div className="py-28 md:py-32 flex flex-col justify-evenly items-center">
                                <motion.div
                                    variants={fadeIn("down", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="flex flex-col items-center w-full"
                                >
                                    <h2 className="text-4xl text-center font-semibold text-slate-800 dark:text-white">
                                        Education & Skills Development
                                    </h2>
                                    <hr className="w-[30%] md:w-[10%] border-blue-700 border-2 rounded-full mt-2"/>
                                </motion.div>
                                <div className="grid md:grid-cols-2 gap-y-5 gap-x-14 px-6 md:pb-0 mt-14 md:mt-14">
                                    <motion.div
                                        variants={fadeIn("right", 0.2)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{once: false, amount: 0.4}}
                                        className="w-full"
                                    >
                                        <ol className="relative border-s border-gray-900 dark:border-gray-200">
                                            {educations.map((item, idx) => {
                                                return (
                                                    <li className="mb-10 ms-4" key={idx}>
                                                        <div
                                                            className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-900 dark:border-gray-200 dark:bg-gray-200"></div>
                                                        <time
                                                            className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
                                                            {item.duration}
                                                        </time>
                                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-base font-normal text-gray-600 dark:text-gray-300 max-w-lg">
                                                            {item.description}
                                                        </p>
                                                    </li>
                                                );
                                            })}
                                        </ol>
                                    </motion.div>
                                    <motion.div
                                        variants={fadeIn("left", 0.2)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{once: false, amount: 0.4}}
                                        className="w-full"
                                    >
                                        <ol className="relative border-s border-gray-900 dark:border-gray-200">
                                            {skills.map((item, idx) => {
                                                return (
                                                    <li className="mb-4 ms-4" key={idx}>
                                                        <div
                                                            className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-900 dark:border-gray-200 dark:bg-gray-200"></div>
                                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                            {item.title}
                                                        </h3>
                                                        <div className="grid grid-cols-1 md:grid-cols-2">
                                                            {item.skillset.map((skill, indx) => {
                                                                return (
                                                                    <div key={indx}>
                                                                        <p className="text-sm font-normal text-gray-600 dark:text-gray-300">
                                                                            {skill.title}
                                                                        </p>
                                                                        <div
                                                                            className="grid grid-cols-8 md:grid-cols-12">
                                                                            <AnimatedTooltip items={skill.tools}/>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ol>
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-28 md:py-32 flex flex-col justify-evenly items-center">
                                <motion.div
                                    variants={fadeIn("down", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="flex flex-col items-center w-full"
                                >
                                    <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
                                        Certifications
                                    </h2>
                                    <hr className="w-[20%] md:w-[5%] border-blue-700 border-2 rounded-full mt-2"/>
                                </motion.div>
                                <div className="lg:w-[77rem] mt-8 md:mt-14 md:px-20 lg:px-0">
                                    <HoverEffect items={certificates}/>
                                </div>
                            </div>
                        </section>
                        <WPButton/>
                        <Footer/>
                    </div>
                </main>
            )}
        </>
    );
};

export default About;
