import React from "react";
import Container from "../Common/Container";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-[#FFFFFF] py-5 sm:py-10">
      <Container>
        <div>
          <h2 className="text-[40px] text-center font-[600]">Our Services</h2>
          <p className="text-[16px] sm:text-[20px] text-center pb-14">
            From idea to execution we cover the full product development
            lifecycle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 place-items-center">
            {data.map((item, index) => {
              return (
                <div className="border border-[#C4C4C4] rounded-[10px] p-5 mb-5" key={index}>
                  <div className="w-[70px] h-[70px] rounded-full bg-[#DEDEDE] flex justify-center mb-5">
                    <Image src={item.icon} alt={""} width={30} height={30} />
                  </div>
                  <h2 className="text-[18px] text-[#000000] font-[600] pb-3">
                    {item.heading}
                  </h2>
                  <p className="text-[14px] text-[#666666] max-w-[307px] pb-3">
                    {item.des}
                  </p>
                  <button className="text-[12px] text-[#FFFFFF] bg-[#3C3C43] rounded-[8px] px-5 py-2 cursor-pointer">
                    {item.button}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

const data = [
  {
    icon: "/icons/custom.svg",
    heading: "Custom Software Development",
    des: "Scalable, secure, and fully tailored software built around your business needs.",
    button: "Contact Us Now",
  },
  {
    icon: "/icons/mvp.svg",
    heading: "Custom Software Development",
    des: "Scalable, secure, and fully tailored software built around your business needs.",
    button: "Contact Us Now",
  },
  {
    icon: "/icons/product.svg",
    heading: "Custom Software Development",
    des: "Scalable, secure, and fully tailored software built around your business needs.",
    button: "Contact Us Now",
  },
  {
    icon: "/icons/api.svg",
    heading: "Custom Software Development",
    des: "Scalable, secure, and fully tailored software built around your business needs.",
    button: "Contact Us Now",
  },
  {
    icon: "/icons/saas.svg",
    heading: "Custom Software Development",
    des: "Scalable, secure, and fully tailored software built around your business needs.",
    button: "Contact Us Now",
  },
  {
    icon: "/icons/system.svg",
    heading: "Custom Software Development",
    des: "Scalable, secure, and fully tailored software built around your business needs.",
    button: "Contact Us Now",
  },
];
