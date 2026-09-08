import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Elevate",
  description:
    "Comprehensive services, exceptional results. Discover Elevate's branding, web development, creative content, and marketing services.",
};

const services = [
  {
    id: "branding",
    title: "Branding & Strategy",
    color: "#FCE88F",
    ink: "#000",
    description:
      "Building impactful brand identities and strategies that connect with audiences and drive growth.",
    symbol: "⚙",
  },
  {
    id: "digital",
    title: "Digital & Web Development",
    color: "#D27903",
    ink: "#fff",
    description:
      "Crafting responsive, user-friendly websites and digital solutions that elevate online presence and performance.",
    symbol: "◎",
  },
  {
    id: "creative",
    title: "Creative & Content",
    color: "#FEBCFC",
    ink: "#000",
    description:
      "Delivering engaging content and creative visuals that inspire audiences and strengthen brand identity.",
    symbol: "✦",
  },
  {
    id: "marketing",
    title: "Marketing & Promotion",
    color: "#005140",
    ink: "#fff",
    description:
      "Driving brand visibility and growth through targeted marketing strategies and impactful promotions.",
    symbol: "◁",
  },
];
const details = [
  "Brand identity design",
  "Brand storytelling",
  "Market positioning strategies",
  "Strategic roadmaps for growth",
];
const navigation = [
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "work", href: "/work" },
  { label: "contact", href: "/#contact" },
];
const footerLinks = [
  { label: "home", href: "/" },
  ...navigation.slice(0, 2),
  { label: "portfolio", href: "/work" },
  navigation[3],
];

function bounds(
  x: number,
  y: number,
  width: number,
  height: number,
): CSSProperties {
  return {
    left: `${(x / 1728) * 100}%`,
    top: `${(y / 5555) * 100}%`,
    width: `${(width / 1728) * 100}%`,
    height: `${(height / 5555) * 100}%`,
  };
}

const hotspot =
  "absolute block rounded focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#55570b] hover:bg-white/[.08]";

function DesktopServices() {
  return (
    <div className="relative hidden aspect-[1728/5555] w-full min-[701px]:block">
      <Image
        src="/images/services-desktop.svg"
        width={1728}
        height={5555}
        alt=""
        aria-hidden="true"
        unoptimized
        className="pointer-events-none block h-auto w-full"
      />
      <header>
        <Link
          href="/"
          className={hotspot}
          style={bounds(55, 60, 145, 48)}
          aria-label="Elevate home"
        />
        <nav aria-label="Main navigation">
          {navigation.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              aria-current={link.label === "services" ? "page" : undefined}
              className={hotspot}
              style={bounds(
                [1290, 1380, 1500, 1580][index],
                65,
                [85, 110, 75, 95][index],
                46,
              )}
            />
          ))}
        </nav>
      </header>
      <div className="sr-only">
        <h1>our Services</h1>
        <p>Comprehensive Services, Exceptional Results</p>
      </div>
      <nav aria-label="Explore our services">
        {services.map((service, index) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className={hotspot}
            style={bounds(60 + index * 406, 836, 388, 606)}
          >
            <span className="sr-only">
              {service.title}. {service.description}
            </span>
          </a>
        ))}
      </nav>
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          aria-labelledby={`${service.id}-title`}
          className="pointer-events-none absolute scroll-mt-4"
          style={bounds(0, 1563 + index * 606, 1728, 606)}
        >
          <div className="sr-only">
            <h2 id={`${service.id}-title`}>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
          <Link
            href="/work"
            className="pointer-events-auto absolute left-[3.472222%] top-[78.217822%] h-[12.211221%] w-[18.865741%] rounded focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#55570b]"
            aria-label={`View ${service.title} case studies`}
          />
        </section>
      ))}
      <Link
        href="/#contact"
        className={hotspot}
        style={bounds(489, 4232.65, 750, 125)}
        aria-label="Lets Talk"
      />
      <footer>
        <p className="sr-only">
          Elevate Agency helps brands rise above the noise with bold ideas and
          smart strategies.
        </p>
        <nav aria-label="Footer navigation">
          {footerLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className={hotspot}
              style={bounds(1460, 4680 + index * 75, 220, 70)}
            />
          ))}
        </nav>
        <Link
          href="/"
          aria-label="Elevate home"
          className={hotspot}
          style={bounds(60, 5270, 720, 245)}
        />
      </footer>
    </div>
  );
}

function MobileServices() {
  return (
    <div className="block min-[701px]:hidden">
      <header className="flex items-center justify-between gap-4 px-5 py-[26px]">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-serif text-[23px]"
        >
          <Image src="/images/hero-gauge.svg" alt="" width={20} height={20} />
          Elevate
        </Link>
        <nav className="flex gap-3 text-xs" aria-label="Main navigation">
          {navigation.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.label === "services" ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <section className="bg-[radial-gradient(ellipse_at_50%_-30%,#f5f36070,transparent_62%)] px-[15px] pb-[55px] pt-[38px] text-center">
        <Image
          src="/images/hero-gauge.svg"
          alt=""
          width={36}
          height={36}
          className="mx-auto mb-6"
        />
        <h1 className="font-serif text-[clamp(60px,15vw,96px)] leading-none tracking-[-3px] text-[#dadc56]">
          <span className="block font-sans text-[48px] tracking-[-1px]">
            our
          </span>
          Services
        </h1>
        <p className="mt-5 text-[13px] text-[#808080]">
          Comprehensive Services, Exceptional Results
        </p>
      </section>
      <nav
        className="grid grid-cols-2 gap-3 px-5 pb-[45px]"
        aria-label="Explore our services"
      >
        {services.map((service) => (
          <a
            key={service.id}
            href={`#mobile-${service.id}`}
            className="relative flex min-h-[260px] flex-col overflow-hidden rounded p-[18px_14px]"
            style={{ background: service.color, color: service.ink }}
          >
            <h2 className="relative z-10 text-[21px] font-normal leading-[1.05]">
              {service.title}
            </h2>
            <span
              aria-hidden="true"
              className="absolute -left-[30px] top-[45px] text-[130px] leading-[1.1] opacity-20"
            >
              {service.symbol}
            </span>
            <p className="relative z-10 mt-auto text-[11px] leading-[1.35]">
              {service.description}
            </p>
          </a>
        ))}
      </nav>
      {services.map((service) => (
        <section
          key={service.id}
          id={`mobile-${service.id}`}
          className="relative scroll-mt-3 overflow-hidden px-[22px] py-[30px]"
          style={{ background: service.color, color: service.ink }}
        >
          <h2 className="mb-[22px] text-[33px] font-normal leading-[1.08]">
            {service.title}
          </h2>
          <p className="max-w-[280px] text-[13px] leading-[1.4]">
            {service.description}
          </p>
          <ul className="relative z-10 my-[26px] grid list-none grid-cols-2 gap-4 border-t border-black/25 pt-[22px] text-sm">
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <Link
            href="/work"
            className="relative z-10 inline-block rounded bg-white px-5 py-3 text-[13px] text-[#111]"
          >
            view case studies
          </Link>
          <span
            className="pointer-events-none absolute -bottom-9 -right-9 text-[180px] opacity-20"
            aria-hidden="true"
          >
            {service.symbol}
          </span>
        </section>
      ))}
      <footer className="bg-[#f5f360]">
        <div className="bg-[linear-gradient(#fff,#f5f360)] px-[30px] pb-[100px] pt-20 text-center">
          <Link
            href="/#contact"
            className="inline-block w-full max-w-[330px] rounded-[5px] border border-[#c4c33e] bg-[linear-gradient(#f5f360,#d9d60d)] p-[15px] text-[26px] text-black shadow-[0_20px_35px_#74720b40]"
          >
            <span className="mr-2.5">✦</span>Lets Talk
          </Link>
        </div>
        <div className="flex justify-between gap-7 px-[22px] pb-[70px] pt-6">
          <div>
            <Image
              src="/images/footer-logo.svg"
              alt=""
              width={40}
              height={40}
            />
            <p className="mt-4 max-w-[260px] text-[13px] leading-[1.5]">
              Elevate Agency helps brands rise above the noise with bold ideas
              and smart strategies. We craft campaigns that inspire, engage, and
              drive real results.
            </p>
          </div>
          <nav
            className="flex flex-col items-end gap-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xl text-[#939236]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-end justify-between border-t border-[#929035] p-[22px]">
          <Link
            href="/"
            className="font-serif text-[17vw] leading-none tracking-[-4px]"
          >
            Elevate
          </Link>
          <p className="text-right text-[9px] leading-[1.8]">
            privacy-policy
            <br />
            terms &amp; conditions
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="w-full bg-white font-sans text-black">
      <DesktopServices />
      <MobileServices />
    </main>
  );
}
