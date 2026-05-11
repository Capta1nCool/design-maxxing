export const Navbar = () => {
  const links = [
    {
      href: "#",
      title: "Guide",
    },

    {
      href: "#",
      title: "Docs",
    },

    {
      href: "#",
      title: "Pricing",
    },
  ];

  return (
    <div className="flex justify-between">
      <a href="#">
        <img
          src="./finta-logo-light.svg"
          alt="logo"
          width={60}
          height={60}
          draggable={false}
        />
      </a>

      <div className="flex gap-8 items-center">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="text-black font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </a>
        ))}

        <button className="bg-[#2579F4] text-white px-4 py-2 rounded-lg shadow-lg text-shadow-md tracking-wide cursor-pointer hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};
