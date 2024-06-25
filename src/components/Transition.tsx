import { motion } from "framer-motion";

const transitionVarients = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[80] bg-gradient-to-br from-[#0C0E23] to-[#060f63] flex items-center justify-center"
        variants={transitionVarients}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      >
        <img src="../logo.png" className="w-72 lg:w-[35rem]" alt="logo" />
      </motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[70] bg-gradient-to-br from-[#1a2051] to-[#0a1689]"
        variants={transitionVarients}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-gradient-to-br from-[#1e255d] to-[#1021bb]"
        variants={transitionVarients}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
