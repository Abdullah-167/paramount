import React from "react";
import Container from "../Common/Container";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[#B9B9B933] relative py-20">
      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="text-[30px] sm:text-[35px] text-black font-bold mb-4">
            Ready to source the right textile products reliably?
          </h2>
          <p className="text-[18px] sm:text-[20px] text-black mb-8">
            Let’s discuss your needs and get to work. No obligations just expert
            sourcing advice.
          </p>
          <div className="flex justify-center gap-4">
            <Link href={"/contact"}>
              <button className=" cursor-pointer bg-[#F5DFCB] text-black px-5 sm:px-6 py-3 rounded-4xl font-medium hover:bg-[#e9cdae] transition">
                Send an Inquiry
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
