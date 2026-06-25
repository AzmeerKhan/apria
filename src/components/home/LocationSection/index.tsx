import { CONTACT_MAP_URL } from "@/constants/contact";

export default function LocationSection() {
  return (
    <section
      aria-label="Office location"
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        padding: 0,
      }}
    >
      <div style={{ width: "100%" }}>
        <iframe
          src={CONTACT_MAP_URL}
          title="Office location"
          loading="lazy"
          style={{
            width: "100%",
            height: "480px",
            border: 0,
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
