import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecofogeImg from "@/public/ecofogeImg.jpg";
import codeEditorImg from "@/public/codeEditorImg.jpg";
import food from "@/public/Food.jpg";
import atm from "@/public/ATM.jpg";

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
    title: "Greater Noida Institute of Technology (GNIOT)",
    location: "Greater Noida, Uttar Pradesh, India",
    description:
      "Completed Bachelor of Technology (B.Tech) in Computer Science & Engineering (IoT), with a focus on Java backend development, Spring Boot, and full-stack application development.",
    remarks: "CGPA: 7.91/10",
    icon: React.createElement(LuGraduationCap),
    date: "2022 – 2026",
  },
  {
  title: "Gaya College",
  location: "Gaya, Bihar, India",
  description:
    "Completed Higher Secondary Education (Class XII) in Science.",
  remarks: "Percentage: 71%",
  icon: React.createElement(LuGraduationCap),
  date: "2020 – 2021",
},
  {
  title: "SRH High School",
  location: "Gaya, Bihar, India",
  description: "Completed Secondary Education (Class X).",
  remarks: "Percentage: 77%",
  icon: React.createElement(LuGraduationCap),
  date: "2018 – 2019",
},
] as const;

export const projectsData = [
  {
  title: "Food Delivery App",
  description:
    "Built a full-stack food delivery application using Spring Boot, React, and MongoDB, featuring authentication, menu management, cart functionality, and order processing through RESTful APIs.",
  tags: [
    "Java",
    "Spring Boot",
    "React",
    "MongoDB",
    "REST APIs",
    "JWT",
  ],
  imageUrl: food, // import your project screenshot above
},
  {
    title: "ATM Simulator System",
    description:
      "Built a desktop ATM application using Java Swing, MySQL, and JDBC, implementing core banking operations with a modular OOP design.",
    tags: [
    "Java",
    "Java Swing",
    "MySQL",
    "JDBC",
    "OOPs",
    "DBMS",
  ],

    imageUrl: atm,
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Boot",
  "Spring AI",
  "REST APIs",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
  "OOP",
  "DBMS",
  "DSA",
] as const;
