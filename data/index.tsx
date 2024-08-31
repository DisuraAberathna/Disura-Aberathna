import { CgWebsite } from "react-icons/cg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { MdWeb } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";

export const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Me",
    url: "/about",
  },
  // {
  //   name: "Blog",
  //   url: "/blog",
  // },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Contact Me",
    url: "/contact",
  },
];

export const serivices = [
  {
    title: "Web Designs",
    description:
      "Creating visually stunning and user-friendly designs that captivate and engage your audience.",
    icon: <CgWebsite />,
  },
  {
    title: "Web Application Development",
    description:
      "Develop powerful and scalable web applications tailored to meet your business needs, ensuring high performance and seamless user experience.",
    icon: <MdWeb />,
  },
  {
    title: "Mobile Application Development",
    description:
      "Building intuitive and high-performing mobile apps for iOS and Android platforms to meet your business needs.",
    icon: <TbDeviceMobileCode />,
  },
  {
    title: "Software Application Development",
    description:
      "Developing custom software solutions tailored to streamline your processes and boost productivity.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Maintanance & Support",
    description:
      "Providing reliable maintenance and support services to ensure your applications run smoothly and efficiently.",
    icon: <HiWrenchScrewdriver />,
  },
  {
    title: "Contact Me",
    icon: <FaRegArrowAltCircleRight />,
    link: "/contact",
  },
];

export const educations = [
  {
    duration: "November 2021 - Present",
    title: "BSc(Hons) In Software Engineering | Birmingham City University",
    description:
      "Studying software engineering with a focus on advanced programming, system design, and real-world projects. Building strong technical skills to prepare for a successful career in the tech industry.",
  },
  {
    duration: "Augest 2024 - Present",
    title: "Intern Web Developer | Pantech Prolabs India (Pvt) ltd.",
    description:
      "Contributed to web development projects, gained hands-on experience in real-world applications, and collaborated with a dynamic team to enhance technical skills in a professional environment.",
  },
];

export const skills = [
  {
    title: "Full-Stack Web Development Mastery",
    skillset: [
      {
        title: "Frontend Frameworks",
        tools: [
          { name: "React.js", uri: "/programming/react.svg" },
          { name: "Next.js", uri: "/programming/next.svg" },
          { name: "Vue.js", uri: "/programming/vuejs.svg" },
          { name: "AngularJS", uri: "/programming/angular.svg" },
          { name: "Tailwind CSS", uri: "/programming/tailwind-css.svg" },
          { name: "Bootstrap", uri: "/programming/bootstrap.svg" },
        ],
      },
      {
        title: "Libraries",
        tools: [
          { name: "Framer Motion", uri: "/programming/fm.svg" },
          { name: "Swiper", uri: "/programming/swiper.svg" },
        ],
      },
      {
        title: "Backend Frameworks & Languages",
        tools: [
          { name: "Node.js", uri: "/programming/nodejs.svg" },
          { name: "Java", uri: "/programming/java.svg" },
          { name: "PHP", uri: "/programming/php.svg" },
          { name: "Laravel", uri: "/programming/laravel.svg" },
        ],
      },
      {
        title: "Databases",
        tools: [
          { name: "MySQL", uri: "/programming/mysql.svg" },
          { name: "mongoDB", uri: "/programming/mongodb.svg" },
        ],
      },
    ],
  },
  {
    title: "Mobile App Development Mastery",
    skillset: [
      {
        title: "Frontend Frameworks",
        tools: [
          { name: "React-Native", uri: "/programming/react-native.svg" },
          { name: "Nativewind", uri: "/programming/tailwind-css.svg" },
        ],
      },
      {
        title: "Backend Frameworks & Languages",
        tools: [
          { name: "PHP", uri: "/programming/php.svg" },
          { name: "Laravel", uri: "/programming/laravel.svg" },
          { name: "Java", uri: "/programming/java.svg" },
        ],
      },
      {
        title: "Databases",
        tools: [
          { name: "MySQL", uri: "/programming/mysql.svg" },
          { name: "mongoDB", uri: "/programming/mongodb.svg" },
        ],
      },
    ],
  },
  {
    title: "Software Development Mastery",
    skillset: [
      {
        title: "Full-Stack",
        tools: [{ name: "Java", uri: "/programming/java.svg" }],
      },
      {
        title: "Databases",
        tools: [
          { name: "MySQL", uri: "/programming/mysql.svg" },
          { name: "mongoDB", uri: "/programming/mongodb.svg" },
        ],
      },
    ],
  },
];

export const certificates = [
  {
    title: "Introduction to Career Skills in Software Development",
    uri: "/certificates/career-skills.jpeg",
    link: "https://www.linkedin.com/posts/disura-chathwara_certificate-of-completion-activity-7219529471316385793-535-/",
  },
  {
    title: "Programming Foundations: Fundamentals",
    uri: "/certificates/programming-foundation.jpeg",
    link: "https://www.linkedin.com/posts/disura-chathwara_certificate-of-completion-activity-7219690915160809474-ShTs/",
  },
  {
    title: "Programming Foundations: Beyond the Fundamentals",
    uri: "/certificates/programming-foundation-beyond-fundametals.jpeg",
    link: "https://www.linkedin.com/posts/disura-chathwara_certificate-of-completion-activity-7219952583698739200-busV/",
  },
  {
    title:
      "Career Essentials in Software Development by Microsoft and LinkedIn",
    uri: "/certificates/career-essentials.jpeg",
    link: "https://www.linkedin.com/posts/disura-chathwara_certificate-of-completion-activity-7220018420631662592-GvxL/",
  },
  {
    title: "Java Programming",
    uri: "/certificates/java.jpeg",
    link: "https://www.linkedin.com/posts/disura-chathwara_javaprogramming-greatlearningacademy-greatlearning-activity-7219716853101731840-YoZO/",
  },
  {
    title: "OOP in Java",
    uri: "/certificates/oop.jpeg",
    link: "https://www.linkedin.com/posts/disura-chathwara_java-oop-professionaldevelopment-activity-7220290756056428545-QVq0/",
  },
  {
    title: "Basics of Python",
    uri: "/certificates/basic-python.jpeg",
    link: "https://www.linkedin.com/posts/disura-chathwara_python-learningjourney-continuouslearning-activity-7229497913305882627-zFvk/",
  },
  {
    title: "Website Building Mastery",
    uri: "/certificates/website-building-mastery.jpeg",
    link: "",
  },
  {
    title: "E-Commerce Building Mastery",
    uri: "/certificates/e-commerce-building-mastery.jpeg",
    link: "",
  },
];

export const projects = [
  {
    title: "CARLAND - Sample Project",
    des: "This sample website I built using Next.js, Framer Motion, and Tailwind CSS.",
    img: "/project/carland.webp",
    iconLists: [
      "/programming/typescript.svg",
      "/programming/next.svg",
      "/programming/tail.svg",
      "/programming/fm.svg",
    ],
    url: "sgffwuJW8sw?si=KybL8QADo1GJgAQO",
    frame_des:
      "In this video, I'll take you on a tour of the dynamic website I built using Next.js, Framer Motion, and Tailwind CSS. CARLAND is a modern, responsive platform designed to showcase vehicles in a sleek, interactive way. Watch how Framer Motion brings animations to life, while Tailwind CSS ensures a seamless and visually appealing design. Whether you're a developer, designer, or car enthusiast, you'll find something to love here. Don't forget to like, comment, and subscribe for more tech tutorials and web design inspiration!",
  },
  {
    title: "Nike - Sample Project",
    des: "This sample website I built using Vite.js, Framer Motion, and Tailwind CSS.",
    img: "/project/nike.webp",
    iconLists: [
      "/programming/typescript.svg",
      "/programming/vite.webp",
      "/programming/tail.svg",
      "/programming/fm.svg",
    ],
    url: "a58pUXjg9qI?si=lbcvxIYbSaEqc3ft",
    frame_des:
      "In this video, I’ll showcase how I built a fast and responsive Nike-themed e-commerce site that combines sleek aesthetics with smooth animations. From an engaging hero section featuring the newest Nike shoe arrivals to intuitive navigation, this site is all about delivering a clean and seamless user experience.",
  },
];

export const testimonials = [
  {
    quote:
      "I highly recommend Disura Aberathne for any web development or software development work. His expertise, work ethic and professionalism make him an outstanding choice for web or software projects.",
    name: "Ishan Nikeshala",
    title: "Backend Developer - DETEC-X Codelabs",
    image: "/testimonial/ishan-img.jpg",
  },
  {
    quote:
      "I wanted to express my appreciation for your great work as a software developer. Your dedication to the projects, technical expertise and innovative solutions have contributed greatly. Your ability to deliver high quality results on time is truly commendable. Thank you for your excellent service.",
    name: "Sudesh Indragith",
    title: "Director - Opelnet Innovation",
    image: "/testimonial/sudesh-img.jpg",
  },
];
