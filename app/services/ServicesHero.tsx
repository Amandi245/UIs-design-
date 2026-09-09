import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
const navigation = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "work", href: "/work" },
  { label: "contact", href: "/contact" },
];

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-14 text-black md:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,#f5f36080,transparent_68%)] blur-2xl" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-5 py-6 md:px-12 md:py-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl"
          aria-label="Elevate home"
        >
          <Image src="/images/hero-gauge.svg" alt="" width={22} height={22} />

          <span className={`${cormorant.className} text-2xl`}>Elevate</span>
        </Link>

        {/* Navigation */}
        <nav
          className="flex gap-4 text-xs lowercase md:gap-10 md:text-sm"
          aria-label="Main navigation"
        >
          {navigation.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#8c8d25]"
              aria-current={link.label === "services" ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 pt-12 text-center md:pt-20">
        {/* Gauge Icon */}
        <Image
          src="/images/hero-gauge.svg"
          alt=""
          width={46}
          height={46}
          className="mb-8 opacity-80"
        />

        {/* Heading */}
        <h1 className="leading-[.82] text-[#dadd55]">
          <span className="block font-sans text-5xl tracking-[-.08em] md:text-8xl">
            our
          </span>

          <strong
            className={`${cormorant.className} block text-8xl font-semibold tracking-[-.08em] md:text-[13vw]`}
          >
            Services
          </strong>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-md text-sm leading-6 text-black/50 md:text-base">
          Comprehensive services, exceptional results.
        </p>
      </div>
    </section>
  );
}
