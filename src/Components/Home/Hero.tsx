import React from "react";
import Container from "../Common/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#D0B095] sm:bg-[url('/images/homehero.png')] bg-no-repeat bg-right bg-contain">
      <Container>
        <div className="flex flex-col items-start text-left py-14">
          {/* Heading with emoji */}
          <h1 className="text-xl md:text-small lg:text-small font-bold text-black mb-4">
            🔰 20+ Years in Global Trade
          </h1>

          {/* Bold subheading */}
          <h2 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-black mb-6">
            Your Global Partner in Textile Indenting
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-black mb-8 max-w-2xl">
            We help global buyers and exporters source quality textile products
            through verified manufacturing partners, with a focus on compliance,
            pricing, and timely delivery.
          </p>

          {/* Button */}
          <Link href={"/contact"}>
            <button className="bg-[#F5DFCB] hover:bg-[#e8d1b9] text-black font-medium py-3 px-8 rounded-full text-lg transition duration-300">
              Get In Touch
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
