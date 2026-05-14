import Image from "next/image";

export const Home = () => {
  return (
    <div className="my-20 flex w-full flex-col items-center text-center">
      <h1 className="max-w-3xl bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intutive finance.
      </h1>
      <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-300 selection:bg-white">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
      <div className="mt-8 flex w-full max-w-lg justify-center">
        <input
          type="text"
          className="focus:ring-primary mr-4 flex-1 rounded-xl border border-neutral-600 px-4 transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-neutral-300">
          <div className="front-transparent via-primary absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r to-transparent"></div>
          Join the waitlist
        </button>
      </div>
      <Image
        src="/hero.png"
        width={1152}
        height={680}
        className="mt-25 w-full max-w-6xl rounded-3xl"
        alt="dashboard image"
      />
    </div>
  );
};

export default Home;
