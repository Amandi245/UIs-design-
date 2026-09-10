import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPurpose() {
  return (
    <section className={styles.purpose} aria-label="Our mission and vision">
      <div className={styles.purposeGrid}>
        <article>
          <h2>Mission</h2>
          <p>
            To craft innovative, meaningful, and impactful creative solutions
            that elevate brands and spark genuine connections.
          </p>
        </article>
        <article>
          <h2>Vision</h2>
          <p>
            A world where creativity shapes culture, drives innovation, and
            helps businesses make a positive impact.
          </p>
        </article>
      </div>
      <Image
        className={styles.star}
        src="/images/star.svg"
        alt=""
        width={112}
        height={112}
      />
    </section>
  );
}
