"use client";

import React, { useEffect, useState } from "react";
import Preloader from "../component/Preloader";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { navItems, projects, testimonials } from "@/data";
import { FaQuoteLeft, FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/data/variants";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

  return (
    <>
      {!isPageLoaded ? (
        <Preloader />
      ) : (
        <main className="relative flex justify-center items-center flex-col overflow-clip">
          <div className="w-full">
            <Navbar navItems={navItems} />
            <section className="bg-white dark:bg-gray-900 min-h-screen">
              <div className="md:pt-48 md:pb-32 py-32 flex flex-col justify-evenly items-center">
                <motion.div
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex flex-col items-center w-full"
                >
                  <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
                    Project Portfolio
                  </h2>
                  <hr className="w-[20%] md:w-[5%] border-blue-700 border-2 rounded-full mt-2" />
                </motion.div>
                <motion.p
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="text-center px-5 mt-10 text-lg md:max-w-5xl"
                >
                  Explore some of the projects I've worked on. Each project
                  showcases my skills in different areas of software
                  development, from web and mobile applications to dynamic
                  websites.
                </motion.p>
                <motion.div
                  variants={fadeIn("down", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="md:w-[77rem] flex flex-wrap items-center justify-center gap-5 md:gap-10 mt-14 px-3 md:px-0"
                >
                  {projects.map((project) => (
                    <div
                      className="flex items-center justify-center hover:scale-105 transform duration-300"
                      key={project.title}
                    >
                      <div className="flex items-center justify-center relative transition-all duration-200 ease-linear hover:cursor-pointer">
                        <div className="bg-blue-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                          <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                            {project.title}
                          </h1>
                          <p className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            {project.des}
                          </p>
                          <div className="w-full mt-4">
                            <img
                              src={project.img}
                              height="1000"
                              width="1000"
                              className="h-40 md:h-60 w-full object-cover rounded-xl"
                              alt={project.title}
                            />
                          </div>
                          <div className="flex justify-between items-center mt-10">
                            <button
                              className="text-white items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm md:px-8 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              onClick={() => openModal(project)}
                            >
                              Read More...
                            </button>
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
                                  <img src={icon} alt={icon} className="p-2" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
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
                  viewport={{ once: false, amount: 0.4 }}
                  className="inline-flex items-center mb-4 text-xl font-semibold text-gray-500 dark:text-gray-400"
                >
                  {activeProject.title}
                </motion.h5>
                <motion.button
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <FaX />
                </motion.button>
                <motion.hr
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="border-gray-300 dark:border-gray-600"
                />
                <motion.h5
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="inline-flex items-center mt-6 text-lg font-semibold text-gray-500 dark:text-gray-400"
                >
                  Project Overview
                </motion.h5>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
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
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </motion.div>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="text-sm text-gray-500 dark:text-gray-400 text-justify"
                >
                  {activeProject.frame_des}
                </motion.p>
                <motion.h5
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="inline-flex items-center mt-6 mb-4 text-lg font-semibold text-gray-500 dark:text-gray-400"
                >
                  Used Technologies
                </motion.h5>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
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
                      <img src={icon} alt={icon} className="p-2" />
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
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex flex-col items-center w-full"
                >
                  <h2 className="text-4xl text-center font-semibold text-slate-800 dark:text-white">
                    What People Are Saying
                  </h2>
                  <hr className="w-[30%] md:w-[10%] border-blue-700 border-2 rounded-full mt-2" />
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="w-full flex justify-center"
                >
                  <div className="lg:w-[60rem] lg:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden px-3 md:px-0 py-20 md:py-10">
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
                            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                              <div className="w-full max-w-[300px] flex flex-col lg:justify-center items-center relative mx-auto lg:mx-0">
                                <div className="flex flex-col justify-center text-center">
                                  <div className="mb-2 mx-auto">
                                    <img
                                      src={item.image}
                                      alt="testimonial img"
                                      width={100}
                                      height={100}
                                      className="rounded-full"
                                    />
                                  </div>
                                  <div className="text-lg text-slate-800 dark:text-white">
                                    {item.name}
                                  </div>
                                  <div className="text-[12px] uppercase font-extralight tracking-widest text-slate-800 dark:text-white">
                                    {item.title}
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col justify-center before:w-[1px] lg:before:bg-gray-700/80 dark:lg:before:bg-white/80 lg:before:absolute lg:before:left-0 lg:before:h-[200px] relative lg:pl-20">
                                <div className="mb-4">
                                  <FaQuoteLeft className="text-4xl lg:text-6xl text-gray-700/80 dark:text-white/80 mx-auto md:mx-0" />
                                </div>
                                <div className="lg:text-lg text-center md:text-left text-slate-800 dark:text-white">
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
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

export default Portfolio;
