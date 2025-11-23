"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", type: "button", href: "" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 glow-cyan">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <span className="text-gradient text-xl font-bold">MERN</span>
            <div className="w-[70px] h-10 rounded-xl bg-gradient-to-br from-[#00d9ff] to-[#a855f7] flex items-center justify-center text-lg font-bold">
              Rehan
            </div>
            <span className="text-gradient text-xl font-bold">DeV</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <span key={link.name}>
                {link.type == "button" ? (
                  <motion.button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-foreground/80 hover:text-[#00d9ff] transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                ) : (
                  <motion.a
                    href={"#" + link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-foreground/80 hover:text-[#00d9ff] transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                )}
              </span>
            ))}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full hover:shadow-lg transition-all"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-[#00d9ff] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-[hsl(var(--border))]"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) =>
                  link.type === "button" ? (
                    <button
                      key={link.name}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setTimeout(() => {
                          setIsOpen(false);
                        }, 400);
                      }}
                      className="text-left py-2"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={"#" + link.href}
                      key={link.name}
                      onClick={() => {
                        setTimeout(() => {
                          setIsOpen(false);
                        }, 400);
                      }}
                      className="py-2"
                    >
                      {link.name}
                    </a>
                  )
                )}

                <a
                  href="#contact"
                  onClick={() => {
                    setTimeout(() => {
                      setIsOpen(false);
                    }, 1000);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full text-center hover:shadow-lg transition-all"
                >
                  Hire Me
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
