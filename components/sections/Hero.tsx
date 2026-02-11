"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Cpu,
  Zap,
} from "lucide-react";

// Add your photo as public/profile.jpg or public/profile.png to display it here
const PROFILE_IMAGE = "/profile.png";

export default function Hero() {
  const [profileImgError, setProfileImgError] = useState(false);
  const showProfilePhoto = !profileImgError;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const techStack = ["React", "Node.js", "MongoDB", "Express", "TypeScript"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Floating background orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-pink-300/10 dark:bg-pink-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Subtle grid overlay (right side) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none hidden lg:block"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium"
            >
              👋 Welcome to my Portfolio
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Hi, I&apos;m <span className="block mt-2">Ahmad Khan</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300"
            >
              <span className="inline-block animate-pulse">
                MERN Stack Developer
              </span>
              <span className="mx-2">|</span>
              <span>Full-Stack Engineer</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I build scalable web applications using modern technologies.
              Passionate about creating seamless user experiences and robust
              backend systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Ahmad_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start mb-8"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Ahmadkhan686",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ahmad-khan-34b042397/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:ahmadkhandev44@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
            >
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-full lg:w-auto mb-1 lg:mb-0">
                Working with
              </span>
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.35 }}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats / availability */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm"
            >
              <motion.div
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for work</span>
              </motion.div>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <motion.span
                className="text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.4 }}
              >
                Open to freelance & full-time
              </motion.span>
            </motion.div>
          </div>

          {/* Right: Profile photo or decorative card */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            {/* Floating decorative dots */}
            {[
              {
                size: "w-3 h-3",
                top: "top-[10%]",
                right: "right-[5%]",
                delay: 0,
              },
              {
                size: "w-2 h-2",
                top: "top-[25%]",
                right: "right-[15%]",
                delay: 0.8,
              },
              {
                size: "w-4 h-4",
                top: "bottom-[20%]",
                right: "right-[8%]",
                delay: 0.4,
              },
              {
                size: "w-2 h-2",
                top: "bottom-[35%]",
                left: "left-0",
                delay: 0.6,
              },
              {
                size: "w-3 h-3",
                top: "top-[15%]",
                left: "left-[5%]",
                delay: 0.2,
              },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className={`absolute ${
                  dot.size
                } rounded-full bg-blue-400/30 dark:bg-blue-500/20 ${dot.top} ${
                  dot.left ? `right-auto ${dot.left}` : dot.right ?? ""
                }`}
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: dot.delay,
                }}
              />
            ))}

            {/* Floating "MERN Stack" card */}
            <motion.div
              className="absolute top-[8%] right-0 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Stack
              </p>
              <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                MERN
              </p>
            </motion.div>

            {/* Floating "Experience" style badge */}
            <motion.div
              className="absolute bottom-[12%] left-0 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Focus
              </p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Full-Stack
              </p>
            </motion.div>

            <div className="relative w-full max-w-md mx-auto aspect-square">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl scale-110"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {showProfilePhoto ? (
                <div className="relative aspect-square rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Ahmad Khan - MERN Stack Developer"
                    fill
                    sizes="(max-width: 1024px) 0px, 448px"
                    className="object-cover"
                    priority
                    onError={() => setProfileImgError(true)}
                  />
                </div>
              ) : (
                <div className="relative aspect-square flex flex-col justify-center items-center">
                  {/* Animated gradient ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
                  </motion.div>
                  {/* Inner circle with initials */}
                  <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 shadow-2xl shadow-purple-500/30 flex flex-col justify-center items-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
                    <motion.span
                      className="relative text-6xl md:text-7xl font-bold text-white/95 tracking-tighter drop-shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      AK
                    </motion.span>
                    <span className="relative text-sm font-medium text-white/80 mt-1 tracking-widest uppercase">
                      Ahmad Khan
                    </span>
                  </div>
                  {/* Floating tech badges */}
                  <motion.div
                    className="absolute -top-1 -right-2 p-2 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 p-2 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 -left-4 p-2 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  >
                    <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                  </motion.div>
                  {/* Tagline below */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                    <motion.p
                      className="text-sm font-semibold text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      Code · Build · Deploy
                    </motion.p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
        >
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
