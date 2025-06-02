import AboutMain from "@/Components/About/Index";
import React from "react";

export const metadata = {
  title: "About Us - Paramount",
  description:
    "Discover the story behind Paramount — our mission, values, and commitment to delivering exceptional service tailored just for you.",
  icons: {
    icon: "/favicon.png",
  },
};

const page = () => {
  return (
    <main>
      <AboutMain />
    </main>
  );
};

export default page;
