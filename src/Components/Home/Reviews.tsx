"use client";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Container from "../Common/Container";

const Reviews = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  });

  const nextSlide = () => instanceRef.current?.next();
  const prevSlide = () => instanceRef.current?.prev();

  const testimonials = [
    {
      id: 1,
      quote:
        "Reliable sourcing, excellent communication, and timely shipments. We've worked with them across 3 product lines and never had delays.",
      author: "Sarah M, UK Apparel Brand",
    },
    {
      id: 2,
      quote:
        "Their quality control and price negotiations helped us scale faster. True professionals in textile sourcing.",
      author: "Imran R, Home Textiles Importer",
    },
    {
      id: 3,
      quote:
        "Their quality control and price negotiations helped us scale faster. True professionals in textile sourcing.",
      author: "Olivia K, Hospitality Chain Buyer",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Feedback from buyers who trust our sourcing process
        </h2>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition z-10"
            onClick={prevSlide}
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div ref={sliderRef} className="keen-slider px-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="keen-slider__slide p-6 rounded-lg shadow-md bg-white hover:bg-[#F5DFCB] min-w-0"
              >
                <div className="h-full flex flex-col">
                  <p className="text-lg text-gray-700 mb-6 flex-grow">
                  {`  "{testimonial.quote}"`}
                  </p>
                  <p className="font-semibold text-black mt-auto">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition z-10"
            onClick={nextSlide}
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
