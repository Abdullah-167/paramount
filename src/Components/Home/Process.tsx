import Image from "next/image";
import React from "react";
import Container from "../Common/Container";

const Process = () => {
  const cardData = [
    {
      step: "Step 1",
      bgColor: "#AFA492",
      icon: "/icons/share.svg",
      title: "Share Your Requirements",
      description: "Understand your product specs and sourcing needs.",
    },
    {
      step: "Step 2",
      bgColor: "#D0B095",
      icon: "/icons/supplier.svg",
      title: "Supplier Shortlisting",
      description:
        "We connect you with verified manufacturers tailored to your needs.",
    },
    {
      step: "Step 3",
      bgColor: "#D48D78",
      icon: "/icons/sampling.svg",
      title: "Sampling & Pricing",
      description: "Arrange samples and negotiate optimal pricing.",
    },
    {
      step: "Step 4",
      bgColor: "#A06857",
      icon: "/icons/order.svg",
      title: "Order & Shipment",
      description: "Finalize orders and manage end-to-end delivery.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <Container>
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Indenting Process
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {`Here's how we simplify sourcing between buyers and trusted textile
            manufacturers.`}
          </p>

          {/* Process Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition duration-300"
              >
                {/* Step Number with pill-shaped badge */}
                <div
                  className=" text-white font-bold text-sm px-4 py-2 rounded-md mb-6"
                  style={{
                    backgroundColor: card.bgColor,
                  }}
                >
                  {card.step}
                </div>

                {/* Icon with proper size */}
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className=""
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-black mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Process;
