"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const slides = [
  {
    title: "Actionable Insights",
    description: "Clear, strategic guidance tailored to your business's needs",
  },
  {
    title: "Operational Efficiency",
    description: "Improvements in automation, lead flow, and reporting accuracy",
  },
  {
    title: "Increased Revenue",
    description: "Addressing sales inefficiencies and optimizing conversion strategies",
  },
  {
    title: "Stronger Team Enablement",
    description: "Enhanced user adoption and process improvements for a more effective team",
  },
]

export default function MarqueeSlides() {
  const [duplicatedSlides, setDuplicatedSlides] = useState<typeof slides>([])

  useEffect(() => {
    // Duplicate slides to create seamless loop
    setDuplicatedSlides([...slides, ...slides, ...slides])
  }, [])

  return (
    <div className="w-full overflow-hidden py-8 bg-background">
      <motion.div
        className="flex gap-6"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {duplicatedSlides.map((slide, idx) => (
          <Card key={idx} className="border rounded-lg shadow-sm shrink-0" style={{ width: "300px" }}>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
              <p className="text-sm text-muted-foreground">{slide.description}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  )
}

