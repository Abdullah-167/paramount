import ContactForm from "@/Components/Contact/COntactForm";
import React from "react";

export const metadata = {
  title: "Contact Us - Paramount",
  description:
    "Get in touch with the Paramount team. We're here to assist you with any questions or support you need.",
  icons: {
    icon: "/favicon.png", // Make sure this file is in /public folder
  },
};

const page = () => {
  return (
    <main>
      <ContactForm />
    </main>
  );
};

export default page;
