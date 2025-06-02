// src/Components/About/Industries.tsx
import React from "react";
import Container from "../Common/Container";
import { FaShirt, FaCouch, FaVest, FaFlag, FaSocks, FaRecycle } from "react-icons/fa6";

const industries = [
  { title: "Garments", icon: <FaShirt className="text-2xl text-[#D0B095]" /> },
  { title: "Home Textiles", icon: <FaCouch className="text-2xl text-[#D0B095]" /> },
  { title: "Workwear", icon: <FaVest className="text-2xl text-[#D0B095]" /> },
  { title: "Institutional Textiles", icon: <FaFlag className="text-2xl text-[#D0B095]" /> },
  { title: "Accessories", icon: <FaSocks className="text-2xl text-[#D0B095]" /> },
  { title: "Recycled Yarn", icon: <FaRecycle className="text-2xl text-[#D0B095]" /> },
];

const Industries = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 border-t border-neutral-200">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            From fashion to hospitality, we connect trusted manufacturers to every corner of textile trade.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="bg-[#F5DFCB] hover:bg-[#e8d1b9] p-6 rounded-xl transition-shadow shadow-md hover:shadow-lg"
            >
              <div className="mb-3">{industry.icon}</div>
              <h3 className="text-sm font-semibold text-black">{industry.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Industries;
