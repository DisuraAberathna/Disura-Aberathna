import { fadeIn } from "@/data/variants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description?: string;
    link?: string;
    uri?: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          href={item.link === null ? "#" : item.link}
          key={idx}
          target={item.uri && "_blank"}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {item.title !== "Contact Me" ? (
            <Card>
              {item.uri && (
                <div className="w-full mb-3">
                  <img src={item.uri} className="h-64" alt="certificate" />
                </div>
              )}
              <CardTitle icon={item.icon}>{item.title}</CardTitle>
              {item.description && (
                <CardDescription>{item.description}</CardDescription>
              )}
            </Card>
          ) : (
            <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-pink-200 via-cyan-300 via-90% to-sky-300 border border-transparent group-hover:border-blue-300 dark:border-white/[0.2] dark:group-hover:border-slate-600 relative z-20">
              <div className="w-full h-full flex justify-center items-center gap-3 py-20 md:py-0">
                <h5 className="text-3xl font-bold text-slate-800">
                  {item.title}
                </h5>
                <span className="text-4xl text-slate-800">{item.icon}</span>
              </div>
            </div>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-blue-100 dark:bg-black border border-transparent group-hover:border-blue-300 dark:border-white/[0.2] dark:group-hover:border-slate-600 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  icon,
  className,
  children,
}: {
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex justify-between items-center mt-2">
      <h4
        className={cn(
          "text-slate-800 dark:text-white font-bold tracking-wide",
          className
        )}
      >
        {children}
      </h4>
      <span className="text-3xl text-slate-800 dark:text-white">{icon}</span>
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-6 text-slate-800 dark:text-white tracking-wide leading-relaxed text-sm mb-4",
        className
      )}
    >
      {children}
    </p>
  );
};
