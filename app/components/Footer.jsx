"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "Web Development", href: "#services" },
      { name: "Admin Dashboards", href: "#services" },
      { name: "API Development", href: "#services" },
      { name: "SaaS Applications", href: "#services" },
    ],
    Connect: [
      { name: "GitHub", href: "https://github.com", icon: Github },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/mern-rehan-dev",
        icon: Linkedin,
      },
      { name: "Twitter", href: "https://x.com/@Rehanhoon", icon: Twitter },
      { name: "Email", href: "#contact", icon: Mail },
    ],
  };

  return (
    <footer className="relative py-16 px-6 border-t border-[hsl(var(--border))]/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(0, 217, 255, 0.05)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d9ff] to-[#a855f7] flex items-center justify-center text-lg font-bold">
                R
              </div>
              <span className="text-gradient text-xl font-bold">Rehan</span>
            </div>
            <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">
              MERN Full-Stack Developer crafting modern web solutions with
              passion and precision.
            </p>
            <div className="flex gap-3">
              {footerLinks.Connect.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:glow-cyan transition-all"
                  title={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 text-gradient font-bold">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.Navigation.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[#00d9ff] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 text-gradient font-bold">Services</h4>
            <ul className="space-y-2">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[#00d9ff] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4 text-gradient font-bold">
              Let&apos;s Work Together
            </h4>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
              Ready to start your next project? Get in touch today.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full text-sm hover:shadow-lg hover:shadow-[#00d9ff]/30 transition-all"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-[hsl(var(--border))]/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span>© {currentYear} Rehan. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart size={16} className="text-red-500 fill-red-500" />
              </motion.div>
              <span>using Next.JS & Tailwind CSS</span>
            </div>

            <div className="flex gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-[hsl(var(--muted-foreground))] hover:text-[#00d9ff] transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-[hsl(var(--muted-foreground))] hover:text-[#00d9ff] transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
