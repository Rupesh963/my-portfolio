import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecofogeImg from "@/public/ecofogeImg.jpg";
import codeEditorImg from "@/public/codeEditorImg.jpg";
import face from "@/public/face.jpg";
import fruit from "@/public/fruit.jpg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Education", hash: "#education" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const education = [
  {
    title: "Greater Noida Institute of Technology",
    location: "Greater Noida, Uttar Pradesh, India",
    description:
      "Pursuing Bachelor of Technology (BTech) with a focus on Web Development and Software Engineering",
    remarks: "Current CGPA: 8*",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present*",
  },
  {
    title: "Gaya College",
    location: "Gaya, Bihar, India",
    description: "Completed Intermediate in Science (Non Medical)",
    remarks: "Percentage: 71%",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "SRH High School",
    location: "Gaya, Bihar, India",
    description: "Completed Matriculation",
    remarks: "Percentage: 77%",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "AI-Based Object Monitoring System",
    description:
      "Developed an AI-powered object detection and monitoring system using computer vision techniques. Implemented real-time object detection with alert mechanisms for security monitoring. Integrated ESP32-CAM for live video streaming and remote access, improving monitoring efficiency.",
    tags: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "ESP32-CAM",
      "IoT",
      "Real-Time Detection",
    ],
    imageUrl: face,
  },
  {
    title: "ATM Simulator System",
    description:
      "Developed a desktop-based banking application using Java Swing and MySQL to simulate real-world ATM operations. Implemented core functionalities such as account creation, deposit, withdrawal, balance enquiry, and mini statement. Used JDBC for seamless database connectivity and applied OOP principles to design a modular and maintainable system.",
    tags: [
    "Java",
    "Java Swing",
    "MySQL",
    "JDBC",
    "OOPs",
    "DBMS",
  ],

    //imageUrl: fruit,
  },
] as const;

export const skillsData = [
  "C",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "OOPs",
  "DBMS",
] as const;
