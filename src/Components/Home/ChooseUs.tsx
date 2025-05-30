import Image from "next/image";
import React from "react";
import Container from "../Common/Container";

const Choose = () => {
  return (
    <div className="bg-[#F5DFCB] relative overflow-hidden ">
      <Container>
        <div className="flex lg:flex-nowrap flex-wrap-reverse justify-between items-center lg:pt-0 pt-10">
          <div className="text-left lg:mb-0 mb-5">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              WHY CHOOSE US
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-black mb-8 max-w-2xl">
              We're not middlemen we're sourcing partners focused on results.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-10">
              <li className="flex items-start">
                <span className="mr-2 text-black font-bold">.</span>
                <span className="text-lg text-black">
                  Verified Manufacturers
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-black font-bold">.</span>
                <span className="text-lg text-black">Transparent Pricing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-black font-bold">.</span>
                <span className="text-lg text-black">Quality Inspections</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-black font-bold">.</span>
                <span className="text-lg text-black">On-time Delivery</span>
              </li>
            </ul>

            {/* Button */}
            <button className="cursor-pointer bg-[#D0B095] hover:bg-[#c4a286] text-black font-medium py-3 px-8 rounded-full text-lg transition duration-300">
              Get Started
            </button>
          </div>
          <div>
            <Image
              src="/images/whychosse.png"
              alt="Software Illustration"
              className="mt-10 lg:mb-0 mb-10"
              width={600}
              height={600}
            />
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};

export default Choose;
