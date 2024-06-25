import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../data/variants";

const Testimonial = () => {
  return (
    <div
      className="flex flex-col w-full items-center px-5 lg:px-0 py-20 lg:py-28"
      id="testimonial"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col justify-center items-center lg:items-start gap-4"
      >
        <h1 className="title text-start">Satisfied Clients</h1>
        <div className="max-w-md lg:max-w-[77rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
