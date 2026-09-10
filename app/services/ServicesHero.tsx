import Image from "next/image";
import Link from "next/link";
import { services } from "./services-data";
import styles from "./services.module.css";
export default function ServicesHero() {
  return (
    <section className={styles.hero} aria-labelledby="services-title">
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
          <Link href="/services" aria-current="page">
            services
          </Link>
          <Link href="/work">work</Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </header>
      <div className={styles.heroHeading}>
        <Image
          className={styles.heroGauge}
          src="/images/hero-gauge.svg"
          alt=""
          width={62}
          height={62}
          priority
        />
        <h1 id="services-title">
          <span>our</span>
          <strong>Services</strong>
        </h1>
        <p>Comprehensive Services, Exceptional Results</p>
      </div>
      <div className={styles.cards}>
        {services.map((service) => (
          <Link
            key={service.id}
            href={`#${service.id}`}
            className={styles.card}
            style={{
              backgroundColor: service.color,
              color: service.light ? "white" : "black",
            }}
          >
            <h2>{service.cardTitle}</h2>
            <Image
              className={styles.cardArt}
              src={`/images/services/${service.id}-card.svg`}
              alt=""
              width={388}
              height={376}
            />
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
