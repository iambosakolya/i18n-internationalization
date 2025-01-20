// Footer.tsx

"use client";

import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>{t("copyright")}</p>

        <div className={styles.links}>
          <a href="/privacy-policy">{t("privacyPolicy")}</a>
          <a href="/terms-of-service">{t("termsOfService")}</a>
        </div>

        <div className={styles.social}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("socialMedia.twitter")}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("socialMedia.facebook")}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("socialMedia.instagram")}
          </a>
        </div>

        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo(0, 0)}
        >
          {t("backToTop")}
        </button>
      </div>
    </footer>
  );
}
