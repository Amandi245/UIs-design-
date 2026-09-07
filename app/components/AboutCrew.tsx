import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const crew = [
  {
    name: "Lia Turner",
    role: "Creative Director",
    image: "/images/crew-lia.png",
  },
  {
    name: "Liam Rodriguez",
    role: "Design Manager",
    image: "/images/crew-liam.png",
  },
  {
    name: "Ethan Walker",
    role: "Senior Product Designer",
    image: "/images/crew-ethan.png",
  },
  {
    name: "Noah Thompson",
    role: "Brand Designer",
    image: "/images/crew-noah.png",
  },
  {
    name: "Oliver Grant",
    role: "Digital Strategy Specialist",
    image: "/images/crew-oliver.png",
  },
  {
    name: "Maya Chen",
    role: "UI Designer",
    image: "/images/crew-maya.png",
  },
];

const AboutCrew = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-4 md:px-10 md:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-white via-[#F5F360]/55 to-[#F5F360]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-20">
          <h2
            className={`${cormorant.className} text-[64px] leading-none tracking-[-0.03em] text-black sm:text-[88px] md:text-[112px]`}
          >
            <span className="italic">our</span> Crew
          </h2>
          <p
            className={`${dmSans.className} mt-4 text-[14px] text-[#7F7E2C] md:text-[15px]`}
          >
            The minds behind the magic.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {crew.map((member) => (
            <article key={member.name} className="text-left">
              <div className="relative aspect-square overflow-hidden bg-[#F5F360]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3
                className={`${cormorant.className} mt-4 text-[28px] font-semibold leading-tight text-black md:text-[32px]`}
              >
                {member.name}
              </h3>
              <p
                className={`${dmSans.className} mt-1 text-[13px] text-gray-500 md:text-[14px]`}
              >
                {member.role}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <Link
            href="/#contact"
            className={`${dmSans.className} inline-flex h-14 min-w-[280px] items-center justify-center rounded-md bg-gradient-to-b from-[#F8F78A] to-[#F5F360] px-10 text-[18px] font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-[1.03] md:min-w-[340px]`}
          >
            + Lets Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCrew;
