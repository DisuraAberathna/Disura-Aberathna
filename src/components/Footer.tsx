import { profiles } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../data/variants";

const Footer = () => {
  return (
    <footer className="lg:w-[65vw] py-7 lg:py-10 mx-auto">
      <motion.div
        variants={fadeIn("bottom", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex justify-center w-60 lg:w-full pb-2 lg:pb-5">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row justify-between items-center w-full">
          <p className="text-sm lg:text-lg">
            Copyright &copy; 2024 Disura Aberathna
          </p>
          <div className="flex items-center gap-4 md:gap-3">
            {profiles.map((profile) => (
              <div
                key={profile.name}
                className="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-slate-400/30 hover:bg-slate-400/45 rounded-lg duration-300 "
              >
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  {profile.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
