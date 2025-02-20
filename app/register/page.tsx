/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/48908248.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="mt-8 items-center justify-center gap-x-6">
        <a
          href="/"
          className="rounded-md bg-[#ff5c35] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:[#ff5c35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          rel="noreferrer"
        >
          Back To Home →
        </a>
      </div>
      <br />
      <br />
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="d147582b-42e4-4c1c-a542-81507993344f"
        data-portal-id="48908248"
      ></div>
    </div>
  );
};

export default HubSpotForm;
