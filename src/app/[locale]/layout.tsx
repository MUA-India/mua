import { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";

import { GoogleAnalytics } from "@next/third-parties/google";
import { hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { seoConfig } from "@/config/seo.config";
import { siteConfig } from "@/config/site.config";
import { env } from "@/env";

import { routing } from "@/i18n/routing";

import { Footer, Header } from "@/components/layout";
import { Toaster } from "@/ui";
import { Providers } from "@/providers";

import "@/tailwind";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return {
    ...seoConfig,
    alternates: {
      canonical: `/${locale}`,
      languages: siteConfig.languages
    }
  } satisfies Metadata;
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="light" suppressHydrationWarning>
      <head />
      <body
        className={`${sans.variable} ${display.variable} flex min-h-screen w-full flex-col bg-background font-sans text-foreground antialiased`}
      >
        <Providers messages={messages} locale={locale}>
          <Header />
          <main className="flex-1">{children}</main>
          <Toaster richColors />
          <Footer />
        </Providers>

        {env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
