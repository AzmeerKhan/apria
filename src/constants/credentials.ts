export const CREDENTIALS = [
  {
    badge: "ACCA",
    titleKey: "about.credentials.acca.title",
    descKey: "about.credentials.acca.desc",
  },
  {
    badge: "AAT",
    titleKey: "about.credentials.aat.title",
    descKey: "about.credentials.aat.desc",
  },
] as const;

export const CREDENTIAL_BADGES = ["ACCA", "AAT"] as const;

export const HOME_CREDENTIALS = [
  { label: "ACCA", credKey: "acca" },
  { label: "AAT",  credKey: "aat"  },
] as const;
