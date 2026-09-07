import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Elevate",
  description: "Comprehensive services, exceptional results. Discover Elevate's branding, web development, creative content, and marketing services.",
};

const services = [
  { id: "branding", title: "Branding & Strategy", color: "#FCE88F", ink: "#000", description: "Building impactful brand identities and strategies that connect with audiences and drive growth.", symbol: "⚙" },
  { id: "digital", title: "Digital & Web Development", color: "#D27903", ink: "#fff", description: "Crafting responsive, user-friendly websites and digital solutions that elevate online presence and performance.", symbol: "◎" },
  { id: "creative", title: "Creative & Content", color: "#FEBCFC", ink: "#000", description: "Delivering engaging content and creative visuals that inspire audiences and strengthen brand identity.", symbol: "✦" },
  { id: "marketing", title: "Marketing & Promotion", color: "#005140", ink: "#fff", description: "Driving brand visibility and growth through targeted marketing strategies and impactful promotions.", symbol: "◁" },
];
// The repeated detail copy is preserved from the supplied Figma design.
const details = ["Brand identity design", "Brand storytelling", "Market positioning strategies", "Strategic roadmaps for growth"];
const navigation = [{ label: "about", href: "/about" }, { label: "services", href: "/services" }, { label: "work", href: "/#work" }, { label: "contact", href: "/#contact" }];
const footerLinks = [{ label: "home", href: "/" }, ...navigation.slice(0, 2), { label: "portfolio", href: "/#work" }, navigation[3]];

/** Link bounds use the original 1728 × 5555 Figma coordinates. */
function bounds(x: number, y: number, width: number, height: number): CSSProperties {
  return { left: `${x / 1728 * 100}%`, top: `${y / 5555 * 100}%`, width: `${width / 1728 * 100}%`, height: `${height / 5555 * 100}%` };
}

export default function ServicesPage() {
  return <main className={styles.page}>
    <div className={styles.desktop}>
      {/* Original vector artwork preserves Figma's outlined fonts and filter effects.
          Semantic HTML and real links provide accessible content and interaction. */}
      <Image src="/images/services-desktop.svg" width={1728} height={5555} alt="" aria-hidden="true" preload unoptimized className={styles.artwork}/>
      <header>
        <Link href="/" className={styles.hotspot} style={bounds(55, 60, 145, 48)} aria-label="Elevate home"/>
        <nav aria-label="Main navigation">{navigation.map((link, i) => <Link key={link.label} href={link.href} aria-label={link.label} aria-current={link.label === "services" ? "page" : undefined} className={styles.hotspot} style={bounds([1290, 1380, 1500, 1580][i], 65, [85, 110, 75, 95][i], 46)}/>)}</nav>
      </header>
      <div className={styles.srOnly}><h1>our Services</h1><p>Comprehensive Services, Exceptional Results</p></div>
      <nav aria-label="Explore our services">{services.map((service, i) => <a key={service.id} href={`#${service.id}`} className={styles.hotspot} style={bounds(60 + i * 406, 836, 388, 606)}><span className={styles.srOnly}>{service.title}. {service.description}</span></a>)}</nav>
      {services.map((service, i) => <section key={service.id} id={service.id} aria-labelledby={`${service.id}-title`} className={styles.serviceRegion} style={bounds(0, 1563 + i * 606, 1728, 606)}>
        <div className={styles.srOnly}><h2 id={`${service.id}-title`}>{service.title}</h2><p>{services[0].description}</p><ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>
        <Link href="/#work" className={styles.caseStudy} aria-label={`View ${service.title} case studies`}/>
      </section>)}
      <Link href="/#contact" className={styles.hotspot} style={bounds(489, 4232.65, 750, 125)} aria-label="Lets Talk"/>
      <footer>
        <p className={styles.srOnly}>Elevate Agency helps brands rise above the noise with bold ideas and smart strategies. We craft campaigns that inspire, engage, and drive real results.</p>
        <nav aria-label="Footer navigation">{footerLinks.map((link, i) => <Link key={link.label} href={link.href} aria-label={link.label} className={styles.hotspot} style={bounds(1460, 4680 + i * 75, 220, 70)}/>)}</nav>
        <Link href="/" aria-label="Elevate home" className={styles.hotspot} style={bounds(60, 5270, 720, 245)}/>
        <p className={styles.srOnly}>privacy-policy · terms &amp; conditions</p>
      </footer>
    </div>

    <div className={styles.mobile}>
      <header className={styles.mobileHeader}><Link href="/" className={styles.brand}><Image src="/images/hero-gauge.svg" alt="" width={20} height={20}/>Elevate</Link><nav aria-label="Main navigation">{navigation.map(link => <Link key={link.label} href={link.href} aria-current={link.label === "services" ? "page" : undefined}>{link.label}</Link>)}</nav></header>
      <section className={styles.hero}><Image src="/images/hero-gauge.svg" alt="" width={36} height={36}/><h1><span>our</span>Services</h1><p>Comprehensive Services, Exceptional Results</p></section>
      <nav className={styles.cards} aria-label="Explore our services">{services.map(service => <a key={service.id} href={`#mobile-${service.id}`} style={{ background: service.color, color: service.ink }}><h2>{service.title}</h2><span aria-hidden="true" className={styles.symbol}>{service.symbol}</span><p>{service.description}</p></a>)}</nav>
      {services.map(service => <section key={service.id} id={`mobile-${service.id}`} className={styles.mobileService} style={{ background: service.color, color: service.ink }}><h2>{service.title}</h2><p>{services[0].description}</p><ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul><Link href="/#work">view case studies</Link><span className={styles.detailSymbol} aria-hidden="true">{service.symbol}</span></section>)}
      <footer className={styles.mobileFooter}><div className={styles.cta}><Link href="/#contact"><span aria-hidden="true">✦</span> Lets Talk</Link></div><div className={styles.footerInfo}><div><Image src="/images/footer-logo.svg" alt="" width={40} height={40}/><p>Elevate Agency helps brands rise above the noise with bold ideas and smart strategies. We craft campaigns that inspire, engage, and drive real results.</p></div><nav aria-label="Footer navigation">{footerLinks.map(link => <Link key={link.label} href={link.href}>{link.label}</Link>)}</nav></div><div className={styles.footerBottom}><Link href="/">Elevate</Link><p>privacy-policy<br/>terms &amp; conditions</p></div></footer>
    </div>
  </main>;
}
