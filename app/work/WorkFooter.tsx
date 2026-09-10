import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.css";

export default function WorkFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <Image
            className={styles.footerGauge}
            src="/images/footer-logo.svg"
            width={92}
            height={92}
            alt=""
          />
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
          <Link href="/about">about</Link>
          <Link href="/services">services</Link>
          <Link href="/work" aria-current="page">
            portfolio
          </Link>
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
