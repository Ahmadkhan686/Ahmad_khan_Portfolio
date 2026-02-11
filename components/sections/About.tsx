"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Code,
  Database,
  Server,
  Zap,
  Shield,
  Cloud,
  Layers,
  Cpu,
} from "lucide-react";

const skills = [
  {
    name: "React / Next.js",
    icon: Layers,
    level: 90,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Node.js",
    icon: Cpu,
    level: 85,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Express.js",
    icon: Server,
    level: 88,
    color: "from-gray-500 to-gray-700",
  },
  {
    name: "MongoDB",
    icon: Database,
    level: 82,
    color: "from-green-600 to-green-800",
  },
  {
    name: "REST APIs",
    icon: Code,
    level: 90,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Authentication",
    icon: Shield,
    level: 85,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Performance",
    icon: Zap,
    level: 80,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Deployment",
    icon: Cloud,
    level: 85,
    color: "from-blue-600 to-indigo-600",
  },
];

export default function About() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate <strong>MERN Stack Developer</strong> with
                expertise in building scalable, full-stack web applications.
                With a strong foundation in both frontend and backend
                technologies, I create seamless digital experiences that combine
                beautiful user interfaces with robust server-side logic.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in web development has equipped me with deep
                understanding of:
              </p>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  "React & Next.js for building modern, performant user interfaces",
                  "Node.js & Express for creating scalable RESTful APIs",
                  "MongoDB for designing efficient database schemas and queries",
                  "JWT & OAuth for implementing secure authentication systems",
                  "API design principles and best practices",
                  "Deployment strategies using Vercel, Render, and Railway",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">
                      ▹
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Skills */}
          <div ref={skillsRef}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Technical Skills
              </h3>

              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="group">
                    <motion.div variants={itemVariants}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-gray-800 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{
                            width: isSkillsInView ? `${skill.level}%` : "0%",
                          }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full min-w-0"
                        >
                          <div
                            className={`h-full w-full bg-gradient-to-r ${skill.color} rounded-full`}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
