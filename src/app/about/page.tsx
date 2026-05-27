import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { CREDENTIALS } from "@/constants/credentials";
import en from "@/i18n/messages/en.json";

export const metadata: Metadata = {
  title: "About",
  description: en.about.subheading,
};

const values = [
  { key: "accuracy" },
  { key: "transparency" },
  { key: "dedication" },
  { key: "upToDate" },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate py-16 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">{en.about.badge}</p>
          <h1 className="text-4xl font-bold text-navy mb-4">{en.about.heading}</h1>
          <p className="text-gray-500 max-w-xl leading-relaxed">{en.about.subheading}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl bg-teal-light aspect-square max-w-sm w-full mx-auto flex flex-col items-center justify-center border border-teal/20 gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(40,152,184,0.15),transparent_60%)]" />
            <svg className="w-24 h-24 text-teal/40 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
            <div className="flex gap-2 flex-wrap justify-center px-6 relative z-10">
              {["ACCA", "MAAT", "AAT", "ICAEW"].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/80 rounded-full text-xs font-bold text-navy border border-teal/20 shadow-sm">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-5">{en.about.experience.heading}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{en.about.experience.p1}</p>
              <p>{en.about.experience.p2}</p>
              <p>{en.about.experience.p3}</p>
              <p>{en.about.experience.p4}</p>
            </div>
            <div className="mt-8">
              <Link href={ROUTES.CONTACT} className="inline-block px-7 py-3.5 rounded-full bg-navy text-white font-semibold text-sm hover:bg-navy-dark hover:scale-105 active:scale-95 transition-transform duration-200 shadow-md">
                {en.common.workWithMe}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">{en.about.credentials.heading}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {CREDENTIALS.map(({ badge }) => {
              const cred = en.about.credentials[badge.toLowerCase() as keyof typeof en.about.credentials];
              if (typeof cred !== "object") return null;
              return (
                <div key={badge} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex gap-5 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-navy flex items-center justify-center text-white font-bold text-sm tracking-wide">
                    {badge}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1.5 text-sm leading-snug">{cred.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{cred.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">{en.about.values.heading}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ key }) => {
              const val = en.about.values[key as keyof typeof en.about.values];
              if (typeof val !== "object") return null;
              return (
                <div key={key} className="p-6 rounded-2xl border border-gray-100 bg-white text-center shadow-sm hover:border-teal hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
                  <h3 className="font-semibold text-navy mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
