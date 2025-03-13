const CrmSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-12 md:py-16 lg:py-20">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="pattern-bg" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201ZM600 0h201v201h-201ZM-400 600h201v201h-201ZM200 800h201v201h-201Z"
            strokeWidth="0"
          ></path>
        </svg>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern-bg)"></rect>
      </svg>

      <div
        className="absolute left-1/2 top-1/3 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl sm:top-1/4 lg:left-1/2 lg:top-1/2"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[40rem] sm:w-[50rem] lg:w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>

      <div className="mx-auto flex min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-full flex-shrink-0 text-center sm:max-w-2xl lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Unlock Revenue Growth with an <span className="text-[#ff5c35] block sm:inline">Expert CRM Audit</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            Identify and Fix CRM Issues Holding Back Your Sales
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 max-w-prose mx-auto">
            Is your CRM system truly supporting your business growth, or is it leaking valuable opportunities? My CRM
            Performance Audit helps organizations of all sizes, particularly those poised for growth pinpoint data
            problems, process inefficiencies, and automation gaps. I optimize your sales process to ensure no lead slips
            through the cracks, driving higher lead conversion and sustainable revenue growth.
          </p>
          <div className="mt-6 sm:mt-8 flex items-center justify-center">
            <a
              href="#contract"
              className="rounded-md bg-[#ff5c35] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e54d2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 w-full sm:w-auto"
              rel="noreferrer"
            >
              Get My CRM Audit →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrmSection

