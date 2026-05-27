"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import styles from "./style.module.scss";
import { ROUTES, NAV_LINKS } from "@/constants/routes";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={ROUTES.HOME} className={styles.logo} onClick={() => setOpen(false)}>
          <Image src="/apria-logo.svg" alt="APRIA" width={44} height={44} priority />
          <span className={styles.logoText}>APRIA</span>
        </Link>

        <div className={styles.desktopLinks}>
          {NAV_LINKS.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              className={clsx(styles.link, pathname === href && styles.linkActive)}
            >
              {t(labelKey.replace("nav.", ""))}
            </Link>
          ))}
          <Link href={ROUTES.CONTACT} className={styles.ctaBtn}>
            {t("cta")}
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={clsx(styles.mobileLink, pathname === href && styles.mobileLinkActive)}
            >
              {t(labelKey.replace("nav.", ""))}
            </Link>
          ))}
          <Link href={ROUTES.CONTACT} onClick={() => setOpen(false)} className={styles.mobileCta}>
            {t("cta")}
          </Link>
        </div>
      )}
    </header>
  );
}
