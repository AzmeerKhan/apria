export const SERVICE_IDS = [
  "annualAccounts",
  "vatReturns",
  "cisReturn",
  "selfAssessment",
  "utrRegistration",
  "hmrcInvestigations",
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export const SERVICE_CATEGORIES = [
  { id: "limitedCompany" as const, serviceIds: ["annualAccounts", "vatReturns", "cisReturn"] as const },
  { id: "selfEmployed"   as const, serviceIds: ["selfAssessment", "utrRegistration", "hmrcInvestigations"] as const },
];

export const HERO_SLIDES = [
  { id: "slide1", titleKey: "home.hero.slide1.title", subtitleKey: "home.hero.slide1.subtitle" },
  { id: "slide2", titleKey: "home.hero.slide2.title", subtitleKey: "home.hero.slide2.subtitle" },
  { id: "slide3", titleKey: "home.hero.slide3.title", subtitleKey: "home.hero.slide3.subtitle" },
] as const;

export const SERVICE_SELECT_OPTIONS = [
  { value: "",                     label: "Select a service…"                      },
  { value: "annual-accounts",      label: "Annual Accounts & Financial Statements" },
  { value: "vat-returns",          label: "VAT Returns"                            },
  { value: "cis-return",           label: "CIS Return"                             },
  { value: "self-assessment",      label: "Self Assessment / Tax Return"           },
  { value: "utr-registration",     label: "UTR Registration"                       },
  { value: "hmrc-investigations",  label: "HMRC Investigations"                    },
  { value: "other",                label: "Other / Not Sure"                       },
] as const;
