import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import WorkContact from "./WorkContact";
import WorkFooter from "./WorkFooter";
import WorkGallery from "./WorkGallery";
import WorkHero from "./WorkHero";
import styles from "./work.module.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--work-sans",
});
const serif = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--work-serif",
});

export const metadata: Metadata = {
  title: "Work | Elevate",
  description: "Explore selected Elevate case studies and creative work.",
};

export default function WorkPage() {
  return (
    <div className={`${styles.page} ${sans.variable} ${serif.variable}`}>
      <main>
        <WorkHero />
        <WorkGallery />
        <WorkContact />
      </main>
      <WorkFooter />
    </div>
  );
}
