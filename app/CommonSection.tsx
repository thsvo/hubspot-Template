/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Database, LineChart, Settings, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommonSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-primary/90 to-primary px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transform Your CRM Performance
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Unlock the full potential of your CRM system with our
              comprehensive audit and optimization services.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Schedule Your Audit Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"
        />
      </section> */}

      {/* Challenges Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Common CRM Challenges
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Many organizations struggle with their CRM implementation, often
              without realizing the full scale of the risks involved.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={item}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-500/10 to-red-500/5">
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-red-500" />
                    Data Integrity Issues
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Duplicate, outdated, or incomplete data skewing your reports
                    and hindering effective follow-ups. Poor data quality means
                    missed opportunities and unreliable forecasts.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-500/10 to-amber-500/5">
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-amber-500" />
                    Inefficient Processes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Clunky workflows and manual data entry slow your team down.
                    Sales reps waste time on administrative tasks instead of
                    selling, leading to a lagging sales pipeline.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-blue-500/5">
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-500" />
                    Automation Gaps
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Lack of proper CRM automation or misconfigured tools means
                    leads aren't nurtured and routine tasks aren't streamlined.
                    Without the right automation, your team may miss timely
                    outreach.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-500/10 to-purple-500/5">
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-purple-500" />
                    Revenue Leakage
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Deals and leads slipping through the cracks due to lack of
                    visibility and follow-up. This "leakage" in your sales
                    funnel means potential revenue is lost without you even
                    realizing it.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Benefits of a CRM Audit
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              My comprehensive CRM audit service directly addresses these
              challenges and turns them into opportunities.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Clean, Reliable Data",
                description:
                  "I'll cleanse and organize your CRM data, ensuring you have accurate, up-to-date information. Enjoy trustworthy reports and insights, leading to better decision-making and confident forecasting.",
                icon: <Database className="h-10 w-10 text-primary" />,
              },
              {
                title: "Streamlined Workflows",
                description:
                  "By reengineering your CRM processes, I eliminate bottlenecks and redundant tasks. Your team will save hours every week, allowing sales reps to focus on high-value activities like engaging with prospects and closing deals.",
                icon: <Settings className="h-10 w-10 text-primary" />,
              },
              {
                title: "Effective Automation",
                description:
                  "I implement or fine-tune CRM automation so that routine follow-ups, lead nurturing, and data entry happen automatically. This means no more missed follow-ups – every lead gets timely attention, increasing your lead conversion rates.",
                icon: <Settings className="h-10 w-10 text-primary" />,
              },
              {
                title: "Higher Conversion & Revenue",
                description:
                  "With data integrity, efficient processes, and smart automation in place, you'll plug the leaks in your sales funnel. The result is a higher lead-to-customer conversion rate and more consistent revenue growth.",
                icon: <LineChart className="h-10 w-10 text-primary" />,
              },
              {
                title: "Maximum CRM ROI",
                description:
                  "Ultimately, an optimized CRM means you're getting the full value from your CRM investment. Your software and team work in harmony, translating into a stronger sales pipeline and tangible business growth.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-6 md:flex-row"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What's Included in My CRM Audit
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A CRM audit is a thorough examination of your system and sales
              process. I leave no stone unturned.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "CRM Data Quality Assessment",
                description:
                  "I dive into your CRM database to find and fix duplicate records, missing fields, and inconsistent data. You get a single source of truth for all your customer information.",
              },
              {
                title: "Sales Process & Workflow Review",
                description:
                  "I map out your current sales process inside the CRM—from lead capture and qualification to deal closure. I identify inefficiencies, gaps, or extra steps that slow your team down.",
              },
              {
                title: "Automation & Integration Check",
                description:
                  "I evaluate your existing CRM automations and how your CRM integrates with other tools. I'll recommend adjustments or new automations to ensure technology is truly accelerating your sales process.",
              },
              {
                title: "User Adoption Analysis",
                description:
                  "I assess how your team interacts with the CRM—are they using all the important features? I'll uncover any training needs or user experience issues that prevent full adoption.",
              },
              {
                title: "Comprehensive Recommendations Report",
                description:
                  "After the audit, you receive a detailed report and action plan. This includes my findings, prioritized recommendations, and a roadmap to optimize your CRM.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section
        id="contact"
        className="bg-primary px-4 py-16 text-white sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Schedule Your CRM Audit Consultation
              </h2>
              <p className="mb-6">
                Ready to transform your CRM into a revenue-driving machine? It
                starts with a conversation. Schedule a meeting with me to
                discuss your needs and kick off a CRM audit tailored to your
                business.
              </p>
              <ul className="mb-6 space-y-3">
                {[
                  "Resolve your CRM challenges",
                  "Unlock new growth opportunities",
                  "Optimize your sales process",
                  "Fuel your business growth",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-white" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p>
                Join the ranks of forward-thinking organizations that have
                optimized their sales process with a CRM audit. Let's ensure
                your CRM is fueling your growth, not hindering it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white p-6 text-gray-900 shadow-xl"
            >
              {isFormSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
                  >
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Thank You!
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Your consultation request has been submitted. I'll be in
                    touch with you shortly to schedule your CRM audit.
                  </p>
                  <Button
                    onClick={() => setIsFormSubmitted(false)}
                    variant="outline"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="mb-4 text-xl font-bold">
                    Request Your Free Consultation
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required className="bg-gray-50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" required className="bg-gray-50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="crm">Current CRM System</Label>
                    <Input
                      id="crm"
                      placeholder="e.g., Salesforce, HubSpot, etc."
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      What are your biggest CRM challenges?
                    </Label>
                    <Textarea id="message" rows={3} className="bg-gray-50" />
                  </div>

                  <Button type="submit" className="w-full">
                    Schedule My Consultation
                  </Button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Get answers to common questions about our CRM audit services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long does a typical CRM audit take?",
                answer:
                  "A comprehensive CRM audit typically takes 2-3 weeks, depending on the size and complexity of your CRM implementation. This includes data analysis, process review, and developing recommendations.",
              },
              {
                question: "Will the audit disrupt our daily operations?",
                answer:
                  "No, our audit process is designed to be minimally invasive. We'll work around your schedule and most of our analysis can be done without interrupting your team's daily activities.",
              },
              {
                question: "What CRM systems do you work with?",
                answer:
                  "I specialize in major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics, Zoho CRM, and Pipedrive, but can work with most modern CRM systems.",
              },
              {
                question:
                  "Do you implement the recommendations after the audit?",
                answer:
                  "Yes, I offer implementation services to help you execute the recommendations from the audit. This can be arranged as a separate engagement after you review and approve the audit findings.",
              },
              {
                question: "How much does a CRM audit cost?",
                answer:
                  "Pricing varies based on the size and complexity of your CRM implementation. After our initial consultation, I'll provide a custom quote based on your specific needs and objectives.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-lg border border-border bg-card"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-border p-4 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-muted/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">CRM Audit Services</span>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              © {new Date().getFullYear()} CRM Audit Services. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
