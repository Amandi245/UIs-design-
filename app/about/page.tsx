import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import styles from "./about.module.css";
const editorial = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], variable: "--about-serif" });
export const metadata: Metadata = { title: "About | Elevate", description: "Meet Elevate — designers, storytellers, and strategists creating experiences that inspire, engage, and drive results." };
const crew = [
  { name: "Ava Carter", role: "Creative Director", image: "team-maya" },
  { name: "Liam Rodriguez", role: "Brand Strategist", image: "team-liam" },
  { name: "Ethan Walker", role: "Motion Graphics Artist", image: "team-oliver" },
  { name: "Noah Thompson", role: "Web Developer", image: "team-ethan" },
  { name: "Oliver Grant", role: "Digital Marketing Specialist", image: "team-noah" },
  { name: "Maya Chen", role: "UX/UI Designer", image: "team-lia" },
];
function Gauge({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true"><circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3.2"/><path d="M50 50 84 16" stroke="currentColor" strokeWidth="3.2"/><rect x="43" y="43" width="13" height="13" rx="1.8" fill="currentColor"/></svg>;
}
export default function AboutPage() {
  return <main className={`${styles.page} ${editorial.variable}`}>
    <section className={styles.story} aria-labelledby="story-title">
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Elevate home"><Gauge/><span>Elevate</span></Link>
        <nav aria-label="Main navigation"><Link href="/about" aria-current="page">about</Link><Link href="/services">services</Link><Link href="/#work">work</Link><Link href="/#contact">contact</Link></nav>
      </header>
      <div className={styles.hero}><Gauge className={styles.heroGauge}/><h1 id="story-title"><span>our</span><strong>Story</strong></h1></div>
      <div className={styles.storyDetails}>
        <div className={styles.largeGauge}><Gauge/></div>
        <div className={styles.storyCopy}>
          <p>We&apos;re a team of designers, storytellers, and strategists who believe creativity has the power to move people and transform brands. At Elevate, we turn bold ideas into experiences that inspire, engage, and deliver results.</p>
          <p>Founded with the vision of bringing fresh, human-centered design into the digital world, we started as a small group of creatives with big dreams. Today, we partner with brands across industries helping them stand out, connect deeply with their audiences, and grow with purpose.</p>
        </div>
      </div>
    </section>
    <section className={styles.glance} aria-labelledby="glance-title">
      <h2 id="glance-title">a quick glance at <em>Elevate</em></h2>
      <div className={styles.photoStack}>
        <div className={styles.backPhoto}><Image src="/images/office.png" alt="" fill sizes="65vw"/></div>
        <div className={styles.frontPhoto}><Image src="/images/team-group.png" alt="The Elevate team gathered together outdoors" fill sizes="(max-width: 600px) 84vw, 65vw"/></div>
      </div>
      <Image className={styles.flower} src="/images/flower.svg" alt="" width={100} height={100}/>
    </section>
    <section className={styles.purpose} aria-label="Our mission and vision">
      <div className={styles.purposeGrid}>
        <article><h2>Mission</h2><p>To craft innovative, meaningful, and impactful creative solutions that elevate brands and spark genuine connections.</p></article>
        <article><h2>Vision</h2><p>A world where creativity shapes culture, drives innovation, and helps businesses make a positive impact.</p></article>
      </div>
      <Image className={styles.star} src="/images/star.svg" alt="" width={112} height={112}/>
    </section>
    <section className={styles.crew} aria-labelledby="crew-title">
      <h2 id="crew-title">our <em>Crew</em></h2><p className={styles.crewIntro}>The minds behind the magic.</p>
      <div className={styles.crewGrid}>{crew.map(member => <article key={member.name}>
        <div className={styles.portrait}><Image src={`/images/${member.image}.png`} alt={member.name} fill sizes="(max-width: 600px) 42vw, 23vw"/></div>
        <h3>{member.name}</h3><p>{member.role}</p>
      </article>)}</div>
    </section>
    <footer className={styles.footer}>
      <div className={styles.cta}><Link href="/#contact"><span aria-hidden="true">✦</span> Lets Talk</Link></div>
      <div className={styles.footerMain}>
        <div className={styles.footerCopy}><Gauge/><p>Elevate Agency helps brands rise above the<br className={styles.desktopBreak}/> noise with bold ideas and smart strategies.<br className={styles.desktopBreak}/> We craft campaigns that inspire, engage, and<br className={styles.desktopBreak}/> drive real results.</p></div>
        <nav aria-label="Footer navigation"><Link href="/">home</Link><Link href="/about">about</Link><Link href="/services">services</Link><Link href="/#work">portfolio</Link><Link href="/#contact">contact</Link></nav>
      </div>
      <div className={styles.footerBottom}><Link href="/" className={styles.wordmark}>Elevate</Link><div className={styles.legal}><span>privacy-policy</span><span>terms &amp; conditions</span></div></div>
    </footer>
  </main>;
}
