const CrmSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pattern-bg"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201ZM600 0h201v201h-201ZM-400 600h201v201h-201ZM200 800h201v201h-201Z"
            strokeWidth="0"
          ></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#pattern-bg)"
        ></rect>
      </svg>

      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>

      <div className="mt-[-50px] flex h-screen items-center justify-center">
        <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
          <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Unlock the Full Potential{" "}
            <span className="text-[#ff5c35]"> of Your HubSpot CRM</span>{" "}
            <span className="text-[#ffffff]"></span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            With a Comprehensive, Data-Driven Audit
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A well-optimized CRM is the foundation of high-performing sales and
            marketing operations. Our HubSpot CRM Audit is designed to uncover
            gaps, refine your processes, and empower your team with strategic
            insights that drive growth.
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-6">
            <a
              href="/register"
              className="rounded-md bg-[#ff5c35] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:[#ff5c35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              rel="noreferrer"
            >
              Schedule Your Audit Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmSection;
