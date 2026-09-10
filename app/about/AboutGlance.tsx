import Image from "next/image";
import styles from "./about.module.css";

export default function AboutGlance() {
  return (
    <section className={styles.glance} aria-labelledby="glance-title">
      <h2 id="glance-title">
        a quick glance at <em>Elevate</em>
      </h2>
      <div className={styles.photoGlow} />
      <div className={styles.photos}>
        <Image
          className={styles.backPhoto}
          src="/images/office.png"
          alt="Elevate team working in the studio"
          fill
          sizes="70vw"
        />
        <Image
          className={styles.frontPhoto}
          src="/images/team-group.png"
          alt="The Elevate team together outdoors"
          fill
          sizes="70vw"
        />
      </div>
      <Image
        className={styles.flower}
        src="/images/flower.svg"
        alt=""
        width={100}
        height={100}
      />
    </section>
  );
}
