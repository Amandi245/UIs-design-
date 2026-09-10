import Link from "next/link";
import Gauge from "./Gauge";
import styles from "./about.module.css";

export default function AboutStory() {
  return (
    <section className={styles.story} aria-labelledby="story-title">
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label="Elevate home">
          <Gauge />
          <span>Elevate</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/about" aria-current="page">
            about
          </Link>
          <Link href="/services">services</Link>
          <Link href="/work">work</Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </header>
      <div className={styles.storyHeading}>
        <Gauge />
        <h1 id="story-title">
          <span>our</span>
          <strong>Story</strong>
        </h1>
      </div>
      <div className={styles.storyBody}>
        <div className={styles.storyMark}>
          <Gauge />
        </div>
        <div className={styles.storyCopy}>
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
