import Image from "next/image";
import { CONTACT_WHATSAPP_HREF } from "@/constants/contact";
import whatsappIcon from "@/assets/images/whatsapp-icon.png";
import styles from "./style.module.scss";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT_WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat on WhatsApp"
    >
      <Image src={whatsappIcon} alt="WhatsApp" width={140} height={90} />
    </a>
  );
}
