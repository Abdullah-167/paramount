"use client";
import React from "react";
import Container from "../../Components/Common/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "#D0B095" }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center min-h-[520px] py-24 md:py-32">
          {/* LEFT SIDE - TEXT */}
          <div className="md:w-1/2 px-6 md:px-12">
            <h1
              className="text-[3.5rem] md:text-6xl font-extrabold leading-tight"
              style={{ color: "#A06857" }}
            >
              Industries We Serve
            </h1>
            <p
              className="mt-6 mb-10 text-lg md:text-xl max-w-xl leading-relaxed"
              style={{
                color: "#6B5340" /* slightly darker brown for paragraph */,
              }}
            >
              Delivering specialized solutions for textile, manufacturing,
              logistics, and beyond — empowering your business to thrive with
              quality and trust.
            </p>
            <Link href={"/contact"}>
              <button
                className="py-3 px-10 rounded-full font-semibold shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: "#D48D78",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 20px rgba(212, 141, 120, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#A06857";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(160, 104, 87, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#D48D78";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(212, 141, 120, 0.5)";
                }}
              >
                Discover More
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE - ILLUSTRATION */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative px-6">
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-3xl shadow-xl"
              style={{ backgroundColor: "#D0B095" }}
            >
              <circle cx="160" cy="160" r="140" fill="#FFFFFF" />
              <path
                d="M80 240C110 190 160 140 210 90"
                stroke="#D48D78"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M160 100L200 140"
                stroke="#A06857"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M120 140L160 180"
                stroke="#A06857"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <circle cx="160" cy="160" r="24" fill="#D48D78" />
              <circle cx="160" cy="160" r="16" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </Container>
      {/* Decorative shapes */}
      <div
        className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-20"
        style={{ backgroundColor: "#D48D78", filter: "blur(80px)" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-56 h-56 rounded-full opacity-20"
        style={{ backgroundColor: "#A06857", filter: "blur(100px)" }}
      ></div>
    </div>
  );
};

export default Hero;
