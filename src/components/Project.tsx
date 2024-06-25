import { projects } from "../data";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import { motion } from "framer-motion";
import { fadeIn } from "../data/variants";

const Project = () => {
  return (
    <div
      className="flex flex-col w-full items-center px-10 lg:px-0 py-20 lg:py-28"
      id="projects"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
        className="flex flex-col justify-center gap-4"
      >
        <h1 className="title text-start">Recent Projects</h1>
        <div className="lg:w-[77rem] flex flex-wrap items-center justify-center gap-10 pt-10">
          {projects.map((project) => (
            <CardContainer className="inter-var" key={project.id}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="div"
                    className="flex items-center"
                  >
                    {project.iconLists.map((icon, index) => (
                      <div
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                        key={index}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
