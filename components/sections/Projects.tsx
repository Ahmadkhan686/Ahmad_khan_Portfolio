"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Order Management Dashboard",
    description:
      "Built a full-stack multi-platform order management dashboard for Shopify and WooCommerce, supporting distributors, multiple stores, and role-based users.Implemented RBAC (Role-Based Access Control), enabling distributors to access and manage their assigned stores, view and process orders, and perform product management across both e-commerce platforms from a unified interface.Streamlined order and product synchronization between platforms, significantly reducing duplication and manual management for distributors.",
    image: "/order_management.jpeg",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Ahmadkhan686",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Job & Advertising Platform",
    description:
      "Developed a modern, full-featured job portal platform inspired by Indeed and Jobrapido, providing an integrated ecosystem for job search, job applications, event listings, and course modules within a single application. The platform supports advanced job posting and discovery workflows, enabling employers to advertise opportunities while allowing candidates to search, filter, and apply for jobs seamlessly. In addition to job listings, the system includes event and course management modules, expanding user engagement beyond traditional job boards. Built with a responsive, mobile-first UI, the application is optimized for SEO, performance, and scalability, ensuring fast load times and improved search engine visibility. Advertising features and structured content architecture were implemented to support monetization and long-term growth, making the platform suitable for production-scale deployment.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    tags: ["Next.js", "REST API"],
    github: "https://github.com/Ahmadkhan686",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Blog Management System",
    description:
      "Developed and deployed a full-stack application with secure authentication and RBAC (Role-Based Access Control), supporting multiple user roles with controlled access to application features. Implemented a blog management system with full CRUD operations and an interactive dashboard for content and user administration. Designed and consumed RESTful APIs to handle business logic, data persistence, and third-party integrations, following scalable and maintainable full-stack architecture best practices.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ahmadkhan686",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 4,
    title: "Try Before You Buy Shopify App",
    description:
      "Developed a custom Shopify application to support a “Try Before You Buy” (TBYB) business model, enabling customers to place trial orders by paying an initial upfront amount instead of the full product price. The app manages the complete trial lifecycle, including order creation, payment authorization, trial period tracking, and post-trial conversion to full purchase. Integrated seamlessly with Shopify’s checkout and order system to ensure accurate pricing, inventory handling, and order status updates. Implemented secure logic to handle partial payments, final charges, and automated status transitions, improving customer trust while increasing conversion rates for merchants adopting the TBYB model.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Shopify", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ahmadkhan686",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 5,
    title: "Multistore Product Upload",
    description: `Multistore Product Upload is a scalable automation tool that enables one-click product migration across multiple Shopify stores. It supports high-volume transfers of thousands of products, preserving complete data including variants, images, pricing, inventory, and metadata.

The system handles API rate limits, batch processing, and error recovery, with built-in backup and rollback mechanisms to ensure data integrity during migrations. It simplifies multi-store product management by automating cross-store synchronization and eliminating manual duplication.`,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    tags: ["Shopify", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ahmadkhan686",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 6,
    title: "SEO Optimizer (Shopify App)",
    description:
      "SEO Optimizer is a Shopify-focused SEO management tool that helps store owners improve Google visibility through automated technical SEO. It supports bulk meta titles and descriptions, bulk image alt tags, HTML sitemap generation for products, collections, blogs, and pages, Google Search Console–ready meta configuration, and smart 404 handling with index/noindex control—allowing users to focus on content while the app handles SEO complexity.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Shopify", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ahmadkhan686",
    demo: "https://demo.com",
    featured: false,
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my full-stack development skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full description overlay on hover */}
              <div className="absolute inset-0 flex flex-col bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 rounded-2xl overflow-hidden">
                <div className="flex-1 min-h-0 overflow-auto p-6 pb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-6 flex flex-wrap gap-2 shrink-0 bg-white/95 dark:bg-gray-900/95">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Ahmadkhan686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
