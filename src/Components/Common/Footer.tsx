import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#A06857] text-black py-20">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Subheading */}
          <div className="flex-1">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt={"paramount-logo"}
                className="max-h-[60px] object-cover cursor-pointer"
                width={150}
                height={200}
              />
            </Link>
            <p className="text-[18px] sm:text-[20px]">
              Connecting Global Buyers to Trusted Textile Sources.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex-1">
            <h3 className="text-[25px] sm:text-[30px] font-bold mb-4">
              Company
            </h3>
            <div>
              <a
                href="/industries"
                className="text-[15px] sm:text-[18px] pb-1 block"
              >
                Industries We Serve
              </a>
              <a
                href="/services"
                className="text-[15px] sm:text-[18px] pb-1 block"
              >
                Services
              </a>
              <a
                href="/about-us"
                className="text-[15px] sm:text-[18px] pb-1 block"
              >
                About Us
              </a>
            </div>
          </div>

          {/* About Us */}
          <div className="flex-1">
            <h3 className="text-[30px] font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <div className="flex gap-2">
                <MdLocationOn color="white" size={30} />

                <li className="text-[15px] sm:text-[18px]">
                  Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba,
                  Dubai, U.A.E.
                </li>
              </div>
              <li className="text-[15px] sm:text-[18px]">
                ✉️ Email: info@paramountsolutions.online
              </li>
            </ul>
          </div>

          {/* Social Icons (commented out) */}
          {/* <div className="flex-1">
            <h3 className="text-[30px] font-bold mb-4">Find Us On</h3>
            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="bg-[#F0FDFB] text-black rounded-full p-2 hover:bg-black hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-[#F0FDFB] text-black rounded-full p-2 hover:bg-black hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-[#F0FDFB] text-black rounded-full p-2 hover:bg-black hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-black pt-6 text-center text-sm text-black/70">
          &copy; {new Date().getFullYear()} Paramount. Developed by{" "}
          <Link href={"https://broshtech.com/"} target="_blank">
            {" "}
            Broshtech.{" "}
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
