"use client";

import { motion } from "motion/react";
import {
  Server,
  Database,
  Lock,
  Zap,
  Network,
  Code,
  Cloud,
  Layers,
} from "lucide-react";

const backendTopics = [
  {
    icon: Server,
    title: "REST API Architecture",
    description:
      "Designing scalable RESTful APIs with proper HTTP methods, status codes, and resource naming conventions. Experience with API versioning and documentation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Database Modeling",
    description:
      "Expertise in MongoDB schema design, indexing strategies, and query optimization. Understanding of relational vs NoSQL database trade-offs.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Lock,
    title: "Authentication & Authorization",
    description:
      "Implementation of JWT-based authentication, OAuth 2.0, session management, and role-based access control (RBAC) for secure applications.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Caching strategies with Redis, database query optimization, API response compression, and implementing efficient algorithms for better performance.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Network,
    title: "CRUD Operations",
    description:
      "Building robust Create, Read, Update, Delete operations with proper validation, error handling, and data sanitization for secure data manipulation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "API Design",
    description:
      "Creating well-structured APIs with proper endpoints, request/response formats, middleware implementation, and comprehensive error handling.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Cloud,
    title: "Deployment & DevOps",
    description:
      "Deploying applications on platforms like Vercel, Render, Railway, and AWS. Experience with Docker containerization and CI/CD pipelines.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Layers,
    title: "Middleware & Security",
    description:
      "Implementing custom middleware for logging, rate limiting, CORS, and security headers. Understanding of common vulnerabilities and best practices.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function BackendKnowledge() {
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
    hidden: { opacity: 0, y: 30 },
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
      id="backend"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Backend Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep understanding of server-side development, API design, and
            system architecture
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {backendTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-r ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {topic.description}
                </p>

                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Building Scalable Backends
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I specialize in creating robust backend systems that can handle
                growth. From designing efficient database schemas to
                implementing caching strategies, I ensure applications perform
                well under load.
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  "RESTful API design and implementation",
                  "MongoDB schema design and optimization",
                  "JWT and OAuth authentication flows",
                  "Redis caching for improved performance",
                  "Error handling and logging strategies",
                  "API security best practices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "APIs Built", value: "50+" },
                { label: "Database Models", value: "100+" },
                { label: "Auth Systems", value: "30+" },
                { label: "Deployments", value: "40+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-md"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
