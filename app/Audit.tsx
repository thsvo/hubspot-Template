"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const auditItems = [
  {
    title: "Data Quality & Governance",
    id: 1,
  },
  {
    title: "Pipeline & Sales Process Optimization",
    id: 2,
  },
  {
    title: "Marketing & Sales Alignment",
    id: 3,
  },
  {
    title: "Workflow Automation & Efficiency",
    id: 4,
  },
  {
    title: "User Adoption & System Utilization",
    id: 5,
  },
  {
    title: "Performance Benchmarking & KPI Review",
    id: 6,
  },
];

export default function HubspotAudit() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      >
        What&apos;s Included in Your HubSpot Audit?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
        {auditItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 group"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1 + 0.2,
              }}
              className="flex-shrink-0"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-200">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>
            <span className="text-gray-700 text-lg font-medium">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
