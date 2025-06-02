"use client";
import React from "react";
import { FaIndustry, FaShippingFast, FaCog, FaLeaf } from "react-icons/fa";
import Container from "../../Components/Common/Container";

const industries = [
  {
    icon: <FaIndustry size={40} color="#A06857" />,
    title: "Manufacturing",
    desc: "Optimized workflows and automation tailored for efficient production.",
  },
  {
    icon: <FaShippingFast size={40} color="#A06857" />,
    title: "Logistics & Supply Chain",
    desc: "Reliable tracking and seamless delivery solutions for your goods.",
  },
  {
    icon: <FaCog size={40} color="#A06857" />,
    title: "Engineering",
    desc: "Precision-driven tools and management for complex projects.",
  },
  {
    icon: <FaLeaf size={40} color="#A06857" />,
    title: "Sustainable Solutions",
    desc: "Eco-friendly practices and technology for a greener future.",
  },
];

const IndustriesFocus = () => {
  return (
    <section
      style={{ backgroundColor: "#F0EFEB" }}
      className="py-20"
      aria-label="Industries we specialize in"
    >
      <Container>
        <h2
          className="text-4xl font-extrabold mb-12 text-center"
          style={{ color: "#A06857" }}
        >
          Industry Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{ border: `2px solid #D0B095` }}
            >
              <div className="mb-6">{icon}</div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#6B5340" }}
              >
                {title}
              </h3>
              <p className="text-base text-[#6B5340] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustriesFocus;
