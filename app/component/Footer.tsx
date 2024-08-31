"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/Input";
import { socials } from "../page";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { fadeIn } from "@/data/variants";

const Footer = () => {
  const [email, setEmail] = useState("");

  const successNotify = () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Processing...",
      success: "Thank you for subscribe!",
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (email === "") {
      errorNotify("Please enter email address!");
    } else if (!validateEmail(email)) {
      errorNotify("Invalid email address!");
    } else {
      successNotify();
      setEmail("");
    }
  };

  return (
    <footer className="bg-black dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 md:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.a
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              href="https://disuraaberathna.com/"
              className="flex items-center"
            >
              <img
                src="/logo.webp"
                className="h-10 md:h-12 me-3 mb-4"
                alt="FlowBite Logo"
              />
            </motion.a>
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-lg font-bold mt-2 text-white"
            >
              Subscribe Newsletter
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="mb-4 text-white"
            >
              Get the latest updates and offers directly in your inbox.
            </motion.p>
            <motion.form
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="flex flex-wrap gap-2"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="md:w-80"
                autoComplete="false"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                type="submit"
                className="text-white bg-blue-700 flex items-center gap-2 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm md:px-5 px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Subscribe
              </button>{" "}
            </motion.form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 w-80">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h2 className="mb-6 font-semibold text-white uppercase">
                Qick Links
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="/about" className="hover:underline text-sm">
                    About Me
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contact" className="hover:underline text-sm">
                    Contact Me
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:underline text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h2 className="mb-6 font-semibold text-white uppercase">
                Follow Me
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/disura-chathwara"
                    target="_blank"
                    className="hover:underline text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.hr
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="my-6 border-gray-200 sm:mx-auto lg:my-8"
        />
        <div className="flex flex-col-reverse items-center justify-center gap-4">
          <motion.span
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-sm text-white sm:text-center"
          >
            © 2024{" "}
            <a href="https://disuraaberathna.com/" className="hover:underline">
              Disura Aberathna
            </a>
            . All Rights Reserved.
          </motion.span>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex mt-4 sm:justify-center sm:mt-0"
          >
            {socials.map((social, idx) => {
              return (
                <a
                  href={social.link}
                  target="_blank"
                  className={`text-white hover:text-gray-200 text-xl ${
                    idx !== 0 && "ms-5"
                  }`}
                  key={idx}
                >
                  {social.icon}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
