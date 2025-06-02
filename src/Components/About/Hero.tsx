import React from "react";
import Container from "../Common/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-[#EBD3C1] to-[#D0B095] text-black py-20 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT - Textual Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Empowering Textile Trade Through{" "}
              <span className="text-[#7A4E2D]">Trust</span> &{" "}
              <span className="text-[#7A4E2D]">Technology</span>
            </h1>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed max-w-xl">
              For over two decades, we’ve connected global buyers with verified
              manufacturers ensuring quality, transparency, and timely delivery
              in every transaction.
            </p>
            <Link href={"/contact"}>
              <button className="bg-[#000000] cursor-pointer text-white hover:bg-[#2c2c2c] px-8 py-3 rounded-full text-lg font-medium transition">
                Learn More
              </button>
            </Link>
          </div>

          {/* RIGHT - Keyword Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "20+ Years", desc: "Industry Experience" },
              { label: "100+", desc: "Verified Manufacturers" },
              { label: "Global", desc: "Buyers Network" },
              { label: "On-Time", desc: "Delivery Promise" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-md"
              >
                <div className="text-2xl font-bold text-[#7A4E2D]">
                  {item.label}
                </div>
                <div className="text-sm text-gray-700 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
