import { Cormorant_Garamond } from "next/font/google";
import Navbar from "./Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

const HeroSection = () => {
  return (
    <section className="relative h-svh w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="relative z-30">
        <Navbar />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-30 z-20">
        <h1
          className={`${cormorant.className} text-[240px] font-bold leading-none text-[#F5F360]`}
        >
          Elevate
        </h1>
        <p className="mt-2 text-5xl font-normal text-white">
          Ideas{" "}
          <span className=" mx-3 text-base text-[#F5F360] font-normal align-middle">
            into
          </span>{" "}
          Experiences.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
