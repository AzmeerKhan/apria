"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import styles from "./style.module.scss";
import { ROUTES } from "@/constants/routes";
import { HERO_SLIDES } from "@/constants/services";

const illustrations = [
  // Financial Reporting - bar chart dashboard
  <svg
    key="fin"
    viewBox="0 0 360 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="10"
      y="10"
      width="340"
      height="260"
      rx="18"
      fill="rgba(255,255,255,0.06)"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="1"
    />
    <rect
      x="30"
      y="32"
      width="130"
      height="10"
      rx="5"
      fill="rgba(255,255,255,0.25)"
    />
    <rect
      x="30"
      y="50"
      width="80"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.12)"
    />
    <rect
      x="30"
      y="72"
      width="88"
      height="52"
      rx="10"
      fill="rgba(40,152,184,0.18)"
      stroke="rgba(40,152,184,0.3)"
      strokeWidth="1"
    />
    <rect
      x="42"
      y="85"
      width="36"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.4)"
    />
    <rect
      x="42"
      y="97"
      width="56"
      height="9"
      rx="3"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="136"
      y="72"
      width="88"
      height="52"
      rx="10"
      fill="rgba(40,128,74,0.2)"
      stroke="rgba(40,128,74,0.3)"
      strokeWidth="1"
    />
    <rect
      x="148"
      y="85"
      width="36"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.4)"
    />
    <rect
      x="148"
      y="97"
      width="56"
      height="9"
      rx="3"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="242"
      y="72"
      width="88"
      height="52"
      rx="10"
      fill="rgba(40,152,184,0.14)"
      stroke="rgba(40,152,184,0.2)"
      strokeWidth="1"
    />
    <rect
      x="254"
      y="85"
      width="36"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.4)"
    />
    <rect
      x="254"
      y="97"
      width="56"
      height="9"
      rx="3"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="30"
      y="200"
      width="300"
      height="1"
      fill="rgba(255,255,255,0.08)"
    />
    <rect
      x="48"
      y="162"
      width="28"
      height="38"
      rx="5"
      fill="rgba(40,152,184,0.5)"
    />
    <rect
      x="92"
      y="142"
      width="28"
      height="58"
      rx="5"
      fill="rgba(40,128,74,0.6)"
    />
    <rect
      x="136"
      y="127"
      width="28"
      height="73"
      rx="5"
      fill="rgba(40,152,184,0.7)"
    />
    <rect
      x="180"
      y="147"
      width="28"
      height="53"
      rx="5"
      fill="rgba(40,128,74,0.5)"
    />
    <rect
      x="224"
      y="132"
      width="28"
      height="68"
      rx="5"
      fill="rgba(40,152,184,0.8)"
    />
    <rect
      x="268"
      y="112"
      width="28"
      height="88"
      rx="5"
      fill="rgba(40,128,74,0.85)"
    />
    <polyline
      points="62,162 106,142 150,127 194,147 238,132 282,112"
      stroke="rgba(255,255,255,0.45)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="5,3"
    />
    <circle cx="62" cy="162" r="3.5" fill="rgba(255,255,255,0.55)" />
    <circle cx="150" cy="127" r="3.5" fill="rgba(255,255,255,0.55)" />
    <circle cx="282" cy="112" r="5" fill="white" fillOpacity="0.8" />
  </svg>,

  // Tax Planning - document with checkmarks
  <svg
    key="tax"
    viewBox="0 0 360 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="50"
      y="14"
      width="160"
      height="210"
      rx="14"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.14)"
      strokeWidth="1"
    />
    <path d="M180 14 L210 14 L210 44 Z" fill="rgba(255,255,255,0.04)" />
    <path d="M180 14 L210 44 L180 44 Z" fill="rgba(255,255,255,0.12)" />
    <rect
      x="70"
      y="64"
      width="90"
      height="8"
      rx="4"
      fill="rgba(255,255,255,0.25)"
    />
    <rect
      x="70"
      y="90"
      width="100"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.14)"
    />
    <rect
      x="70"
      y="113"
      width="75"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.14)"
    />
    <rect
      x="70"
      y="136"
      width="88"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.14)"
    />
    <rect
      x="70"
      y="159"
      width="65"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.14)"
    />
    <rect
      x="70"
      y="182"
      width="80"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.14)"
    />
    <circle cx="246" cy="91" r="16" fill="rgba(40,128,74,0.75)" />
    <path
      d="M238 91 L243 96 L254 82"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="246" cy="136" r="16" fill="rgba(40,128,74,0.75)" />
    <path
      d="M238 136 L243 141 L254 127"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="246" cy="181" r="16" fill="rgba(40,152,184,0.75)" />
    <path
      d="M238 181 L243 186 L254 172"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="250"
      y="30"
      width="88"
      height="48"
      rx="12"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.14)"
      strokeWidth="1"
    />
    <rect
      x="262"
      y="42"
      width="50"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.3)"
    />
    <rect
      x="262"
      y="55"
      width="36"
      height="10"
      rx="4"
      fill="rgba(40,128,74,0.5)"
    />
  </svg>,

  // Business Advisory - growth chart
  <svg
    key="biz"
    viewBox="0 0 360 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="10"
      y="10"
      width="340"
      height="260"
      rx="18"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="54"
      x2="320"
      y2="54"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="104"
      x2="320"
      y2="104"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="154"
      x2="320"
      y2="154"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="204"
      x2="320"
      y2="204"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <path
      d="M40 204 L95 184 L150 160 L205 125 L255 95 L305 58 L305 260 L40 260 Z"
      fill="rgba(40,128,74,0.12)"
    />
    <path
      d="M40 204 L95 184 L150 160 L205 125 L255 95 L305 58"
      stroke="rgba(40,128,74,0.9)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="40" cy="204" r="4.5" fill="rgba(255,255,255,0.5)" />
    <circle cx="150" cy="160" r="4.5" fill="rgba(255,255,255,0.5)" />
    <circle cx="255" cy="95" r="5.5" fill="rgba(40,128,74,0.9)" />
    <circle cx="305" cy="58" r="6.5" fill="rgba(40,128,74,1)" />
    <rect
      x="265"
      y="32"
      width="64"
      height="24"
      rx="8"
      fill="rgba(255,255,255,0.14)"
    />
    <text
      x="297"
      y="49"
      textAnchor="middle"
      fontSize="12"
      fill="white"
      fontWeight="700"
    >
      +28%
    </text>
    <path
      d="M292 30 L297 24 L302 30"
      stroke="rgba(40,128,74,0.9)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <rect
      x="30"
      y="216"
      width="160"
      height="36"
      rx="10"
      fill="rgba(255,255,255,0.06)"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1"
    />
    <rect
      x="44"
      y="226"
      width="40"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="44"
      y="238"
      width="60"
      height="8"
      rx="3"
      fill="rgba(255,255,255,0.12)"
    />
  </svg>,
];

export default function HeroSlider() {
  const t = useTranslations();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % HERO_SLIDES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.badge}>{t("home.hero.badge")}</div>

            <div className={styles.slideWrap}>
              {HERO_SLIDES.map((slide, i) => (
                <div
                  key={slide.id}
                  className={clsx(
                    styles.slide,
                    i === active && styles.active,
                  )}
                >
                  <h1 className={styles.slideTitle}>
                    {t(slide.titleKey)}
                  </h1>
                  <p className={styles.slideSubtitle}>
                    {t(slide.subtitleKey)}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.ctas}>
              <Link href={ROUTES.CONTACT} className={styles.primaryBtn}>
                {t("home.hero.primaryCta")}
              </Link>
              <Link
                href={ROUTES.SERVICES}
                className={styles.secondaryBtn}
              >
                {t("home.hero.secondaryCta")}
              </Link>
            </div>

            <div
              className={styles.dots}
              role="tablist"
              aria-label="Slide navigation"
            >
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Slide ${i + 1}`}
                  className={clsx(
                    styles.dot,
                    i === active && styles.dotActive,
                  )}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          <div className={styles.illustration}>
            <div className={`${styles.floatCard} ${styles.floatCardTL}`}>
              <span
                className={clsx(styles.floatDot, styles.floatDotGreen)}
              />
              5 Years Experience
            </div>

            {illustrations.map((illus, i) => (
              <div
                key={i}
                className={clsx(
                  styles.illustrationCard,
                  i === active && styles.active,
                )}
              >
                {illus}
              </div>
            ))}

            <div className={`${styles.floatCard} ${styles.floatCardBR}`}>
              <span
                className={clsx(styles.floatDot, styles.floatDotTeal)}
              />
              ACCA · MAAT · ICAEW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
