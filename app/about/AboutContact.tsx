import Link from "next/link";
import styles from "./about.module.css";

export default function AboutContact() {
  return (
    <section className={styles.contact} aria-label="Start a project">
      <Link href="/#contact" className={styles.talk}>
        <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
          <path d="M21 5Q24-2 27 5L31 16Q32 17 34 18L44 21Q51 24 44 27L33 31Q31 32 30 34L27 44Q24 51 21 44L17 33Q16 31 14 30L4 27Q-3 24 4 21L15 17Q17 16 18 14Z" />
        </svg>
        Lets Talk
      </Link>
    </section>
  );
}
