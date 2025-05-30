import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#D0B095] text-black py-20">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Subheading */}
          <div className="flex-1">
            <h2 className="text-[30px] sm:text-[35px] font-bold mb-2">Logo</h2>
            <p className="text-[18px] sm:text-[20px]">
              Connecting Global Buyers to Trusted Textile Sources.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex-1">
            <h3 className="text-[25px] sm:text-[30px] font-bold mb-4">Company</h3>
            <div>
              <a href="#" className="text-[15px] sm:text-[18px] pb-1 block">Industries We Serve</a>
              <a href="#" className="text-[15px] sm:text-[18px] pb-1 block">Services</a>
              <a href="#" className="text-[15px] sm:text-[18px] pb-1 block">Partners</a>
              <a href="#" className="text-[15px] sm:text-[18px] pb-1 block">About Us</a>
            </div>
          </div>

          {/* About Us */}
          <div className="flex-1">
            <h3 className="text-[30px] font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li className="text-[15px] sm:text-[18px]">
                123 Textile Avenue, Karachi, Pakistan
              </li>
              <li className="text-[15px] sm:text-[18px]">📞 Phone: +92 300 1234567</li>
              <li className="text-[15px] sm:text-[18px]">✉️ Email: hello@domain.com</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex-1">
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
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
