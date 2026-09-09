"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function ServicesHero() {
  const services = [
    {
      id: 1,
      title: "Branding &\nStrategy",
      description:
        "Building impactful brand identities and strategies that connect with audiences and drive growth",
      bgColor: "bg-[#FDEB8E]",
      textColor: "text-[#1A1A1A]",
      descColor: "text-[#2A2A2A]",
      graphic: (
        <Image
          src="/images/brand1.svg"
          alt="Branding & Strategy"
          width={140}
          height={140}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
        />
      ),
    },
    {
      id: 2,
      title: "Digital & Web\nDevelopment",
      description:
        "Crafting responsive, user-friendly websites and digital solutions that elevate online presence and performance.",
      bgColor: "bg-[#D07000]",
      textColor: "text-white",
      descColor: "text-amber-50/90",
      graphic: (
        <Image
          src="/images/digital2.svg"
          alt="Digital & Web Development"
          width={140}
          height={140}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
        />
      ),
    },
    {
      id: 3,
      title: "Creative &\nContent",
      description:
        "Delivering engaging content and creative visuals that inspire audiences and strengthen brand identity.",
      bgColor: "bg-[#FCB3FF]",
      textColor: "text-[#1A1A1A]",
      descColor: "text-[#2A2A2A]",
      graphic: (
        <Image
          src="/images/content3.svg"
          alt="Creative & Content"
          width={140}
          height={140}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
        />
      ),
    },
    {
      id: 4,
      title: "Marketing &\nPromotion",
      description:
        "Driving brand visibility and growth through targeted marketing strategies and impactful promotions.",
      bgColor: "bg-[#004D3F]",
      textColor: "text-white",
      descColor: "text-emerald-100/90",
      graphic: (
        <Image
          src="/images/marketing4.svg"
          alt="Marketing & Promotion"
          width={140}
          height={140}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
        />
      ),
    },
  ];

  return (
    <section
      className={`relative min-h-screen w-full bg-[#FAFAFA] text-gray-900 overflow-hidden pb-16 ${inter.className}`}
    >
      {/* Background Soft Yellow Radial Glow */}
      <div
        className="absolute top-[-500px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, #F5F360 0%, rgba(245, 243, 96, 0.3) 50%, transparent 70%)",
          filter: "blur(164px)",
        }}
      />

      {/* Built-in Top Navbar */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2.5">
          <Image
            src="/images/hero-gauge.svg"
            alt="Elevate Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
            priority
          />
          <span
            className={`${playfair.className} text-2xl font-normal text-gray-900 tracking-tight`}
          >
            Elevate
          </span>
        </Link>

        <nav className="flex items-center space-x-6 sm:space-x-10 text-sm font-normal text-gray-900">
          <Link href="/about" className="hover:opacity-60 transition-opacity">
            about
          </Link>
          <Link
            href="/services"
            className="text-[#D5DB5C] font-medium hover:opacity-80 transition-opacity"
          >
            services
          </Link>
          <Link href="/#work" className="hover:opacity-60 transition-opacity">
            work
          </Link>
          <Link
            href="/#contact"
            className="hover:opacity-60 transition-opacity"
          >
            contact
          </Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-2 text-center">
        {/* Top Clock/Gauge Icon */}
        <div className="flex justify-center mb-2">
          <Image
            src="/images/hero-gauge.svg"
            alt="Gauge Icon"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
            priority
          />
        </div>

        {/* Header Titles */}
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl md:text-6xl text-[#D5DB5C] font-light tracking-tight">
            our
          </span>
          <h1
            className={`${playfair.className} text-7xl sm:text-8xl md:text-9xl text-[#D5DB5C] tracking-normal font-normal leading-none -mt-2 sm:-mt-3`}
          >
            Services
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto">
          Comprehensive Services, Exceptional Results
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-2xl p-6 sm:p-7 min-h-[460px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm overflow-hidden`}
            >
              {/* Title */}
              <h3
                className={`text-2xl sm:text-[26px] font-normal tracking-tight whitespace-pre-line leading-tight ${service.textColor}`}
              >
                {service.title}
              </h3>

              {/* Icon Graphic - Positioned to the far left */}
              <div className="my-auto py-4 flex items-center justify-start -ml-10git add . sm:-ml-7">
                {service.graphic}
              </div>

              {/* Description */}
              <p
                className={`text-sm sm:text-[14px] leading-relaxed font-light ${service.descColor}`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}