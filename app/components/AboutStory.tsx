import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

function GaugeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M91.8503 42.2503C90.0747 19.9711 72.0275 1.92374 49.7497 0.149689C21.4415 -2.10592 -2.10592 21.4415 0.149689 49.7497C1.92535 72.0275 19.9726 90.0747 42.2503 91.8503C70.5585 94.1059 94.1059 70.5585 91.8503 42.2503ZM88.8772 48.1796C87.8176 69.5066 70.781 87.1001 49.4953 88.7928C23.0759 90.8951 1.10347 68.9225 3.20562 42.5033C4.89845 21.2176 22.4918 4.18078 43.8188 3.11973C55.9566 2.51562 67.0764 6.98533 75.2397 14.589L49.9644 39.8659H41.3993C40.553 39.8659 39.866 40.5528 39.866 41.3991V50.5991C39.866 51.4454 40.553 52.1324 41.3993 52.1324H50.5993C51.4456 52.1324 52.1325 51.4454 52.1325 50.5991V42.0341L77.408 16.7587C85.0116 24.9222 89.4813 36.0418 88.8772 48.1796Z"
        fill="#F5F360"
      />
    </svg>
  );
}

const AboutStory = () => {
  return (
    <section className="relative z-10 bg-transparent text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
        <GaugeMark className="mb-8 h-12 w-12 md:mb-10 md:h-14 md:w-14" />

        <h1 className="flex flex-col items-center text-center text-[#F5F360]">
          <span
            className={`${dmSans.className} text-[26px] font-normal lowercase tracking-[-0.02em] md:text-[34px]`}
          >
            our
          </span>
          <span
            className={`${cormorant.className} mt-1 text-[88px] font-semibold leading-[0.85] tracking-[-0.04em] sm:text-[120px] md:text-[156px]`}
          >
            Story
          </span>
        </h1>
      </div>

      {/* Figma split: gauge | copy */}
      <div className="border-t border-[#333333]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative h-[320px] overflow-hidden border-[#333333] sm:h-[400px] md:h-[520px] md:border-r">
            <GaugeMark className="absolute left-[-12%] top-1/2 aspect-square h-[118%] w-auto max-w-none -translate-y-1/2" />
          </div>

          <div
            className={`${dmSans.className} flex flex-col justify-center gap-10 px-8 py-14 text-[15px] font-normal leading-[1.7] text-[#C8C8C8] sm:px-12 md:gap-12 md:px-16 md:py-20 md:text-[17px] md:leading-[1.75]`}
          >
            <p>
              We&apos;re a team of designers, storytellers, and strategists who
              believe creativity has the power to move people and transform
              brands. At Elevate, we turn bold ideas into experiences that
              inspire, engage, and deliver results.
            </p>
            <p>
              Founded with the vision of bringing fresh, human-centered design
              into the digital world, we started as a small group of creatives
              with big dreams. Today, we partner with brands across industries
              helping them stand out, connect deeply with their audiences, and
              grow with purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
