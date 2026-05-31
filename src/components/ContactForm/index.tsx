"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./style.module.scss";
import { SERVICE_SELECT_OPTIONS } from "@/constants/services";
import type { EnquiryType } from "@/components/ContactTabs";

type FormState = "idle" | "submitting" | "success" | "error";

interface Props {
  enquiryType?: EnquiryType;
  defaultService?: string;
}

export default function ContactForm({ enquiryType = "enquiry", defaultService = "" }: Props) {
  const t = useTranslations("contact.form");
  const tCommon = useTranslations("common");
  const isBooking = enquiryType === "booking";
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className={styles.success}>
        <svg className={styles.successIcon} width="48" height="48" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className={styles.successTitle}>{isBooking ? t("bookingSuccessHeading") : t("successHeading")}</h3>
        <p className={styles.successBody}>{isBooking ? t("bookingSuccessBody") : t("successBody")}</p>
        <button className={styles.sendAgainBtn} onClick={() => setState("idle")}>
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <input type="hidden" name="enquiryType" value={enquiryType} />
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            {t("name")} <span className={styles.required}>*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder={t("namePlaceholder")} className={styles.input} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {t("email")} <span className={styles.required}>*</span>
          </label>
          <input id="email" name="email" type="email" required placeholder={t("emailPlaceholder")} className={styles.input} />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          {t("phone")} <span className={styles.optional}>{tCommon("optional")}</span>
        </label>
        <input id="phone" name="phone" type="tel" placeholder={t("phonePlaceholder")} className={styles.input} />
      </div>

      {isBooking && (
        <div className={styles.field}>
          <label className={styles.label} htmlFor="preferredDate">
            {t("preferredDate")} <span className={styles.required}>*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="text"
            required
            placeholder={t("preferredDatePlaceholder")}
            className={styles.input}
          />
        </div>
      )}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="service">{t("service")}</label>
        <select id="service" name="service" className={styles.select} defaultValue={defaultService}>
          {SERVICE_SELECT_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          {t("message")} <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={isBooking ? t("bookingMessagePlaceholder") : t("messagePlaceholder")}
          className={styles.textarea}
        />
      </div>

      {state === "error" && <p className={styles.errorMsg}>{t("errorMsg")}</p>}

      <button type="submit" disabled={state === "submitting"} className={styles.submitBtn}>
        {state === "submitting" ? t("submitting") : isBooking ? t("bookingSubmit") : t("submit")}
      </button>
    </form>
  );
}
