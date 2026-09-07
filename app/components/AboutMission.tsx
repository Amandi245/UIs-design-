import Image from "next/image";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const items = [
  {
    title: "Mission",
    body: "To craft immersive, meaningful, and impactful creative solutions that elevate brands and spark genuine connections.",
  },
  {
    title: "Vision",
    body: "A world where creativity shapes culture, drives innovation, and helps businesses make a positive impact.",
  },
];

const AboutMission = () => {
  return (
    <section className="bg-white px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-20">
        {items.map((item) => (
          <div key={item.title} className="text-center md:text-left">
            <h3
              className={`${cormorant.className} relative mb-6 inline-block text-[42px] leading-none text-black md:text-[56px]`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-[-10px] top-[55%] -z-10 h-[0.45em] -translate-y-1/2 bg-[#F5F360]"
              />
              {item.title}
            </h3>
            <p
              className={`${dmSans.className} max-w-md text-[15px] leading-7 text-black md:text-[16px] md:leading-8`}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center md:mt-24">
        <Image
          src="/images/star.svg"
          alt=""
          width={36}
          height={36}
          className="h-8 w-8 md:h-9 md:w-9"
        />
      </div>
    </section>
  );
};

export default AboutMission;
