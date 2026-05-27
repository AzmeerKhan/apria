import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import en from "@/i18n/messages/en.json";

export const metadata: Metadata = {
  title: "Contact",
  description: en.contact.subheading,
};

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: en.contact.info.email,
    value: "hello@apria.co.uk",
    href: "mailto:hello@apria.co.uk",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: en.contact.info.phone,
    value: "+44 7700 000000",
    href: "tel:+447700000000",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: en.contact.info.location,
    value: en.contact.info.locationValue,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate py-16 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">{en.contact.badge}</p>
          <h1 className="text-4xl font-bold text-navy mb-4">{en.contact.heading}</h1>
          <p className="text-gray-500 max-w-xl leading-relaxed">{en.contact.subheading}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-navy mb-6">{en.contact.form.heading}</h2>
            <ContactForm />
          </div>

          <div className="md:col-span-2 space-y-5">
            <div className="bg-navy rounded-2xl p-7 text-white">
              <h2 className="text-lg font-bold mb-5">{en.contact.info.heading}</h2>
              <ul className="space-y-5">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-blue-200">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-white hover:text-blue-200 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-light rounded-2xl p-7 border border-teal/20">
              <h3 className="font-semibold text-navy mb-2">{en.contact.info.freeConsultation.heading}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{en.contact.info.freeConsultation.body}</p>
            </div>

            <div className="rounded-2xl p-7 border border-gray-100 bg-white shadow-sm">
              <h3 className="font-semibold text-navy mb-3">{en.contact.info.qualifications}</h3>
              <div className="flex flex-wrap gap-2">
                {["ACCA", "MAAT", "AAT Member", "ICAEW Member"].map((q) => (
                  <span key={q} className="px-3 py-1 rounded-full bg-slate text-navy text-xs font-medium border border-gray-200">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
