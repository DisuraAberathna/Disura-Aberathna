"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    addAnimation();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  function addAnimation() {
    if (isMobile || items.length > 2) {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        while (scrollerRef.current.children.length > items.length) {
          scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
        }

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
        default:
          duration = "40s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_2%,white_98%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-300 dark:border-slate-700 px-8 py-6 md:w-[450px] bg-gradient-to-br from-pink-200 via-cyan-300 via-90% to-sky-300 dark:from-black dark:to-blue-700"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <FaQuoteLeft className="text-4xl xl:text-6xl text-black/50 dark:text-white/50 mx-auto md:mx-0" />
              <span className="relative z-20 text-sm leading-[1.6] text-gray-900 dark:text-gray-100 font-medium text-justify">
                {item.quote}
              </span>
              <div className="flex justify-start items-center gap-4 mt-5 mb-3 me-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="relative z-20 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-gray-900 dark:text-gray-300 font-medium">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-900 dark:text-gray-300 font-medium">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </blockquote>
            <div className="w-full flex justify-center items-center py-2">
              <hr className="border-gray-700 dark:border-gray-300 border-2 rounded-full w-28" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
