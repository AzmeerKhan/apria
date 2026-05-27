"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import bgImage from "@/assets/images/background.png";
import { ROUTES } from "@/constants/routes";
import en from "@/i18n/messages/en.json";

const credentials = ["ACCA", "MAAT", "AAT", "ICAEW"] as const;

const services = [
  en.services.annualAccounts.title,
  en.services.vatReturns.title,
  en.services.cisReturn.title,
  en.services.selfAssessment.title,
  en.services.utrRegistration.title,
  en.services.hmrcInvestigations.title,
];

const fadeLeft = {
  hidden: { opacity: 0, x: -160 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 160 },
  show: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const serviceStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.45 } },
};

export default function HeroBanner() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[80rem] mx-auto px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div
              variants={fadeLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {credentials.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/25 backdrop-blur-sm"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.h1
              variants={fadeLeft}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
            >
              Accounting Services
              <br /> in the UK
            </motion.h1>

            <motion.p
              variants={fadeLeft}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-blue-100 text-lg mb-8 leading-relaxed max-w-md"
            >
              Professional tax compliance, VAT returns, and financial
              reporting for limited companies and the self-employed.
            </motion.p>

            {/* Desktop button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: 1.2,
                ease: "easeIn",
              }}
              className="hidden lg:block"
            >
              <Link
                href={ROUTES.CONTACT}
                className="inline-block px-8 py-4 rounded-full bg-teal text-white font-semibold text-md shadow-lg shadow-black/20 hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — services card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-5">
              Our Services
            </p>

            <motion.ul
              variants={serviceStagger}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >
              {services.map((name) => (
                <motion.li
                  key={name}
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex items-center gap-3 text-white"
                >
                  <svg
                    className="shrink-0 text-teal"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-base font-medium">{name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Mobile button - appears below services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.45,
              delay: 1.2,
              ease: "easeIn",
            }}
            className="lg:hidden text-center"
          >
            <Link
              href={ROUTES.CONTACT}
              className="inline-block px-8 py-4 rounded-full bg-teal text-white font-semibold text-md shadow-lg shadow-black/20 hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
