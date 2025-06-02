import React from "react";
import Container from "../Common/Container";
import { FaRegHandshake, FaTruck } from "react-icons/fa6";
import { FaCheckCircle, FaGlobe } from "react-icons/fa";

const features = [
  {
    title: "20+ Years of Experience",
    description:
      "Deep industry knowledge and unmatched insight across the global textile ecosystem.",
    icon: <FaRegHandshake className="text-4xl text-[#D0B095]" />,
  },
  {
    title: "Verified Manufacturing Partners",
    description:
      "All suppliers are pre-screened for quality, ethics, and consistent delivery performance.",
    icon: <FaCheckCircle className="text-4xl text-[#D0B095]" />,
  },
  {
    title: "End-to-End Transparency",
    description:
      "Track your order progress at every stage from sampling to delivery — in real-time.",
    icon: <FaGlobe className="text-4xl text-[#D0B095]" />,
  },
  {
    title: "Global Logistics Expertise",
    description:
      "We manage complex international shipping with precision to meet your timelines.",
    icon: <FaTruck className="text-4xl text-[#D0B095]" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#000] mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            We don’t just connect you with factories we deliver reliability,
            clarity, and results in every shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-[#eaeaea] hover:border-[#D0B095] group"
            >
              <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-[#fff7f2] group-hover:bg-[#fcefe6] transition">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#222] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
