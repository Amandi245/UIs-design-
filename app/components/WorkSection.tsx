import Image from "next/image";
import Marquee from "react-fast-marquee";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

const works = [
  {
    image: "/images/h5.png",
    title: "Glow Cosmetics Website",
    description: "Responsive web design with immersive product storytelling.",
  },
  {
    image: "/images/h4.png",
    title: "iPhone App UI/UX Design",
    description: "Responsive app design with intuitive product experience.",
  },
  {
    image: "/images/h1.png",
    title: "On-Location Film Production",
    description:
      "Commercial shoot highlighting collaboration and creative direction.",
  },
  {
    image: "/images/h3.png",
    title: "Portrait Photography",
    description: "Professional portrait session with natural lighting.",
  },
  {
    image: "/images/h2.png",
    title: "Macro Photography of Foliage",
    description: "Exploration of nature through macro photography.",
  },
];

const WorkSection = () => {
  return (
    <section className="bg-white pb-20 overflow-hidden">
      <div className="overflow-hidden pt-14 pb-14">
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
                WORK
              </span>

              <Image
                src="/images/star.svg"
                alt="Star"
                width={55}
                height={55}
                className="mx-10"
              />

              <span
                className={`${cormorant.className} text-[128px] font-bold uppercase text-[#D5D5D5] leading-none`}
              >
                WORK
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-10 pt-1 pb-5">
        <div className="flex gap-2 mb-2">
          <div className="w-3/5 relative overflow-hidden rounded">
            <Image
              src={works[0].image}
              alt={works[0].title}
              width={800}
              height={400}
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
              <h3
                className={`${dmSans.className} text-[20px] font-normal leading-[120%] text-[#F5F360] max-w-[180px]`}
              >
                {works[0].title}
              </h3>

              <p
                className={`${dmSans.className} text-[12px] font-normal leading-[150%] text-white text-right max-w-[180px]`}
              >
                {works[0].description}
              </p>
            </div>
          </div>

          <div className="w-2/5 relative overflow-hidden rounded">
            <Image
              src={works[1].image}
              alt={works[1].title}
              width={600}
              height={400}
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
              <h3
                className={`${dmSans.className} text-[20px] font-medium leading-[120%] text-[#F5F360] max-w-[180px]`}
              >
                {works[1].title}
              </h3>

              <p
                className={`${dmSans.className} text-[12px] font-normal leading-[150%] text-white text-right max-w-[180px]`}
              >
                {works[1].description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden mb-2 rounded">
          <Image
            src={works[2].image}
            alt={works[2].title}
            width={1200}
            height={650}
            className="w-full h-[450px] object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
            <h3
              className={`${dmSans.className} text-[20px] font-medium leading-[120%] text-[#F5F360] max-w-[220px]`}
            >
              {works[2].title}
            </h3>

            <p
              className={`${dmSans.className} text-[12px] font-normal leading-[150%] text-white text-right max-w-[250px]`}
            >
              {works[2].description}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-2/5 relative overflow-hidden rounded">
            <Image
              src={works[3].image}
              alt={works[3].title}
              width={600}
              height={400}
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
              <h3
                className={`${dmSans.className} text-[20px] font-medium leading-[120%] text-[#F5F360] max-w-[180px]`}
              >
                {works[3].title}
              </h3>

              <p
                className={`${dmSans.className} text-[12px] font-normal leading-[150%] text-white text-right max-w-[180px]`}
              >
                {works[3].description}
              </p>
            </div>
          </div>

          <div className="w-3/5 relative overflow-hidden rounded">
            <Image
              src={works[4].image}
              alt={works[4].title}
              width={800}
              height={400}
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white">
              <h3
                className={`${dmSans.className} text-[20px] font-medium leading-[120%] text-[#F5F360] max-w-[180px]`}
              >
                {works[4].title}
              </h3>

              <p
                className={`${dmSans.className} text-[12px] font-normal leading-[150%] text-white text-right max-w-[180px]`}
              >
                {works[4].description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#F5F360] hover:bg-yellow-300 transition duration-300 px-10 py-3 rounded-md font-medium text-black">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
