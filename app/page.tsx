/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import CrmSection from "./Crm";
import ProductInformation from "./GooleCard";
import MarqueeSlides from "./Card";
import HubspotAudit from "./Audit";

export default function LandingPage() {
  return (
    <div>
      {/* <Hero></Hero> */}
      <CrmSection></CrmSection>
      <div className="min-h-screen bg-[#f8f9fa]">
        {/* Hero Section */}
        {/* <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c3e50]">
            Unlock the Full Potential of Your HubSpot CRM
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-[#34495e]">
            With a Comprehensive, Data-Driven Audit
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-[#5d6d7e]">
            A well-optimized CRM is the foundation of high-performing sales and
            marketing operations. Our HubSpot CRM Audit is designed to uncover
            gaps, refine your processes, and empower your team with strategic
            insights that drive growth.
          </p>
          <Button
            size="lg"
            className="text-lg bg-[#ff5c35] hover:bg-[#ff5c35] text-white"
          >
            Schedule Your Audit Now <ArrowRight className="ml-2" />
          </Button>
        </section> */}

        {/* Why Essential Section */}
        <ProductInformation></ProductInformation>
        {/* <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#2c3e50]">
              Why a HubSpot Audit is Essential
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Data integrity issues",
                  description:
                    "Inaccurate, duplicate, or incomplete records leading to flawed decision-making",
                },
                {
                  title: "Automation inefficiencies",
                  description:
                    "Broken workflows causing delays in sales cycles and missed opportunities",
                },
                {
                  title: "Underutilized features",
                  description:
                    "Key HubSpot tools not being leveraged effectively, limiting ROI",
                },
                {
                  title: "Revenue leakage",
                  description:
                    "Poor lead management resulting in lost sales and lower conversions",
                },
              ].map((item, index) => (
                <Card key={index} className="border-[#e0e0e0] shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-[#2c3e50]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#5d6d7e]">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* What's Included Section */}
        <HubspotAudit></HubspotAudit>

        {/* Value Section */}
        <h2 className="text-3xl font-bold mb-12 text-center text-[#2c3e50]">
          The Value of Your CRM Audit
        </h2>
        <MarqueeSlides></MarqueeSlides>

        {/* CTA Section */}

        <section className="container mx-auto px-4 py-20 text-center bg-[#f8f9fa]">
          <h2 className="text-3xl font-bold mb-6 text-[#2c3e50]">
            Claim Your CRM Audit Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#34495e]">
            Take control of your HubSpot CRM's performance and maximize its
            impact. Schedule your HubSpot Audit, and let's uncover new
            opportunities to accelerate your business growth!
          </p>
          <a href="/register">
            <Button
              size="lg"
              className="text-lg bg-[#ff5c35] hover:bg-[#ff5c35] text-[white]"
            >
              Schedule Your Audit Now <ArrowRight className="ml-2" />
            </Button>
          </a>
        </section>
      </div>
    </div>
  );
}
