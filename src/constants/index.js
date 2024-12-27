import {
  chromecast,
  disc02,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  tiktok,
  
} from "../assets";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import hostinger from "../assets/hostinger.png";
import aws from "../assets/aws.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";

import p1 from "../public/p1.svg";
import tail from "../public/tail.svg";
import three from "../public/three.svg";
import fm from "../public/fm.svg";
import re from "../public/re.svg";
import next from "../public/next.svg";
import stream from "../public/stream.svg";
import c from "../public/c.svg";
import p2 from "../public/p2.svg";
import p3 from "../public/p3.svg";
import ts from "../public/ts.svg";
import p4 from "../public/p4.svg";
import gsap from "../public/gsap.svg";


export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Benefits",
    url: "#benefits",
  },
  {
    id: "2",
    title: "Services",
    url: "#services",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "4",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "5",
    title: "Contact Me",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [html, css, javascript, react, nextjs, hostinger, aws];

{/*export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
]; */}

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const services = [
  {
    id: "0",
    title: "Custom Web Development",
    text: "We create responsive, high-performance websites tailored to your business needs, ensuring a seamless user experience and a strong online presence.",
    
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Mobile App Development",
    text: "From concept to deployment, we build user-friendly mobile applications that deliver exceptional functionality across platforms like iOS and Android.",
    // date: "May 2023",
    // status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "AI-Powered Solutions",
    text: "Leverage the power of Artificial Intelligence with our smart, data-driven applications that enhance automation, analytics, and decision-making.",
    // date: "May 2023",
    // status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Software Development & Integration",
    text: "We design and develop robust, scalable software solutions while seamlessly integrating them with your existing systems to boost efficiency and productivity.",
    // date: "May 2023",
    // status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: ["Perfect for startups and small businesses starting their digital journey.",],
    price: "50",
    features: [
      "Custom 5-page website",
      "Responsive design (mobile & desktop)",
      "Basic SEO setup",
      "Social media integration",
      "1-month free support",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Ideal for growing businesses that need advanced features and functionality.",
    price: "300",
    features: [
      "Fully custom website (up to 10 pages) or mobile app",
      "E-commerce functionality (if needed)",
      "Advanced SEO optimization",
      "Basic AI integration (chatbots, analytics)",
      "3-month free support",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Designed for enterprises seeking comprehensive and scalable solutions.",
    price: 500,
    features: [
      "Full-stack web or mobile app development",
      "AI-powered solutions (predictive models, automation)",
      "Custom software development",
      "API and system integrations",
      "6-month free support & maintenance",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Expertise That Inspires Confidence",
    text: "Our team of skilled professionals excels in web, app, software development, and AI-driven solutions, ensuring your project is in expert hands.",
    backgroundUrl: "./assets/benefits/card-1.svg",
    /*iconUrl: benefitIcon1,
    imageUrl: benefitImage2,*/
  },
  {
    id: "1",
    title: "Tailored Solutions for Unique Needs",
    text: "We understand that no two businesses are the same. That’s why we offer customized solutions designed to meet your specific goals.",
    backgroundUrl: "./assets/benefits/card-2.svg",
    /*iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,*/
  },
  {
    id: "2",
    title: "Commitment to Innovation",
    text: "We harness the latest technologies and best practices to provide cutting-edge solutions that keep you ahead of the curve.",
    backgroundUrl: "./assets/benefits/card-3.svg",
    /*iconUrl: benefitIcon3,
    imageUrl: benefitImage2,*/
  },
  {
    id: "3",
    title: "Client-Centric Approach",
    text: "Your success is our priority. We listen, collaborate, and deliver, ensuring every project reflects your vision and exceeds expectations.",
    backgroundUrl: "./assets/benefits/card-4.svg",
    /*iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,*/
  },
  {
    id: "4",
    title: "Global Reach with Local Touch",
    text: "Though we serve clients worldwide, we remain focused on delivering personalized support and attention to every client, big or small.",
    backgroundUrl: "./assets/benefits/card-5.svg",
    /*iconUrl: benefitIcon1,
    imageUrl: benefitImage2,*/
  },
  {
    id: "5",
    title: "Proven Track Record",
    text: "From startups to enterprises, we’ve helped businesses achieve measurable results through innovative technology solutions.",
    backgroundUrl: "./assets/benefits/card-6.svg",
    /*iconUrl: benefitIcon2,
    imageUrl: benefitImage2,*/
  },
];

export const socials = [

  {
    id: "0",
    title: "TikTok",
    iconUrl: tiktok,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://web.facebook.com/Aashif743/",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: p1,
    iconLists: [ re, tail, ts, three, fm],
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: p2,
    iconLists: [next, tail, ts, stream, c],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: p3,
    iconLists: [re, tail, ts, three, c],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: p4,
    iconLists: [next, tail, ts, three, gsap],
    link: "/ui.apple.com",
  },
];
