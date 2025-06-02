import React from "react";
import Container from "../Common/Container";

// React Icons
import { FaExchangeAlt } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiCpu, FiFileText } from "react-icons/fi";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-[#FFFFFF] py-5 sm:py-10">
      <Container>
        <div>
          <h2 className="text-[40px] text-center font-[600]">Our Services</h2>
          <p className="text-[16px] sm:text-[20px] text-center pb-14">
            We specialize in global textile trade and tailored software
            solutions to power your business forward.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                className={`w-full border border-[#C4C4C4] rounded-[10px] p-5 mb-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1
                ${
                  index === 4
                    ? "sm:col-span-1 md:col-span-2 md:flex flex-col items-center md:text-center"
                    : ""
                }`}
              >
                <div className="w-[70px] h-[70px] rounded-full bg-[#DEDEDE] flex items-center justify-center mb-5 text-[28px] text-[#3C3C43]">
                  <item.icon />
                </div>
                <h2 className="text-[18px] text-[#000000] font-[600] pb-3">
                  {item.heading}
                </h2>
                <p className="text-[14px] text-[#666666] max-w-[307px] pb-3">
                  {item.des}
                </p>
                <Link href={"/contact"}>
                  <button className="text-[12px] text-[#FFFFFF] bg-[#3C3C43] rounded-[8px] px-5 py-2 cursor-pointer">
                    {item.button}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

const data = [
  {
    icon: FaExchangeAlt,
    heading: "Import and Export of Textile Goods",
    des: "Seamlessly manage international textile trade with trusted logistics, compliance, and timely delivery.",
    button: "Contact Us Now",
  },
  {
    icon: BiLinkAlt,
    heading: "Indenting",
    des: "We connect buyers and sellers across borders, ensuring the best deals and reliable sourcing in the textile industry.",
    button: "Contact Us Now",
  },
  {
    icon: HiOutlineUserGroup,
    heading: "Commission Agent Services",
    des: "Acting as your strategic partner, we facilitate smooth, commission-based transactions with complete transparency.",
    button: "Contact Us Now",
  },
  {
    icon: FiCpu,
    heading: "Custom Textile Software",
    des: "Get tailored solutions for textile operations — from inventory tracking to order management.",
    button: "Contact Us Now",
  },
  {
    icon: FiFileText,
    heading: "Accounting Software Solutions",
    des: "Simplify your finances with custom-built accounting tools tailored for your workflow.",
    button: "Contact Us Now",
  },
];
