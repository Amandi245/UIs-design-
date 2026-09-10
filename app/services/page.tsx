import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import ServicesHero from "./ServicesHero";
import ServiceDetails from "./ServiceDetails";
import ServicesContact from "./ServicesContact";
import ServicesFooter from "./ServicesFooter";
import styles from "./services.module.css";
const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--services-sans",
});
const serif = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--services-serif",
});
export const metadata: Metadata = {
  title: "Services | Elevate",
  description:
    "Branding, digital development, creative content, and marketing. Comprehensive Services, Exceptional Results.",
};
export default function ServicesPage() {
  return (
    <div className={`${styles.page} ${sans.variable} ${serif.variable}`}>
      <main>
        <ServicesHero />
        <ServiceDetails />
        <ServicesContact />
      </main>
      <ServicesFooter />
    </div>
  );
}
