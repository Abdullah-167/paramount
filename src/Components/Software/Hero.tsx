import React from "react";
import Container from "../Common/Container";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <div className="bg-[#D0B095] relative overflow-hidden pt-0 sm:pt-10 pb-5 sm:pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-10 relative">
          {/* LEFT SIDE - TEXT */}
          <div className="z-10">
            <h1 className="text-[#000000] text-[30px] sm:text-[40px] max-w-[300px] sm:max-w-[534px] font-[600] leading-[35px] sm:leading-[45px] pb-2 sm:pb-5">
              Bridging Global Textile Trade with Smart Solutions
            </h1>
            <p className="text-[17px] sm:text-[20px] text-[#000000] max-w-[561px] leading-[25px] sm:leading-[30px] pb-4 sm:pb-7">
              From import-export and indenting to commission-based trade
              services, we streamline your textile business operations. Plus,
              with our customized software solutions tailored for the textile
              and accounting sectors, you get efficiency, clarity, and control
              all in one place.
            </p>
            <Link href={"/contact"}>
              <button className="shadow-button-shadow text-[15px] sm:text-[20px] bg-[#F5DFCB] rounded-full px-6 py-2 cursor-pointer">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className=" hidden lg:block absolute right-[-100px] -top-[80px]">
            <Image
              src="/images/ScaleableSoftware.png"
              alt="Software Illustration"
              className=""
              width={1200}
              height={700}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
