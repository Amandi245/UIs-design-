import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--about-serif",
});

const serif = "font-[family-name:var(--about-serif)]";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export const metadata: Metadata = {
  title: "About | Elevate",
  description:
    "Meet Elevate — designers, storytellers, and strategists creating experiences that inspire, engage, and drive results.",
};

const crew = [
  ["Ava Carter", "Creative Director", "team-maya"],
  ["Liam Rodriguez", "Brand Strategist", "team-liam"],
  ["Ethan Walker", "Motion Graphics Artist", "team-oliver"],
  ["Noah Thompson", "Web Developer", "team-ethan"],
  ["Oliver Grant", "Digital Marketing Specialist", "team-noah"],
  ["Maya Chen", "UX/UI Designer", "team-lia"],
];

function Gauge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3.2" />
      <path d="M50 50 84 16" stroke="currentColor" strokeWidth="3.2" />
      <rect x="43" y="43" width="13" height="13" rx="1.8" fill="currentColor" />
    </svg>
  );
}

function Story() {
  return (
    <section
      className="relative bg-black text-[#f5f55b] before:pointer-events-none before:absolute before:-top-[13vw] before:left-[16%] before:h-[18vw] before:w-[68%] before:bg-[radial-gradient(ellipse,#dfe35b80,transparent_70%)] before:blur-[2.7vw]"
      aria-labelledby="story-title"
    >
      <header className="relative flex h-20 items-center justify-between px-[22px] min-[601px]:h-[9.8vw] min-[601px]:px-[3.45vw]">
        <Link
          href="/"
          className={`${focus} flex items-center gap-2 no-underline`}
          aria-label="Elevate home"
        >
          <Gauge className="h-5 w-5" />
          <span
            className={`${serif} text-[23px] text-[#e2e2d7] min-[601px]:text-[1.85vw]`}
          >
            Elevate
          </span>
        </Link>
        <nav
          className="flex gap-[13px] text-xs text-[#bdbdbd] min-[601px]:gap-[1.5vw] min-[601px]:text-[1.45vw]"
          aria-label="Main navigation"
        >
          <Link href="/about">about</Link>
          <Link href="/services">services</Link>
          <Link href="/work">work</Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </header>
      <div className="flex h-[340px] flex-col items-center pt-8 min-[601px]:h-[42.2vw] min-[601px]:pt-[4.1vw]">
        <Gauge className="mb-[22px] h-[30px] w-[30px] text-[#afb32e] min-[601px]:mb-[2.4vw] min-[601px]:h-[3.6vw] min-[601px]:w-[3.6vw]" />
        <h1
          id="story-title"
          className="flex flex-col items-center text-[#d3d64e]"
        >
          <span className="text-[60px] leading-[.95] min-[601px]:text-[7.8vw]">
            our
          </span>
          <strong
            className={`${serif} text-[110px] font-bold leading-[.94] tracking-[-5px] min-[601px]:text-[13.2vw]`}
          >
            Story
          </strong>
        </h1>
      </div>
      <div className="grid grid-cols-[24%_76%] border-t-2 border-[#343434] min-[601px]:h-[37.1vw] min-[601px]:grid-cols-[35.55%_64.45%]">
        <div className="relative overflow-hidden border-r-2 border-[#343434]">
          <Gauge className="absolute left-[-160px] top-[50px] h-[250px] w-[250px] min-[601px]:left-[-8.9vw] min-[601px]:top-[4.8vw] min-[601px]:h-[37.5vw] min-[601px]:w-[37.5vw]" />
        </div>
        <div className="flex flex-col gap-[22px] px-[22px] py-7 text-sm leading-[1.5] text-[#898989] min-[601px]:gap-[2.9vw] min-[601px]:px-[3.8vw] min-[601px]:py-[4.25vw] min-[601px]:text-[1.87vw]">
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
    </section>
  );
}

function QuickGlance() {
  return (
    <section
      className="relative h-[420px] pt-[38px] text-center min-[601px]:h-[78.1vw] min-[601px]:pt-[5.7vw]"
      aria-labelledby="glance-title"
    >
      <div className="pointer-events-none absolute left-1/2 top-[2%] h-[81%] w-[56%] -translate-x-1/2 bg-[radial-gradient(ellipse_closest-side,#f5f55b_0%,#f5f55b_40%,rgb(245_245_91_/_85%)_57%,rgb(245_245_91_/_35%)_76%,transparent_100%)]" />
      <h2
        id="glance-title"
        className="relative text-[27px] min-[601px]:text-[5.55vw]"
      >
        a quick glance at <em className={serif}>Elevate</em>
      </h2>
      <div className="relative mx-auto mt-[38px] h-[48vw] w-[82vw] min-[601px]:mt-[7.3vw] min-[601px]:h-[35.2vw] min-[601px]:w-[64.6vw]">
        <Image
          src="/images/office.png"
          alt=""
          fill
          className="rotate-[-4deg] object-cover shadow-[0_2vw_2.7vw_#0003]"
        />
        <Image
          src="/images/team-group.png"
          alt="The Elevate team gathered together outdoors"
          fill
          className="rotate-[3.4deg] object-cover shadow-[0_2vw_2.7vw_#0003]"
        />
      </div>
      <Image
        className="absolute bottom-[29px] left-[calc(50%-19px)] h-[38px] w-[38px] min-[601px]:bottom-[7.8vw] min-[601px]:left-[46.85%] min-[601px]:h-[6.3vw] min-[601px]:w-[6.3vw]"
        src="/images/flower.svg"
        alt=""
        width={100}
        height={100}
      />
    </section>
  );
}

function Purpose() {
  return (
    <section
      className="relative h-[300px] min-[601px]:h-[35.1vw]"
      aria-label="Our mission and vision"
    >
      <div className="grid grid-cols-2 gap-6 bg-[linear-gradient(#f5f55b_0_48px,transparent_48px)] px-[22px] min-[601px]:gap-[10.3vw] min-[601px]:bg-[linear-gradient(#f5f55b_0_7.6vw,transparent_7.6vw)] min-[601px]:px-[3.45vw]">
        <article>
          <h2
            className={`${serif} text-[34px] leading-[48px] min-[601px]:text-[5.5vw] min-[601px]:leading-[7.6vw]`}
          >
            Mission
          </h2>
          <p className="pt-4 text-[13px] leading-[1.4] min-[601px]:pt-[1.9vw] min-[601px]:text-[1.87vw]">
            To craft innovative, meaningful, and impactful creative solutions
            that elevate brands and spark genuine connections.
          </p>
        </article>
        <article>
          <h2
            className={`${serif} text-[34px] leading-[48px] min-[601px]:text-[5.5vw] min-[601px]:leading-[7.6vw]`}
          >
            Vision
          </h2>
          <p className="pt-4 text-[13px] leading-[1.4] min-[601px]:pt-[1.9vw] min-[601px]:text-[1.87vw]">
            A world where creativity shapes culture, drives innovation, and
            helps businesses make a positive impact.
          </p>
        </article>
      </div>
      <Image
        className="absolute bottom-[25px] left-[calc(50%-21px)] h-[42px] w-[42px] min-[601px]:left-[46.6%] min-[601px]:top-[22.9vw] min-[601px]:h-[6.8vw] min-[601px]:w-[6.8vw]"
        src="/images/star.svg"
        alt=""
        width={112}
        height={112}
      />
    </section>
  );
}

function Crew() {
  return (
    <section
      className="pb-[45px] pt-3 min-[601px]:pb-[7.4vw] min-[601px]:pt-[1vw]"
      aria-labelledby="crew-title"
    >
      <h2
        id="crew-title"
        className="text-center text-[36px] min-[601px]:text-[5.55vw]"
      >
        our <em className={serif}>Crew</em>
      </h2>
      <p className="text-center text-sm text-[#aaa] min-[601px]:text-[1.87vw]">
        The minds behind the magic.
      </p>
      <div className="mx-auto mt-[38px] grid w-[86%] grid-cols-2 gap-x-[18px] gap-y-6 min-[601px]:mt-[7vw] min-[601px]:w-[74.7%] min-[601px]:grid-cols-3 min-[601px]:gap-x-[3.85vw]">
        {crew.map(([name, role, image]) => (
          <article key={name}>
            <div className="relative aspect-[387/490] overflow-hidden rounded-[3px] bg-[#f5f55b]">
              <Image
                src={`/images/${image}.png`}
                alt={name}
                fill
                className="!bottom-0 !top-auto !h-[94%] object-contain object-bottom"
              />
            </div>
            <h3
              className={`${serif} mt-2 text-[17px] font-bold min-[601px]:mt-[1.35vw] min-[601px]:text-[1.9vw]`}
            >
              {name}
            </h3>
            <p className="text-[11px] text-[#b9b9b9] min-[601px]:text-[1.4vw]">
              {role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,#fff_0%,#fafa9b_20%,#f5f55b_43%)] pt-[60px] min-[601px]:pt-[14vw]">
      <div className="flex justify-center">
        <Link
          href="/#contact"
          className={`${focus} flex h-[54px] w-2/3 items-center justify-center gap-3 rounded-[5px] border border-[#d5d83c] bg-[linear-gradient(#f2f252,#dce00b)] text-[24px] shadow-[0_2.1vw_3.5vw_#64600b3b] min-[601px]:h-[7.3vw] min-[601px]:w-[43.4vw] min-[601px]:text-[3.5vw]`}
        >
          <span aria-hidden="true">✦</span> Lets Talk
        </Link>
      </div>
      <div className="flex justify-between gap-5 px-[22px] pb-[60px] pt-[95px] min-[601px]:min-h-[50.9vw] min-[601px]:px-[3.45vw] min-[601px]:pb-[10.7vw] min-[601px]:pt-[19.4vw]">
        <div>
          <Gauge className="mb-[15px] h-9 w-9 text-[#353914] min-[601px]:h-[5.5vw] min-[601px]:w-[5.5vw]" />
          <p className="max-w-[230px] text-xs text-[#393b24] min-[601px]:max-w-none min-[601px]:text-[1.87vw]">
            Elevate Agency helps brands rise above the noise with bold ideas and
            smart strategies. We craft campaigns that inspire, engage, and drive
            real results.
          </p>
        </div>
        <nav
          className="flex flex-col items-end gap-[6px] text-[19px] text-[#97973d] min-[601px]:gap-[.55vw] min-[601px]:text-[2.9vw]"
          aria-label="Footer navigation"
        >
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/services">services</Link>
          <Link href="/work">portfolio</Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </div>
      <div className="flex items-end justify-between border-t border-[#626620] px-[22px] py-[18px] pb-6 min-[601px]:px-[3.45vw] min-[601px]:py-[1.7vw] min-[601px]:pb-[2.6vw]">
        <Link
          href="/"
          className={`${serif} text-[17vw] leading-none min-[601px]:text-[14.7vw]`}
        >
          Elevate
        </Link>
        <div className="text-right text-[9px] leading-[1.8] text-[#484b28] min-[601px]:text-[1.45vw]">
          privacy-policy
          <br />
          terms &amp; conditions
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <main
      className={`w-full overflow-hidden bg-white text-[#080808] [font-family:Arial,Helvetica,sans-serif] ${editorial.variable}`}
    >
      <Story />
      <QuickGlance />
      <Purpose />
      <Crew />
      <Footer />
    </main>
  );
}
