import React from "react";
import Container from "../Common/Container";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <Container>
      <div className="flex lg:flex-nowrap flex-wrap justify-between items-center py-10 sm:py-20 ">
        <div className="max-w-[561px] mb-5 sm:mb-0">
          <h2 className="text-[40px] font-[700] pb-5">Why Choose Us</h2>
          <p className="text-[20px] pb-5">
            We don’t just build software we become your long-term technology
            partner.
          </p>
          <button className="shadow-button-shadow text-[15px] sm:text-[20px] bg-[#F5DFCB] rounded-full px-6 py-2 cursor-pointer">
            Get a Quote
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 place-items-center w-full sm:max-w-[670px]">
          {data.map((item, index) => {
            return (
              <div
                className="border border-[#C4C4C4] rounded-[10px] p-5 mb-5 sm:max-w-[300px] w-full"
                key={index}
              >
                <div
                  className="w-[70px] h-[70px] mx-auto rounded-full flex justify-center mb-5"
                  style={{
                    backgroundColor: item.iconsbg,
                  }}
                >
                  <Image src={item.icon} alt={""} width={30} height={30} />
                </div>
                <h2 className="text-[18px] text-center text-[#000000] font-[600] pb-3">
                  {item.heading}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;

const data = [
  {
    icon: "/icons/proven.svg",
    iconsbg: "#AFA492",
    heading: "Proven Process",
  },
  {
    icon: "/icons/technical.svg",
    iconsbg: "#D0B095",
    heading: "Technical Expertise",
  },
  {
    icon: "/icons/ontime.svg",
    iconsbg: "#D48D78",
    heading: "On-Time Delivery",
  },
  {
    icon: "/icons/long.svg",
    iconsbg: "#A06857",
    heading: "Long-Term Support",
  },
];
