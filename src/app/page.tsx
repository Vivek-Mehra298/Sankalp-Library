"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Menu,
  X,
  Lock,
  Droplet,
  Wifi,
  Newspaper,
  Camera,
  CheckCircle,
  Leaf,
  Car,
  Clock,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  Check
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for navbar shadow and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "features", "gallery", "pricing", "location", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Location", href: "#location", id: "location" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const features = [
    {
      icon: <Lock className="w-6 h-6 text-brand-primary" />,
      title: "Personal Cabin",
      desc: "Private seat with individual lights and power charging point.",
      hindi: "पर्सनल केबिन लाईट्स और चार्जिंग पॉइंट के साथ",
    },
    {
      icon: <Droplet className="w-6 h-6 text-brand-primary" />,
      title: "Pure Drinking Water",
      desc: "Clean, cold reverse-osmosis water always available.",
      hindi: "शुद्ध ठंडा पीने का पानी",
    },
    {
      icon: <Wifi className="w-6 h-6 text-brand-primary" />,
      title: "Free Internet",
      desc: "High-speed unlimited WiFi for all members.",
      hindi: "फ्री इंटरनेट",
    },
    {
      icon: <Newspaper className="w-6 h-6 text-brand-primary" />,
      title: "Daily Newspaper",
      desc: "Stay updated with fresh daily newspapers every morning.",
      hindi: "प्रतिदिन न्यूज पेपर",
    },
    {
      icon: <Camera className="w-6 h-6 text-brand-primary" />,
      title: "CCTV Security",
      desc: "Full camera surveillance for safety and peace of mind.",
      hindi: "सी.सी.टी.वी. कैमरे के साथ सुरक्षा",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-primary" />,
      title: "Comfortable Seating",
      desc: "Ergonomic, cushioned chairs built for long study hours.",
      hindi: "बैठने की आरामदायक सुविधा",
    },
    {
      icon: <Leaf className="w-6 h-6 text-brand-primary" />,
      title: "Green Garden",
      desc: "Refreshing garden space nearby to relax your eyes and mind.",
      hindi: "हरा-भरा गार्डन",
    },
    {
      icon: <Car className="w-6 h-6 text-brand-primary" />,
      title: "Free Parking",
      desc: "Spacious vehicle parking space at no extra charge.",
      hindi: "निःशुल्क गाड़ी पार्किंग की सुविधा",
    },
  ];

  const galleryImages = [
    {
      src: "/library1.jpeg",
      alt: "Sankalp Library Interior",
      caption: "Clean and distraction-free workspace layout",
    },
    {
      src: "/library2.jpeg",
      alt: "Sankalp Library Individual Cabins",
      caption: "Private cabins with individual lighting and privacy curtains",
    },
    {
      src: "/library3.jpeg",
      alt: "Sankalp Library Quiet Study Room",
      caption: "Comfortable seating arrangement with ceiling fan ventilation",
    },
  ];

  // Image custom style with requested brightness and contrast filters
  const imageFilterStyle = {
    filter: "brightness(1.05) contrast(1.05)",
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans">
      {/* 1. NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled
            ? "shadow-md shadow-brand-accent/5 border-b border-brand-border py-2"
            : "border-b border-brand-border py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="p-2 bg-brand-surface rounded-xl group-hover:bg-brand-light transition-colors border border-brand-border">
                <BookOpen className="w-6 h-6 text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl md:text-2xl text-brand-dark tracking-wide leading-none">
                  Sankalp Library
                </span>
                <span className="font-hindi text-[10px] text-brand-primary font-semibold tracking-wider leading-none mt-1">
                  संकल्प लाइब्रेरी
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-200 relative py-1 hover:text-brand-primary ${
                    activeSection === link.id ? "text-brand-primary font-bold" : "text-brand-muted"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="bg-brand-primary text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-brand-primary/20 hover:bg-brand-accent transition-colors"
              >
                Join Now
              </motion.a>
            </div>

            {/* Hamburger Button for Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-brand-surface text-brand-dark transition-colors focus:outline-none border border-transparent hover:border-brand-border"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-brand-border overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      activeSection === link.id
                        ? "bg-brand-surface text-brand-primary"
                        : "text-brand-muted hover:bg-brand-surface hover:text-brand-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center bg-brand-primary text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-brand-primary/20 hover:bg-brand-accent transition-colors"
                  >
                    Join Now — ₹450/month
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className="min-h-screen pt-24 md:pt-32 flex items-center justify-center relative overflow-hidden bg-white bg-dot-pattern"
      >
        {/* Faint blue radial gradient on the right side */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-brand-surface),_transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column: Headline and CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="flex flex-col text-left space-y-6"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="inline-flex items-center gap-2 self-start bg-brand-surface border border-brand-border px-4 py-1.5 rounded-full text-brand-primary text-xs md:text-sm font-semibold"
              >
                <span>📍 Opposite Collectorate Office, Chhindwara</span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-dark tracking-tight leading-none"
              >
                Your Focus, <br />
                <span className="text-brand-primary">Our Space.</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-lg md:text-xl text-brand-muted leading-relaxed font-sans max-w-lg"
              >
                Chhindwara's most focused study environment — open 8 AM to 10 PM, 7 days a week.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="font-hindi text-base md:text-lg text-brand-primary/80 font-medium py-1 border-l-4 border-brand-primary pl-4"
              >
                संकल्प लाइब्रेरी — एकाग्र अध्ययन की सही जगह
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="#pricing"
                  className="bg-brand-primary text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-brand-primary/25 hover:bg-brand-accent transition-colors duration-200 inline-flex items-center gap-2 group w-full sm:w-auto justify-center"
                >
                  Join Now — ₹450/month
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <a
                  href="#features"
                  className="text-brand-muted hover:text-brand-primary transition-colors text-sm font-semibold py-3 px-4 w-full sm:w-auto text-center hover:bg-brand-surface rounded-2xl"
                >
                  Explore Facilities
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Advertisement Image styled as card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative group p-3 bg-white border border-brand-border rounded-3xl shadow-2xl shadow-brand-accent/15 transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm md:max-w-md">
                <div className="overflow-hidden rounded-2xl relative aspect-[1/2.2] w-full max-h-[500px]">
                  <Image
                    src="/library_Info.jpeg"
                    alt="Sankalp Library Poster"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={imageFilterStyle}
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                {/* Floating Admission Open Badge */}
                <div className="absolute -top-3 -right-3 bg-brand-accent text-white font-hindi text-sm font-bold px-4 py-2 rounded-xl shadow-lg border border-white rotate-6">
                  प्रवेश प्रारंभ
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="py-20 md:py-28 bg-brand-surface bg-grid-pattern border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight mb-4">
              Everything You Need to Study Smarter
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans">
              We provide all the standard facilities to ensure you study without any interruptions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feat, index) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 bg-white rounded-3xl border border-brand-border hover:shadow-xl hover:shadow-brand-accent/5 hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 bg-white border border-brand-border rounded-2xl w-fit mb-5 shadow-sm">
                    {feat.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-brand-dark mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-brand-muted text-sm md:text-base leading-relaxed mb-4">
                    {feat.desc}
                  </p>
                </div>
                <div className="font-hindi text-xs text-brand-primary/95 font-semibold pt-3 border-t border-brand-border/60">
                  🔹 {feat.hindi}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section id="gallery" className="py-20 md:py-28 bg-white bg-dot-pattern border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight mb-4">
              Inside Sankalp Library
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans">
              A clean, distraction-free environment built for focused minds.
            </p>
          </motion.div>

          {/* Masonry/Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col group"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl bg-brand-surface border border-brand-border shadow-lg shadow-brand-accent/5 cursor-pointer aspect-[4/3] md:aspect-auto"
                >
                  <div className="relative h-[300px] md:h-[450px] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                      style={imageFilterStyle}
                    />
                    {/* Shimmer / blue hover overlay */}
                    <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
                <div className="mt-3 px-2">
                  <h4 className="font-semibold text-sm md:text-base text-brand-dark">{image.alt}</h4>
                  <p className="text-xs md:text-sm text-brand-muted">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section id="pricing" className="py-20 md:py-28 bg-brand-surface bg-grid-pattern border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight mb-4">
              Simple, Affordable Pricing
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans">
              No hidden fees, no complicated tiers. Just one plan packed with all the essentials.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full max-w-lg p-1 bg-gradient-to-br from-brand-primary via-brand-accent to-brand-light rounded-3xl shadow-2xl shadow-brand-primary/10"
            >
              <div className="bg-white p-8 md:p-10 rounded-[22px] flex flex-col h-full relative overflow-hidden">
                {/* Visual decorations */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-surface rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="bg-brand-primary/10 border border-brand-primary/25 text-brand-primary font-bold text-xs md:text-sm px-4 py-1.5 rounded-full">
                    Special Offer
                  </span>
                  <span className="bg-brand-accent text-white font-hindi font-bold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-sm">
                    प्रवेश प्रारंभ
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="font-display font-extrabold text-5xl md:text-6xl text-brand-dark tracking-tight">
                      ₹450
                    </span>
                    <span className="text-brand-muted font-semibold text-lg ml-2">/ month</span>
                  </div>
                  <p className="text-sm text-brand-muted mt-2">Access to all premium library resources</p>
                  <p className="font-hindi text-xs text-brand-primary font-semibold mt-1">फीस मात्र ₹450 प्रति माह</p>
                </div>

                <hr className="border-brand-border my-6" />

                <div className="flex-1 space-y-4 mb-8">
                  {features.map((feat) => (
                    <div key={feat.title} className="flex items-start gap-3">
                      <div className="p-0.5 bg-brand-light rounded-full mt-0.5">
                        <Check className="w-4 h-4 text-brand-primary stroke-[3px]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-brand-dark leading-tight">
                          {feat.title}
                        </span>
                        <span className="font-hindi text-[10px] text-brand-primary font-medium tracking-wide">
                          {feat.hindi}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="bg-brand-primary text-white font-bold text-base py-4 px-6 rounded-2xl shadow-lg shadow-brand-primary/20 hover:bg-brand-accent transition-colors duration-200 text-center w-full block"
                >
                  Get Started Today
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TIMINGS SECTION */}
      <section className="py-16 bg-white bg-dot-pattern border-t border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-4 bg-brand-surface border border-brand-border rounded-3xl shadow-sm mb-6"
          >
            <Clock className="w-8 h-8 text-brand-primary" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-brand-primary mb-2"
          >
            Open Hours
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-brand-dark tracking-tight mb-3"
          >
            8:00 AM — 10:00 PM
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-brand-muted font-sans"
          >
            Open every day of the week, 7 days a week.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-hindi text-base md:text-lg text-brand-primary font-bold mt-4"
          >
            समय – सुबह 08 बजे से रात्रि 10 बजे तक
          </motion.div>
        </div>
      </section>

      {/* 7. LOCATION SECTION */}
      <section id="location" className="py-20 md:py-28 bg-white bg-dot-pattern border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight mb-4">
              Find Us in Chhindwara
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans">
              Located right in the heart of Chhindwara for your convenience.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {/* Embedded Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl border-2 border-brand-border shadow-xl shadow-brand-accent/5 aspect-[16/9] w-full min-h-[300px] md:min-h-[400px]"
            >
              <iframe
                title="Sankalp Library Google Maps Location"
                src="https://www.google.com/maps?q=Sankalp+Library+Chhindwara+Madhya+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Address details card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-surface p-6 md:p-8 rounded-3xl border border-brand-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl border border-brand-border shadow-sm shrink-0">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-lg text-brand-dark font-display mb-1">Our Location Address</h4>
                  <p className="text-brand-muted text-sm md:text-base mb-1 font-sans">
                    Sankalp Library, Opposite Collectorate Office, Chhindwara (M.P.)
                  </p>
                  <p className="font-hindi text-sm text-brand-primary font-medium tracking-wide">
                    संकल्प लाइब्रेरी, कलेक्ट्रेट कार्यालय के सामने, छिंदवाड़ा (म.प्र.)
                  </p>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.google.com/maps?q=Sankalp+Library+Chhindwara+Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-brand-accent transition-colors flex items-center gap-2 shrink-0 self-start md:self-auto"
              >
                Get Directions →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-28 bg-white bg-grid-pattern border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight mb-4">
              Get In Touch
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans">
              Have questions? Want to reserve a desk? Send us a message or call us directly.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
            {/* Info Column (2/5 span) */}
            <div className="md:col-span-2 space-y-6">
              {/* Phone card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-brand-surface rounded-3xl border border-brand-border flex items-start gap-4"
              >
                <div className="p-3 bg-white rounded-2xl border border-brand-border shadow-sm text-brand-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg font-display text-brand-dark">Call Us Directly</h4>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+919944775622"
                      className="text-brand-primary hover:text-brand-accent transition-colors font-bold text-base"
                    >
                      +91 99447 75622
                    </a>
                    <a
                      href="tel:+919424695103"
                      className="text-brand-primary hover:text-brand-accent transition-colors font-bold text-base"
                    >
                      +91 94246 95103
                    </a>
                  </div>
                  <p className="text-xs text-brand-muted pt-1">Call hours: 8 AM to 10 PM daily</p>
                </div>
              </motion.div>

              {/* Address card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 bg-brand-surface rounded-3xl border border-brand-border flex items-start gap-4"
              >
                <div className="p-3 bg-white rounded-2xl border border-brand-border shadow-sm text-brand-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-display text-brand-dark">Visit Us</h4>
                  <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                    Opposite Collectorate Office, Chhindwara, Madhya Pradesh, Pin 480001
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Form Column (3/5 span) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3 p-8 bg-white border border-brand-border rounded-3xl shadow-xl shadow-brand-accent/5"
            >
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-brand-dark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-white border border-brand-border rounded-xl px-4 py-3.5 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-brand-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full bg-white border border-brand-border rounded-xl px-4 py-3.5 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-brand-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your study space requirement or ask a question..."
                    className="w-full bg-white border border-brand-border rounded-xl px-4 py-3.5 text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-primary/20 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Branding widget */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-primary/20 rounded-xl border border-brand-primary/30">
                  <BookOpen className="w-6 h-6 text-brand-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-xl text-white tracking-wider leading-none">
                    Sankalp Library
                  </span>
                  <span className="font-hindi text-[10px] text-brand-accent font-semibold tracking-wider mt-1 leading-none">
                    संकल्प लाइब्रेरी
                  </span>
                </div>
              </div>
              <p className="text-brand-light text-sm max-w-sm font-sans leading-relaxed">
                A Perfect Place For Focused Study. Chhindwara's premium study library with all essential utilities for
                focused competitive exam preparation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-brand-light font-sans">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-brand-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Detail</h4>
              <p className="text-brand-light text-sm font-sans mb-3 leading-relaxed">
                Opposite Collectorate Office, Chhindwara, M.P.
              </p>
              <div className="space-y-1 text-sm font-sans text-brand-light">
                <p>
                  📞 <a href="tel:+919944775622" className="hover:text-brand-accent font-bold">+91 99447 75622</a>
                </p>
                <p>
                  📞 <a href="tel:+919424695103" className="hover:text-brand-accent font-bold">+91 94246 95103</a>
                </p>
                <p className="font-hindi text-xs text-brand-accent font-semibold pt-1">
                  सम्पर्क सूत्र – 9944775622
                </p>
              </div>
            </div>
          </div>

          <hr className="border-white/10 my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-brand-light font-sans">
            <p>© 2024 Sankalp Library, Chhindwara. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Developed for Sankalp Library, Chhindwara
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
