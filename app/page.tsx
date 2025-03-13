/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import CrmSection from "./Crm";
import ProductInformation from "./GooleCard";
import GTMScript from "./GTM";
import CommonSection from "./CommonSection";
import HubSpotMeetings from "./HubSpot";

export const metadata = {
  title: "🚀 Optimize Your CRM | Increase Sales & Efficiency with a CRM Audit ",
  description:
    "Struggling with CRM inefficiencies? A comprehensive CRM audit uncovers hidden issues, optimizes workflows, and prevents revenue loss. Schedule your consultation today! ",
  keywords: ["joseph helmy", "website", "crm audit"],
};

export default function LandingPage() {
  return (
    <div>
      <GTMScript></GTMScript>

      <CrmSection></CrmSection>
      <div className="min-h-screen bg-[#f8f9fa]">
        <ProductInformation></ProductInformation>
        <CommonSection></CommonSection>
        {/* <HubspotAudit></HubspotAudit> */}

        {/* <h2 className="text-3xl font-bold mb-12 text-center text-[#2c3e50]">
          The Value of Your CRM Audit
        </h2> */}
        {/* <MarqueeSlides></MarqueeSlides> */}

        <section className="container mx-auto px-4 py-20 text-center bg-[#f8f9fa]">
          <h2 className="text-3xl font-bold mb-2 text-[#2c3e50]">
            Schedule Your CRM Audit Consultation
          </h2>
          <br />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ready to transform your CRM into a revenue-driving machine? It
            starts with a conversation. Schedule a meeting with me to discuss
            your needs and kick off a CRM audit tailored to your business. I’ll
            walk you through how I can resolve your CRM challenges and unlock
            new growth opportunities. Don’t let inefficiencies hold you
            back—take the first step toward a high-performing CRM and watch your
            sales soar. <br />
             Join the ranks of forward-thinking organizations that
            have optimized their sales process with a CRM audit. Let’s ensure
            your CRM is fueling your growth, not hindering it.
          </p>
          <br />
          <a href="#contract">
            <Button
              size="lg"
              className="text-lg bg-[#ff5c35] hover:bg-[#ff5c35] text-[white]"
            >
              Schedule Your Audit Now <ArrowRight className="ml-2" />
            </Button>
          </a>
        </section>
      </div>

      <HubSpotMeetings></HubSpotMeetings>
    </div>
  );
}
