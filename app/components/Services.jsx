"use client";

import { motion } from "motion/react";
import { Code, Layout, Database, Lock, Zap, Brain, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices for optimal performance.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading",
        "Cross-Browser",
      ],
      color: "from-[#00d9ff] to-cyan-400",
    },
    {
      icon: Code,
      title: "Admin Dashboard Development",
      description:
        "Powerful admin panels with analytics, user management, and comprehensive data visualization.",
      features: [
        "Real-time Analytics",
        "User Management",
        "Data Visualization",
        "Role-Based Access",
      ],
      color: "from-[#a855f7] to-purple-400",
    },
    {
      icon: Database,
      title: "API Development",
      description:
        "RESTful and GraphQL APIs designed for scalability, security, and excellent documentation.",
      features: [
        "REST APIs",
        "Authentication",
        "Rate Limiting",
        "Documentation",
      ],
      color: "from-[#7c3aed] to-blue-500",
    },
    {
      icon: Lock,
      title: "Authentication Systems",
      description:
        "Secure authentication solutions with JWT, OAuth, and multi-factor authentication support.",
      features: [
        "JWT & OAuth",
        "2FA Support",
        "Session Management",
        "Security Best Practices",
      ],
      color: "from-[#00d9ff] to-[#a855f7]",
    },
    {
      icon: Zap,
      title: "SaaS Applications",
      description:
        "Complete SaaS solutions with subscription management, billing, and multi-tenancy support.",
      features: [
        "Subscription Plans",
        "Payment Integration",
        "Multi-tenancy",
        "Analytics",
      ],
      color: "from-[#a855f7] to-[#7c3aed]",
    },
    {
      icon: Brain,
      title: "AI Integrations",
      description:
        "Integrate AI capabilities like ChatGPT, image generation, and machine learning into your applications.",
      features: [
        "OpenAI Integration",
        "ML Models",
        "Natural Language",
        "Image Processing",
      ],
      color: "from-[#7c3aed] to-[#00d9ff]",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$75",
      period: "per project",
      description: "Perfect for small Projects and MVPs",
      features: [
        "Single Page Application",
        "Responsive Design",
        "Basic SEO",
        "1 Month Support",
        "Source Code",
        "Deployment Assistance",
      ],
      popular: false,
      color: "border-[#00d9ff]/30",
      glow: "hover:glow-cyan",
    },
    {
      name: "Standard",
      price: "$100",
      period: "per project",
      description: "Most Popular for Medium-Sized Applications",
      features: [
        "Multi-Page Application",
        "Custom Admin Dashboard",
        "API Development",
        "Authentication System",
        "2 Months Support",
        "Database Design",
        "SEO Optimization",
        "Deployment & Hosting",
      ],
      popular: true,
      color: "border-[#a855f7]",
      glow: "hover:glow-purple",
    },
    {
      name: "Premium",
      price: "$200",
      period: "per project",
      description: "For Complex Enterprise Applications",
      features: [
        "Full-Stack SaaS Platform",
        "Advanced Dashboard",
        "Payment Integration",
        "AI/ML Integrations",
        "4 Months Support",
        "Scalable Architecture",
        "DevOps & CI/CD",
        "Performance Optimization",
        "Security Audit",
        "Priority Support",
      ],
      popular: false,
      color: "border-[#7c3aed]/30",
      glow: "hover:glow-blue",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(0, 217, 255, 0.05)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Comprehensive full-stack development services to bring your ideas to
            life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass rounded-3xl p-6 hover:glow-cyan transition-all cursor-pointer`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
              >
                <service.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#a855f7]" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Pricing <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Flexible pricing options to match your project needs and budget
          </p>
        </motion.div>

        <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: plan.popular ? 1.02 : 1.05, y: -10 }}
              className={`glass rounded-3xl p-8 relative ${
                plan.popular ? "border-2 glow-purple" : "border"
              } ${plan.color} mx-auto lg:mx-0 ${plan.glow} transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#a855f7] to-[#7c3aed] rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl text-gradient font-bold">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[hsl(var(--muted-foreground))]">
                    / {plan.period}
                  </span>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-8 h-[350px]">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-r ${
                        plan.popular
                          ? "from-[#a855f7] to-[#7c3aed]"
                          : "from-[#00d9ff] to-[#a855f7]"
                      } flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full px-6 py-3 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#a855f7] to-[#7c3aed]"
                    : "glass"
                } rounded-full text-center font-medium transition-all ${
                  plan.popular ? "" : "hover:glow-cyan"
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8 max-w-3xl mx-auto glow-cyan">
            <h3 className="text-2xl font-bold mb-3">Need a Custom Solution?</h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">
              Have a unique project in mind? Let&apos;s discuss your
              requirements and create a custom package tailored to your needs.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] text-black font-medium rounded-full"
            >
              Request Custom Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
