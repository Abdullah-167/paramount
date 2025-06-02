import Industries from "@/Components/Industries/Index";
import React from "react";

export const metadata = {
  title: "Industries We Serve - Paramount",
  description:
    "Explore the diverse industries Paramount specializes in, delivering tailored solutions to meet your unique business needs.",
  icons: {
    icon: "/favicon.png", // Place this favicon file in /public folder
  },
};

const page = () => {
  return (
    <main>
      <Industries />
    </main>
  );
};

export default page;
