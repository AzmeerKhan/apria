"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
import styles from "./style.module.scss";

export type EnquiryType = "enquiry" | "booking";

interface Props {
  defaultService?: string;
  defaultTab?: EnquiryType;
}

export default function ContactTabs({ defaultService, defaultTab }: Props) {
  const t = useTranslations("contact.tabs");
  const [active, setActive] = useState<EnquiryType>(
    defaultTab === "booking" || defaultService ? "booking" : "enquiry"
  );

  return (
    <div>
      <div className={styles.tabs} role="tablist">
        {(["enquiry", "booking"] as EnquiryType[]).map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            className={`${styles.tab} ${active === tab ? styles.tabActive : ""}`}
            onClick={() => setActive(tab)}
          >
            {t(tab)}
          </button>
        ))}
      </div>
      <ContactForm enquiryType={active} defaultService={defaultService} />
    </div>
  );
}
