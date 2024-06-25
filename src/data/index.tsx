import { CgWebsite } from "react-icons/cg";
import { FaHome, FaLinkedin } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLaptopCode,
  FaPager,
  FaRectangleList,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { MdRocketLaunch, MdWeb } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";

export const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <FaHome />,
  },
  {
    name: "About",
    link: "#about",
    icon: <FaUser />,
  },
  {
    name: "Services",
    link: "#service",
    icon: <FaRectangleList />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaPager />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <FaEnvelope />,
  },
];

export const serivices = [
  {
    title: "Web Designs",
    description:
      "Creating visually stunning and user-friendly designs that captivate and engage your audience.",
    link: "",
    icon: <CgWebsite />,
  },
  {
    title: "Web Applications",
    description:
      "Develop powerful and scalable web applications tailored to meet your business needs, ensuring high performance and seamless user experience.",
    link: "",
    icon: <MdWeb />,
  },
  {
    title: "SEO",
    description:
      "Optimizing your website to improve visibility, drive traffic, and enhance your online presence.",
    link: "",
    icon: <MdRocketLaunch />,
  },
  {
    title: "Mobile Applications",
    description:
      "Building intuitive and high-performing mobile apps for iOS and Android platforms to meet your business needs.",
    link: "",
    icon: <TbDeviceMobileCode />,
  },
  {
    title: "Software Applications",
    description:
      "Developing custom software solutions tailored to streamline your processes and boost productivity.",
    link: "",
    icon: <FaLaptopCode />,
  },
  {
    title: "Maintanance & Support",
    description:
      "Providing reliable maintenance and support services to ensure your applications run smoothly and efficiently.",
    link: "",
    icon: <HiWrenchScrewdriver />,
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "I highly recommend Disura Aberathne for any web development or software development work. His expertise, work ethic and professionalism make him an outstanding choice for web or software projects.",
    name: "Ishan Nikeshala",
    title: "Backend Developer - DETEC-X Codelabs",
    image: "/ishan-img.jpg",
  },
  {
    quote:
      "I wanted to express my appreciation for your great work as a software developer. Your dedication to the projects, technical expertise and innovative solutions have contributed greatly. Your ability to deliver high quality results on time is truly commendable. Thank you for your excellent service.",
    name: "Sudesh Indragith",
    title: "Director - Opelnet Innovation",
    image: "/sudesh-img.jpg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: "/whatsapp-profile.jpeg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/whatsapp-profile.jpeg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image: "/whatsapp-profile.jpeg",
  },
];

export const profiles = [
  {
    name: "Whatsapp",
    link: "https://wa.me/+94760052864?text=Hello%20there!%20I%27m%20interested%20in%20your%20services.",
    icon: <FaWhatsapp />,
  },
  {
    name: "Github",
    link: "https://github.com/DisuraAberathna",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/disura-chathwara",
    icon: <FaLinkedin />,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100074785265866&mibextid=ZbWKwL",
    icon: <FaFacebook />,
  },
];
