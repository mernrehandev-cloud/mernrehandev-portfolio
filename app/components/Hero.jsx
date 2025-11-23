"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const techStack = [
    { name: "MongoDB", color: "#47A248", img: "mongodb.svg" },
    { name: "Express", color: "#666666", img: "expressjs.svg" },
    { name: "React", color: "#61DAFB", img: "reactjs-14.svg" },
    { name: "Node.js", color: "#339933", img: "nodejs-20.svg" },
    { name: "Next.js", color: "#ffffff", img: "nextjs-4.svg" },
    { name: "Remix", color: "#3992FF", img: "remixjs-2.ico" },
    { name: "HTML", color: "#FFCA28", img: "html-5.svg" },
    { name: "JS", color: "#FF9900", img: "js.svg" },
    { name: "Git", color: "#FF9900", img: "git.svg" },
    { name: "CSS", color: "#FF9900", img: "css-3.svg" },
    { name: "Bootstrap CSS", color: "#FF9900", img: "bootstrapcss-5.svg" },
    { name: "Tailwind CSS", color: "#FF9900", img: "tailwindcss-4.svg" },
  ];
  const randomNames = {
    frontend: [
      { name: "useAuth" },
      { name: "useFetchData" },
      { name: "useThemeToggle" },
      { name: "useFormHandler" },
      { name: "useModal" },
      { name: "usePagination" },
      { name: "useNotifications" },
      { name: "useEffectOnce" },
      { name: "renderComponent" },
      { name: "mountComponent" },
      { name: "renderDashboard" },
      { name: "updateState" },
      { name: "hookedUp" },
      { name: "componentCrafter" },
      { name: "jsxplorer" },
    ],

    backend: [
      { name: "connectDB" },
      { name: "startServer" },
      { name: "handleRequest" },
      { name: "sendResponse" },
      { name: "parseJSON" },
      { name: "logError" },
      { name: "retryRequest" },
      { name: "asyncWrapper" },
      { name: "routeHandler" },
      { name: "postAPI" },
      { name: "connectSocket" },
      { name: "listenPort" },
      { name: "validateToken" },
      { name: "hashPassword" },
      { name: "deleteAccount" },
    ],

    database: [
      { name: "insertDocument" },
      { name: "updateRecord" },
      { name: "deleteEntry" },
      { name: "fetchCollection" },
      { name: "aggregateStats" },
      { name: "createIndex" },
      { name: "countDocuments" },
      { name: "findUserById" },
      { name: "queryBuilder" },
      { name: "docDB" },
      { name: "tempData" },
      { name: "dbClient" },
    ],
  };

  const [frontendnames, setfrontendnames] = useState("FetchAPI");
  const [backendnames, setbackendnames] = useState("JSON");
  const [dbnames, setdbnames] = useState("CountDocuments");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPickFront =
        randomNames.frontend[
          Math.floor(Math.random() * randomNames.frontend.length)
        ]?.name;

      setfrontendnames(randomPickFront);
    }, Math.random() * 20000); // random interval up to 10 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      const randomPickBack =
        randomNames.backend[
          Math.floor(Math.random() * randomNames.backend.length)
        ]?.name;

      setbackendnames(randomPickBack);
    }, Math.random() * 20000); // random interval up to 10 seconds

    return () => clearInterval(interval2); // cleanup on unmount
  }, []);

  useEffect(() => {
    const interval3 = setInterval(() => {
      const randomPickDB =
        randomNames.database[
          Math.floor(Math.random() * randomNames.database.length)
        ]?.name;

      setdbnames(randomPickDB);
    }, Math.random() * 20000); // random interval up to 10 seconds

    return () => clearInterval(interval3); // cleanup on unmount
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-3 md:px-6 py-32 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "rgba(0, 217, 255, 0.05)" }}
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "rgba(168, 85, 247, 0.05)" }}
          />

          {/* Floating Code Lines */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-48 right-2 md:top-52 md:right-[55%] text-[#00d9ff]/30 font-mono text-xl md:text-4xl"
          >
            {"{"}
            {backendnames}
            {"}"}
          </motion.div>

          <motion.div
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[62%] right-2 md:top-[42%] md:left-10 text-[#00d9ff]/30 font-mono text-xl md:text-4xl"
          >
            {"{"}
            {dbnames}
            {"}"}
          </motion.div>

          <motion.div
            animate={{
              y: [20, -20, 20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[57%] right-16 md:bottom-52 md:left-20 text-[#a855f7]/30 font-mono text-xl md:text-3xl"
          >
            {"{"}
            {frontendnames}
            {"}"}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex w-fit gap-2 px-5 py-2.5 glass rounded-full glow-cyan my-3"
              >
                <BriefcaseBusiness className="inline" />
                <span className="text-[#00d9ff]">Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="block text-foreground">Rehan</span>
                <span className="block text-gradient mt-2">
                  MERN Full-Stack
                </span>
                <span className="block text-foreground">Developer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-[hsl(var(--muted-foreground))] max-w-xl text-lg"
              >
                Building scalable digital products with modern web technologies.
                I craft high-performance web applications that deliver
                exceptional user experiences and drive business growth.
                Specialized in end-to-end development from concept to
                deployment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full flex items-center gap-2 group"
                >
                  Hire Me
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </motion.a>

                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass rounded-full flex items-center gap-2 glow-purple hover:glow-cyan transition-all"
                >
                  View Projects
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass rounded-full flex items-center gap-2 hover:glow-purple transition-all"
                >
                  <Download size={20} />
                  Resume
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-4 pt-4"
              >
                {[
                  { icon: Github, href: "#", label: "MERN Rehan Dev" },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/mern-rehan-dev",
                    label: "MERN Rehan Dev",
                  },
                  { icon: Mail, href: "#contact", label: "Contact Form" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:glow-cyan transition-all"
                    title={social.label}
                    target={social.href != "#contact" ? "_blank" : "_parent"}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Tech Stack Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-4 md:p-8 glow-purple">
                <h3 className="text-gradient text-2xl font-bold mb-6 text-center">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="glass rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:glow-cyan transition-all cursor-pointer"
                    >
                      <div
                        className="w-16 rounded-full flex items-center justify-center p-1 bg-white"
                        style={{
                          border: `2px solid ${tech.color}40`,
                        }}
                      >
                        <Image
                          className="rounded-[40%]"
                          src={`/companies/${tech.img}`}
                          width={100}
                          height={100}
                          alt=""
                        />
                      </div>

                      <span className="text-xs text-center text-[hsl(var(--muted-foreground))]">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[hsl(var(--border))]">
                  {[
                    { label: "Projects", value: "5+" },
                    { label: "Clients", value: "10+" },
                    { label: "Experience", value: "1+ Years" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-gradient md:text-xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))]">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{
                  y: [20, -20, 20],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 md:bottom-0 md:-left-10 text-[#a855f7]/30 font-mono text-xl md:text-4xl"
              >
                {"{"}js{"}"}
              </motion.div>
              <motion.div
                animate={{
                  y: [20, -20, 20],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 right-0 md:bottom-0 md:-right-10 text-[#a855f7]/30 font-mono text-xl md:text-4xl"
              >
                {"{"}tsx{"}"}
              </motion.div>

              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 md:top-0 md:-left-10 text-[#00d9ff]/30 font-mono text-xl md:text-4xl"
              >
                {"{"}css{"}"}
              </motion.div>

              <motion.div
                animate={{
                  y: [20, -20, 20],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 right-0 md:top-0 md:-right-10 text-[#a855f7]/30 font-mono text-xl md:text-4xl"
              >
                {"{"}jsx{"}"}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
