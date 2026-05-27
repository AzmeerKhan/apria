import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import messages from "@/i18n/messages/en.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "APRIA - Professional Accounting & Financial Advisory",
    template: "%s | APRIA",
  },
  icons: {
    icon: "/apria-logo.svg",
    shortcut: "/apria-logo.svg",
  },
  description:
    "APRIA provides expert accounting and financial advisory services. Qualified ACCA & MAAT accountant, AAT and ICAEW member with 5 years of experience in financial reporting, tax planning, and business advisory.",
  keywords: [
    "accounting",
    "financial advisory",
    "tax planning",
    "financial reporting",
    "business advisory",
    "ACCA",
    "MAAT",
    "AAT",
    "ICAEW",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale="en" messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
