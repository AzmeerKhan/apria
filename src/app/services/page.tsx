import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SERVICE_CATEGORIES } from "@/constants/services";
import en from "@/i18n/messages/en.json";

export const metadata: Metadata = {
  title: "Services",
  description: en.services.subheading,
};

type SvcData = { title: string; summary: string; points: string[] };

const icons: Record<string, React.ReactNode> = {
  annualAccounts: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  vatReturns: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  cisReturn: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  selfAssessment: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  utrRegistration: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    </svg>
  ),
  hmrcInvestigations: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate py-16 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">{en.services.badge}</p>
          <h1 className="text-4xl font-bold text-navy mb-4">{en.services.heading}</h1>
          <p className="text-gray-500 max-w-xl leading-relaxed">{en.services.subheading}</p>
        </div>
      </section>

      {SERVICE_CATEGORIES.map(({ id, serviceIds }) => (
        <section key={id} className="py-14 px-4 even:bg-slate">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-navy text-white text-xs font-semibold tracking-wide uppercase">
                {en.services.categories[id]}
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceIds.map((svcId) => {
                const svc = en.services[svcId as keyof typeof en.services] as SvcData;
                return (
                  <div key={svcId} className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-5 shrink-0">
                      {icons[svcId]}
                    </div>
                    <h2 className="text-lg font-bold text-navy mb-2">{svc.title}</h2>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed">{svc.summary}</p>
                    <ul className="space-y-2 mt-auto">
                      {svc.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">{en.services.cta.heading}</h2>
          <p className="text-blue-200 mb-7 leading-relaxed">{en.services.cta.body}</p>
          <Link
            href={ROUTES.CONTACT}
            className="inline-block px-8 py-3.5 rounded-full bg-white text-navy font-semibold text-sm hover:bg-blue-50 hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg"
          >
            {en.services.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
