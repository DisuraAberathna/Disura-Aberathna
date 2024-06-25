import { HoverEffect } from "./ui/CardHoverEffect";
import { serivices } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../data/variants";

const Service = () => {
  return (
    <div
      className="flex flex-col w-full items-center px-10 lg:px-0 py-20 lg:py-28"
      id="service"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col justify-center gap-4"
      >
        <h1 className="title text-start">Services</h1>
        <div className="lg:w-[77rem]">
          <HoverEffect items={serivices} />
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
