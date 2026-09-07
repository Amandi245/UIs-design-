import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const services = [
  {
    title: "Branding & Strategy",
    details: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Naming & Tagline Creation",
      "Market Research & Audience Analysis",
      "Visual Guidelines & Style Guides",
    ],
  },
  {
    title: "Digital & Web",
    details: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Naming & Tagline Creation",
      "Market Research & Audience Analysis",
      "Visual Guidelines & Style Guides",
    ],
  },
  {
    title: "Creative & Content",
    details: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Naming & Tagline Creation",
      "Market Research & Audience Analysis",
      "Visual Guidelines & Style Guides",
    ],
  },
  {
    title: "Marketing & Promotion",
    details: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Naming & Tagline Creation",
      "Market Research & Audience Analysis",
      "Visual Guidelines & Style Guides",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-white">
      <div className="overflow-hidden border-b border-gray-300 py-3">
        <Marquee speed={70} gradient={false}>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center whitespace-nowrap mr-24"
            >
              <Image
                src="/images/flower.svg"
                alt="Flower"
                width={55}
                height={55}
                className="mr-10"
              />

              <span
                className={`${cormorant.className} text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
              >
                SERVICES
              </span>

              <Image
                src="/images/star.svg"
                alt="Star"
                width={55}
                height={55}
                className="ml-10 mr-10"
              />

              <span
                className={`${cormorant.className} text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
              >
                SERVICES
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="group w-full cursor-pointer border-b border-gray-300 bg-white transition-colors duration-500 hover:bg-[#F5F360]"
          >
            <div className="mx-auto flex h-[180px] max-w-7xl items-center justify-between px-10">
              <div className="w-1/2">
                <h3
                  className={`${dmSans.className} whitespace-nowrap text-[96px] font-[300] leading-[1.2] tracking-[0] text-black transition-all duration-500 group-hover:text-[60px] group-hover:font-[500] group-hover:leading-[1.2]`}
                >
                  {service.title}
                </h3>
              </div>

              <div className="grid w-[45%] grid-flow-col grid-rows-3 gap-x-10 gap-y-0 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {service.details.map((item, i) => (
                  <p
                    key={i}
                    className={`${dmSans.className} text-base font-[300] text-gray-800`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
