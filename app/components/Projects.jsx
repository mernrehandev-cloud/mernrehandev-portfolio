"use client";

import { motion } from "motion/react";
import { Bug, ExternalLink, Github, LoaderCircle } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Projects() {
  const projects = [
    {
      title: "PakClassified Platform",
      description:
        "Full-featured Items Online Buy/Sell platform with Database, Admin Panel, and JWT Authentication.",
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      stack: ["React.JS", "Node.JS", "MongoDB", "Express.JS", "JWT"],
      liveUrl: "https://pakclassified-v2.vercel.app/",
      githubUrl: "uploadsoon",
      featured: true,
    },
    {
      title: "HR Attendance Management System",
      description:
        "Modern HR dashboard with Company Reports, Employees management, and real-time data visualization a Employee Attendances.",
      image:
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      stack: ["Next.JS", "MongoDB", "Tailwind", "Role Based", "Express.JS"],
      liveUrl: "soon",
      githubUrl: "soon",
      featured: true,
    },
    {
      title: "Whatsapp Clone App",
      description:
        "Feature-rich social networking platform with real-time messaging, calling and friends Contacts.",
      image:
        "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      stack: ["Next.JS", "Express.JS", "MongoDB", "loading..."],
      liveUrl: false,
      githubUrl: false,
      featured: false,
    },
    {
      title: "Tasker Management System",
      description:
        "Collaborative task management tool with Tasks CRUD, deadlines, and progress tracking featuresF.",
      image:
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      stack: ["React.JS", "Node.JS", "Express.JS", "JWT"],
      liveUrl: "mt",
      githubUrl: "uploadsoon",
      featured: false,
    },
    {
      title: "SaaS Analytics Platform",
      description:
        "Business intelligence platform with custom reports, data visualization, and API integrations for enterprises.",
      image:
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      stack: ["Next.JS", "loading..."],
      liveUrl: false,
      githubUrl: false,
      featured: false,
    },
  ];

  function ToastHandler(input) {
    switch (input) {
      case "soon":
        toast.custom(() => (
          <motion.div
            initial={{ y: -10 }}
            whileInView={{ y: 10 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-4 py-2 rounded flex gap-3 text-black"
          >
            <LoaderCircle className="animate-spin" />
            InProgress!
          </motion.div>
        ));
        break;

      case false:
        toast.error("Not Ready Yet, Check later");
        break;

      case "mt":
        toast.custom(() => (
          <motion.div
            initial={{ y: -10 }}
            whileInView={{ y: 10 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-4 py-2 rounded flex gap-3 text-black"
          >
            <Bug className="animate-pulse" />
            Fixing Some issues with Render!
          </motion.div>
        ));
        break;

      case "uploadsoon":
        toast.custom(() => (
          <motion.div
            initial={{ y: -10 }}
            whileInView={{ y: 10 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-4 py-2 rounded flex gap-3 text-black"
          >
            <LoaderCircle className="animate-spin" />
            Uploading Soon!
          </motion.div>
        ));
        break;
    }
  }

  return (
    <section
      id="projects"
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl"
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Showcasing my best work in full-stack development, from concept to
            deployment
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-3xl overflow-hidden group cursor-pointer relative"
              >
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs text-[#00d9ff] border border-[#00d9ff]/30"
                        style={{ background: "rgba(0, 217, 255, 0.1)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl == "soon" ||
                    project.liveUrl == "mt" ||
                    !project.liveUrl ? (
                      <motion.button
                        onClick={() => ToastHandler(project.liveUrl)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.button>
                    ) : (
                      ""
                    )}

                    {project.liveUrl &&
                    project.liveUrl != "soon" &&
                    project.liveUrl != "mt" ? (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full flex items-center justify-center gap-2"
                        href={project.liveUrl}
                        target="_blank"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    ) : (
                      ""
                    )}

                    <motion.a
                      // href={project.githubUrl}
                      onClick={() => ToastHandler(project.githubUrl)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 glass rounded-full flex items-center justify-center gap-2 hover:glow-cyan transition-all"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#00d9ff]/0 group-hover:border-[#00d9ff]/50 glow-cyan pointer-events-none transition-all duration-300" />
              </motion.div>
            ))}
        </div>

        {/* Regular Projects - Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-3xl overflow-hidden group cursor-pointer relative"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full text-xs text-[#00d9ff] border border-[#00d9ff]/20"
                        style={{ background: "rgba(0, 217, 255, 0.1)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveUrl == "soon" ||
                    project.liveUrl == "mt" ||
                    !project.liveUrl ? (
                      <motion.button
                        onClick={() => ToastHandler(project.liveUrl)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.button>
                    ) : (
                      ""
                    )}

                    {project.liveUrl != "soon" &&
                    project.liveUrl != "mt" &&
                    project.liveUrl ? (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full flex items-center justify-center gap-2"
                        href={project.liveUrl}
                        target="_blank"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    ) : (
                      ""
                    )}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 py-1.5 glass rounded-full flex items-center justify-center gap-1.5 text-sm hover:glow-cyan transition-all"
                    >
                      {!project.githubUrl ||
                      project.githubUrl == "soon" ||
                      project.githubUrl == "uploadsoon" ? (
                        <button
                          onClick={() => ToastHandler(project.githubUrl)}
                          className="flex items-center gap-2"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </button>
                      ) : (
                        <a
                          className="flex items-center gap-2"
                          href={project.githubUrl}
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#a855f7]/0 group-hover:border-[#a855f7]/50 glow-purple pointer-events-none transition-all duration-300" />
              </motion.div>
            ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/mernrehandev-cloud"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 glass rounded-full hover:glow-cyan transition-all"
          >
            View All Projects on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
