import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const AboutGlance = () => {
  return (
    <section className="bg-white px-6 pb-8 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <h2
          className={`${cormorant.className} mb-14 text-center text-[36px] leading-tight text-black sm:text-[48px] md:mb-20 md:text-[56px]`}
        >
          a quick glance at <em className="italic font-semibold">Elevate</em>
        </h2>

        <div className="relative mx-auto max-w-4xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F360] opacity-70 blur-[70px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-6 inset-y-8 rotate-[-6deg] rounded-sm bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:inset-x-10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-8 inset-y-6 rotate-[5deg] rounded-sm bg-[#F5F360] shadow-lg md:inset-x-14"
          />

          <div className="relative rotate-[-1.5deg] overflow-hidden rounded-sm bg-white p-2 shadow-[0_24px_60px_rgba(0,0,0,0.18)] md:p-3">
            <Image
              src="/images/team-group.png"
              alt="The Elevate team gathered outdoors"
              width={1200}
              height={700}
              className="h-[240px] w-full object-cover sm:h-[340px] md:h-[420px]"
            />
          </div>
        </div>

        <div className="mt-14 flex justify-center md:mt-16">
          <Image
            src="/images/flower.svg"
            alt=""
            width={48}
            height={48}
            className="h-10 w-10 md:h-12 md:w-12"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGlance;
