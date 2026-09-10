"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const links = [
  { href: "/about", label: "about" },
  { href: "/services", label: "services" },
  { href: "/work", label: "work" },
  { href: "/#contact", label: "contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
      <Link
        href="/"
        aria-label="Elevate home"
        className="flex items-center gap-3"
      >
        {isAbout ? (
          <>
            <Image
              src="/images/hero-gauge.svg"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 md:h-9 md:w-9"
              priority
            />
            <span
              className={`${cormorant.className} text-[28px] font-medium leading-none text-white md:text-[32px]`}
            >
              Elevate
            </span>
          </>
        ) : (
          <Image
            src="/images/logo2.png"
            alt="Elevate"
            width={180}
            height={60}
            priority
            className="h-12 w-auto md:h-16"
          />
        )}
      </Link>

      <ul
        className={`${dmSans.className} flex gap-5 text-[12px] font-normal lowercase text-white md:gap-10 md:text-[13px]`}
      >
        {links.map((link) => {
          const isActive = link.href === "/about" && pathname === "/about";

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`duration-300 hover:text-[#F5F360] ${
                  isActive ? "text-[#F5F360]" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
