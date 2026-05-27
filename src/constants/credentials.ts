export const CREDENTIALS = [
  {
    badge: "ACCA",
    titleKey: "about.credentials.acca.title",
    descKey: "about.credentials.acca.desc",
  },
  {
    badge: "MAAT",
    titleKey: "about.credentials.maat.title",
    descKey: "about.credentials.maat.desc",
  },
  {
    badge: "AAT",
    titleKey: "about.credentials.aat.title",
    descKey: "about.credentials.aat.desc",
  },
  {
    badge: "ICAEW",
    titleKey: "about.credentials.icaew.title",
    descKey: "about.credentials.icaew.desc",
  },
] as const;

export const CREDENTIAL_BADGES = ["ACCA", "MAAT", "AAT", "ICAEW"] as const;

export const HOME_CREDENTIALS = [
  { label: "ACCA", detailKey: "home.credentials.acca" },
  { label: "MAAT", detailKey: "home.credentials.maat" },
  { label: "AAT", detailKey: "home.credentials.aat" },
  { label: "ICAEW", detailKey: "home.credentials.icaew" },
] as const;
