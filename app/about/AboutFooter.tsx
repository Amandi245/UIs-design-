import Link from "next/link";
import Gauge from "./Gauge";
import styles from "./about.module.css";

export default function AboutFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <Gauge />
          <p>
            Elevate Agency helps brands rise above the
            <br className={styles.desktopBreak} /> noise with bold ideas and
            smart strategies.
            <br className={styles.desktopBreak} /> We craft campaigns that
            inspire, engage, and
            <br className={styles.desktopBreak} /> drive real results.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/">home</Link>
          <Link href="/about" aria-current="page">
            about
          </Link>
          <Link href="/services">services</Link>
          <Link href="/work">portfolio</Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <Link href="/" className={styles.wordmark}>
          Elevate
        </Link>
        <div className={styles.legal}>
          <span>privacy-policy</span>
          <span>terms &amp; conditions</span>
        </div>
      </div>
    </footer>
  );
}
