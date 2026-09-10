import Image from "next/image";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
});

const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="relative min-h-[900px] overflow-hidden bg-white py-24"
      >
        {/* Yellow glow */}
        <div
          className="
      pointer-events-none
      absolute left-1/2 -translate-x-1/2
      w-[70rem] h-auto aspect-square top-100
      rounded-full
      bg-[#F5F360]
      opacity-100
      blur-[35px]
    "
        />

        <div className="relative z-10 mx-auto flex min-h-[750px] max-w-7xl flex-col items-center px-10">
          {/* Star + Heading */}
          <div className="flex flex-col items-center gap-20">
            <Image
              src="/images/star.svg"
              alt="Star"
              width={64}
              height={64}
              className="shrink-0"
            />

            <h2
              className={`${cormorant.className}  mt-auto text-center text-[110px] leading-none tracking-[-0.02em] text-black md:text-[176px]`}
            >
              Say Hello
            </h2>
          </div>

          {/* Intro text */}
          <div className="mt-40 text-center font-bold">
            <p className={`${dmSans.className} text-[14px] text-black`}>
              Got an idea in mind?
            </p>

            <p className={`${dmSans.className} text-[14px] text-black`}>
              Let&apos;s turn it into something amazing together.
            </p>
          </div>

          {/* Vertical line */}
          <div className="mt-8 h-16 w-px bg-gray-500" />

          {/* Contact details pushed to bottom */}
          <div
            className={`${dmSans.className} mt-auto grid w-full grid-cols-1 gap-8 pb-4 text-center text-[14px] text-[#7F7E2C] md:grid-cols-3 md:gap-24`}
          >
            <p>elevate.info@gmail.com</p>

            <p>
              123 Creative Street,
              <br />
              Innovation City, CA 90210,
              <br />
              United States
            </p>

            <p>+123 45 678 91022</p>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.9) 50%,rgba(0,0,0,0.9) 60%,rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 pb-20">
          <form className="relative z-10  rounded-lg border border-[#2A2A2A] bg-[#151515] p-6 md:p-10 ">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-1">
                <label
                  className={`${dmSans.className} mb-3 block text-sm font-medium text-[#F5F360]`}
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Pietro Schirano"
                  className={`${dmSans.className} h-14 w-full rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 text-white outline-none placeholder:text-[#777] focus:border-[#F5F360]`}
                />
              </div>

              <div className="flex-1">
                <label
                  className={`${dmSans.className} mb-3 block text-sm font-medium text-[#F5F360]`}
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="pietro.schirano@gmail.com"
                  className={`${dmSans.className} h-14 w-full rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 text-white outline-none placeholder:text-[#777] focus:border-[#F5F360]`}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                className={`${dmSans.className} mb-3 block text-sm font-medium text-[#F5F360]`}
              >
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Message Here"
                className={`${dmSans.className} w-full resize-none rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 py-4 text-white outline-none placeholder:text-[#777] focus:border-[#F5F360]`}
              />
            </div>
          </form>

          <div className="relative z-20 mt-8 flex justify-center">
            <button
              type="button"
              className={`${dmSans.className} h-14 w-[180px] rounded-md bg-[#F5F360] text-[18px] font-medium text-black transition-all duration-300 hover:scale-105`}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
