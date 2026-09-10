import Image from "next/image";
import styles from "./work.module.css";

const categories = [
  "All",
  "Branding & Strategy",
  "Digital & Web Development",
  "Content & Creative",
  "Marketing",
];

export default function WorkGallery() {
  return (
    <section className={styles.gallery} aria-label="Selected work">
      <div className={styles.filters} aria-label="Work categories">
        {categories.map((category, index) => (
          <span
            key={category}
            className={index === 0 ? styles.activeFilter : undefined}
          >
            {category}
          </span>
        ))}
      </div>
      <article className={styles.project}>
        <div className={styles.projectCopy}>
          <h2>Glow Cosmetics Website</h2>
          <p>
            Responsive web design with immersive
            <br />
            product storytelling.
          </p>
        </div>
        <div className={styles.projectImage}>
          <Image
            src="/images/h5.png"
            alt="Model wearing a red sweater for the Glow Cosmetics project"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            priority
          />
        </div>
      </article>
    </section>
  );
}
