"use client";
import React from "react";
import Container from "../../Components/Common/Container";
import Link from "next/link";

const CTASection = () => {
  return (
    <section
      aria-label="Call to Action"
      className="py-20 bg-[#A06857] flex items-center"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{ color: "#F0EFEB" }}
          >
            Ready to Elevate Your Industry?
          </h2>
          <p
            className="text-lg md:text-xl mb-10 leading-relaxed"
            style={{ color: "#F5DFCB" }}
          >
            Let’s partner to bring cutting-edge solutions tailored to your
            business needs. Experience quality, innovation, and growth all under
            one roof.
          </p>
          <Link href={"/contact"}>
            <button
              className="bg-[#D48D78] hover:bg-[#D0B095] transition-colors duration-300 rounded-full py-4 px-14 font-semibold shadow-lg text-white"
              type="button"
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </Container>
      {/* Decorative glowing circles */}
      <div
        className="absolute top-10 left-10 w-36 h-36 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "#D48D78" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-48 h-48 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#F0EFEB" }}
      ></div>
    </section>
  );
};

export default CTASection;
