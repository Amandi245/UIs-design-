import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
});

const Footer = () => {
  return (
    <footer className="bg-[#F5F360] text-black border-t border-black/30 pt-24 pb-0">
      <div className="mx-auto flex max-w-7xl">
        <div className="w-[80%] border-r border-black/30 px-10 py-12">
          <Image
            src="/images/footer-logo.svg"
            alt="Logo"
            width={52}
            height={52}
            className="mb-6"
          />

          <p className={`${dmSans.className} max-w-100 text-[18px] leading-8`}>
            Elevate Agency helps brands rise above the
            <br />
            noise with bold ideas and smart strategies.
            <br />
            We craft campaigns that inspire, engage,
            <br />
            and drive real results.
          </p>
        </div>

        <div className="ml-auto flex w-[20%] justify-end pl-0 pr-0 py-12">
          <div className="flex w-full flex-col items-end gap-3 text-right">
            <Link
              href="/"
              className={`${dmSans.className} text-[36px] text-[#7F7E2C] transition-colors hover:text-black`}
            >
              home
            </Link>

            <Link
              href="/about"
              className={`${dmSans.className} text-[36px] text-[#7F7E2C] transition-colors hover:text-black`}
            >
              about
            </Link>

            <Link
              href="/services"
              className={`${dmSans.className} text-[36px] text-[#7F7E2C] transition-colors hover:text-black`}
            >
              services
            </Link>

            <Link
              href="/portfolio"
              className={`${dmSans.className} text-[36px] text-[#7F7E2C] transition-colors hover:text-black`}
            >
              portfolio
            </Link>

            <Link
              href="/contact"
              className={`${dmSans.className} text-[36px] text-[#7F7E2C] transition-colors hover:text-black`}
            >
              contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/30">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-10 py-8">
          <h2 className={`${cormorant.className} text-[256px] leading-[0.85]`}>
            Elevate
          </h2>

          <div
            className={`${dmSans.className} self-end text-right text-[14px] leading-5 pb-4`}
          >
            <button
              type="button"
              className="block w-full text-right transition-colors hover:text-gray-800"
            >
              Privacy-policy
            </button>
            <button
              type="button"
              className="block w-full text-right transition-colors hover:text-black"
            >
              terms & conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
