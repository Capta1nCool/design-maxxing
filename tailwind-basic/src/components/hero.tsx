export const Hero = () => {
  return (
    <div className="flex flex-col items-center py-2 my-20">
      <div className="border border-gray-200 bg-gray-100 w-fit px-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition duration-200 cursor-pointer">
        Real-time data API for founders and agents
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>

      <div className="max-w-xl text-center">
        <h1 className="font-medium text-6xl mt-15 tracking-tight">
          Magically simplify accounting and taxes
        </h1>
        <p className="mt-5 text-neutral-700">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 12:43am.
        </p>
      </div>

      <div className="mt-8 flex gap-5">
        <button className="bg-[#2579F4] text-white px-4 py-2 rounded-lg shadow-lg text-shadow-md tracking-wide cursor-pointer hover:bg-blue-700 transition duration-200">
          Get Started
        </button>

        <button className="px-4 py-2 rounded-lg text-shadow-md tracking-wide flex items-center gap-1 cursor-pointer hover:bg-slate-500/10 transition duration-200">
          Pricing
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
