"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import Container from "../../Components/Common/Container";

const PARTICLE_COUNT = 12;

const generateParticles = () => {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    angle: Math.random() * 2 * Math.PI,
    distance: 80 + Math.random() * 20,
    size: 4 + Math.random() * 3,
    delay: i * 0.03,
  }));
};

const buttonVariants = {
  idle: {
    width: "100%",
    borderRadius: "9999px",
    background: "linear-gradient(90deg, #D48D78, #A06857)",
  },
  morph: {
    width: 60,
    borderRadius: "50%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  reset: {
    width: "100%",
    borderRadius: "9999px",
    scale: 1,
    background: "linear-gradient(90deg, #D48D78, #A06857)",
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "morphing" | "loading" | "success"
  >("idle");
  const [error, setError] = useState("");
  const controls = useAnimationControls();
  const particles = generateParticles();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;

    if (!formData.name || !formData.email || !formData.message) {
      setError("Name, Email, and Message are required.");
      return;
    }

    setError("");
    setStatus("morphing");
    await controls.start("morph");
    setStatus("loading");

    try {
      const res = await fetch("/api/contact/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Submission failed.");

      setStatus("success");

      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again later.");
      setStatus("idle");
      await controls.start("reset");
    }
  };

  return (
    <section className="relative bg-[#F0EFEB] py-10 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-5 sm:p-10">
          <h2 className="text-4xl font-extrabold mb-6 text-[#A06857]">
            Get In Touch
          </h2>
          <p className="text-[#6B5340] mb-10 text-lg leading-relaxed">
            We'd love to hear from you. Drop us a message and we’ll respond
            shortly.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {status === "success" ? (
            <div className="text-center text-[#4F3E2A] text-xl font-semibold p-6 bg-green-50 border border-green-200 rounded-xl shadow">
              🎉 Thank you for reaching out! <br /> Your message has been
              successfully sent. We’ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative z-0">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer w-full border-b-2 border-[#D0B095] bg-transparent py-3 text-lg text-[#A06857] focus:border-[#D48D78] focus:outline-none"
                    placeholder=" "
                    disabled={status !== "idle"}
                  />
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                </div>

                <div className="relative z-0">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer w-full border-b-2 border-[#D0B095] bg-transparent py-3 text-lg text-[#A06857] focus:border-[#D48D78] focus:outline-none"
                    placeholder=" "
                    disabled={status !== "idle"}
                  />
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                </div>
              </div>

              <div className="relative z-0">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-[#D0B095] bg-transparent py-3 text-lg text-[#A06857] focus:border-[#D48D78] focus:outline-none"
                  placeholder=" "
                  disabled={status !== "idle"}
                />
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
              </div>

              <div className="relative z-0">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="peer w-full border-b-2 border-[#D0B095] bg-transparent py-3 text-lg text-[#A06857] focus:border-[#D48D78] focus:outline-none resize-none"
                  placeholder=" "
                  disabled={status !== "idle"}
                ></textarea>
                <label htmlFor="message" className="form-label">
                  Your Message *
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                className="relative inline-flex items-center justify-center rounded-full px-12 py-4 font-semibold text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-[#D0B095] disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                variants={buttonVariants}
                initial="idle"
                animate={controls}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
