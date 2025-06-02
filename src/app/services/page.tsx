import Software from "@/Components/Software/Index";
import React from "react";

export const metadata = {
  title: "Software Solutions - Paramount",
  description:
    "Discover Paramount's innovative software solutions designed to streamline your business and boost productivity.",
  icons: {
    icon: "/favicon.png", // Make sure this favicon is in your /public folder
  },
};

const page = () => {
  return (
    <main>
      <Software />
    </main>
  );
};

export default page;
