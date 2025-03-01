/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import CrmSection from "./Crm";
import ProductInformation from "./GooleCard";
import HubspotAudit from "./Audit";
import GTMScript from "./GTM";

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

        <HubspotAudit></HubspotAudit>

        {/* <h2 className="text-3xl font-bold mb-12 text-center text-[#2c3e50]">
          The Value of Your CRM Audit
        </h2> */}
        {/* <MarqueeSlides></MarqueeSlides> */}

        <section className="container mx-auto px-4 py-20 text-center bg-[#f8f9fa]">
          <h2 className="text-3xl font-bold mb-6 text-[#2c3e50]">
            Claim Your CRM Audit Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#34495e]">
            <span className="font-bold">
              {" "}
              🔥 Your CRM Should Work for You, Not Against You
            </span>{" "}
            <br />
            Don’t let bad data, broken automations, and inefficiencies cost you
            sales. Claim your
            <span className="font-bold">
              FREE HubSpot CRM Audit today{" "}
            </span> and{" "}
            <span className="font-bold"> start closing more deals faster!</span>
          </p>
          <a href="https://contract.josephhelmy.com">
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
