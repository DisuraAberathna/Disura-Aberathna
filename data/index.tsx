import {CgWebsite} from "react-icons/cg";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {FaLaptopCode} from "react-icons/fa6";
import {HiWrenchScrewdriver} from "react-icons/hi2";
import {MdWeb} from "react-icons/md";
import {TbDeviceMobileCode} from "react-icons/tb";
import React from "react";

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
        icon: <CgWebsite/>,
    },
    {
        title: "Web Application Development",
        description:
            "Develop powerful and scalable web applications tailored to meet your business needs, ensuring high performance and seamless user experience.",
        icon: <MdWeb/>,
    },
    {
        title: "Mobile Application Development",
        description:
            "Building intuitive and high-performing mobile apps for iOS and Android platforms to meet your business needs.",
        icon: <TbDeviceMobileCode/>,
    },
    {
        title: "Software Application Development",
        description:
            "Developing custom software solutions tailored to streamline your processes and boost productivity.",
        icon: <FaLaptopCode/>,
    },
    {
        title: "Maintanance & Support",
        description:
            "Providing reliable maintenance and support services to ensure your applications run smoothly and efficiently.",
        icon: <HiWrenchScrewdriver/>,
    },
    {
        title: "Contact Me",
        icon: <FaRegArrowAltCircleRight/>,
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
        duration: "Augest 2024 - November 2024",
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
                    {name: "React.js", uri: "/assets/images/programming/react.svg"},
                    {name: "Next.js", uri: "/assets/images/programming/next.svg"},
                    {name: "Vue.js", uri: "/assets/images/programming/vuejs.svg"},
                    {name: "AngularJS", uri: "/assets/images/programming/angular.svg"},
                    {name: "Tailwind CSS", uri: "/assets/images/programming/tailwind-css.svg"},
                    {name: "Bootstrap", uri: "/assets/images/programming/bootstrap.svg"},
                ],
            },
            {
                title: "Libraries",
                tools: [
                    {name: "Framer Motion", uri: "/assets/images/programming/fm.svg"},
                    {name: "Swiper", uri: "/assets/images/programming/swiper.svg"},
                ],
            },
            {
                title: "Backend Frameworks & Languages",
                tools: [
                    {name: "Node.js", uri: "/assets/images/programming/nodejs.svg"},
                    {name: "Java", uri: "/assets/images/programming/java.svg"},
                    {name: "PHP", uri: "/assets/images/programming/php.svg"},
                    {name: "Laravel", uri: "/assets/images/programming/laravel.svg"},
                ],
            },
            {
                title: "Databases",
                tools: [
                    {name: "MySQL", uri: "/assets/images/programming/mysql.svg"},
                    {name: "mongoDB", uri: "/assets/images/programming/mongodb.svg"},
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
                    {name: "React-Native", uri: "/assets/images/programming/react-native.svg"},
                    {name: "Nativewind", uri: "/assets/images/programming/tailwind-css.svg"},
                ],
            },
            {
                title: "Backend Frameworks & Languages",
                tools: [
                    {name: "PHP", uri: "/assets/images/programming/php.svg"},
                    {name: "Laravel", uri: "/assets/images/programming/laravel.svg"},
                    {name: "Java", uri: "/assets/images/programming/java.svg"},
                ],
            },
            {
                title: "Databases",
                tools: [
                    {name: "MySQL", uri: "/assets/images/programming/mysql.svg"},
                    {name: "mongoDB", uri: "/assets/images/programming/mongodb.svg"},
                ],
            },
        ],
    },
    {
        title: "Software Development Mastery",
        skillset: [
            {
                title: "Full-Stack",
                tools: [{name: "Java", uri: "/assets/images/programming/java.svg"}],
            },
            {
                title: "Databases",
                tools: [
                    {name: "MySQL", uri: "/assets/images/programming/mysql.svg"},
                    {name: "mongoDB", uri: "/assets/images/programming/mongodb.svg"},
                ],
            },
        ],
    },
];

export const certificates = [
    {
        title: "Introduction to Career Skills in Software Development",
        uri: "/assets/images/certificates/career-skills.jpeg",
        link: "https://www.linkedin.com/posts/disura-chathwara_certificate-of-completion-activity-7219529471316385793-535-/",
    },
    {
        title: "Programming Foundations: Fundamentals",
        uri: "/assets/images/certificates/programming-foundation.jpeg",
        link: "https://www.linkedin.com/posts/disura-chathwara_certificate-of-completion-activity-7219690915160809474-ShTs/",
    },
    {
        title: "Programming Foundations: Beyond the Fundamentals",
        uri: "/assets/images/certificates/programming-foundation-beyond-fundametals.jpeg",
        link: "https://www.linkedin.com/posts/disura-chathwara_certificate-of-completion-activity-7219952583698739200-busV/",
    },
    {
        title:
            "Career Essentials in Software Development by Microsoft and LinkedIn",
        uri: "/assets/images/certificates/career-essentials.jpeg",
        link: "https://www.linkedin.com/posts/disura-chathwara_certificate-of-completion-activity-7220018420631662592-GvxL/",
    },
    {
        title: "Java Programming",
        uri: "/assets/images/certificates/java.jpeg",
        link: "https://www.linkedin.com/posts/disura-chathwara_javaprogramming-greatlearningacademy-greatlearning-activity-7219716853101731840-YoZO/",
    },
    {
        title: "OOP in Java",
        uri: "/assets/images/certificates/oop.jpeg",
        link: "https://www.linkedin.com/posts/disura-chathwara_java-oop-professionaldevelopment-activity-7220290756056428545-QVq0/",
    },
    {
        title: "Basics of Python",
        uri: "/assets/images/certificates/basic-python.jpeg",
        link: "https://www.linkedin.com/posts/disura-chathwara_python-learningjourney-continuouslearning-activity-7229497913305882627-zFvk/",
    },
    {
        title: "Website Building Mastery",
        uri: "/assets/images/certificates/website-building-mastery.jpeg",
        link: "",
    },
    {
        title: "E-Commerce Building Mastery",
        uri: "/assets/images/certificates/e-commerce-building-mastery.jpeg",
        link: "",
    },
];

export const projects = [
    {
        title: "Limupa | E-Commerce Web Application",
        category: "Web Applications",
        des: "This e-commerce website I built using HTML, Bootstrap CSS, JavaScript, Java EE7, MySQL and Hibernate.",
        img: "/assets/images/project/limupa.webp",
        iconLists: [
            "/assets/images/programming/html.webp",
            "/assets/images/programming/bootstrap.svg",
            "/assets/images/programming/javascript.svg",
            "/assets/images/programming/java.svg",
            "/assets/images/programming/mysql.svg",
            "/assets/images/programming/hibernate.webp",
        ],
        url: "4jqgwNmFNMU?si=_qMNusrxAgcHIw9C",
        frame_des:
            "In this video, I showcase the processes and views of a modern e-commerce web application built using Bootstrap 5, Java EE 7, and Hibernate Criteria API. Watch as I demonstrate the sleek and responsive user interface, shopping cart functionality, product management, and seamless user experience. The video highlights key features like dynamic product listing, order processing, and secure authentication, all developed with enterprise-grade technologies. Whether you're a developer or an enthusiast, this demo gives you an inside look at how powerful and user-friendly an e-commerce platform can be!",
    },
    {
        title: "Nike | Sample Project",
        category: "Web Applications",
        des: "This sample website I built using Vite.js, Framer Motion, and Tailwind CSS. ",
        img: "/assets/images/project/nike.webp",
        iconLists: [
            "/assets/images/programming/typescript.svg",
            "/assets/images/programming/vite.webp",
            "/assets/images/programming/tail.svg",
            "/assets/images/programming/fm.svg",
        ],
        url: "a58pUXjg9qI?si=lbcvxIYbSaEqc3ft",
        frame_des:
            "In this video, I’ll showcase how I built a fast and responsive Nike-themed e-commerce site that combines sleek aesthetics with smooth animations. From an engaging hero section featuring the newest Nike shoe arrivals to intuitive navigation, this site is all about delivering a clean and seamless user experience.",
    },
    {
        title: "CARLAND | Sample Project",
        category: "Web Applications",
        des: "This sample website I built using Next.js, Framer Motion, and Tailwind CSS.",
        img: "/assets/images/project/carland.webp",
        iconLists: [
            "/assets/images/programming/typescript.svg",
            "/assets/images/programming/next.svg",
            "/assets/images/programming/tail.svg",
            "/assets/images/programming/fm.svg",
        ],
        url: "sgffwuJW8sw?si=KybL8QADo1GJgAQO",
        frame_des:
            "In this video, I'll take you on a tour of the dynamic website I built using Next.js, Framer Motion, and Tailwind CSS. CARLAND is a modern, responsive platform designed to showcase vehicles in a sleek, interactive way. Watch how Framer Motion brings animations to life, while Tailwind CSS ensures a seamless and visually appealing design. Whether you're a developer, designer, or car enthusiast, you'll find something to love here. Don't forget to like, comment, and subscribe for more tech tutorials and web design inspiration!",
    },
];

export const testimonials = [
    {
        quote:
            "I highly recommend Disura Aberathne for any web development or software development work. His expertise, work ethic and professionalism make him an outstanding choice for web or software projects.",
        name: "Ishan Nikeshala",
        title: "Backend Developer - DETEC-X Codelabs",
        image: "/assets/images/testimonial/ishan-img.jpg",
    },
    {
        quote:
            "I wanted to express my appreciation for your great work as a software developer. Your dedication to the projects, technical expertise and innovative solutions have contributed greatly. Your ability to deliver high quality results on time is truly commendable. Thank you for your excellent service.",
        name: "Sudesh Indragith",
        title: "Director - Opelnet Innovation",
        image: "/assets/images/testimonial/sudesh-img.jpg",
    },
];
