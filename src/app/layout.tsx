import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import messages from "@/i18n/messages/en.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Apria Accountants",
    template: "%s | APRIA",
  },
  icons: {
    icon: "/apria-logo.png",
    shortcut: "/apria-logo.png",
  },
  description:
    "APRIA provides expert accounting and financial advisory services. Qualified ACCA accountant and AAT member with 5 years of experience in financial reporting, tax planning, and business advisory.",
  keywords: [
    "accounting",
    "financial advisory",
    "tax planning",
    "financial reporting",
    "business advisory",
    "ACCA",
    "AAT",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <NextIntlClientProvider locale="en" messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
