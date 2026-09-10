import Image from "next/image";
import styles from "./about.module.css";

const crew = [
  ["Ava Carter", "Creative Director", "team-maya"],
  ["Liam Rodriguez", "Brand Strategist", "team-liam"],
  ["Ethan Walker", "Motion Graphics Artist", "team-oliver"],
  ["Noah Thompson", "Web Developer", "team-ethan"],
  ["Oliver Grant", "Digital Marketing Specialist", "team-noah"],
  ["Maya Chen", "UX/UI Designer", "team-lia"],
] as const;

export default function AboutCrew() {
  return (
    <section className={styles.crew} aria-labelledby="crew-title">
      <h2 id="crew-title">
        our <em>Crew</em>
      </h2>
      <p className={styles.crewIntro}>The minds behind the magic.</p>
      <div className={styles.crewGrid}>
        {crew.map(([name, role, image]) => (
          <article key={name}>
            <div className={styles.portrait}>
              <Image
                src={`/images/${image}.png`}
                alt={name}
                fill
                sizes="(max-width: 700px) 45vw, 23vw"
              />
            </div>
            <h3>{name}</h3>
            <p>{role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
