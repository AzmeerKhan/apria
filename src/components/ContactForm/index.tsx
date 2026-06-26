"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./style.module.scss";
import { SERVICE_SELECT_OPTIONS, SECTOR_SELECT_OPTIONS } from "@/constants/services";
import type { EnquiryType } from "@/components/ContactTabs";

type FormState = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message" | "preferredDate", string>>;

interface Props {
  enquiryType?: EnquiryType;
  defaultService?: string;
  defaultSector?: string;
}

function formatPhone(raw: string): string {
  const hasPlus = raw.startsWith("+");
  const digits = raw.replace(/\D/g, "");
  if (hasPlus) {
    if (digits.length <= 2) return `+${digits}`;
    if (digits.length <= 6) return `+${digits.slice(0, 2)} ${digits.slice(2)}`;
    return `+${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(6, 12)}`;
  }
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)} ${digits.slice(5, 11)}`;
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm({ enquiryType = "enquiry", defaultService = "", defaultSector = "" }: Props) {
  const t = useTranslations("contact.form");
  const tCommon = useTranslations("common");
  const isBooking = enquiryType === "booking";
  const [state, setState] = useState<FormState>("idle");
  const [selectedSector, setSelectedSector] = useState(defaultSector);
  const [phone, setPhone] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearError(field: keyof FieldErrors) {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
    }
  }

  function validate(data: FormData): FieldErrors {
    const errors: FieldErrors = {};
    const name = ((data.get("name") as string) ?? "").trim();
    const email = ((data.get("email") as string) ?? "").trim();
    const phone = ((data.get("phone") as string) ?? "").trim();
    const message = ((data.get("message") as string) ?? "").trim();
    const preferredDate = ((data.get("preferredDate") as string) ?? "").trim();

    if (name.length < 2) errors.name = "Please enter your full name";
    if (!email) errors.email = "Email address is required";
    else if (!validateEmail(email)) errors.email = "Please enter a valid email address";
    if (phone && phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number";
    if (!message) errors.message = "Please include a message";
    if (isBooking && !preferredDate) errors.preferredDate = "Please enter your preferred date or time";

    return errors;
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setState("submitting");

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (res.ok) {
        setState("success");
        setPhone("");
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
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            className={`${styles.input} ${fieldErrors.name ? styles.inputError : ""}`}
            onChange={() => clearError("name")}
          />
          {fieldErrors.name && <span className={styles.fieldError}>{fieldErrors.name}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {t("email")} <span className={styles.required}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            className={`${styles.input} ${fieldErrors.email ? styles.inputError : ""}`}
            onChange={() => clearError("email")}
            onBlur={(e) => {
              const val = e.target.value.trim();
              if (val && !validateEmail(val)) {
                setFieldErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }));
              }
            }}
          />
          {fieldErrors.email && <span className={styles.fieldError}>{fieldErrors.email}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          {t("phone")} <span className={styles.optional}>{tCommon("optional")}</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => { setPhone(formatPhone(e.target.value)); clearError("phone"); }}
          placeholder={t("phonePlaceholder")}
          className={`${styles.input} ${fieldErrors.phone ? styles.inputError : ""}`}
        />
        {fieldErrors.phone && <span className={styles.fieldError}>{fieldErrors.phone}</span>}
      </div>

      {isBooking && (
        <>
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
              autoComplete="off"
              className={`${styles.input} ${fieldErrors.preferredDate ? styles.inputError : ""}`}
              onChange={() => clearError("preferredDate")}
            />
            {fieldErrors.preferredDate && <span className={styles.fieldError}>{fieldErrors.preferredDate}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="monthlyTurnover">
              {t("monthlyTurnover")} <span className={styles.optional}>{tCommon("optional")}</span>
            </label>
            <select id="monthlyTurnover" name="monthlyTurnover" className={styles.select}>
              <option value="">Select a range…</option>
              <option value="Under £5,000">Under £5,000</option>
              <option value="£5,000 – £15,000">£5,000 – £15,000</option>
              <option value="£15,000 – £30,000">£15,000 – £30,000</option>
              <option value="£30,000 – £50,000">£30,000 – £50,000</option>
              <option value="Over £50,000">Over £50,000</option>
            </select>
          </div>
        </>
      )}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="sector">
          {t("sector")} <span className={styles.optional}>{tCommon("optional")}</span>
        </label>
        <select
          id="sector"
          className={styles.select}
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
        >
          {SECTOR_SELECT_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {selectedSector === "other" ? (
          <input
            name="sector"
            type="text"
            placeholder={t("sectorCustomPlaceholder")}
            className={styles.input}
            style={{ marginTop: "0.8rem" }}
          />
        ) : (
          <input type="hidden" name="sector" value={selectedSector} />
        )}
      </div>

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
          className={`${styles.textarea} ${fieldErrors.message ? styles.inputError : ""}`}
          onChange={() => clearError("message")}
        />
        {fieldErrors.message && <span className={styles.fieldError}>{fieldErrors.message}</span>}
      </div>

      {state === "error" && <p className={styles.errorMsg}>{t("errorMsg")}</p>}

      <button type="submit" disabled={state === "submitting"} className={styles.submitBtn}>
        {state === "submitting" ? t("submitting") : isBooking ? t("bookingSubmit") : t("submit")}
      </button>
    </form>
  );
}
