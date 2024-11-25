"use client";

import React, {useEffect, useState} from "react";
import Preloader from "../component/Preloader";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {navItems, projects, testimonials} from "@/data";
import {FaQuoteLeft, FaX} from "react-icons/fa6";
import {motion} from "framer-motion";
import {fadeIn} from "@/data/variants";
import Script from "next/script";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import WPButton from "@/app/component/WP-Button";

interface Project {
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    url: string;
    frame_des: string;
}

const Portfolio = () => {
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const filteredProjects = selectedCategory === 'All Categories'
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1);
    };

    useEffect((): () => void => {
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

    const openModal = (project: Project) => {
        setActiveProject(project);
        setIsOpen(true);
        document.body.classList.add("overflow-hidden");
    };

    const closeModal = () => {
        setIsOpen(false);
        setActiveProject(null);
        document.body.classList.remove("overflow-hidden");
    };

    const categories = ["All Categories", "Web Applications", "Mobile Applications", "Software Applications"];

    return (
        <>
            {!isPageLoaded ? (
                <Preloader/>
            ) : (
                <main className="relative flex justify-center items-center flex-col overflow-clip">
                    <div className="w-full">
                        <Navbar navItems={navItems}/>
                        <section className="bg-white dark:bg-gray-900 min-h-screen">
                            <div className="md:pt-48 md:pb-32 py-32 flex flex-col justify-evenly items-center">
                                <motion.div
                                    variants={fadeIn("down", 0)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="flex flex-col items-center w-full"
                                >
                                    <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
                                        Project Portfolio
                                    </h2>
                                    <hr className="w-[20%] md:w-[5%] border-blue-700 border-2 rounded-full mt-2"/>
                                </motion.div>
                                <motion.p
                                    variants={fadeIn("down", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="text-center px-5 mt-10 text-lg md:max-w-5xl text-slate-800 dark:text-white"
                                >
                                    Explore some of the projects I&apos;ve worked on. Each project
                                    showcases my skills in different areas of software
                                    development, from web and mobile applications to dynamic
                                    websites.
                                </motion.p>
                                <motion.div
                                    variants={fadeIn("down", 0.4)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="grid md:grid-cols-2 mt-8 mb-4 w-full md:w-[60rem] px-8 lg:px-0"
                                >
                                    <div>
                                        <select
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-0 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[50%] p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={selectedCategory}
                                            onChange={handleCategoryChange}
                                        >
                                            {categories.map((category) => (
                                                <option key={category} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div
                                        className="flex w-full justify-center md:justify-end items-center mt-5 md:mt-0">
                                        <nav aria-label="Page navigation example">
                                            <ul className="flex items-center -space-x-px h-8 text-sm">
                                                <li>
                                                    <button
                                                        onClick={goToPreviousPage} disabled={currentPage === 1}
                                                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-transparent hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-base">
                                                        <IoIosArrowBack/>
                                                        <span>Previous</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    {totalPages === 0 ? (
                                                        <span className="text-base text-slate-800 dark:text-white">
                                                             <span className="font-semibold">0 </span>
                                                            Pages
                                                        </span>
                                                    ) : (
                                                        <span className="text-base text-slate-800 dark:text-white">
                                                        Page
                                                        <span className="font-semibold"> {currentPage} </span>
                                                        of
                                                        <span className="font-semibold"> {totalPages} </span>
                                                    </span>
                                                    )}
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={goToNextPage}
                                                        disabled={currentPage === totalPages || totalPages === 0}
                                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-transparent hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-base">
                                                        <span>Next</span>
                                                        <IoIosArrowForward/>
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </motion.div>
                                <div
                                    className="flex flex-col items-center justify-center gap-5 md:gap-7 px-3 lg:px-0"
                                >
                                    {currentProjects.map((project) => (
                                        <motion.div
                                            variants={fadeIn("down", 0.6)}
                                            initial="hidden"
                                            whileInView={"show"}
                                            viewport={{once: false, amount: 0.4}}
                                            className="flex flex-col md:flex-row gap-4 w-full rounded-xl bg-slate-100 md:bg-slate-50 dark:bg-slate-800 shadow md:shadow-lg p-5"
                                            key={project.title}>
                                            <div
                                                className="border-2 border-slate-200 dark:border-slate-700 rounded-xl p-2">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    height="1000"
                                                    width="1000"
                                                    className="h-32 md:h-52 w-full object-cover rounded-xl"
                                                    src={project.img}
                                                    alt={`${project.title} image`}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-y-2">
                                                <h1 className="font-bold text-xl md:text-2xl text-slate-800 dark:text-white">
                                                    {project.title}
                                                </h1>
                                                <h1 className="text-lg font-medium text-slate-800 dark:text-white">{project.category}</h1>
                                                <p className="text-base max-w-xl text-neutral-800 dark:text-neutral-300">
                                                    {project.des}
                                                </p>
                                                <div className="flex items-center">
                                                    {project.iconLists.map((icon, index) => (
                                                        <div
                                                            className="border border-white/[0.2] rounded-full bg-white md:w-10 md:h-10 w-8 h-8 flex justify-center items-center"
                                                            style={{
                                                                transform: `translateX(-${
                                                                    5 * index * 2
                                                                }px)`,
                                                            }}
                                                            key={index}
                                                        >
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img src={icon} alt={icon} className="p-2"/>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div>
                                                    <button
                                                        className="text-white items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm md:px-8 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        onClick={() => openModal(project)}
                                                    >
                                                        Read More...
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {isOpen && activeProject && (
                            <div
                                className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform border-l border-l-gray-200 dark:border-l-gray-700 bg-white w-full md:w-[30rem] dark:bg-gray-800`}
                            >
                                <motion.h5
                                    variants={fadeIn("up", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="inline-flex items-center mb-4 text-xl font-semibold text-gray-500 dark:text-gray-400"
                                >
                                    {activeProject.title}
                                </motion.h5>
                                <motion.button
                                    variants={fadeIn("up", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeModal}
                                >
                                    <FaX/>
                                </motion.button>
                                <motion.hr
                                    variants={fadeIn("up", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="border-gray-300 dark:border-gray-600"
                                />
                                <motion.h5
                                    variants={fadeIn("up", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="inline-flex items-center mt-6 text-lg font-semibold text-gray-500 dark:text-gray-400"
                                >
                                    Project Overview
                                </motion.h5>
                                <motion.div
                                    variants={fadeIn("up", 0.4)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="flex my-4"
                                >
                                    <Script
                                        src="https://www.youtube.com/iframe_api"
                                        strategy="lazyOnload"
                                    />
                                    <iframe
                                        width="640"
                                        height="390"
                                        className="w-full h-48 md:h-64"
                                        src={`https://www.youtube.com/embed/${activeProject.url}`}
                                        // frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </motion.div>
                                <motion.p
                                    variants={fadeIn("up", 0.6)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="text-sm text-gray-500 dark:text-gray-400 text-justify"
                                >
                                    {activeProject.frame_des}
                                </motion.p>
                                <motion.h5
                                    variants={fadeIn("up", 0.7)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="inline-flex items-center mt-6 mb-4 text-lg font-semibold text-gray-500 dark:text-gray-400"
                                >
                                    Used Technologies
                                </motion.h5>
                                <motion.div
                                    variants={fadeIn("up", 0.8)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="flex items-center gap-0 mb-6"
                                >
                                    {activeProject.iconLists.map((icon, index) => (
                                        <div
                                            className="border border-white/[0.2] rounded-full bg-blue-100 dark:bg-white w-10 h-10 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index * 2}px)`,
                                            }}
                                            key={index}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={icon} alt={icon} className="p-2"/>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        )}

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
                                        What People Are Saying
                                    </h2>
                                    <hr className="w-[30%] md:w-[10%] border-blue-700 border-2 rounded-full mt-2"/>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn("down", 0.4)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once: false, amount: 0.4}}
                                    className="w-full flex justify-center"
                                >
                                    <div
                                        className="lg:w-[60rem] lg:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden px-3 md:px-0 py-20 md:py-10">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: false,
                                                pauseOnMouseEnter: true,
                                            }}
                                            navigation={true}
                                            modules={[Autoplay, Pagination, Navigation]}
                                            className="w-full h-full"
                                        >
                                            {testimonials.map((item, idx) => {
                                                return (
                                                    <SwiperSlide key={idx}>
                                                        <div
                                                            className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                                                            <div
                                                                className="w-full max-w-[300px] flex flex-col lg:justify-center items-center relative mx-auto lg:mx-0">
                                                                <div
                                                                    className="flex flex-col justify-center text-center">
                                                                    <div className="mb-2 mx-auto">
                                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                        <img
                                                                            src={item.image}
                                                                            alt="testimonial img"
                                                                            width={100}
                                                                            height={100}
                                                                            className="rounded-full"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="text-lg text-slate-800 dark:text-white">
                                                                        {item.name}
                                                                    </div>
                                                                    <div
                                                                        className="text-[12px] uppercase font-extralight tracking-widest text-slate-800 dark:text-white">
                                                                        {item.title}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="flex-1 flex flex-col justify-center before:w-[1px] lg:before:bg-gray-700/80 dark:lg:before:bg-white/80 lg:before:absolute lg:before:left-0 lg:before:h-[200px] relative lg:pl-20">
                                                                <div className="mb-4">
                                                                    <FaQuoteLeft
                                                                        className="text-4xl lg:text-6xl text-gray-700/80 dark:text-white/80 mx-auto md:mx-0"/>
                                                                </div>
                                                                <div
                                                                    className="lg:text-lg text-center md:text-left text-slate-800 dark:text-white">
                                                                    {item.quote}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            })}
                                        </Swiper>
                                    </div>
                                </motion.div>
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

export default Portfolio;
