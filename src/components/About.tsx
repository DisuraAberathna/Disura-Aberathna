import { motion } from "framer-motion";
import { fadeIn } from "../data/variants";

const About = () => {
  return (
    <div
      className="flex flex-col w-full items-center px-5 lg:px-0 py-20 lg:py-28"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 items-center mb-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.01 }}
          className="flex flex-col justify-center gap-4"
        >
          <h1 className="title">About Me</h1>
          <p className="text-justify max-w-sm lg:max-w-xl lg:text-[1rem]">
            I am an undergraduate software engineer from Sri Lanka. I specialize
            in developing web applications, mobile applications, and software
            solutions. With a strong foundation in various programming languages
            and development frameworks, I am passionate about creating
            innovative and efficient software that meets user needs and business
            goals.
          </p>
        </motion.div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 items-center mb-8">
        <div></div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.01 }}
          className="flex flex-col justify-center gap-4"
        >
          <p className="text-justify max-w-sm lg:max-w-xl lg:text-[1rem]">
            I have hands-on experience in full-stack web development, mobile app
            development, and software engineering, which allows me to take a
            project from the initial concept stage through to deployment and
            maintenance. My work is driven by a commitment to quality, attention
            to detail, and a continuous desire to learn and adapt to new
            technologies.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 items-center mb-8">
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.01 }}
          className="flex flex-col justify-center gap-4"
        >
          <p className="text-justify max-w-sm lg:max-w-xl lg:text-[1rem]">
            When I&apos;m not coding, I enjoy exploring the latest trends in
            technology, contributing to open-source projects, and collaborating
            with other developers to solve complex problems.
          </p>
          <p className="text-justify max-w-sm lg:max-w-xl lg:text-[1rem]">
            Feel free to explore my portfolio to see some of the projects
            I&apos;ve worked on. I look forward to connecting and potentially
            collaborating on exciting new ventures.
          </p>
        </motion.div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
