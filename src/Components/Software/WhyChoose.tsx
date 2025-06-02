import React from "react";
import Container from "../Common/Container";

// React Icons
import {
  FaGlobeAmericas,
  FaHandshake,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
import Link from "next/link";

const WhyChoose = () => {
  return (
    <Container>
      <div className="flex lg:flex-nowrap flex-wrap justify-between items-center py-10 sm:py-20 ">
        <div className="max-w-[561px] mb-5 sm:mb-0">
          <h2 className="text-[40px] font-[700] pb-5">Why Choose Us</h2>
          <p className="text-[20px] pb-5">
            Empowering your textile business with seamless global trade and
            custom software solutions designed to drive growth and efficiency.
          </p>
          <Link href={"/contact"}>
            <button className="shadow-button-shadow text-[15px] sm:text-[20px] bg-[#F5DFCB] rounded-full px-6 py-2 cursor-pointer hover:bg-[#e5c8a7] transition">
              Get a Quote
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 place-items-center w-full sm:max-w-[670px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="border border-[#C4C4C4] rounded-[10px] p-5 mb-5 sm:max-w-[300px] w-full"
            >
              <div
                className="w-[70px] h-[70px] mx-auto rounded-full flex justify-center items-center text-white text-[32px] mb-5"
                style={{ backgroundColor: item.iconsbg }}
              >
                {item.icon}
              </div>
              <h3 className="text-[18px] text-center text-[#000000] font-[600] pb-3">
                {item.title}
              </h3>
              <p className="text-[14px] text-center text-[#666666]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;

const data = [
  {
    icon: <FaGlobeAmericas />,
    iconsbg: "#AFA492",
    title: "Global Textile Trade",
    description:
      "Expert handling of international textile shipments with reliable logistics and compliance.",
  },
  {
    icon: <FaHandshake />,
    iconsbg: "#D0B095",
    title: "Trusted Connections",
    description:
      "We bridge buyers and sellers ensuring smooth, trustworthy partnerships worldwide.",
  },
  {
    icon: <FaCogs />,
    iconsbg: "#D48D78",
    title: "Custom Software Solutions",
    description:
      "Tailored software to optimize textile operations and accounting workflows.",
  },
  {
    icon: <FaHeadset />,
    iconsbg: "#A06857",
    title: "Dedicated Support",
    description:
      "Ongoing assistance and maintenance to keep your business running flawlessly.",
  },
];
