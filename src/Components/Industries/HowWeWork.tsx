"use client";
import React from "react";
import Container from "../../Components/Common/Container";
import { FaLightbulb, FaHandshake, FaTruck, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb size={28} color="white" />,
    title: "Understand Your Needs",
    desc: "We begin by comprehensively understanding your industry requirements and challenges.",
  },
  {
    icon: <FaHandshake size={28} color="white" />,
    title: "Tailored Solutions",
    desc: "Crafting bespoke strategies and solutions to fit your unique business goals.",
  },
  {
    icon: <FaTruck size={28} color="white" />,
    title: "Seamless Implementation",
    desc: "Executing the plan with precision and timely delivery across all channels.",
  },
  {
    icon: <FaCheckCircle size={28} color="white" />,
    title: "Continuous Support",
    desc: "Providing ongoing assistance and optimization to ensure sustained success.",
  },
];

const HowWeWork = () => {
  return (
    <section
      aria-label="How We Work Process"
      style={{ backgroundColor: "#FFFFFF" }}
      className="py-20"
    >
      <Container>
        <h2
          className="text-4xl font-extrabold mb-16 text-center"
          style={{ color: "#A06857" }}
        >
          How We Work
        </h2>

        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-10">
          {steps.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center md:w-1/4 px-4"
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: "#D0B095", color: "#FFFFFF" }}
              >
                {icon}
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#6B5340" }}
              >
                {title}
              </h3>
              <p className="text-[#6B5340] leading-relaxed">{desc}</p>
              {idx !== steps.length - 1 && (
                <div
                  className="hidden md:block w-16 h-1 bg-[#D48D78] mt-8"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
