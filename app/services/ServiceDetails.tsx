import Image from "next/image";
import Link from "next/link";
import { capabilities, detailDescription, services } from "./services-data";
import styles from "./services.module.css";
export default function ServiceDetails() {
  return (
    <div>
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          aria-labelledby={`${service.id}-title`}
          className={styles.detail}
          style={{
            backgroundColor: service.color,
            color: service.light ? "white" : "black",
          }}
        >
          <h2 id={`${service.id}-title`}>{service.title}</h2>
          <p className={styles.detailDescription}>{detailDescription}</p>
          <Image
            className={styles.detailArt}
            src={`/images/services/${service.id}.svg`}
            width={384}
            height={606}
            alt=""
          />
          <ul className={styles.capabilities}>
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
          <Link
            href="/work"
            className={styles.caseStudies}
            aria-label={`View ${service.title} case studies`}
          >
            view case studies
          </Link>
        </section>
      ))}
    </div>
  );
}
