"use client"; // Ensure this runs only on the client side

import { useState } from "react";
import Image from "next/image";

const ProductInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heroImage, setHeroImage] = useState(
    "https://cdn.codeopx.com/crm3.jpg"
  );

  const images = [
    "https://cdn.codeopx.com/leakage.png",
    "https://cdn.codeopx.com/data1.jpg",
    "https://cdn.codeopx.com/data2.png",
    "https://cdn.codeopx.com/pix.jpg",
  ];

  const accordionItems = [
    {
      title: "❌ Inaccurate Data ",
      content:
        "Inaccurate, duplicate, or incomplete records leading to flawed decision-making",
      imgSrc: "https://cdn.codeopx.com/hubspot.svg",
    },
    {
      title: "🔄️ Broken Automations",
      content:
        "Broken workflows causing delays in sales cycles and missed opportunities",
      imgSrc: "https://cdn.codeopx.com/hubspot.svg",
    },
    {
      title: "📉 Underutilized Features",
      content:
        "Key HubSpot tools not being leveraged effectively, limiting ROI",
      imgSrc: "https://cdn.codeopx.com/hubspot.svg",
    },
    {
      title: "💰 Lost Revenue Opportunities",
      content:
        "Poor lead management resulting in lost sales and lower conversions",
      imgSrc: "https://cdn.codeopx.com/hubspot.svg",
    },
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setHeroImage(images[index + 1] || images[0]);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4 lg:p-12">
      <div className="flex flex-col lg:flex-row bg-[#e8edd7] rounded-[32px] lg:h-[778px]">
        {/* Left: Image Section */}
        <div className="w-full lg:w-1/2 h-full">
          <Image
            src={heroImage}
            width={800}
            height={600}
            alt="Product Image"
            className="w-full h-full object-cover lg:rounded-l-[32px] rounded-t-[32px] transition-opacity duration-1000"
          />
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-[2.2rem] font-semibold leading-tight mb-6">
            📉 Is Your HubSpot CRM Hurting Your Sales?
          </h2>

          {/* Accordion */}
          <div className="bg-[#dce4c3] rounded-[20px]">
            {accordionItems.map((item, index) => (
              <div key={index}>
                {/* Accordion Header */}
                <div
                  className="flex justify-between items-center p-6 cursor-pointer transition-all duration-300"
                  onClick={() => handleAccordionClick(index)}
                >
                  <div className="text-[16px] leading-6 font-bold">
                    {item.title}
                  </div>
                  <span className="h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center">
                    <svg
                      className={`w-4 h-4 text-[#5f6368] transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-max-height duration-700 ${
                    activeIndex === index
                      ? "max-h-[200px] py-4 px-6"
                      : "max-h-0"
                  }`}
                >
                  <p className="mb-4 leading-6">{item.content}</p>
                  <Image src={item.imgSrc} width={32} height={32} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
