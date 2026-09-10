import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.css";

export default function WorkHero() {
  return (
    <section className={styles.hero} aria-labelledby="work-title">
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label="Elevate home">
          <Image
            src="/images/hero-gauge.svg"
            alt=""
            width={26}
            height={26}
            priority
          />
          <span>Elevate</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/about">about</Link>
          <Link href="/services">services</Link>
          <Link href="/work" aria-current="page">
            work
          </Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </header>
      <div className={styles.heading}>
        <Image
          className={styles.gauge}
          src="/images/hero-gauge.svg"
          alt=""
          width={62}
          height={62}
          priority
        />
        <h1 id="work-title">
          <span>our</span>
          <strong>Work</strong>
        </h1>
        <p>Comprehensive case-studies, Exceptional Results</p>
        <span className={styles.line} aria-hidden="true" />
      </div>
    </section>
  );
}
