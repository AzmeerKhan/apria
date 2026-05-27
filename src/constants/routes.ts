export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export const NAV_LINKS = [
  { href: ROUTES.HOME, labelKey: "nav.home" },
  { href: ROUTES.SERVICES, labelKey: "nav.services" },
  { href: ROUTES.ABOUT, labelKey: "nav.about" },
  { href: ROUTES.CONTACT, labelKey: "nav.contact" },
] as const;
