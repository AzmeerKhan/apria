export const SERVICE_IDS = [
  "annualAccounts",
  "vatReturns",
  "cisReturn",
  "selfAssessment",
  "companyFormation",
  "capitalGainsTax",
  "hmrcInvestigations",
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export const SECTOR_IDS = ["services", "healthcare", "trades", "property"] as const;
export type SectorId = (typeof SECTOR_IDS)[number];

export const SERVICE_SECTORS: Record<ServiceId, readonly SectorId[]> = {
  annualAccounts:     ["services", "healthcare", "trades", "property"],
  vatReturns:         ["services", "healthcare", "trades", "property"],
  cisReturn:          ["trades", "property"],
  selfAssessment:     ["services", "healthcare", "trades", "property"],
  companyFormation:   ["services", "healthcare", "trades", "property"],
  capitalGainsTax:    ["services", "healthcare", "trades", "property"],
  hmrcInvestigations: ["services", "healthcare", "trades", "property"],
};

export const HERO_SLIDES = [
  { id: "slide1", titleKey: "home.hero.slide1.title", subtitleKey: "home.hero.slide1.subtitle" },
  { id: "slide2", titleKey: "home.hero.slide2.title", subtitleKey: "home.hero.slide2.subtitle" },
  { id: "slide3", titleKey: "home.hero.slide3.title", subtitleKey: "home.hero.slide3.subtitle" },
] as const;

export const SERVICE_VALUE_MAP: Record<ServiceId, string> = {
  annualAccounts:     "annual-accounts",
  vatReturns:         "vat-returns",
  cisReturn:          "cis-return",
  selfAssessment:     "self-assessment",
  companyFormation:   "company-formation",
  capitalGainsTax:    "capital-gains-tax",
  hmrcInvestigations: "hmrc-investigations",
};

export const SECTOR_SELECT_OPTIONS = [
  { value: "",           label: "Select your industry…" },
  { value: "services",   label: "Services"              },
  { value: "healthcare", label: "Healthcare"            },
  { value: "trades",     label: "Trades"                },
  { value: "property",   label: "Property"              },
  { value: "other",      label: "Other / Not Listed"    },
] as const;

export const SERVICE_SELECT_OPTIONS = [
  { value: "",                     label: "Select a service…"                      },
  { value: "annual-accounts",      label: "Annual Accounts & Financial Statements" },
  { value: "vat-returns",          label: "VAT Returns"                            },
  { value: "cis-return",           label: "CIS Return"                             },
  { value: "self-assessment",      label: "Self Assessment / Tax Return"           },
  { value: "company-formation",    label: "Company Formation"                      },
  { value: "capital-gains-tax",    label: "Capital Gains Tax"                      },
  { value: "hmrc-investigations",  label: "HMRC Investigations"                    },
  { value: "other",                label: "Other / Not Sure"                       },
] as const;
