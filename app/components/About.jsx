"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Award,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = {
    Frontend: [
      "React.JS",
      "Next.JS",
      "Hooks (useState, useEffect)",
      "Redux + Redux Toolkit",
      "Tailwind CSS / Styled Components",
      "Responsive Design",
      "JSX, Components, Props",
      "React Router/ App Router",
      "Form Validation",
      "API Integration (Fetch)",
      "SEO Optimization",
    ],
    Backend: [
      "Node.JS",
      "Express.JS",
      "MongoDB/ Mongoose",
      "REST APIs",
      "JWT Authentication",
      "Maile Integration (NodeMailer/ ZohoMailer)",
      "CRUD Operations",
      "Middleware",
      "MVC Architecture",
      "Error Handling",
      "File Uploads (Multer + Cloudinary)",
      "Performance Optimization",
    ],
    DevOps: [
      "Git / GitHub Actions",
      "Heroku / Netlify / Vercel / AWS",
      "Environment Variables",
      "PM2 / Server Monitoring",
      "CI/CD Basics",
      "Docker",
      "Firebase",
    ],
    Tools: [
      "Git",
      "Figma",
      "Vite",
      "ESLint",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "NPM",
      "ESLint / Prettier",
      "Chrome DevTools",
    ],
  };

  const skillCategories = [
    { name: "Frontend", icon: Code2, color: "from-[#00d9ff] to-cyan-400" },
    { name: "Backend", icon: Database, color: "from-[#a855f7] to-purple-400" },
    { name: "DevOps", icon: Server, color: "from-[#7c3aed] to-blue-500" },
    { name: "Tools", icon: Wrench, color: "from-[#00d9ff] to-[#a855f7]" },
  ];

  const experiences = [
    {
      year: "Sept, 2025 - Present",
      duration: "9 2025",
      current: true,
      title: "Web Developer",
      company: "Haachi Technologies Pvt Ltd.",
      description:
        "Managing and Preparing Websites ready from Scratch, using MERN Stack and NextJS + RemixJS.",
    },
    {
      year: "June, 2025 - Sep, 2025",
      duration: "6 2025 - 9 2025",
      current: false,
      title: "Wordpress Web Developer",
      company: "Haachi Technologies Pvt Ltd.",
      description:
        "Managing all Wordpress Websites under Haachi Technologies, Building Figma Projects into Ready to use Website.",
    },
    {
      year: "Aug, 2025 - Present",
      duration: "8 2025",
      current: true,
      title: "Full Stack Developer",
      company: "CodeHub",
      description: "Managing and Preparing Projects Based on Contracts.",
    },
    {
      year: "Dec, 2024 - June, 2025",
      duration: "12 2024 - 6 2025",
      current: false,
      title: "MERN Stack Developer",
      company: "EVS Professional Training Institute",
      description:
        "Team Prepared me as a MERN Stack Web Developer, Now I can build almost all MERN Stack Projects.",
    },
  ];

  const DurationFormatter = (duration) => {
    if (!duration) return;

    const month = duration.split(" ")[0];
    const year = duration.split(" ")[1];

    const date = new Date();
    let now = duration.split("-")[1];

    if (!now) {
      now = "P";
    }

    console.log(month, now.split(" ")[1]);
    // console.log(monthformat(month, now.split(" ")[1]));

    // console.log("\n\n", month, year, now, date.getMonth(), date.getFullYear());
  };

  function monthformat(now, current) {
    if (
      !now ||
      !current ||
      typeof now != "number" ||
      typeof current != "number"
    )
      return;

    return Math.abs(now - current);
  }

  return (
    <section
      id="about"
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "rgba(124, 58, 237, 0.05)" }}
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Passionate developer with 1+ years of experience in building modern
            web applications
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{
                  background:
                    "linear-gradient(to right, #00d9ff, #a855f7, #7c3aed)",
                }}
              />
              <div className="relative glass rounded-3xl p-2 glow-cyan">
                <Image
                  src="/image.jpg"
                  alt="Rehan - Full Stack Developer"
                  width={500}
                  height={500}
                  className="rounded-3xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <h3 className="text-3xl text-gradient font-bold">
              Experience Summary
            </h3>
            <p className="text-[hsl(var(--muted-foreground))]">
              As a MERN Full-Stack Developer, I specialize in creating robust,
              scalable, and user-friendly web applications. My expertise spans
              across the entire development lifecycle, from initial concept and
              design to deployment and maintenance.
            </p>
            <p className="text-[hsl(var(--muted-foreground))]">
              I&apos;m passionate about writing clean, maintainable code and
              staying up-to-date with the latest web technologies. My goal is to
              deliver solutions that not only meet technical requirements but
              also provide exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: Award,
                  label: "Certified Developer",
                  color: "text-[#00d9ff]",
                },
                {
                  icon: Briefcase,
                  label: "5+ Projects",
                  color: "text-[#a855f7]",
                },
                { icon: Code2, label: "Clean Code", color: "text-[#7c3aed]" },
                {
                  icon: Server,
                  label: "Scalable Solutions",
                  color: "text-[#00d9ff]",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-2xl p-4 flex items-center gap-3 hover:glow-cyan transition-all cursor-pointer"
                >
                  <item.icon className={item.color} size={24} />
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl text-center mb-12 font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-3xl p-6 hover:glow-cyan transition-all"
              >
                {category.name == "DevOps" && (
                  <div className="absolute text-center animate-pulse -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-sm font-medium">
                    Currently Learning
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-gradient font-bold">{category.name}</h4>
                </div>
                <div className="space-y-2">
                  {skills[category.name].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + index * 0.05,
                      }}
                      className="text-sm text-[hsl(var(--muted-foreground))] flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#a855f7]" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl text-center mb-12 font-bold">
            Professional <span className="text-gradient">Experience</span>
          </h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00d9ff] via-[#a855f7] to-[#7c3aed] hidden lg:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`glass rounded-3xl p-6 hover:glow-purple transition-all ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      {exp.current && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#a855f7] to-[#7c3aed] rounded-full text-sm font-medium">
                          Current
                        </div>
                      )}

                      <div className="text-gradient mb-3 font-medium">
                        {DurationFormatter(exp.duration)}
                      </div>

                      <div className="text-[#00d9ff] mb-2 font-medium">
                        {exp.year}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                      <div className="text-gradient mb-3 font-medium">
                        {exp.company}
                      </div>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="hidden lg:block w-6 h-6 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#a855f7] glow-cyan flex-shrink-0 z-10"
                  />

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
