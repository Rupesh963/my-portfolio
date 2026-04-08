"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 text-[18px] sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
  As a{" "}
  <span className="font-bold text-[22px]">BTech (CSE-IoT) student</span>, I have a strong
  interest in{" "}
  <span className="font-semibold italic text-[20px]">
    web development and problem-solving
  </span>
  . I am actively building my skills in{" "}
  <span className="font-semibold italic text-[20px]">
    data structures & algorithms
  </span>{" "}
  and programming languages like{" "}
  <span className="font-bold italic text-[20px]">
    C, Java, and JavaScript
  </span>
  . I enjoy applying theoretical knowledge to{" "}
  <span className="font-semibold italic text-[20px]">
    real-world projects
  </span>
  , which strengthens my understanding of core concepts.
</p>

<p className="mb-3">
  I have hands-on experience in{" "}
  <span className="font-bold italic text-[20px]">
    frontend development using React and Tailwind CSS
  </span>
  , and have built projects like an{" "}
  <span className="font-medium text-[19px]">
    AI-based Object Monitoring System
  </span>{" "}
  and an{" "}
  <span className="font-medium text-[19px]">
    ATM Simulator System
  </span>
  . These projects helped me gain practical exposure to{" "}
  <span className="italic text-[19px]">
    real-time systems, databases, and application development
  </span>
  .
</p>

<p>
  My core focus is on building{" "}
  <span className="font-bold text-[20px]">
    efficient and scalable solutions
  </span>{" "}
  using concepts like{" "}
  <span className="font-semibold text-[20px]">
    OOPs, DBMS, and system design fundamentals
  </span>
  . I am eager to grow as a{" "}
  <span className="font-medium text-[19px]">software developer</span>{" "}
  and contribute to impactful and innovative projects.
</p>
    </motion.section>
  );
}
