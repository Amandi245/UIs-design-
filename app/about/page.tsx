import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import AboutContact from "./AboutContact";
import AboutCrew from "./AboutCrew";
import AboutFooter from "./AboutFooter";
import AboutGlance from "./AboutGlance";
import AboutPurpose from "./AboutPurpose";
import AboutStory from "./AboutStory";
import styles from "./about.module.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--about-sans",
});
const serif = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--about-serif",
});

export const metadata: Metadata = {
  title: "About | Elevate",
  description:
    "Meet Elevate — designers, storytellers, and strategists creating experiences that inspire, engage, and drive results.",
};

export default function AboutPage() {
  return (
    <div className={`${styles.page} ${sans.variable} ${serif.variable}`}>
      <main>
        <AboutStory />
        <AboutGlance />
        <AboutPurpose />
        <AboutCrew />
        <AboutContact />
      </main>
      <AboutFooter />
    </div>
  );
}
