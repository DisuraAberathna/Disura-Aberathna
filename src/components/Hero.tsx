import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/AuroraBackground";
import { Typewriter } from "react-simple-typewriter";
import { fadeIn } from "../data/variants";

const Hero = () => {
  return (
    <AuroraBackground id="home">
      <div className="relative px-4 overflow-clip">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.01 }}
            className="flex flex-col justify-center gap-4"
          >
            <h1 className="text-4xl md:text-6xl">Hello there!</h1>
            <h1 className="text-2xl md:text-6xl">
              I&apos;m <b>Disura Aberathna</b>
            </h1>
            <h1 className="text-sm md:text-3xl font-semibold">
              <Typewriter
                words={[
                  "Undergraduate Software Engineer",
                  "Web Application Developer",
                  "Mobile Application Developer",
                  "Software Developer",
                ]}
                loop={true}
                cursor
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.01 }}
            className="hidden lg:flex items-center justify-end pe-8 w-full"
          >
            <div className="flex items-center justify-center">
              <img
                src="./border.png"
                alt="border"
                className="animate-spin-slow h-[30rem] w-[30rem]"
              />
              <img
                src="./profile.png"
                alt="profile"
                className="absolute w-[26rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
