"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handler to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#F0EFEB] relative py-4">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt={"paramount-logo"}
                className="max-h-[60px] object-cover cursor-pointer"
                width={150}
                height={200}
              />
            </Link>
          </div>

          {/* Mobile menu button (hidden on larger screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation links container - centered on desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex space-x-8">
              <Link
                href="/industries"
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                Industries We Serve
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                Services
              </Link>
              <Link
                href="/about-us"
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Button on the right */}
          <div className="hidden md:block">
            <Link href={"/contact"}>
              <button className="bg-[#f5DFCB] hover:bg-[#e8d1b9] cursor-pointer text-gray-800 font-medium py-2 px-6 rounded-full transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile menu (hidden by default, shown when toggled) */}
        <div
          className={`bg-[#F0EFEB] z-[100] w-full left-0 absolute top-[80px] transition-all duration-500 overflow-hidden ${
            isOpen
              ? "h-[250px] pointer-events-auto"
              : "h-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-4 p-5">
            <Link
              href="/industries"
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={handleLinkClick}
            >
              Industries We Serve
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
            <Link href={"/contact"} onClick={handleLinkClick}>
              <button className="bg-[#f5DFCB] hover:bg-[#e8d1b9] text-gray-800 font-medium py-2 px-4 rounded-full transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
