"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  ChevronDown,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "",
    message: "",
  });
  const dropdownref = useRef();
  const [status, setstatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setstatus("Sending...");

    // Handle form submission logic here
    if (
      formData.name == "" &&
      formData.message == "" &&
      formData.plan == "" &&
      formData.email == ""
    ) {
      setstatus("");
      return toast.error("All Fields are Required");
    }

    if (formData.name == "") {
      setstatus("");
      return toast.error("Name Required");
    }

    if (formData.email == "") {
      setstatus("");
      return toast.error("Email Required");
    }

    if (formData.plan == "") {
      setstatus("");
      return toast.error("Plan Required");
    }

    if (formData.message == "") {
      setstatus("");
      return toast.error("Message Required");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setstatus("I have recived your request");

        setForm({ name: "", email: "", message: "", plan: "" });
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch (err) {}

    setTimeout(() => {
      setstatus("");
      setFormData({ name: "", email: "", plan: "", message: "" });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleselect = (plan) => {
    dropdownref.current.setAttribute("class", "hidden");
    return setFormData({ ...formData, plan: plan });
  };

  const handledropdownshow = () => {
    const dropdown = dropdownref.current.getAttribute("class");

    if (dropdown == "hidden")
      return dropdownref.current.setAttribute("class", "block");

    return dropdownref.current.setAttribute("class", "hidden");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mernrehandev@gmail.com",
      link: "mailto:mernrehandev@gmail.com",
      color: "from-[#00d9ff] to-cyan-400",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3214473212",
      link: "tel:+923214473212",
      color: "from-[#a855f7] to-purple-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Punjab, PK",
      link: "",
      color: "from-[#7c3aed] to-blue-500",
    },
  ];

  const quickLinks = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Message me directly",
      link: "https://wa.me/+923214473212",
      color: "from-green-500 to-green-400",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send me an email",
      link: "mailto:mernrehandev@gmail.com",
      color: "from-[#00d9ff] to-cyan-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      link: "https://linkedin.com/in/mern-rehan-dev",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "View my repositories",
      link: "https://github.com",
      color: "from-gray-700 to-gray-600",
    },
  ];

  const plans = ["Starter", "Standard", "Premium"];

  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(168, 85, 247, 0.05)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your
            ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 glow-cyan"
          >
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-foreground mb-2 font-medium"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full glass border border-[hsl(var(--border))] focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/50 rounded-xl px-4 py-3 bg-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground mb-2 font-medium"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full glass border border-[hsl(var(--border))] focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/50 rounded-xl px-4 py-3 bg-transparent outline-none transition-all"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="plan"
                  className="block text-foreground mb-2 font-medium"
                >
                  Choose a Plan
                </label>

                <button
                  type="button"
                  onClick={handledropdownshow}
                  className="w-full glass flex justify-between items-center border border-[hsl(var(--border))] focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/50 rounded-xl px-4 py-3 bg-transparent outline-none transition-all"
                >
                  {formData.plan
                    ? formData.plan + " Plan Selected"
                    : "Select a Plan"}{" "}
                  <ChevronDown />
                </button>

                <div ref={dropdownref} className="hidden">
                  <motion.div className="absolute z-50 top-13 w-full bg-[rgb(0,0,0)] bg-opacity-50 backdrop-blur-3xl border border-[#00d9ff] flex flex-col gap-2 items-start rounded-xl px-6 py-4 ">
                    {plans.map((plan, i) => (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleselect(plan)}
                        type="button"
                        className="hover:text-[#00d9ff] font-semibold transition-colors relative group"
                        key={i}
                      >
                        {plan} Plan
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] group-hover:w-full transition-all duration-300"></span>
                      </motion.button>
                    ))}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleselect("Custom")}
                      type="button"
                      className="hover:text-[#00d9ff] font-semibold transition-colors relative group"
                    >
                      Custom Plan
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] group-hover:w-full transition-all duration-300"></span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-foreground mb-2 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full glass border border-[hsl(var(--border))] focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/50 rounded-xl px-4 py-3 bg-transparent outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-xl py-4 hover:shadow-lg hover:shadow-[#00d9ff]/30 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} color="white" />
                {status ? status : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass rounded-2xl p-6 flex items-center gap-4 hover:glow-purple transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))]">
                      {info.title}
                    </div>
                    <div className="text-foreground font-medium">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.title}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-2xl p-6 text-center hover:glow-cyan transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mx-auto mb-3`}
                    >
                      <link.icon size={24} className="text-white" />
                    </div>
                    <h4 className="font-bold mb-1">{link.title}</h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      {link.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 glow-purple"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Location</h3>
          <div
            className="relative h-80 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(0, 217, 255, 0.1), rgba(168, 85, 247, 0.1))",
            }}
          >
            <div className="text-center">
              <MapPin size={48} className="text-[#00d9ff] mx-auto mb-4" />
              <p className="text-[hsl(var(--muted-foreground))] mb-2 text-lg">
                Based in Lahore, Punjab PK
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </motion.div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        ></motion.div>
      </div>
    </section>
  );
}
