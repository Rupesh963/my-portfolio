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
  I'm <span className="font-bold text-[22px]">Rupesh Kumar</span>, a Java Backend Developer based in Noida, India. I recently completed my <span className="font-semibold italic text-[20px]">B.Tech in Computer Science (IoT)</span> from <span className="font-medium text-[19px]">Greater Noida Institute of Technology (GNIOT)</span> in 2026.
</p>

<p className="mb-3">
  I completed a Java Developer internship at <span className="font-medium text-[19px]">Elevate Labs</span> (Jun–Aug 2026), where I built REST APIs with <span className="font-bold italic text-[20px]">Spring Boot</span>, contributed to a production codebase, and collaborated with senior engineers on code reviews and debugging. This experience strengthened my ability to write clean, maintainable backend code in a professional environment.
</p>

<p className="mb-3">
  I have a strong problem-solving foundation, having solved <span className="font-bold text-[20px]">200+ DSA problems</span> on LeetCode and GeeksforGeeks. This practice shapes the way I design efficient and well-structured software systems.
</p>

<p className="mb-3">
  I enjoy building end-to-end applications and have developed a <span className="font-medium text-[19px]">full-stack Food Delivery Platform</span> using Spring Boot, React, and MongoDB, along with an <span className="font-medium text-[19px]">ATM Simulation System</span> in Java, gaining practical experience in authentication, order processing, and secure transaction handling.
</p>

<p>
  Currently, I am exploring <span className="font-semibold text-[20px]">Spring AI</span> and seeking full-time opportunities where I can contribute as a backend developer while continuing to grow and learn.
</p>
    </motion.section>
  );
}
